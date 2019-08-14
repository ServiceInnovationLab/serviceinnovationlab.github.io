require_relative './assets'
require_relative './compressor'
require_relative './config'

require 'English'
require 'jekyll_pages_api'
require 'json'

module JekyllPagesApiSearch
  class Bundler
    DIRNAME = File.dirname(__FILE__).freeze
    BROWSERIFY_SCRIPT = File.join(DIRNAME, 'browserify.js').freeze
    CONSTANTS_MODULE = File.join(Assets::JAVASCRIPT_DIR, 'search-constants.js')
      .freeze

    def self.create_search_bundles(site)
      create_custom_renderer_bundle(site)
      create_search_constants_bundle(site)
    end

    def self.create_custom_renderer_bundle(site)
      browserify_config = Config.get(site, 'browserify')
      return if browserify_config.nil?
      source = File.join(site.source, browserify_config['source'])
      target = create_target_path(site, browserify_config['target'])
      execute_browserify(source, target,
        { standalone: 'renderJekyllPagesApiSearchResults' })
    end

    # Generates a JavaScript module containing constants based on `site` values.
    def self.create_search_constants_bundle(site)
      target = create_target_path(site, CONSTANTS_MODULE)
      constants = generate_constants(site)
      File.open(target, 'w') do |target_file|
        target_file.write(constants)
      end
      Compressor.gzip_in_memory_content({ target => constants })
    end

    # Creates an object of constants based on `site` values.
    def self.generate_constants(site)
      return "var JEKYLL_PAGES_API_SEARCH_INDEX_URL = '" +
        baseurl_prefix(site) + SearchIndexBuilder::INDEX_FILE + "';\n"
    end

    # Generates the correct baseurl prefix.
    def self.baseurl_prefix(site)
      baseurl = site.baseurl
      if baseurl.nil? || baseurl.empty? then
        return '/'
      elsif baseurl == '/' then
        return baseurl
      end
      return baseurl + '/'
    end

    # Creates the target bundle path and its directory if it doesn't exist.
    def self.create_target_path(site, target_file)
      target = File.join(site.dest, target_file)
      target_dir = File.dirname(target)
      if !Dir.exists?(target_dir) then
        FileUtils.mkdir_p(target_dir)
      end
      target
    end

    def self.execute_browserify(source, target, options)
      status = system('node', "#{BROWSERIFY_SCRIPT}", "#{source}", "#{target}",
        JSON.generate(options))
      if $CHILD_STATUS.exitstatus.nil?
        $stderr.puts('Could not execute browserify script')
        exit 1
      end
      exit $CHILD_STATUS.exitstatus if !status
    end
  end
end
