mike = User.create!([
  {email: "mikeisgreate@gmail.com", username: "Mike Epps", password: "hnqpAdB253y7.z5K"}
  ])

List.create!([
  {name: "index", user_id: 1},
  {name: "personal", user_id: 1},
  {name: "work", user_id: 1},
  {name: "play", user_id: 1},
  {name: "gym", user_id: 1}
])


Task.create!([
  {user_id: 1, title: "Set a date up with amy", completed: false, repeats: false, estimate: "2 hr", startDate: nil, endDate: 1490313600.0, list_id: 2},
  {user_id: 1, title: "Work on the ForgetNot site", completed: false, repeats: false, estimate: "~ 2 days", startDate: 1492992000.0, endDate: 1490400000.0, list_id: 1},
  {user_id: 1, title: "Start to write the new project proposal ", completed: false, repeats: false, estimate: "~1 day", startDate: 1490227200.0, endDate: 1490400000.0, list_id: 3},
  {user_id: 1, title: "Apply to Facebook", completed: false, repeats: false, estimate: "", startDate: nil, endDate: nil, list_id: 3},
  {user_id: 1, title: "Go snowboarding with jose ", completed: false, repeats: false, estimate: "`1 day", startDate: 1490918400.0, endDate: 1491004800.0, list_id: 4},
  {user_id: 1, title: "visit my parents", completed: false, repeats: false, estimate: "", startDate: nil, endDate: nil, list_id: 2},
  {user_id: 1, title: "Apply to Amazon ", completed: false, repeats: false, estimate: "", startDate: nil, endDate: nil, list_id: 3},
  {user_id: 1, title: "Apply to Apple", completed: false, repeats: false, estimate: "", startDate: nil, endDate: nil, list_id: 3},
  {user_id: 1, title: "go to dinner with sis", completed: false, repeats: false, estimate: "", startDate: nil, endDate: nil, list_id: 2},
  {user_id: 1, title: "Go on a trip to Rome", completed: false, repeats: false, estimate: "", startDate: nil, endDate: nil, list_id: 2},
  {user_id: 1, title: "chest day ", completed: false, repeats: false, estimate: "1 hr", startDate: nil, endDate: 1490313600.0, list_id: 5},
  {user_id: 1, title: "run six miles", completed: false, repeats: false, estimate: "1 hr 20 min", startDate: nil, endDate: nil, list_id: 1},
  {user_id: 1, title: "Read the first book in the Game of Thrones series  ", completed: true, repeats: false, estimate: "", startDate: nil, endDate: nil, list_id: 1},
  {user_id: 1, title: "Go dancing with crew", completed: true, repeats: false, estimate: "", startDate: nil, endDate: nil, list_id: 1},
  {user_id: 1, title: "Go to the park", completed: true, repeats: false, estimate: "20 min", startDate: 1489708800.0, endDate: 1489708800.0, list_id: 4},
  {user_id: 1, title: "leg day", completed: false, repeats: false, estimate: "", startDate: nil, endDate: nil, list_id: 5},
  {user_id: 1, title: "back day", completed: false, repeats: false, estimate: "", startDate: nil, endDate: nil, list_id: 5},
  {user_id: 1, title: "arm day ", completed: false, repeats: false, estimate: "", startDate: nil, endDate: nil, list_id: 4},
  {user_id: 1, title: "Apply to Google", completed: true, repeats: false, estimate: "", startDate: nil, endDate: nil, list_id: 1},
  {user_id: 1, title: "apply to Remember The Milk", completed: true, repeats: false, estimate: "~ 1 week", startDate: 1490227200000.0, endDate: 1490918400000.0, list_id: 1}
])
