import {
  displayBooks,
  displayForm,
  contact,
  displayContact,
  showBooksOnly,
  showOnlyContact,
  showOnlyForm,
} from "./modules/view.js";

import { DateTime } from "./modules/luxon.js";

// const displayDate = document.querySelector(".date");

// const displayDateFunction = () => {

// };

const form = document.querySelector("#form");
let Author = document.querySelector(".Author");
let Title = document.querySelector(".Title");
let bookText = document.getElementById("book-text");

class Book {
  constructor() {}

  static validateInputData = (title, author) => {
    if (title.length < 1 || author.length < 1) {
      return false;
    }
    return true;
  };

  save = (title, author) => {
    let books = [];
    if (localStorage.getItem("book") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("book"));
    }
    let book = { text1: title, text2: author };
    books.push(book);
    localStorage.setItem("book", JSON.stringify(books));
  };

  static addBook = (title, author) => {
    const isValidInput = this.validateInputData(title, author);
    if (!isValidInput) console.log("Enter Valid Input");
    else {
      let book = new Book(title, author);
      book.save(title, author);
      this.renderBooks();
    }
  };

  static removeBook = (title, author) => {
    let books = [];

    if (localStorage.getItem("book") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("book"));
    }
    books.forEach((book, index) => {
      if (book.text1 === title && book.text2 === author) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("book", JSON.stringify(books));
    this.renderBooks();
  };

  static renderBooks = () => {
    bookText.innerHTML = "";
    let books = [];
    if (localStorage.getItem("book") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("book"));

      books.forEach((book) => {
        bookText.innerHTML += `
            <div class="wrapper">
                <p>${book.text1}</p>
                <p>${book.text2}</p>
                <button onclick="deleteBook('${book.text1}', '${book.text2}')">Remove</button>
                </div>
            `;
      });
    }
  };
}

document.addEventListener("DOMContentLoaded", () => {
  Book.renderBooks();
  document.querySelector(
    ".date"
  ).textContent = `${DateTime.local().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS
  )}`;
});

// document.addEventListener("DOMContentLoaded", );

form.addEventListener("submit", (e) => {
  e.preventDefault();
  Book.addBook(Title.value, Author.value);
  Title.value = "";
  Author.value = "";
});

window.deleteBook = (text1, text2) => {
  Book.removeBook(text1, text2);
};
