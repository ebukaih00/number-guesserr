
let randomnumber = Math.floor(Math.random() * 101)
let feedbackEl = document.getElementById("feedback")


function submit() {
    let inputEl = document.getElementById("input-el").value;
    
    let value = Number(inputEl)
    value.trim

   
     if (inputEl.trim() === "" ){
       return  feedbackEl.textContent = "no value entered"
    }


    if (value === randomnumber) {
        feedbackEl.textContent = "correct"
    }
    else if (value < randomnumber) {
        feedbackEl.textContent = "go higher"
    }

    else if (value > randomnumber) {
        feedbackEl.textContent = "go lower"
    }

}


