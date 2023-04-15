let myLibrary = [];

function Book(book, author, pages, read) {
  this.book = book;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // constructor function
}

document.getElementById("newBook").onclick = function addBookToLibrary() {
    var book = prompt("Title of the Book")
    var author = prompt("Enter the author")
    var pages = prompt("Enter the number of pages")
    
    myLibrary.push(newBook);

    // Add newBook object to the DOM
    let newButton = document.createElement("button");
    let container = document.getElementById("main");
    let newDiv = document.createElement("div");
    let newDiv1 = document.createElement("div");
    let para = document.createElement("p");
    let para1 = document.createElement("p");
    let para2 = document.createElement("p");

    newButton.innerHTML = "X";
    newDiv.appendChild(newButton);

    para.innerHTML = `Title: ${book}`;
    newDiv.appendChild(para)
    para1.innerHTML = `Author: ${author}`;
    newDiv.appendChild(para1)
    para2.innerHTML = `Pages: ${pages}`;
    newDiv.appendChild(para2)

    let textContent = document.createElement("span");
    newDiv.appendChild(textContent);

    newDiv.id = "display";
    container.appendChild(newDiv);
    ;

    // Adding toggle button object to the DOM
    let toggleButton = document.createElement

    // Removing newBook object to the DOM
    newButton.addEventListener("click",  removeFunction);

    function removeFunction() {
        newDiv.remove();
    }

    //Adding checkbox for read staus
    let newBox = document.createElement("INPUT")
    let check = document.createElement("p")
    check.innerHTML = "Read:"
    newBox.setAttribute("type", "checkbox");
    newBox.id = "myCheck"
    newDiv1.id = "newcheckBox"
    newDiv1.appendChild(check);
    newDiv1.appendChild(newBox);
    newDiv.appendChild(newDiv1);


    function newFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "true";
    } else {
      text.style.display = "none";
    }
  }
}
