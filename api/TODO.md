- [x] Basic endpoints (POST 1, GET 1, GET ALL)
- [ ] Tests!
- [x] OAuth security
- [ ] CSRF protection FE/BE
- [x] MAPPERS!!! Mapstruct or manually, we will see :)
- [ ] POST new post with tags.
- [ ] Implement HATEOAS

## Creating a new Post

POST /api/v1/posts

{
    "title": title,
    "content": content
    "topics": [1, 4, 5]
}

