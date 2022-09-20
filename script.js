function Book(title,author,pages,read){

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function(){
        

        return title + "by" + author + "," + pages + "," + read
    }

}

let myLibrary = []

const addBookToLibrary = function()  {

const title = prompt("Please put book name")
const author = prompt("Please put author name")
const pages = prompt("How many pages has the book")
const read = prompt("did you read it already?")


let newBook = new Book(title,author,pages,read)

const addBook = myLibrary.push(newBook)

return addBook

}

console.log(addBookToLibrary())

console.log(myLibrary)

/*

const TheHobbit = new Book("The Hobbit "," J.R.R Tolkien"," 295 pages"," not read yet")

console.log(TheHobbit) */