# Project

CRUD API - Create, Delete, Update and READ.

## API Details

Create
1. key and value as param added.
2. Check duplicate
3. Check the key and value param correctly
4. Check validation is not empty

Delete
1. Check key exists in the array.
2. Remove it if exists else throw error as not found
3. Successfully deleted measn throw success message


Update 
1. By key and update the value
2. Check duplicate.

Read
1. Fetch specific data by key and return value alone
2. If empty send empty data

Common cause
1. try and catch - throw 500 internal server error.


http://localhost:8080/fetchByKey?key=1
http://localhost:8080/updateByKey?key=3&value=three
http://localhost:8080/delete?key=2
http://localhost:8080/add?key=2&value=two

## Improvment
1. Utils function
2. Router
3. Use method