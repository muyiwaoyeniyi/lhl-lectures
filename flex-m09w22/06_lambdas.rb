# https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/

# const myFunction = function(item) {
#   console.log(item)
# }

# [1, 2, 3].forEach(myFunction)

mylambda = lambda { |item|
  puts item
}

[1, 2, 3].each(&mylambda)
