# eslint-globals-test

This repo was created to test if eslint would complain about using methods like `setTimeout`
without `window.` prefix when the env `browser: false`.

This repo is related to this https://github.com/facebookincubator/create-react-app/pull/1840

## How to test

```
yarn
yarn run lint
```

## Expected result

```
   5:1   error  'fetch' is not defined         no-undef
   9:20  error  'Worker' is not defined        no-undef
  12:1   error  'localStorage' is not defined  no-undef

✖ 3 problems (3 errors, 0 warnings)
```
