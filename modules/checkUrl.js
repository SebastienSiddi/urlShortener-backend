function checkUrl(){
    return /^(ftp|https?):\/\/+(www\.)?[a-z0-9\-\.]{3,}\.[a-z]{3}$/.test(checkUrl.arguments[0]);
  }

console.log(checkUrl('http://google.com'))

  module.exports = { checkUrl };