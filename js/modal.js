function displayModal(){
    document.getElementById("container").style.display = "none";
    document.getElementById("modal").style.display = "block";
}

function closeModal(){
    let inputs = document.getElementsByClassName("form-input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
    document.getElementById("modal").style.display = "none";
    document.getElementById("container").style.display = "initial";
}

function sendForm(){
    document.getElementsByClassName("form-title")[0].innerHTML = "I'll write you as soon as possible";
    let inputs = document.getElementsByClassName("after-hide");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.display = "none";
    }
    setTimeout(() => {
        closeModal();
        document.getElementsByClassName("form-title")[0].innerHTML = "Let's talk !";
        let inputs = document.getElementsByClassName("after-hide");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].style.display = "initial";
        }
    }, 3000);
}