# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

1000.times do
  user = User.create(name: Faker::Name.name)
  puts "Created user #{user.name}"
  5.times do
    friend = Friend.create(name: Faker::Name.name, user_id: user.id)
    puts "Created friend #{friend.name}"
  end
end
