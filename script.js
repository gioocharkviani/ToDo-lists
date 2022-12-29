const form1 = document.querySelector("#Form1");
const contentBox = document.querySelector(".contentBox");

let Elemets = [];




form1.addEventListener("submit" , (event) => {
    event.preventDefault();

    const addedalemets = event.target[0].value;

    const liCreator = document.createElement("li");
    liCreator.setAttribute("class" , "checkbox");

    const inputCreator = document.createElement("input");
    inputCreator.setAttribute("type" , "checkbox");

    
    let randomId = Math.floor(Math.random() * 1000000);
    inputCreator.setAttribute("id" , randomId);


    inputCreator.setAttribute("onclick" , "checkfuncion()");

    const labelCreator = document.createElement("label");
    labelCreator.setAttribute("for" , randomId);

    
    liCreator.appendChild(inputCreator);
    liCreator.appendChild(labelCreator);

    labelCreator.innerHTML = addedalemets;

    contentBox.appendChild(liCreator);

    Elemets.push(addedalemets);
    localStorage.setItem("Elements", JSON.stringify(Elemets));

    

    

}); 



// function checkfuncion() {
//   var checkBox = document.getElementById(randomId);
//   var text = document.getElementById("text");
//   if (checkBox.checked == true){
//     text.style.display = "block";
//   } else {
//      text.style.display = "none";
//   }
// }


// console.log(checkfuncion());
