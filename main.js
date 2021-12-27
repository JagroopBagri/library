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
    
};
