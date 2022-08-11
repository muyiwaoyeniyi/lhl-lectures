class ArrayFormatter
  # Takes in an array and two args for the left and right side wrapping
  # Returns a new array with string containing the "wrapped" version of each element
  # Example arguments: [1, 2, 3, 4, 5], "<<", ">>"
  # Returns array:     ["<<1>>", "<<2>>", "<<3>>", "<<4>>", "<<5>>"]
  def wrap_array_items(items, left, right)
    items.map { |item| "#{left}#{item}#{right}" }
  end
end

instance = ArrayFormatter.new
pp instance.wrap_array_items([1, 2, 3, 4, 5], '<<', '>>')
