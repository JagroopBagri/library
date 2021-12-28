// Library Array
let myLibrary = [];

// Book constructor
function Book(title, author, pages, status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function (){
        let readstatus = (status === 'unread') ? 'not read yet' : 'read already';
        return (title + ' by ' + author + ', ' + pages + ' pages' + ', ' + readstatus);
    }
};
// Add books to array function
function addBook(){
    if(titleValue !== '' && authorValue !== '' && pagesValue !== '' && (yesValue === true || noValue === true)){
        let newDiv = document.createElement('div');
        newDiv.classList.add('books');
        bookList.appendChild(newDiv);
    }
    else{
        alert('Error: All fields must be completed.');
    }
    
};

// Global Variables

let addNewBookButton = document.querySelector('.addNewBookButton');
let titleValue;
let authorValue;
let pagesValue; 
let yesValue; 
let noValue; 
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