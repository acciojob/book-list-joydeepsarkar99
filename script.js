let titleValue = document.querySelector("#title")
let authorValue = document.querySelector("#author")
let isbnValue = document.querySelector("#isbn")
let btn = document.querySelector("#submit")
let outputTable = document.querySelector("#book-list")

btn.addEventListener("click",()=>{
	let newRow = outputTable.insertRow()
	let newData1 = newRow.insertCell(0)
	let newData2 = newRow.insertCell(1)
	let newData3 = newRow.insertCell(2)
	let newData4 = newRow.insertCell(3)
	let btn = document.createElement("button")
	btn.className = "btn btn-danger delete"
	btn.innerHTML = "X"

	newData1.innerHTML = `${titleValue.value}`
	newData2.innerHTML = `${authorValue.value}`
	newData3.innerHTML = `${isbnValue.value}`
	newData4.appendChild(btn)
})

outputTable.addEventListener("click",(e)=>{
	if(e.target.className = "delete"){
		let row = e.target.closest("tr")
		outputTable.removeChild(row)
	}
})
