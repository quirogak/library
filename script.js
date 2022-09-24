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

  

}


let myLibrary = []

const addBookToLibrary = function()  {

const item0 = bookName.value
const item1 = authorName.value
const item2 = numberOfPages.value

//check which radio has been checked
for (let i=0; i<readRadio.length; i++) {
  if (readRadio[i].checked) {
      read = readRadio[i];
  }
}
const item3 = read.id



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

 for(let i = 0; i < 4 ; i++){

   const newTableData = document.createElement("td");
   newRow.appendChild(newTableData)
 
   newTableData.textContent = currentBook["item" + i]
  }


}


const deleteBook = function(e){

 const dataId = e.target.dataset.id

 if(dataId == undefined) {
  errasedRow = document.querySelector('[data-id="0"]')
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







