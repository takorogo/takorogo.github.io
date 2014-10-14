#!/usr/bin/env ruby

require 'github/markup'

unless ARGV.length == 2
  puts "Invalid arguments count."
  puts "Usage: ruby markup-render.rb InputFile.md OutputFile.html\n"
  exit
end

puts 'Files in wiki dir:'
puts Dir['./wiki/*.*']

input_file = ARGV[0]
output_file = ARGV[1]

html = GitHub::Markup.render('README.markdown', File.read(input_file))
File.write(output_file, html)