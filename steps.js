// Selecting all needed HTML elements and assigning a variable for that.
const progress = document.querySelector('.progress')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const repair_steps = document.querySelector('.step-count')

// Selecting all elements and creating an iterable list.
const steps = document.querySelectorAll('.step')
const card = document.querySelectorAll('.content')

let currentActive = 1
let idx = 0

// Assigning a function for click event on next button.
next.addEventListener('click', () => {
  currentActive++ // When clicked it will increase the value of currentActive variable by 1
  idx++

  // This will se the maximum limit of the variable to the length of the list.
  if(currentActive > steps.length) {
      currentActive = steps.length
  }

  // Runs these functions which are define below
  update()
  changeImage()
})

// This will decrease the values by one unlike increase for the next button.
prev.addEventListener('click', () => {
  currentActive--
  idx--

  if(currentActive < 1) {
      currentActive = 1
  }

  update()
  changeImage()
})

// This function will change the idx value.
// And this will be used to multiply with the width for translate.
function changeImage() {
  if(idx > card.length - 1) {
      idx = 0
  } else if(idx < 0) {
      idx = card.length - 1
  }
  // The idx value is multiply by the width to translate the images for step-by-step view.
  repair_steps.style.transform = `translateX(${-idx * 500}px)`
}

// This function will update the progress bar status
function update() {
  // This will loop through the steps list items and will check the idx number and add class name "active" for that if the value is less than the active number.
  steps.forEach((step, idx) => {
      if(idx < currentActive) {
          step.classList.add('active')
      } else {
          step.classList.remove('active')
      }
  })

  // This will check the number of active classes and store in variable.
  const actives = document.querySelectorAll('.active')

  // This will style to fill the progress bar.
  progress.style.width = (actives.length - 1) / (steps.length - 1) * 100 + '%'

  // This will be used to disable the next or prev buttons for last and first item.
  if(currentActive === 1) {
      prev.disabled = true
  } else if(currentActive === steps.length) {
      next.disabled = true
  } else {
      prev.disabled = false
      next.disabled = false
  }
}
