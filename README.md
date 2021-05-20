> Migrate to [joplin-utils](https://github.com/rxliuli/joplin-utils/)

# joplin api

> [Online API documentation](https://rxliuli.com/joplin-api), [Reference API documentation](https://joplinapp.org/api/)

## Introduction

Joplin api's js package, written in ts, provides a complete type definition, including all currently exposed api in the document.

## Quick Start

```ts
config.port = 27583
config.token = '***'
const res = await noteApi.list()
console.log(res)
```

> More examples reference: <https://github.com/rxliuli/joplin-api/tree/master/test>

## API Reference

| Object              | Description                                                                       |
| ------------------- | --------------------------------------------------------------------------------- |
| `folderApi`         | Directory-related api, such as getting directory tree                             |
| `folderExtApi`      | Directory extension api, such as mobile directory                                 |
| `joplinApi`         | joplin basic api, such as checking whether joplin web service is open             |
| `noteActionApi`     | Note-related action api, such as opening a note in an external editor             |
| `noteApi`           | Note related api, such as getting the content of the note                         |
| `noteExtApi`        | Note extension api, such as renaming                                              |
| `resourceActionApi` | Resource action api, such as opening an attachment resource in an external editor |
| `resourceApi`       | Resource-related api, such as uploading pictures                                  |
| `searchApi`         | Search related api                                                                |
| `tagApi`            | Tag related api, such as modifying the tag of a note                              |
| `config`            | Global joplin web clipper configuration                                           |
| `PageUtil`          | Paging-related static tools, such as getting the full list of notes               |

## Conventional name

- Use class to encapsulate API, for example note related API is encapsulated in `NoteApi` class.
- Keep the same naming for the same function meaning. For example, the note list is `NoteApi.list`. The following is a complete comparison table

| Meaning   | Naming   | Examples         |
| --------- | -------- | ---------------- |
| List      | `list`   | `noteApi.list`   |
| Get by id | `get`    | `noteApi.get`    |
| Create    | `create` | `noteApi.create` |
| Modify    | `update` | `noteApi.update` |
| Remove    | `remove` | `noteApi.remove` |

- There are some special cases, such as APIs involving multiple entities, the naming is generally `operation entity + by + according to entity`, for example, the API to get the tag list according to the note id is `noteApi.tagsById`

## some problems

- The `get` method should not report an error, if it does not exist it should return `null` instead of throwing an exception
