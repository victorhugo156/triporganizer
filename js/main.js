/* 
STEP 1 - YOU'LL NEED TO HAVE ACCESS TO THE ELEMENT FORM;
STEP 2 - YOU'LL HAVE TO USE AN EVENT TO AVOID THE  SUBMIT BUTTON SENDING THE DATA TO SOMEWHERE;
STEP 3 - YOU'LL HAVE TO HAVE ACCESS TO THE ELEMENTS "NOME" AND "QUANTIDADE";
*/

const form = document.getElementById('novoItem');
const list = document.querySelector('[data-list]')
const itens = JSON.parse(localStorage.getItem("itens")) || []; 


itens.forEach((element) =>{
    createElement(element.name, element.quantity)
})

form.addEventListener("submit", (event) =>{
    event.preventDefault() //We use preventDefault to stop the action submit sending the data to somewhere.
    const name = event.target.elements["nome"]; //We are going to get the elements in form "Nome" and "Quantidade" accessing the  target and getting the id of the element, in this case nome.

    const quantity = event.target.elements["quantidade"];

    createElement(name.value, quantity.value) //Every time that we submit the form, it will call the function createElement in order to add a new "LI" into the "UL"

    name.value = "";
    quantity.value = "";

})

/* 
STEP 4 - USING A FUNCTION YOU'LL NEED TO CREATE A NEW ITEM ('LI');
STEP 5 - YOU'LL HAVE TO ADD CLASSES FOR THE NEW ELEMENT;
STEP 6 - YOU'LL HAVE TO CREATE A NEW TAG ('STRONG') INTO THE ITEM THAT HAS BEEN CREATED;
STEP 7 - YOU'LL HAVE TO ADD A NEW TAG ('STRONG') INTO THE ITEM ('LI');
STEP 8 - YOU WILL HAVE TO ADD THE 'LI' INTO THE UL CALLED 'LIST';

<ul class="lista" data-list>
    <li clas="item"><strong>7</strong>Camisa</li>
</ul>

*/

function createElement(name, quantity){

    const newItem = document.createElement('li')
    newItem.classList.add("item") //We use classList.add to add a class to the new item;

    const numberItem = document.createElement('strong')
    numberItem.innerHTML = quantity // we are creating a new tag strong and it will receive the data quantity

    newItem.appendChild(numberItem); // We are adding the tag that has been created('strong') into the new item that also has been created ('li');

    newItem.innerHTML += name;

    list.appendChild(newItem) // We are adding the 'li'that has been created into the ul list;

    const currentItem = {
        "name": name,
        "quantity": quantity,
    }

    itens.push(currentItem); //Here we are sending the Object into the Array Item

    localStorage.setItem("itens", JSON.stringify(itens));//Here we are saving the data into the Local Storage. 
    

}


/* ---------------SAVING DATA INTO THE BROWSER --------------

STEP 9 -To be able to save data into the browser, you have to use the LOCAL STORAGE.

localStorage.setItem("key", content)

STEP 10 - To be able to save new information into the Local Storage, you will have to covert the data in Object;

STEP 11 -  The Local Storage only save data in String Type.

STEP 12 - You need to transform the Object into String. To do it you will have to use JSON.stringify(Object Name);
 
STEP 13 - Afterwards, you will have to send this Object into an Array using the function "push()"

STEP 14 - Verify if there is any value in the Array using "LocalStorage.getItem()"

STEP 15 - Using "ForEach()" you will have to iterate through the Array to capture the values of the Array.

STEP 16 - As we have transformed the Array in String using "Stringify" to be able to send the data to the LocalStorage, now we have to transform it in JS using "JSON.parse()";
*/
