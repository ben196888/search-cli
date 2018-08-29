search-cli
==========

An interactive cli to search all field values with given json data.

In order to reducing search time, this program creates indices of given fields per data set. In another word, it created a reverse hash map of the values for specific field names.

It provides an interactive interface to receive search term from user.

In this program, it provides three different data set `organizations`, `users`, and `tickets` as example.

```
? Give a string you want to search: hello
********** Find 0 elements in ORGANIZATIONS
********** Find 0 elements in USERS
********** Find 0 elements in TICKETS
? Search again? (Y/n)
```

## Dependencies

+ node 8.6.0
+ nvm

## Installation

```
nvm install
nvm use
npm install
```

## Run

```
npm start
```

## Run Dev

```
npm run start:dev
```

## Lint

```
npm run lint
```

## Test

```
npm test
```

## Todo list

+ Integrate [lunr](https://lunrjs.com)
