#!/usr/bin/env ruby

require 'github/markup'
require 'html/pipeline'

unless ARGV.length == 2
  puts "Invalid arguments count."
  puts "Usage: ruby markup-render.rb MarkdownFile.md OutputHtmlFile.html\n"
  exit
end

markdown_file = ARGV[0]
html_file = ARGV[1]

raw_html = GitHub::Markup.render('README.markdown', File.read(markdown_file))

class CleanHrefsFilter < HTML::Pipeline::Filter

    def process_href(href)
        # Remove ampersands from href
        if href.include? '&'
            href.gsub!('&', '')
        end

        href
    end

    def call
        doc.search('a').each do |a|
            next if a['href'].nil?
            a['href'] = self.process_href a['href']
        end

        doc
    end

end

html_pipeline =
    HTML::Pipeline.new [
                           HTML::Pipeline::TableOfContentsFilter,
                           CleanHrefsFilter
                       ]

toc_result = {}
html_pipeline.call(raw_html, {}, toc_result)

html = toc_result[:output].to_s

File.write(html_file, html)