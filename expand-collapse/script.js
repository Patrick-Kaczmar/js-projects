// need to be able to click the expand button and changed the class to show, and also to click it again to collapse card.

document.addEventListener("click", (e) => {
  if (!e.target.matches("button")) return

  const parent = e.target.closest(".card")
  const cardBody = parent.querySelector(".card-body")

  cardBody.classList.toggle('show')
  e.target.innerText = e.target.innerText === 'Expand' ? 'Collapse' : 'Expand'
})
