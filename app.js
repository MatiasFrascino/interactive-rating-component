//Changing the styles in the numbers once the person selects it
let btnNumbers = document.querySelectorAll(".box__child__circle");
let data = 0;
for(let btn of btnNumbers){
    btn.addEventListener("click", ()=>{
        for(let onBtn of btnNumbers){
            if(onBtn.className = "box__child__circle--active"){
                onBtn.className = "box__child__circle"
            }
        }
        data = parseInt(btn.dataset.id);

        btn.className = "box__child__circle--active"
    })
    
}
//Changing to "Thank you page" once its submited 
let submit = document.querySelector(".box__child__btn")
let body = document.querySelector("body")
console.log(body)
submit.addEventListener("click", ()=>{
    body.innerHTML = `    
    <div class="box__child__thk">
    <img class="box__child__img__thk" src="images/illustration-thank-you.svg" alt="">
    <button class="btn__thk">You selected ${data} out of 5</button>
    <h1>Thank you!</h1>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
</div>

`
})