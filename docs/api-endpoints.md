# API Endpoints

## HTML API

### Root

GET / - loads static page

## JSON API

### Users

  * POST /api/users
  * PATCH /api/users (if get there)

### Session

  * POST /api/session
  * DELETE /api/session

  ### Tasks

  * GET /api/tasks  (defaults to index list type)
  accepts filter (option hash with optional keys [type:, range:,searchName:])
  * POST /api/tasks
  * GET /api/tasks/:id
  * PATCH /api/tasks/:id
  * DELETE /api/tasks/:id

### Lists

  * GET /api/List/:id
  * POST /api/List/:id
  * DELETE /api/tasks/:id


### notes (bonus)
  * POST /api/tasks/:id/notes
  * DELETE /api/tasks/:id/notes
