# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).


mike = User.create(username: 'Mike Epps',
                   email: 'mikeisgreate@gmail.com',
                   password: 'thisismike')

index = List.create(name: 'index', user_id: mike.id)
index_personal = List.create(name: 'personal', user_id: mike.id)
index_work = List.create(name: 'work', user_id: mike.id)
index_play = List.create(name: 'play', user_id: mike.id)
index_gym = List.create(name: 'gym', user_id: mike.id)

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

# =======================SEED FOR INDEX==================
now = DateTime.now
  Task.create(title: "Read #{Faker::Book.title}",
              user_id: mike.id, list_id: index.id,
              startDate: DateTime.new(now.year, now.month, now.day +
              rand(2), rand(23), rand(59), rand(59)),
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6) + 1, rand(23), rand(59), rand(59)),
              completed: false, estimate: '20 hr')

  Task.create(title: "Read #{Faker::Book.title}",
              user_id: mike.id, list_id: index.id,
              startDate: DateTime.new(now.year, now.month, now.day +
              rand(4), rand(23), rand(59), rand(59)),
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6) + 5, rand(23), rand(59), rand(59)),
              completed: true, estimate: '15 hr')


 Task.create( title: "Go to meet #{Faker::Book.author} at the book store",
              user_id: mike.id, list_id: index.id,
              startDate: DateTime.new(now.year, now.month, now.day +
              rand(2), rand(23), rand(59), rand(59)),
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6) + 3, rand(23), rand(59), rand(59)),
              completed: true, estimate: '15 hr')

  Task.create(title: "visit #{Faker::Book.author} at work",
              user_id: mike.id, list_id: index.id,
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6) + 3, rand(23), rand(59), rand(59)),
              completed: false, estimate: '30 min')

  Task.create(title: "setup a meet and greet with #{Faker::Book.author}",
              user_id: mike.id, list_id: index.id,
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6) + 10, rand(23), rand(59), rand(59)),
              completed: false, estimate: '40 min')

  Task.create(title: "call #{Faker::Book.publisher}",
              user_id: mike.id, list_id: index.id,
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6) + 10, rand(23), rand(59), rand(59)),
              completed: false, estimate: '20 min')

  Task.create(title: "apply to #{Faker::Book.publisher}",
              user_id: mike.id, completed: true, list_id: index.id,
              startDate: DateTime.new(now.year, now.month, now.day +
              rand(2), rand(23), rand(59), rand(59)),
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6) + 10, rand(23), rand(59), rand(59)),
              completed: false, estimate: '40 hr')


  Task.create(title: "Read #{Faker::Book.title}",
              user_id: mike.id, list_id: index.id,
              startDate: DateTime.new(now.year, now.month, now.day +
              9, rand(23), rand(59), rand(59)),
              endDate: DateTime.new(now.year, now.month, now.day +
              rand(6) + 10, rand(23), rand(59), rand(59)),
              completed: false, estimate: '40 hr')

  Task.create( title: "Meet #{Faker::Book.author} at Starbacks",
               user_id: mike.id, list_id: index.id,
               endDate: DateTime.new(now.year, now.month, now.day +
               rand(6) + 3, rand(23), rand(59), rand(59)),
               completed: false, estimate: '1 hr')

# =======================SEED FOR personal==================

Task.create(title: "Read #{Faker::Book.title}",
            user_id: mike.id, list_id: index_personal.id,
            startDate: DateTime.new(now.year, now.month, now.day +
            rand(2), rand(23), rand(59), rand(59)),
            endDate: DateTime.new(now.year, now.month, now.day +
            rand(6) + 1, rand(23), rand(59), rand(59)),
            completed: false, estimate: '20 hr')

Task.create( title: "Set up a date with #{Faker::Book.author}",
             user_id: mike.id, list_id: index_personal.id,
             endDate: DateTime.new(now.year, now.month, now.day +
             rand(6) + 3, rand(23), rand(59), rand(59)),
             completed: false, estimate: '1 hr')

Task.create( title: "call the lovely #{Faker::Book.author}",
             user_id: mike.id, list_id: index_personal.id,
             endDate: DateTime.new(now.year, now.month, now.day +
             rand(6) + 3, rand(23), rand(59), rand(59)),
             completed: true)

Task.create( title: "get #{Faker::Demographic.educational_attainment}",
             user_id: mike.id, list_id: index_personal.id,
             startDate: DateTime.new(now.year, now.month, now.day +
             rand(6) + 3, rand(23), rand(59), rand(59)),
             completed: false, estimate: 'N/A')

Task.create( title: "complete #{Faker::Demographic.educational_attainment}",
             user_id: mike.id, list_id: index_personal.id,
             startDate: DateTime.new(now.year, now.month, now.day +
             rand(6) + 3, rand(23), rand(59), rand(59)),
             completed: true, estimate: 'N/A')

# =======================SEED FOR Work==================
