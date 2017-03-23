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
  1:1   error  'setTimeout' is not defined  no-undef
  2:3   error  'console' is not defined     no-undef
  5:1   error  'fetch' is not defined       no-undef
  9:20  error  'Worker' is not defined      no-undef

✖ 4 problems (4 errors, 0 warnings)
```
