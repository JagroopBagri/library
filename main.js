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
    if(myLibrary.length === 0){
        bookNumber = 0;
    }
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
// Display Library Books on page and add edit/delete buttons along with event listeners for each
function displayLibrary(array){
    array.forEach(function(element){
        // dont display the same book again
        if(document.getElementById(element.id) !== null){
            return;
        }
        // creating and appending elements to display new book
        let containerDiv = document.createElement('div');
        containerDiv.classList.add('book', 'b' + element.id);
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
        statusDiv.addEventListener('click', function(){
            statusSwitch(statusDiv, element);
            updateBooksAndPagesRead(myLibrary);
        })
        let editDeleteDiv = document.createElement('div');
        editDeleteDiv.classList.add('edit-delete');
        containerDiv.appendChild(editDeleteDiv);
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.id = element.id;
        deleteButton.type = 'button';
        deleteButton.textContent = 'Delete';
        editDeleteDiv.appendChild(deleteButton);
        deleteButton.addEventListener('click',function(e){
            e.stopPropagation();
            deleteBook(deleteButton);
            updateBooksAndPagesRead(myLibrary);
        });
        updateBooksAndPagesRead(myLibrary);
    });
};

// Delete Books function
function deleteBook(e){
    myLibrary.forEach(function(book){
        if(e.id == book.id){
            myLibrary.splice(myLibrary.indexOf(book), 1);
            let targetDiv = document.querySelector('.b' + e.id);
            targetDiv.parentElement.removeChild(targetDiv);
        }
    })
}

// Switch book status from read to unread and vice versa function
function statusSwitch(e, x){
    if (e.textContent === 'Read'){
        x.status = 'Unread';
        e.textContent = 'Unread';
        e.classList.add('unread');
        e.classList.remove('read');
    }
    else if(e.textContent === 'Unread'){
        x.status = 'Read';
        e.textContent = 'Read';
        e.classList.add('read');
        e.classList.remove('unread');
    }
}
// Updates books and pages read statistic
function updateBooksAndPagesRead(array){
    booksRead = 0;
    pagesRead = 0;
    array.forEach(function(element){
            if(element.status === 'Read'){
                booksRead ++;
                pagesRead += parseInt(element.pages, 10);
            }
    });
    booksReadDiv.textContent = booksRead;
    pagesReadDiv.textContent = pagesRead;
;}

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
let booksReadDiv = document.querySelector('.booksRead');
let pagesReadDiv = document.querySelector('.pagesRead');
let booksRead = 0;
let pagesRead = 0;
// Event listener for when addNewBook button is clicked

addNewBookButton.addEventListener('click', function(e){
    e.stopPropagation();
    titleValue = document.querySelector('#title').value;
    authorValue = document.querySelector('#author').value;
    pagesValue = document.querySelector('#pages').value;
    yesValue = document.querySelector('#yes').checked;
    noValue = document.querySelector('#no').checked;
    addBook();
    displayLibrary(myLibrary);
});
