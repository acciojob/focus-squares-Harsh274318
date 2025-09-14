//your JS code here. If required.
let box1 = document.querySelector("#square1")
let box2 = document.querySelector("#square2")
let box3 = document.querySelector("#square3")

box1.addEventListener("mouseover", change)
function change(){
	box2.style.backgroundColor = "#6F4E37"
	box3.style.backgroundColor = "#6F4E37"
}
box1.addEventListener("mouseout", change1)
function change1(){
	box2.style.backgroundColor = "#E6E6FA"
	box3.style.backgroundColor = "#E6E6FA"
}

box2.addEventListener("mouseover", over)
function over(){
	box1.style.backgroundColor = "#6F4E37"
	box3.style.backgroundColor = "#6F4E37"
}
box2.addEventListener("mouseout", over1)
function over1(){
	box1.style.backgroundColor = "#E6E6FA"
	box3.style.backgroundColor = "#E6E6FA"
}

box3.addEventListener("mouseover", brown)
function brown(){
	box2.style.backgroundColor = "#6F4E37"
	box1.style.backgroundColor = "#6F4E37"
}
box3.addEventListener("mouseout", brown1)
function brown1(){
	box2.style.backgroundColor = "#E6E6FA"
	box1.style.backgroundColor = "#E6E6FA"
}