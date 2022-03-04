# Get Script Tag

> Get script tags and attributes from String.
[![npm](https://img.shields.io/badge/npm-1.0.0-blue)](https://www.npmjs.com/package/get-script-tag)
[![license](https://img.shields.io/badge/license-MIT-green)](https://github.com/codeeshop-oc/get-script-tag/blob/main/LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/codeeshop-oc/get-script-tag/issues?&q=is%3Aissue+is%3Aopen)

## Installation

via npm

```
$ npm install get-script-tag
```

## API
`get-script-tag` get all the a `script` tags and its `attributes`.

`require('get-script-tag')` returns a Object of the following interface:  `{getScriptTags: Function, getScriptTag: Function, getScriptAttributes: Function}`

### htmlString
Any HTML String that you have to fetch `script` tags from.

## Example Usage

```javascript
const GetStringTag = require('get-script-tag')
let htmlStr = `<p>You have the Script Tags <script type=\"text/javascript\" async=\"async\" src=\"//web.webformscr.com/apps/fc3/build/default-handler.js\" sp-form-id=\"YOUR_ID\"></script></p>`

// Array of All Script Tags
const scripts = GetStringTag.getScriptTags(htmlStr)
console.log(scripts)

// Individual Script Tag with Index
const script = GetStringTag.getScriptTag(htmlStr, 0)
console.log(script, 'Index Script')

// Fetching Script Tag Attributes from All Script Tags
for (var i = scripts.length - 1; i >= 0; i--) {  
  console.log(GetStringTag.getScriptAttributes(scripts[i]))
}
```

## License

MIT
