require 'http'

task ping: :environment do
  puts "Pinging..."
  HTTP.get('http://forgetnot.club/')
  puts 'done.'
end
