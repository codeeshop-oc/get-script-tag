# get-script-tag

Get script tags and attributes from String.

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
