def subsets(arr)
return [[]] if arr.empty?

val = arr[0]

subs = subsets(arr.drop(1))
new_subs = subs.map{|sub| sub + [val]}

subs + new_subs

end
# p subsets([1,2,3])


# def longest_palidrome(string)
#     longest_pal_len = 0
#     longest_pal_start = 0
#     0.upto(string.length - 1).each do |idx|

#     end
# end

# def is_palindrome?(string, start, len)

#     len.times do |i|
#         if string[start + i] !== string[start + len - 1 - i]
#     end

# end

# p longest_palidrome('acapella')


int i;
for (i=0; i< 10; i++){}
    int x = i
    console.log("X",x);