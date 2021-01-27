require 'csv'
require 'json'

# This file converts the csv file to JSON format
filepath = "src/input.csv"

rows = []
CSV.foreach(filepath, headers: true, converters: :all) do |row|
  rows << row.to_hash
end
puts rows.to_json
