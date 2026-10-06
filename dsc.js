const addbtn = document.getElementsByClassName("add-btn");
const MyCart = document.getElementById("MyCart");
let count = 0;

for(let i=0; i<addbtn.length; i++){
    addbtn[i].addEventListener("click",function(){
    count++;
    MyCart.innerHTML = `MyCart - ${count}`;
})
}

