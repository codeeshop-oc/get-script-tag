const GetStringTag = require('../')

let htmlStr = `<p>You have the Script Tags <script type=\"text/javascript\" async=\"async\" src=\"//web.webformscr.com/apps/fc3/build/default-handler.js\" sp-form-id=\"YOUR_ID\"></script></p>`

// Array of All Script Tags
const scripts = GetStringTag.getScriptTags(htmlStr)
console.log(scripts, 'All Scripts')

// Individual Script Tag using Index
const script = GetStringTag.getScriptTag(htmlStr, 0)
console.log(script, 'Index Script')

for (var i = scripts.length - 1; i >= 0; i--) {  
  // Fetching Script Tag Attributes from All Script Tags
  console.log(GetStringTag.getScriptAttributes(scripts[i]))
}

// Error
htmlStr = ['xss']
const error_scripts = GetStringTag.getScriptTags(htmlStr)
