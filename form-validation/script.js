// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element

const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const password = document.querySelector('#password');
const passwordConf = document.querySelector('#password-confirmation');
const terms = document.querySelector('#terms');
const errorList = document.querySelector('.errors-list');
const errContainer = document.querySelector('.errors');

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener("submit", (e) => {
  //    TODO: Create an array to store all error messages and clear any old error messages
  clearErrors();
  const errArr = [];
  //    TODO: Define the following validation checks with appropriate error messages
  //      1. Ensure the username is at least 6 characters long
    const nameLength = userName.value.length;
    if (nameLength < 6) { errArr.push('Username must be at least 6 characters.') }
  //      2. Ensure the password is at least 10 characters long
    const passwordLength = password.value.length;
    if (passwordLength < 10) { errArr.push('Password must be at least 10 characters.') }
  //      3. Ensure the password and confirmation password match
    if (password.value !== passwordConf.value) { errArr.push('Password must much confirmation password.') }
  //      4. Ensure the terms checkbox is checked
    if (!terms.checked) { errArr.push('Must check agree to terms to continue.') }
  //    TODO: If there are any errors then prevent the form from submitting and show the error messages
    if (errArr.length !== 0) {
        e.preventDefault();
        errContainer.classList.add('show')
        errArr.forEach( error => {
            showErrors(error)
        })
    }
})

// TODO: Define this function
function clearErrors() {
  // Loop through all the children of the error-list element and remove them
  while (errorList.hasChildNodes()) {
    errorList.removeChild(errorList.firstChild)
  }
  // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
  // I recommend using a while loop to accomplish this task
  // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
  // Also, make sure you remove the show class to the errors container
  errContainer.classList.remove('show')
}

// TODO: Define this function
function showErrors(errorMessages) {
  // Add each error to the error-list element
    const element = document.createElement('li');
    element.innerText = errorMessages;
    errorList.appendChild(element);
  // Make sure to use an li as the element for each error
  // Also, make sure you add the show class to the errors container
}
