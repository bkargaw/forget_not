
# Users Table

| column name     | data type | details                   |
| :-------------- | :-------- | :------------------------ |
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| email           | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null,indexed, unique  |


# Tasks
| column name           | data type      | details                   |    
| :---------------------| :------------- | :------                   |
| id                    | integer        | not null, primary key     |
| title                 | string         | not null                  |
| startDate             | string         | not null                  |
| endDate               | string         | not null                  |
| estimate              | Date           | not null                  |
| completed             | boolean        | not null                  |
| repeats               | string         | not null                  |
| list                  | string         | not null                  |

# Lists (default is index)
| column name           | data type      | details                   |    
| :---------------------| :------------- | :------                   |
| id                    | integer        | not null, primary key     |
| task_id               | integer        | not null, foreign key     |
| title                 | string         | not null                  |



# Notes (if i get to it)
| column name           | data type      | details                   |    
| :---------------------| :------------- | :------                   |
| id                    | integer        | not null, primary key     |
| task_id               | integer        | not null, foreign key     |
| body                  | string         |                           |
