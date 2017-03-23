# eslint-globals-test

This repo was created to test if eslint would complain about using methods like `setTimeout`
without `window.` prefix when the env `browser: false`.

This repo is related to this https://github.com/facebookincubator/create-react-app/pull/1840

## How to test

```
yarn
yarn run lint
```
