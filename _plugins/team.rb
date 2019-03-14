# frozen_string_literal: true

module Jekyll
  module TeamFilter
    def team_photo(name)
      if Jekyll.sites[0].config['env'] != 'development'
        baseurl = Jekyll.sites[0].config['baseurl']
        default = "<img class='img-circle team-img bio-clip' " \
        "src='#{baseurl}/assets/img/SIL-Logo-Animation.gif' alt='SIL logo'>"
        author_data = SiteData::AuthorData.new
        person = author_data.exists? name
        if person
          full_name = author_data.fetch(name, 'full_name')
          image = File.join('assets', 'img', 'team', "#{name}.jpg")
          image_file = File.join(Jekyll.sites[0].config['source'], image)
          if File.exist?(image_file)
            "<img class='img-circle team-img bio-clip' " \
            "src='#{baseurl}/#{image}' alt='SIL team member #{full_name}'>"
          else
            default
          end
        else
          default
        end
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::TeamFilter)
