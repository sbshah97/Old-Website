# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "blog"
  spec.version       = "0.1.0"
  spec.authors       = ["Salman Shah"]
  spec.email         = ["sbs.191197@gmail.com"]

  spec.summary       = %q{TODO: Write a short summary, because Rubygems requires one.}
  spec.homepage      = "http://github.com/salman-bhai/salman-bhai.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll"

  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake"
end
