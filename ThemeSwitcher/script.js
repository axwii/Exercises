// Get the element with the ID 'theme-select'
const themeSelectElement = document.getElementById("theme-select");

// Add an event listener for the 'change' event
themeSelectElement.addEventListener("change", function () {
  // Log the change event and set the 'data-theme' attribute on the body element to the selected value
  console.log("change", this.value);
  document.body.setAttribute("data-theme", this.value);
});
