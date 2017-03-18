# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).


mike = User.create(username: 'Mike Epps',
                   email: 'mikeisgreate@gmail.com',
                   password: 'thisismike')

index = List.create(name: 'index')
index = List.create(name: 'personal')
index = List.create(name: 'work')

#  title      :string           not null
#  user_id    :integer          not null
#  completed  :boolean          not null
#  repeats    :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  list_id    :integer
#  startDate  :datetime
#  endDate    :datetime
#  estimate   :datetime

now = DateTime.now

  Task.create(title: "read #{Faker::Book.title}",
              user_id: mike.id,
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6), rand(23), rand(59), rand(59)))

  Task.create(title: "talk to #{Faker::Book.author}",
              user_id: mike.id,
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6), rand(23), rand(59), rand(59)))

  Task.create(title: "visit #{Faker::Book.author}",
              user_id: mike.id,
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6), rand(23), rand(59), rand(59)))

  Task.create(title: "setup a meet and greet with #{Faker::Book.author}",
              user_id: mike.id,
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6), rand(23), rand(59), rand(59)))


  Task.create(title: "call #{Faker::Book.publisher}",
              user_id: mike.id, list_id: index.id,
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6), rand(23), rand(59), rand(59)))

  Task.create(title: "apply to #{Faker::Book.publisher}",
              user_id: mike.id, completed: true,
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6), rand(23), rand(59), rand(59)))
