const form1 = document.querySelector("#Form1");
const contentBox = document.querySelector(".contentBox");


form1.addEventListener("submit" , (event) => {
    event.preventDefault();

    const addedalemets = event.target[0].value;

    const liCreator = document.createElement("li");
    liCreator.setAttribute("class" , "checkbox");

    const inputCreator = document.createElement("input");
    inputCreator.setAttribute("type" , "checkbox");
    //  inputCreator.setAttribute("id" , "check1");

    const randomId = Math.random() * 1000000;
    inputCreator.setAttribute("id" , randomId);
    // inputCreator.setAttribute("onclick" , "change()");



    const labelCreator = document.createElement("label");
    labelCreator.setAttribute("for" , randomId);

    
    liCreator.appendChild(inputCreator);
    liCreator.appendChild(labelCreator);

    labelCreator.innerHTML = addedalemets;

    contentBox.appendChild(liCreator);


}); 

