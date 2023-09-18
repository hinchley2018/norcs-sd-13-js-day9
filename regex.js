// use something like https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/@@replace
// or this https://regexr.com/

//return a list of matching
function testOnlyAlphaNum(str){
    return str.match(/^[a-zA-Z0-9]+$/)
}

//use test to find true or false if matches
let emailRegex = /[a-zA-Z0-9]+\.[a-zA-Z0-9]+@gmail\.com/
//returns only true or false
emailRegex.test("first.last@gmail.com")

//replace spaces with nothing
//str.replace(regexPattern, whatToReplacewith)
let sentence = "my dog runs fast".replace(/\s/g, "")
let sentence2 = "my dog runs fast".replace(/\s/g, ",")