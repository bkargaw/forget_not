#schema

## Users Table

| column name     | data type | details                   |
| :-------------- | :-------- | :------------------------ |
| id              | integer   | not null, primary key     |
| username        | string    | not null, indexed, unique |
| email           | string    | not null, indexed, unique |
| password_digest | string    | not null                  |
| session_token   | string    | not null, indexed, unique |


## Tasks
| column name           | data type      | details                   |    
| :---------------------| :------------- | :------                   |
| id                    | integer        | not null, primary key     |
| title                 | string         | not null                  |
| startDate             | Date           | not null                  |
| endDate               | Date           | not null                  |
| estimate              | Date           | not null                  |
| completed             | boolean        | not null                  |
| repeats               | string         | not null                  |
| list_id               | integer        | foreign key               |
| user_id               | integer        | not null, foreign key     |


## Lists (default is index)
| column name           | data type      | details                   |    
| :---------------------| :------------- | :------                   |
| id                    | integer        | not null, primary key     |
| name                  | string         | not null, unique          |



### Notes (if i get to it)
| column name           | data type      | details                   |    
| :---------------------| :------------- | :------                   |
| id                    | integer        | not null, primary key     |
| task_id               | integer        | not null, foreign key     |
| body                  | string         |                           |
