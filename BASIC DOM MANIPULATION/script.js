let body = document.querySelector("body")
let input = document.querySelector("input")
let button = document.querySelector("button")
let message = document.querySelector(".warning-message")
let div = document.querySelector(".container")

button.addEventListener("click", function () {
    let val = input.value;
    if (typeof (Number(val)) === "number" && Number(val) > 0) {
        div.innerHTML = "";
        input.value = ""
        message.innerHTML = "";
        for (let i = 0; i <= val; i++) {
            if (i % 2 === 0) {
                let box = document.createElement("div")
                box.textContent = i
                box.style.width = "120px";
                box.style.height = "90px"
                box.style.backgroundColor = "yellow"
                box.style.margin = "8px";
                box.style.fontSize= "40px"
                box.style.justifyContent= "center"
                box.style.alignItems= "center"
                box.style.borderRadius= "20px"
             
                div.appendChild(box)
            } /*else if(i%2 != 0) {
                let box = document.createElement("div")
                box.textContent = i;
                box.style.width = "120px";
                box.style.height = "90px";
                box.style.backgroundColor = "red"
                box.style.margin = "8px";
                box.style.fontSize= "40px"
                box.style.justifyContent= "center"
                box.style.alignItems= "center"
                box.style.borderRadius= "20px"
                div.appendChild(box)
            }*/

            else if(i %2 != 0){


                let box = document.createElement("div")
                box.textContent = i;
                box.style.width = "120px";
                box.style.height = "90px";
                box.style.backgroundColor = "red"
                box.style.margin = "8px";
                box.style.fontSize= "40px"
                box.style.justifyContent= "center"
                box.style.alignItems= "center"
                box.style.borderRadius= "20px"
                div.appendChild(box)
            }

            
        }
    } else if (val.length === 0) {
        div.innerHTML = ""
        input.value = "";
        message.innerHTML = "";
        message.textContent = "Bir Sayı Giriniz";
        message.style.color = "red"
    } else if (typeof (val) === "string") {
        div.innerHTML = "";
        input.value = "";
        message.innerHTML = "";
        message.textContent = "Sadece sayı giriniz";
        message.style.color = "red"
        message.style.height= "50px"
    }
})