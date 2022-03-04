module.exports = {
  getScriptTags: function(htmlString) {
    let tags = getString(htmlString).match(/<script\b[^>]*>[\s\S]*?<\/script\b[^>]*>/g)
    return tags != null ? tags : []
  },
  getScriptTag: function(htmlString, index = 0) {
    let tags = this.getScriptTags(getString(htmlString))
    return typeof tags[index] != 'undefined' ? tags[index] : ''
  },
  getScriptAttributes: function(htmlString) {
    let attrCombination = getString(htmlString).replace(/['"]+|<script |><\/script>|<\/script>/g, '').split(' ')
    const opts = {}
    for(let i = 0; i <attrCombination.length; i++) {
      if(attrCombination[i].indexOf('=') > 0) {
        let attr = attrCombination[i].split('=')
        opts[attr[0]] = attr[1]
      }
    }
    return opts
  }
}

function getString(val) {
  if(typeof val !== 'string') {
    throw new Error(`Found ${typeof val}: String Type required`)
    val = ''
  }
  return val
}