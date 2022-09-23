const addBook = document.querySelector("#new-book")



function Book(title,author,pages,read){

    this.item0 = title
    this.item1 = author
    this.item2 = pages
    this.item3 = read

}

//manually set book

const TheHobbit = new Book("The Hobbit "," J.R.R Tolkien"," 295 pages"," not read yet")



let myLibrary = [TheHobbit]


const addBookToLibrary = function()  {

const item0 = prompt("Please put book name")
const item1 = prompt("Please put author name")
const item2 = prompt("How many pages has the book")
const item3 = prompt("did you read it already?")


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
    deleteRow.appendChild(deleteButton)
    deleteButton.addEventListener("click",deleteBook)


    //select last book added
    let currentBook = myLibrary.at(-1)

    table.appendChild(newRow)

 for(let i = 0; i < 4 ; i++){

   const newTableData = document.createElement("td");
   newRow.appendChild(newTableData)
 
   newTableData.textContent = currentBook["item" + i]
  }


}

const deleteBook = function(){

 let currentPosition = myLibrary.length-1
 const errasedRow = document.querySelector('[data-id='+'"'+currentPosition+'"'+']')
 
 errasedRow.remove()

}
  


addBook.addEventListener("click", addBookToLibrary);
addBook.addEventListener("click", displayBooks);


const delButton = document.querySelector(".deleteButton")
delButton.addEventListener("click",deleteBook)






