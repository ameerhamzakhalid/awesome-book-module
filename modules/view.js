export const displayBooks = document.querySelector("#display_list");
export const displayForm = document.querySelector("#display_form");
export const contact = document.querySelector("#contact");
export const displayContact = document.querySelector("#display_contact");
export const containerbooks = document.querySelector(".container-books");
export const container = document.querySelector(".container");
export const bookText = document.getElementById("book-text");
export const date = document.querySelector(".date");

export const addBookList = document.querySelector("#form");

contact.innerHTML = `<h2>
        Contact information
        </h2>

        <ul>
          <li>Our shiineali101@gmail.com</li>
          <li>Our Phone number:00252633141196</li>
          <li>Our address:150 street Hargeisa, Somalia</li>
        </ul>`;

export const showOnlyContact = () => {
  contact.style.display = "block";
  container.style.display = "none";
  bookText.style.display = "none";
  // date.style.display = "block";
};

export const showBooksOnly = () => {
  container.style.display = "none";
  bookText.style.display = "block";
  contact.style.display = "none";
  // date.style.display = "none";
};
export const showOnlyForm = () => {
  container.style.display = "block";
  bookText.style.display = "none";
  contact.style.display = "none";
  // date.style.display = "none";
};

export const init = () => {
  if (location.hash === "/#book-list") {
    showBooksOnly();
  } else if (location.hash === "#form") {
    showOnlyForm();
  } else if (location.hash === "#contact") {
    showOnlyContact();
  } else {
    showOnlyForm();
  }
};

window.document.addEventListener("DOMContentLoaded", init());
displayContact.addEventListener("click", showOnlyContact);
displayBooks.addEventListener("click", showBooksOnly);
displayForm.addEventListener("click", showOnlyForm);
