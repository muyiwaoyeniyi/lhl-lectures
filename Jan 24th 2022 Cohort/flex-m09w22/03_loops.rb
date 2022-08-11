# https://www.tutorialspoint.com/ruby/ruby_loops.htm

# i = 0
# num = 5

# while i < num
#   puts("Inside the loop i = #{i}")
#   i += 1
# end

# for i in 0..4
#   puts "Value of local variable is #{i}"
# end

(0..4).each do |i|
  puts "Value of local variable is #{i}"
end

0.upto(4) { |i| puts i }
