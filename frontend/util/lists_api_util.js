/*
----add method----
- fetch all lists
- fetch a list
- create a list
- delete a list
- update a list
*/
export const fetchAllLists = ()=>(
  $.ajax({
    url: `api/lists`
  })
);

export const fetchList =(id)=>(
  $.ajax({
    url: `api/lists/${id}`
  })
);

export const createList =(list)=>(
  $.ajax({
    url: `api/lists`,
    method: 'POST',
    data: {list}
  })
);

export const updateList =(list)=>(
  $.ajax({
    url: `api/lists/${list.id}`,
    method: 'PATCH',
    data: {list}
  })
);

export const deleteList =(id)=>(
  $.ajax({
    url: `api/lists/${id}`,
    method: 'DELETE',
  })
);
