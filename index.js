let submitButton = document.querySelector("#submit-button")
submitButton.addEventListener("click", function(event){
    console.log(event)
    //prevent form submission, prevents going to the processing page, allows for more validation
    event.preventDefault()
})

let anotherButton = document.querySelector("#another-button")
anotherButton.addEventListener("click", function(event){
    console.log(event)
    //prevent form submission, prevents going to the processing page, allows for more validation
    alert("Item added to your cart")
    event.stopPropagation()
})

let googleLink = document.querySelector("#google-link")
googleLink.addEventListener("click", function(event){
    console.log(event)
    //prevent form submission, prevents going to the processing page, allows for more validation
    
    event.preventDefault()
})