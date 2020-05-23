# [WIP] Todo api with deno 🦕

## deno install
[Check it!](https://deno.land/#installation)

## Getting Started

1. Start the local server.

```
deno run --allow-env --allow-net main.ts
```

1. Do the following.

```
curl -X GET http://localhost:9999/todos

curl -X GET http://localhost:9999/todos/1

curl -X POST http://localhost:9999/todos -d '{"content": "foobar"}' -H 'content-type: application/json'

curl -X PATCH http://localhost:9999/todos/1 -d '{"content": "foobarbaz"}' -H 'content-type: application/json'

curl -X DELETE http://localhost:9999/todos/1
```
