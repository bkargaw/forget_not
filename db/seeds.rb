List.create!([
  {name: "index", user_id: 1},
  {name: "personal", user_id: 1},
  {name: "work", user_id: 1},
  {name: "play", user_id: 1},
  {name: "gym", user_id: 1}
])
Task.create!([
  {title: "asejf", completed: true, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 1},
  {title: "Set a date up with amy", completed: false, repeats: false, user_id: 1, estimate: "2 hr", startDate: nil, endDate: 1490313600.0, list_id: 2},
  {title: "Go on a trip to Rome", completed: false, repeats: false, user_id: 1, estimate: "~ 2 weeks", startDate: 1490918400.0, endDate: 1492214400.0, list_id: 1},
  {title: "visit my parents", completed: false, repeats: false, user_id: 1, estimate: "~ 2 days", startDate: 1493424000.0, endDate: 1493596800.0, list_id: 1},
  {title: "Read the first book in the Game of Thrones series  ", completed: false, repeats: false, user_id: 1, estimate: "~ 1 week", startDate: 1490918400.0, endDate: 1491523200.0, list_id: 1},
  {title: "Apply to Google", completed: false, repeats: false, user_id: 1, estimate: "~ 3 week", startDate: 1492128000.0, endDate: 1493942400.0, list_id: 3},
  {title: "Apply to Apple", completed: false, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 1},
  {title: "Apply to Facebook", completed: false, repeats: false, user_id: 1, estimate: "", startDate: nil, endDate: nil, list_id: 1},
  {title: "Apply to Amazon ", completed: false, repeats: false, user_id: 1, estimate: "~ 4 week", startDate: 1491523200.0, endDate: nil, list_id: 1}
])
User.create!([
  {email: "mikeisgreate@gmail.com", username: "Mike Epps", session_token: "2wEAJ_pTlg9DtuR1hNSdqw", password_digest: "$2a$10$Dw/MssxbkABPYz4Epwn6a.qnmCQDYbSl7JsMyhnqpAdB253y7.z5K"}
])
