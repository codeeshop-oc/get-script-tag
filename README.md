# Get Script Tag

> Get script tags and attributes from String.

[![Latest Stable Version](https://img.shields.io/npm/v/get-script-tag.svg)](https://www.npmjs.com/package/get-script-tag) [![Total Downloads](https://img.shields.io/npm/dt/get-script-tag.svg)](https://npm-stat.com/charts.html?package=get-script-tag)
[![license](https://img.shields.io/badge/license-MIT-green)](https://github.com/codeeshop-oc/get-script-tag/blob/main/LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg)](https://github.com/codeeshop-oc/get-script-tag/issues?&q=is%3Aissue+is%3Aopen)
![Downloads Monthly](https://img.shields.io/npm/dm/get-script-tag.svg)

## Installation

via npm

```bash
npm install get-script-tag
```

via yarn

```bash
yarn add get-script-tag
```

via pnpm

```bash
pnpm add get-script-tag
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
