User.create!([
  {email: "mikeisgreate@gmail.com", username: "Mike Epps", session_token: "MFGLdF7QBl4_VP9iKy9B2Q", password_digest: "$2a$10$0KuGWuq42IZgOZqXT0rkSeusT6OedR1x1R5sGfUK2xQ2n6fJHl.V2"}
  ])
List.create!([
  {name: "index", user_id: 1},
  {name: "personal", user_id: 1},
  {name: "work", user_id: 1},
  {name: "play", user_id: 1},
  {name: "gym", user_id: 1}
])
Task.create!([
  {title: "Set a date up with amy", completed: false, repeats: false, user_id: 1, estimate: "2 hr", startDate: nil, endDate: 1490313600.0, list_id: 2},
  {title: "Work on the ForgetNot site", completed: false, repeats: false, user_id: 1, estimate: "~ 2 days", startDate: 1492992000.0, endDate: 1490400000.0, list_id: 1},
  {title: "Apply to Facebook", completed: false, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 3},
  {title: "Go snowboarding with jose ", completed: false, repeats: false, user_id: 1, estimate: "`1 day", startDate: 1490918400.0, endDate: 1491004800.0, list_id: 4},
  {title: "visit my parents", completed: false, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 2},
  {title: "Apply to Amazon ", completed: false, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 3},
  {title: "Apply to Apple", completed: false, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 3},
  {title: "go to dinner with sis", completed: false, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 2},
  {title: "Go on a trip to Rome", completed: false, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 2},
  {title: "chest day ", completed: false, repeats: false, user_id: 1, estimate: "1 hr", startDate: nil, endDate: 1490313600.0, list_id: 5},
  {title: "run six miles", completed: false, repeats: false, user_id: 1, estimate: "1 hr 20 min", startDate: nil, endDate: nil, list_id: 1},
  {title: "Read the first book in the Game of Thrones series  ", completed: true, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 1},
  {title: "Go dancing with crew", completed: true, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 1},
  {title: "Go to the park", completed: true, repeats: false, user_id: 1, estimate: "20 min", startDate: 1489708800.0, endDate: 1489708800.0, list_id: 4},
  {title: "back day", completed: false, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 5},
  {title: "Apply to Google", completed: true, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 1},
  {title: "apply to Remember The Milk", completed: true, repeats: false, user_id: 1, estimate: "~ 1 week", startDate: 1490227200000.0, endDate: 1490918400000.0, list_id: 1},
  {title: "arm day ", completed: false, repeats: false, user_id: 1, estimate: "~ 1 hr", startDate: nil, endDate: nil, list_id: 5},
  {title: "start to write project proposal for bomb checkrs", completed: false, repeats: false, user_id: 1, estimate: "5 hrs", startDate: 1490400000000.0, endDate: 1490486400000.0, list_id: 3},
  {title: "Beach day with the boys", completed: false, repeats: false, user_id: 1, estimate: "all day!!!!", startDate: nil, endDate: nil, list_id: 2},
  {title: "kick sis's ass", completed: false, repeats: false, user_id: 1, estimate: "2 hr", startDate: 1490400000.0, endDate: 1490832000.0, list_id: 1},
  {title: "leg day", completed: true, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 5}
])
