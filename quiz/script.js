/*
  TODO: 2. Select all elements needed
    * The form element (has the id `quiz-form`)
    * The answer inputs (have the class `answer`)
    * BONUS: The questions (have the class `question-item`)
    * BONUS: The alert (has the id `alert`)
*/
const form = document.querySelector("#quiz-form")
const answerInputs = document.querySelectorAll(".answer")
const questions = document.querySelectorAll(".question-item")
const alertpop = document.querySelector("#alert")

// TODO: 3. Create a submit event listener for the form that does the following.
form.addEventListener("submit", (e) => {
    // 1. Prevent the default behaviour
    e.preventDefault();
    // 2. Get all selected answers (use the `checked` property on the input to determine if it is selected or not)
    // 6. BONUS: Make sure unanswered questions show up as incorrect. The easiest way to do this is to add the incorrect class and removing the correct class from all question items before checking the correct answers
    questions.forEach( div => {
        div.classList.add('incorrect');
        div.classList.remove('correct');
    })
    const answerInputsArray = Array.from(answerInputs);
    const selectedAnswers = answerInputsArray.filter(checkedAnswers)
    // 3. Loop through the selected answer to see if they are correct or not (Check the value of the answer to see if it is the string "true")
    console.log(selectedAnswers)
    selectedAnswers.forEach( a => {
        if (a.value === 'true') {
            // 4. For each correct answer add the class `correct` to the parent with the class `question-item` and remove the class `incorrect`.
            a.closest('.question-item').classList.add('correct');
            a.closest('.question-item').classList.remove('incorrect');
        } else {
            // 5. For each incorrect answer add the class `incorrect` to the parent with the class `question-item` and remove the class `correct`.
            a.closest('.question-item').classList.remove('correct');
            a.closest('.question-item').classList.add('incorrect');
        }
    })
    // 7. BONUS: If all answers are correct show the element with the id `alert` and hide it after one second (look into setTimeout) (use the class active to show the alert and remove the class to hide it)
    if (selectedAnswers.every(checkAllCorrect) && selectedAnswers.length === questions.length) {
        alertpop.classList.add('active');
        setTimeout(() => {
            alertpop.classList.remove('active')
        }, 2000)
    }
})

function checkedAnswers (input) {
    return input.checked
}
function checkAllCorrect (input) {
    return input.value === 'true'
}