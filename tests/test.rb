#!/usr/bin/env ruby
# frozen_string_literal: true

require 'html-proofer'
proofer =
  HTMLProofer.check_directory(
    './_site',
    directory_index_file: 'index.html',
    url_ignore: ['/dashboard', 'serviceinnovationlad.github.io'],
    disable_external: true,
    href_swap: { '%20' => ' ' }
  )
proofer.run
