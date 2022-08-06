let counter =localStorage.getItem(`counter`) ? Number(localStorage.getItem(`counter`)) : 0  //if there item in local storage get and use this item.(I used if loop but its short one)
let counterDOM = document.querySelector(`#counter`) // assigning a new variable for number text
let increaseDOM = document.querySelector(`#increase`) //assigning a new variable for increase button
let decreaseDOM = document.querySelector(`#decrease`) //assigning a new variable for decrase button
counterDOM.innerHTML = counter //We synced the counter variable to number text

increaseDOM.addEventListener("click", clickEvent);//we assign click events to buttons
decreaseDOM.addEventListener("click", clickEvent);//we assign click events to buttons

function clickEvent() {
    this.id == "increase" ? counter += 1 : counter -= 1  //if the button using the click event is increase, we have defined an operation as 1 increase, if not 1 decrease.
    localStorage.setItem(`counter`,counter)  //we placed the counter variable in local storage
    counterDOM.innerHTML = counter   //We synced the counter variable to number text
}