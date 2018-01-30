
# the-first-commit

[![NPM version](https://img.shields.io/npm/v/the-first-commit.svg?style=flat)](https://npmjs.com/package/the-first-commit) [![NPM downloads](https://img.shields.io/npm/dm/the-first-commit.svg?style=flat)](https://npmjs.com/package/the-first-commit) [![CircleCI](https://circleci.com/gh/sinchang/the-first-commit/tree/master.svg?style=shield)](https://circleci.com/gh/sinchang/the-first-commit/tree/master)  [![codecov](https://codecov.io/gh/sinchang/the-first-commit/branch/master/graph/badge.svg)](https://codecov.io/gh/sinchang/the-first-commit)

## Install

```bash
yarn add the-first-commit
```

## Usage

```js
const theFirstCommit = require('the-first-commit')

// cwd is the git repository path, if empty use current dir.

theFirstCommit(cwd)

result:

  { 
    hash: 'bdeb253d1679effeb028a813ef870a612ba91555',
    short: 'bdeb253',
    author: 'sinchang',
    email: 'sinchangwen@gmail.com',
    date: 'Sun Dec 31 23:37:17 2017 +0800',
    message: 'chore: init project' 
  }
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**the-first-commit** © [sinchang](https://github.com/sinchang), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by sinchang with help from contributors ([list](https://github.com/sinchang/the-first-commit/contributors)).

> [sinchang.me](https://sinchang.me) · GitHub [@sinchang](https://github.com/sinchang) · Twitter [@sinchangwen](https://twitter.com/sinchangwen)
