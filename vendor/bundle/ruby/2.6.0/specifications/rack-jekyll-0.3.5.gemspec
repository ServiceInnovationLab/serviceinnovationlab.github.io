# -*- encoding: utf-8 -*-
# stub: rack-jekyll 0.3.5 ruby lib

Gem::Specification.new do |s|
  s.name = "rack-jekyll".freeze
  s.version = "0.3.5"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Bryan Goines".freeze]
  s.date = "2010-04-01"
  s.description = "Transform your jekyll based app into a Rack application".freeze
  s.email = "bryan@ffiirree.com".freeze
  s.extra_rdoc_files = ["README.markdown".freeze]
  s.files = ["README.markdown".freeze]
  s.homepage = "http://github.com/bry4n/rack-jekyll".freeze
  s.rubygems_version = "3.0.3".freeze
  s.summary = "rack-jekyll".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 1

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jekyll>.freeze, [">= 0"])
      s.add_runtime_dependency(%q<rack>.freeze, [">= 0"])
      s.add_development_dependency(%q<bacon>.freeze, [">= 0"])
    else
      s.add_dependency(%q<jekyll>.freeze, [">= 0"])
      s.add_dependency(%q<rack>.freeze, [">= 0"])
      s.add_dependency(%q<bacon>.freeze, [">= 0"])
    end
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 0"])
    s.add_dependency(%q<rack>.freeze, [">= 0"])
    s.add_dependency(%q<bacon>.freeze, [">= 0"])
  end
end
