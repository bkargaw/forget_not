

# Component Hierarchy
* forget_not
  * App   
    * Auth Form Container
      * sing up
      * sing in
    * List container
      * ShowTask container
        * showTask
          * notes
        * editTask
    * Today container
      * show index
      * ShowTask container
        * showTask
          * notes
        * editTask
    * Tomorrow container
      * show index
      * ShowTask container
        * showTask
          * notes
        * editTask
    * Week container
      * show index
      * ShowTask container
        * showTask
          * notes
        * editTask
    * search container
      * show index
      * ShowTask container
          * showTask
            * notes
          * editTask

## Routes

* forget_not
  * App   route ='/'
    * AuthFormContainer route = 'signup'
    * AuthFormContainer route = 'signin'
    * List container route ='/(default index)'
      * ShowTask container route ='/(default index)/:id'
    * Today container route ='/today'
      * ShowTask container route ='/today/:id'
    * Tomorrow container route ='/tomorrow'
      * ShowTask container route ='/tomorrow/:id'
    * This week container route ='/week/'
      * ShowTask container route ='/week/:id'


## components with state and dispatch props

* forget_not
  * App
    * Auth Form Container
      * sing up
      * sing in
    * List container state_props ={ session: username:, email:, id:,
                                    tasks: filtered by (type - default index)}
                   dispatch_props= null

      * ShowTask container state_props ={ session: username:, email:, id:,
                                          task: (select based on id) }
                           dispatch_props= {fetchTasks:
                                            delete/edit Task:}
        * editTask (functional)

    * Today container state_props ={ session: username:, email:, id:,
                                    tasks: filtered by (type - default index)}
                      dispatch_props= null

      * show index

      * ShowTask container state_props ={ session: username:, email:, id:,
                                          task: (select based on id) }
                          dispatch_props= {fetchTasks:
                                          delete/edit Task:}
          * editTask (functional)

    * Tomorrow container state_props ={ session: username:, email:, id:,
                                        tasks: filtered by (type - default index)}
                         dispatch_props= null

      * show index

      * ShowTask container state_props ={ session: username:, email:, id:,
                                          task: (select based on id) }
                        dispatch_props= {fetchTasks:
                                         delete/edit Task:}
        * editTask (functional)

    * This week container state_props ={ session: username:, email:, id:,
                                        tasks: filtered by (type - default index)}
                          dispatch_props= null

      * show index

      * ShowTask container state_props ={ session: username:, email:, id:,
                                        task: (select based on id) }
                          dispatch_props= {fetchTasks:
                                          delete/edit Task:}
          * editTask (functional)

    * search container state_props ={ session: username:, email:, id:,
                                      tasks: {} }
                        dispatch_props= {fetchTasksByName:}

          * editTask (functional)


      * show index

      * ShowTask container state_props ={ session: username:, email:, id:,
                                      task: (select based on id) }
                        dispatch_props= {fetchTasks:
                                        delete/edit Task:}
          * editTask (functional)
