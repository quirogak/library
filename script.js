

const addBook = document.querySelector("#new-book")
const bookName = document.querySelector("#title")
const authorName = document.querySelector("#author")
const numberOfPages = document.querySelector("#pages")
const readRadio = document.getElementsByName("read_book");


function Book(title,author,pages,read){

    this.item0 = title
    this.item1 = author
    this.item2 = pages
    this.item3 = read



    this.changeRead = function(){
      if(this.item3 == "Yes"){
        this.item3 = "No"
      }
      else
     this.item3 = "Yes"

    }

}


let myLibrary = []

const addBookToLibrary = function()  {

const item0 = bookName.value
const item1 = authorName.value
const item2 = numberOfPages.value

//check which radio has been checked


for (let i=0; i<readRadio.length; i++) {

  if (readRadio[i].checked) {
      readOrNo = readRadio[i];
  }
}

const item3 = readOrNo.id



let newBook = new Book(item0,item1,item2,item3)

myLibrary.push(newBook)

}


const displayBooks = function() {

    const table = document.querySelector("#books-table")
    const newRow = document.createElement("tr");

  

    //delete row
    const deleteRow = document.createElement("th")
    newRow.appendChild(deleteRow)
    newRow.setAttribute("data-id",myLibrary.length-1)

    const deleteButton = document.createElement("button")
    deleteButton.className="deleteButton"
    deleteButton.textContent="X"
    deleteButton.setAttribute("data-id",myLibrary.length-1)
    deleteRow.appendChild(deleteButton)
    deleteButton.addEventListener("click", deleteBook)
    


    //select last book added
    let currentBook = myLibrary.at(-1)

    table.appendChild(newRow)


 for(let i = 0; i < 3 ; i++){

   const newTableData = document.createElement("td");
   newRow.appendChild(newTableData)
 
   newTableData.textContent = currentBook["item" + i]

  }
  
   //change read status
   const changeButton = document.createElement("button")
   const newTableData = document.createElement("td")
   newRow.appendChild(newTableData)
   newTableData.appendChild(changeButton)
   changeButton.className="changeStatus"
   changeButton.setAttribute("data-id",myLibrary.length-1)
   changeButton.textContent=currentBook["item3"]
   changeButton.addEventListener("click",toggleRead)

   const allInputs = document.querySelectorAll("input")
   const allRadios = document.querySelectorAll("input[type=radio]")
   

   for(i = 0; i < allInputs.length; i++){
    allInputs[i].value = ""
   }

   for(i = 0; i < allRadios.length; i++){
    allRadios[i].checked = false
   }


}


const deleteBook = function(e){

 const dataId = e.target.dataset.id

 if(dataId == undefined) {
  errasedRow = document.querySelector('[data-id="first"]')
  errasedRow.remove()
 }

 else {

  const errasedRow = document.querySelector('[data-id='+'"'+dataId+'"'+']')
  errasedRow.remove()
 

 }
 
 
}
  



const delButton = document.querySelector(".deleteButton")
delButton.addEventListener("click", deleteBook)


const toggleRead = function(e){

  if (this.textContent == "Yes"){
    this.textContent = "No"
  }
  else{
    this.textContent = "Yes"
  }
  
    const dataId = e.target.dataset.id
  
 
    if (myLibrary[dataId] == undefined) {
      return 
    }
    else{
      myLibrary[dataId].changeRead()
    }
    
  
  
    
  }

const changeButton = document.querySelector(".changeStatus")
changeButton.addEventListener("click",toggleRead)


const addFormValidation = (() => {

  const inputs = document.querySelectorAll("input[type=text]")
  const radio = document.querySelector("input[type=radio]")


  const submitInputCheck = () => {
 
    if (inputs[0].validity.valueMissing || inputs[1].validity.valueMissing || inputs[2].validity.valueMissing ||radio.validity.valueMissing){

      addBook.removeEventListener("click", addBookToLibrary);
      addBook.removeEventListener("click", displayBooks);

    }
    else {
      addBook.addEventListener("click", addBookToLibrary);
      addBook.addEventListener("click", displayBooks);
      
       
    }

  }

  const checkInput = (e) => {

    const currentElement = document.getElementById(e.srcElement.id)


    if(currentElement.validity.valueMissing){
      currentElement.setCustomValidity("Missing value.")
      currentElement.reportValidity();
      addBook.removeEventListener("click", addBookToLibrary);
      addBook.removeEventListener("click", displayBooks);
      
      
    } else {
      currentElement.setCustomValidity("");
      addBook.addEventListener("click", addBookToLibrary);
      addBook.addEventListener("click", displayBooks);
      
      
    }

  }

  for(i = 0; i < inputs.length; i++){
    inputs[i].addEventListener("input",(e) => {checkInput(e)})
  }

  return {submitInputCheck}
  

})();


addBook.addEventListener("click",() => {addFormValidation.submitInputCheck()})
readRadio[0].addEventListener("click",() => {addFormValidation.submitInputCheck()})
readRadio[1].addEventListener("click",() => {addFormValidation.submitInputCheck()})










