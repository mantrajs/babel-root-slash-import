# Babel Root Import
Babel plugin to change the behaviour of `import` to root based paths.<br>

## Example
```javascript
// Usually
import SomeExample from '../../../some/example.js';

// With Babel-Root-Importer
import SomeExample from '/some/example.js';
```

## Install
```
npm install babel-root-slash-import --save-dev
```

## Use
Add a `.babelrc` file and write:
```javascript
{
  "plugins": [
    "babel-root-slash-import"
  ]
}
```
or pass the plugin with the plugins-flag on CLI
```
babel-node myfile.js --plugins babel-root-slash-import
```

## Extras
If you want a custom root because for example all your files are in the src/js folder you can define this in your `.babelrc` file
```javascript
{
  "plugins": [
    ["babel-root-slash-import", {
      "rootPathSuffix": "src/js"
    }]
  ]
}
```

## Don't let ESLint be confused
If you use [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) to validate imports it may be necessary to instruct ESLint to parse root imports to avoid breaking the rule `import/no-unresolved`. You can use [eslint-import-resolver-babel-root-slash-import](https://github.com/FredericRuaudel/eslint-import-resolver-babel-root-slash-import)

```json
    "import/resolver": {
      "babel-root-slash-import": {}
    }
```

## Motivate
If you like this project just give it a star :) I like stars.
