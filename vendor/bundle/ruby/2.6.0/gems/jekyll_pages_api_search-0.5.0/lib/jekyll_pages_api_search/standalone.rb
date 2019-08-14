require_relative './bundler'
require_relative './compressor'
require_relative './site'
require 'fileutils'
require 'jekyll_pages_api'

module JekyllPagesApi
  # Reopens the existing JekyllPagesApi::GeneratedSite to add methods needed by
  # Jekyll::Page.initialize().
  #
  # These are invoked via Standalone.generate_index() when using
  # JekyllPagesApi::Generator to create a new `pages.json` file.
  class GeneratedSite
    def in_source_dir(*paths)
      paths
    end

    def in_theme_dir(*paths)
      nil
    end
  end
end

module JekyllPagesApiSearch
  class Standalone
    def self.generate_index(basedir, config, pages_json, baseURL,
      title_prefix, body_element_tag)
      site = Site.new basedir, config

      # Generate pages.json if it doesn't already exist.
      if baseURL.nil?
        site.load_pages_json pages_json
      else
        site.pages << ::JekyllPagesApi::Generator.new(
          ::JekyllPagesApi::GeneratedSite.new(
            baseURL, basedir, title_prefix, body_element_tag)).page
      end

      # Build the index; output pages_json if necessary; gzip outputs.
      index = SearchIndexBuilder.build_index site
      index_outfile = File.join site.source, index.name
      output = { index_outfile => index.output.to_s }
      output[pages_json] = site.pages.first.output unless File.exist? pages_json
      output.each do |outfile, content|
        FileUtils.mkdir_p File.dirname(outfile)
        File.open(outfile, 'w') {|f| f << content}
      end
      Compressor::gzip_in_memory_content output
      Bundler::create_search_bundles(site)
      Assets::copy_to_basedir site.source
    end
  end
end
