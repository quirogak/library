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
     this.item3 ="No"
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

let item3 = readOrNo.id



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
  


addBook.addEventListener("click", addBookToLibrary);
addBook.addEventListener("click", displayBooks);



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
    myLibrary[dataId].changeRead()
  
  
    
  }

const changeButton = document.querySelector(".changeStatus")
changeButton.addEventListener("click",toggleRead)











