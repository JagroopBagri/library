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
            // if yes is clicked then read status is true and vice versa
            (yesValue === true) ? readStatus = 'Read' : readStatus = 'Unread';
            let book = new Book(titleValue,authorValue,pagesValue,readStatus,bookNumber);
            myLibrary.push(book);
            bookNumber++;
        }
    }
    else{
       return alert('Error: All fields must be completed.');
    }
};
// Display Library on page
function displayLibrary(array){
    array.forEach(function(element){
        // dont display the same book again
        if(document.getElementById(element.id) !== null){
            return;
        }
        // creating and appending elements to display new book
        let containerDiv = document.createElement('div');
        containerDiv.classList.add('books');
        containerDiv.id = element.id;
        bookList.appendChild(containerDiv);
        let titleDiv = document.createElement('div');
        titleDiv.textContent = element.title;
        containerDiv.appendChild(titleDiv);
        let authorDiv = document.createElement('div');
        authorDiv.textContent = element.author;
        containerDiv.appendChild(authorDiv);
        let pagesDiv = document.createElement('div');
        pagesDiv.textContent = element.pages;
        containerDiv.appendChild(pagesDiv);
        let statusDiv = document.createElement('div');
        (yesValue === true) ? statusDiv.classList.add('read') : statusDiv.classList.add('unread'); // add unique classes to read and unread text
        statusDiv.textContent = element.status;
        containerDiv.appendChild(statusDiv);
        let editDeleteDiv = document.createElement('div');
        editDeleteDiv.classList.add('edit-delete');
        containerDiv.appendChild(editDeleteDiv);
        let editButton = document.createElement('button');
        editButton.classList.add('edit');
        editButton.type = 'button';
        editButton.textContent = 'Edit';
        editDeleteDiv.appendChild(editButton);
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.type = 'button';
        deleteButton.textContent = 'Delete';
        editDeleteDiv.appendChild(deleteButton);
        deleteButtons = document.querySelectorAll('.delete'); // individual delete buttons
        deleteButtons.forEach(function(deletebtn){
            deletebtn.addEventListener('click', function(){
                console.log('hello');
            });
        });
    });
};
// Global Variables
let bookNumber = 0; // keep track of book number
let addNewBookButton = document.querySelector('.addNewBookButton'); // add new book button
let editButtons; // edit buttons that are created when books are created
let deleteButtons; // delete buttons that are created when books are created
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
    addBook();
    displayLibrary(myLibrary);
});

// Event listener for when delete buttons are clicked

if(deleteButtons !== undefined){
    deleteButtons.forEach(function(deletebtn){
        deletebtn.addEventListener('click', function(){
            myLibrary.forEach(function(book){
                console.log(book.id);
                console.log(deleteButtons.indexOf(deletebtn));
                    if(book.id === deleteButtons.indexOf(deletebtn)){
                            return console.log('it works');
                    };
            })
        });
    });
};