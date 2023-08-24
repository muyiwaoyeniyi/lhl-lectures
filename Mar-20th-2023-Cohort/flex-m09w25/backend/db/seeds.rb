# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

count = 1
ActiveRecord::Base.transaction do
  1000.times do
    user = User.create!(name: Faker::Name.name)
    puts "Creating user #{count}"
    count += 1
    5.times do
      Friend.create!(name: Faker::Name.name, user_id: user.id)
    end
  end
end
