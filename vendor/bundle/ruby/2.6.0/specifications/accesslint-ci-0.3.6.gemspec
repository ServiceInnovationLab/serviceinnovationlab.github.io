# -*- encoding: utf-8 -*-
# stub: accesslint-ci 0.3.6 ruby lib

Gem::Specification.new do |s|
  s.name = "accesslint-ci".freeze
  s.version = "0.3.6"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Cameron Cundiff".freeze]
  s.date = "2017-04-30"
  s.description = "accesslint-ci runs accessibility tests in CI and comments on corresponding GitHub pull requests".freeze
  s.email = ["hello@thoughtbot.com".freeze]
  s.executables = ["accesslint-ci".freeze]
  s.files = ["bin/accesslint-ci".freeze]
  s.homepage = "https://www.github.com/accesslint/accesslint-ci".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "Run accessibility tests in CI builds".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.14"])
      s.add_development_dependency(%q<climate_control>.freeze, ["~> 0.1.0"])
      s.add_development_dependency(%q<dotenv>.freeze, ["~> 2.2.0"])
      s.add_development_dependency(%q<pry-byebug>.freeze, ["~> 3.4.2"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 12.0.0"])
      s.add_development_dependency(%q<rspec>.freeze, ["~> 3.5.0"])
      s.add_runtime_dependency(%q<rest-client>.freeze, ["~> 2.0.1"])
      s.add_runtime_dependency(%q<thor>.freeze, ["~> 0.19.4"])
    else
      s.add_dependency(%q<bundler>.freeze, ["~> 1.14"])
      s.add_dependency(%q<climate_control>.freeze, ["~> 0.1.0"])
      s.add_dependency(%q<dotenv>.freeze, ["~> 2.2.0"])
      s.add_dependency(%q<pry-byebug>.freeze, ["~> 3.4.2"])
      s.add_dependency(%q<rake>.freeze, ["~> 12.0.0"])
      s.add_dependency(%q<rspec>.freeze, ["~> 3.5.0"])
      s.add_dependency(%q<rest-client>.freeze, ["~> 2.0.1"])
      s.add_dependency(%q<thor>.freeze, ["~> 0.19.4"])
    end
  else
    s.add_dependency(%q<bundler>.freeze, ["~> 1.14"])
    s.add_dependency(%q<climate_control>.freeze, ["~> 0.1.0"])
    s.add_dependency(%q<dotenv>.freeze, ["~> 2.2.0"])
    s.add_dependency(%q<pry-byebug>.freeze, ["~> 3.4.2"])
    s.add_dependency(%q<rake>.freeze, ["~> 12.0.0"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.5.0"])
    s.add_dependency(%q<rest-client>.freeze, ["~> 2.0.1"])
    s.add_dependency(%q<thor>.freeze, ["~> 0.19.4"])
  end
end
