# ForgetNot
[ForgetNot live](https://forget--not.herokuapp.com/)

![alt tag](https://github.com/bkargaw/forget_not/blob/master/docs/live_photos/ForgetNot.png)

ForgetNot is a single page web application inspired by Remember The Milk built using Ruby on Rails and React/Redux. It allows the user to create tasks to complete, assign various properties
to each task, add list types to tasks(to create associations). The user should then able to
filter their task by many filtering options which includes search by name for a task or filter
by deadlines. The user can also edit and delete task as well as lists.



## Tools Used
  * ruby - backend coding language
  * rails - frame work for ruby
  * js - front-end coding language
  * react - frame work for js
  * Redux - architecture used in the implementation in the front end
  * React - js library used to build user interfaces
  * postgresql - database
  * github - online repository
  * webpack - bundle js script and css files
  * babel - convert es6 syntax to es5

## Features & Implementation

#### Splash Page

![alt tag](https://github.com/bkargaw/forget_not/blob/master/docs/live_photos/ForgetNot_SplashPage.png)

### login and signup
  The user will be abel to signup/login through a modal dialog; Full auth of the user is preformed every time user signs in. The Session for the user is maintained when the user closed the page without logging out; thus allowing the user to be logged in immediatly when the site is loaded up again.

![alt tag](https://github.com/bkargaw/forget_not/blob/master/docs/live_photos/Sign_up.png)

### Task Rendering and Editing Tasks
  This is one of the most interesting feature of this this application. Since the application is a one
  page app and since the functionalities of the site demanded that the data be filtered in many ways
  (some that are user created: like lists), the backend and the front end had to be abstracted these functionalities in a general manner. In implementing this feature, it was desired to delegate the filtering
  of the data in the backend end allow the front end to focus on render of the data to the user. what follows is a short description of how this was implemented.

#### database
  The developmental and production database used for ForgetNot is postgresql. The database holds tables that have data for the users, user's tasks, and and user's lists.

#### Backend (Tasks)
  The most interesting part of the Task's implementation in the backend was the way in which index API call's were answered. First off, all actions that are preformed in the backend ensure the user is logged in properly (note: this also included a full auth using BCrypt to encrypt the user's password). From there the controller will filter all action based on the users params. The backend tasks controller
  allows the API request to come in with an options hash that will determined how to filter the task data being requested. Then the controller will create the necessary data query with a built
  up conditions created from the option hash. lastly we format the data in a way that is more manageable for the front-end.


#### Front-end (Tasks)
  The front-end will use the url to figure out which data to request from the back end. The url routes will contain
  default routs for filters like today, tomorrow, this-week and list filters like index, work and personal. The
  application will also allow the user to generate new routes by creating new list to associate task with.
  (note: the user will be able  to navigate to these routes using side nav bar that contains listing of all the
    range and list filtering options even the lists created by the user)

hear is the code for creating a route to the range filter -- today
(note: all routes where generated using react-router)
 ```js
          <Route path='/tasks' component={ Tasks } onEnter={ _ensureLogin }>
            <IndexRoute component={ MainBodyContainer }/>
            <Route path='/tasks/today' component={ RangesContainer }>
              <IndexRoute component={ MainShowSectionContainer }/>
              <Route path='/tasks/today/:taskId' component={ TaskShowContainer }/>
            </Route>
          ...
  ```

  Using the route location or search name given by the user the front-end will create the necessary options hash in order to to make an ajax request to fetch the filtered data from the user. Then the font end had to render the data that it receives back from the backend and update the state of the store which will result in re-rendering of any component that is affected by the change to the state of the store.


### Search
Searching tasks is a standard feature of Remember The Milk. The application will search the whole database for the task by name (provided by the user) and will render all the tasks that start with the provided key word.  

#### Backend (search)
  The backend in this case does similar thing as filtering the user's task by date ranges, with the key exception that we will filter that data base on the user provided prefix. The search is preformed in a case insensitive manner  and json response is created in a friendly manner for the front-end.


  here is an example code snippet that filter the task base on search params ( task name ) entered by the use
   ```ruby

  @tasks = Task.where("title LIKE :prefix",
                      prefix: "%#{params[:search_by]}%")
   ```

#### front-end (search)
  The site will utilize react-search-input library to get the use's input and for each character entered by the user the site will make an AIP request and update the store(i.e.the tasks part of the state). This had the added benefit of making he user feel the site is responsive and it also means that the user does not have  to type the whole title of the task in order to be able to find a task they are looking for. Note as our database gets large and making a request for each character will become too costly, thus at that time this section of the application will be changed to be more efficient. For example we can make the API call only when the user presses enter.   


# Future Directions for the Project

### errors
  Objective: give the user better errors when specific action they take fails (i.e. avoid  alert dialogs). note: this should be user friendly in order to better user experience.

### Add contacts and allow assignment of task

 * Objective: people can add others to their contacts and assign tasks to each other, if the  person does not have a profile to our site then that person would get an email telling them they have a task give to them on our site --- this will have an added benefit of driving new user to our site! :)

### allow the users to associate task with multiple users and lists

  * Objective: the same task can be assigned to multiple users each user will be allowed to to interact  with the task end edit it.

  * Objective: each task can be associated with multiple lists allow for better data filtering and improved application for the user.

### Notes

  * Objective: Notes belong to Tasks that can be created, read, edited and destroyed through the API.
