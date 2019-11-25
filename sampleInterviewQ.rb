# // Example input:

# // Driver Dan
# // Driver Lauren
# // Driver Kumi
# // Trip Dan 07:15 07:45 17.3
# // Trip Dan 06:12 06:32 21.8
# // Trip Lauren 12:01 13:16 42.0
# // Expected output:

# // Lauren: 42 miles @ 34 mph
# // Dan: 39 miles @ 47 mph
# // Kumi: 0 miles
# var myArgs = process.argv.slice(2);
# console.log(myArgs);
# cat ./input.txt
# puts "Hello"
import ("./input.txt")
 File.open("input.txt").each do |line|
    trip = JSON.parse(line)
    puts trip
    trip["employees"] = trip["employees"].delete(",").to_i if trip["employees"]
    Trip.create(trip)
  end

# file = File.open("input.txt")
# file_data = file.readlines.map(&:chomp)
# file.close

driver1_name = file_data[1]

class Driver
    def initialize(name)
        @name = name
    end
end

class Trip
    def initialize(time1, time2, distance)
        @time1 = time1
        @time2 = time2
        @distance = distance
    end
end    
