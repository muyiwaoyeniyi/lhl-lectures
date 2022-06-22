# Globals, constants, local vars etc

class Time
  # constructor (day) {
  # this.day = day
  # }

  def initialize(day)
    @day = day
  end

  attr_accessor :day, :time, :month, :year # this will declare setter and getter methods
  attr_reader :day # this will declare a getter only method
  attr_writer :day # this will declare a setter only method

  # def day
  #   @day
  # end

  # def day=(new_day)
  #   @day = new_day
  # end
end
