def sum_from_file(filename)
nums = File.readlines(filename).select{|line| line[0] != "#"}.map(&:to_i)
nums.inject(:+)
end

def shuffle(array)
    new_array = array.dup
    array.each_index do |index|
        rand_index = index + rand(array.length - index)
        new_array[index], new_array[rand_index] = new_array[rand_index], new_array[index]
    end
    new_array
end

# [1,2,3,4,5]
#  0 1 2 3 4
# rand_index: 
#  1,0,2,3,4

# SELECT *.names FROM employees JOIN departments ON employees.department_id = department.id WHERE department.name = ?