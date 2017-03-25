
export const signup = (user) =>(
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  })
);


export const login = (user) =>(
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user}
  })
);

export const loginWithDemo = (user) =>(
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user: {username: 'Mike Epps',  password: 'hnqpAdB253y7.z5K'}}
  })
);


export const logout = () =>(
  $.ajax({
    method: 'DELETE',
    url: 'api/session'
  })
);
