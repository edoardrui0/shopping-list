// Your challenge is to create an application that allows users to
// add, check, uncheck, and remove items from a shopping list.

// To complete this challenge requires:
// *Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.
// *Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).
// *Linking to your application JavaScript file from the index.html page.
// *Using this and event delegation

// this is the function to add the item to the list
$(function (shoppinglist) {
  // created a second function that will later be called. the '${item}' is what the user inputs
  function addItemElement(item) {
    return `
    <li>
      <span class="shopping-item">${item}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
  }

  $("#js-shopping-list-form").submit((event) => {
    event.preventDefault();
    // every time the user submits the form, it will look into the '#shopping-list-entry' and retrieve its value.
    const inputValue = $("#shopping-list-entry").val();
    // then we call the previous function and make the '#shopping-list-entry' value the '${item}' from before.
    $(".shopping-list").append(addItemElement(inputValue));
  });
});

// this function toggles the check on and off
$(function (toggleCheck) {
  // my mentor explained the way this works is that we are using the "click" on ".shopping-item-toggle" 
  // (i know that might not make sense, but in my mind it makes total sense)
  $(".shopping-list").on("click", ".shopping-item-toggle", (event) => {
    let currentElement = $(event.currentTarget);
    // console.log(currentElement.closest("li").find(".shopping-item"));
    currentElement
      .closest("li")
      .find(".shopping-item")
      .toggleClass("shopping-item__checked");
  });
});

// this function deletes the item permanently
$(function (toggleDelete) {
  $(".shopping-list").on("click", ".shopping-item-delete", (event) => {
    let currentElementDelete = $(event.currentTarget);
    // console.log(currentElementDelete.closest("li").remove());
    currentElementDelete.closest("li").remove();
  });
});
