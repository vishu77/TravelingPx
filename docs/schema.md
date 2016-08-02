# Schema Information

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## Photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
url         | text      | not null
category    | text      | not null
poster_id   | integer   | not null, foreign key (references users), indexed

## Follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
followee_id | integer   | not null, foreign key (references users), indexed
follower_id | string    | not null, foreign key (references users), indexed

## UserInformation

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, indexed, unique (references users), indexed
first_name      | string    |
last_name       | string    |
description     | text      |
profile_photo   | text      | not_null, default: picture
cover_photo     | text      |

# Bonus

## Comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
parent_id   | integer   | not null, foreign key (references users), indexed
comments    | text      | not null

## Likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id    | integer   | not null, foreign key (references photos), indexed
user_id     | integer   | not null, foreign key (references users), indexed

## Tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## Taggings - Join Table
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photo_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed
