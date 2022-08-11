# Javascript
# function time() {

#   return 'NOW'
# }

def time_method
  time = 'now'
  puts 'in time method'

  if time == 'now'
    'Return time is now'
  else
    'Return time is later'
  end
end

puts time_method
