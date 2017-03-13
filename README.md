#forget--not
  https://forget--not.herokuapp.com/

## Minimum Viable Product
ForgetNot is a web application inspired by Remember The Milk built using Ruby on Rails and React/Redux. It should allow the user to create tasks to complete, assign various properties
to each task, add list types to tasks (to create associations)

 * production README
 * Hosting on Heroku
 * New account creation, login, and guest/demo login
 * Tasks
 * Lists
 * List summary (time, num tasks, num completed)
 * Search

## Design Docs

 [View Wireframes](https://github.com/bkargaw/forget_not/tree/master/docs/wireframes)
 [React Components](https://github.com/bkargaw/forget_not/blob/master/docs/component-hierarchy.md)

 [API endpoints](https://github.com/bkargaw/forget_not/blob/master/docs/api-endpoints.md)

 [DB schema](https://github.com/bkargaw/forget_not/blob/master/docs/schema.md)

 [Sample State](https://github.com/bkargaw/forget_not/blob/master/docs/sample-state.md)

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

 Objective: Functioning rails project with front-end Authentication

### Phase 2: Task Model, API, and components (3 1/2 days)

 Objective: Tasks can be created, read, edited and destroyed through the API.
            allow task types and filter

### Phase 3: LISTS (2 1/2 days)

 Objective: Tasks have types and user can add new List types and
    associate any task with any of the lists

### Phase 4: List summary (time, num tasks, num completed)(1 day)

Objective: Sorting of Tasks can be done under all list types

### Phase 5: Search Tasks By name (1 day)

 Objective: Sorting of Tasks can be done under all list types

### Phase 6: Sort Tasks By Properties (if i get to it)

 Objective: Sorting of Tasks can be done under all list types

### Phase 7: Notes (if i get to it)

 Objective: Notes belong to Tasks that can be created, read, edited and destroyed through the API.


### Phase 8: Add contacts and allow assignment of task (if i get to it)

 Objective: people can add others to their contacts and assign tasks to each other


### Bonus Features (TBD)
  * add contacts and allow assignment of task to other people in contact
  * Autocomplete SmartAdd of task properties
  * Subtasks
