

function Book(title,author,pages,read){

    this.item0 = title
    this.item1 = author
    this.item2 = pages
    this.item3 = read

}

//manually set books

const TheHobbit = new Book("The Hobbit "," J.R.R Tolkien"," 295 pages"," not read yet")
const TheHobbit2 = new Book("The Hobbit 2 "," J.R.R Tolkien 2 "," 2951 pages"," yes")
const TheHobbit3 = new Book("The Hobbit 3"," J.R.R Tolkien 3"," 2925 pages"," not read yet")



let myLibrary = [TheHobbit,TheHobbit2,TheHobbit3]

const addBookToLibrary = function()  {

const title = prompt("Please put book name")
const author = prompt("Please put author name")
const pages = prompt("How many pages has the book")
const read = prompt("did you read it already?")


let newBook = new Book(title,author,pages,read)

myLibrary.push(newBook)

return "book added successfully"

}


const displayBooks = function() {

    const table = document.querySelector("#books-table")
    let newRow = document.createElement("tr");
    let currentBook = myLibrary.at(-1)

    table.appendChild(newRow)

for(let i = 0; i <= 3 ; i++){

   const newTableData = document.createElement("td");
   newRow.appendChild(newTableData)
 
   newTableData.textContent = currentBook["item" + i]
  }

 


}




// newTableData.setAttribute("id",i)



