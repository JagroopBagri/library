// Library Array
let myLibrary = [];

// Book constructor
function Book(title, author, pages, status, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = id;
};
// Add books to array function
function addBook(){
    if(titleValue !== '' && authorValue !== '' && pagesValue !== '' && (yesValue === true || noValue === true)){
        if(Number.isInteger(Number(pagesValue)) === false || pagesValue <= 0 ){ // Can't add new book if # of pages is not specified
            return alert('Error: Please input a valid number');
        }
        else{
            readStatus = yesValue; // if yes is clicked then read status is true and vice versa
            let book = new Book(titleValue,authorValue,pagesValue,readStatus,bookNumber);
            myLibrary.push(book);
            let containerDiv = document.createElement('div');
            containerDiv.classList.add('books');
            containerDiv.id = bookNumber;
            bookList.appendChild(containerDiv);
            let titleDiv = document.createElement('div');
            titleDiv.textContent = titleValue;
            containerDiv.appendChild(titleDiv);
            let authorDiv = document.createElement('div');
            authorDiv.textContent = authorValue;
            containerDiv.appendChild(authorDiv);
            let pagesDiv = document.createElement('div');
            pagesDiv.textContent = pagesValue;
            containerDiv.appendChild(pagesDiv);
            let statusDiv = document.createElement('div');
            statusDiv.textContent = readStatus;
            containerDiv.appendChild(statusDiv);
            let editDiv = document.createElement('div');
            editDiv.textContent = bookNumber;
            containerDiv.appendChild(editDiv);
            bookNumber++;
        }
    }
    else{
       return alert('Error: All fields must be completed.');
    }
};
// Global Variables
let bookNumber = 0; // keep track of book number
let addNewBookButton = document.querySelector('.addNewBookButton'); // add new book button
let titleValue; // title of new book being added
let authorValue; // author of new book being added
let pagesValue; // pages of new book being added
let yesValue; // yes button boolean
let noValue; // no button boolean
let readStatus; // matches boolean value of yes button
let bookList = document.querySelector('.bookList'); 
// Event listener for when addNewBook button is clicked

addNewBookButton.addEventListener('click', function(){
    titleValue = document.querySelector('#title').value;
    authorValue = document.querySelector('#author').value;
    pagesValue = document.querySelector('#pages').value;
    yesValue = document.querySelector('#yes').checked;
    noValue = document.querySelector('#no').checked;
    return addBook();
});
