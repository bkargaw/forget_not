require 'http'

task ping: :environment do
  puts "Pinging..."
  HTTP.get('https://forget--not.herokuapp.com/')
  puts 'done.'
end
