function getValues() {
    let fizz = document.getElementById("fizzValue").value;
    let buzz = document.getElementById("buzzValue").value;
    fizz = parseInt(fizz);
    buzz = parseInt(buzz);

    if (Number.isInteger(fizz) && Number.isInteger(buzz)) {
        let fbArray = fizzBuzz(fizz, buzz);
        display(fbArray);
    }else{
        alert("You must enter integers only.");
    }
}

function fizzBuzz(fizz, buzz) {
    let returnArray = [];
    for(let i = 1; i <= 100; i++) {
        if (i % fizz == 0 && i % buzz == 0) {
            returnArray.push("FizzBuzz");
        }else if (i % fizz == 0){
            returnArray.push("Fizz");
        }else if (i % buzz == 0){
            returnArray.push("Buzz");
        }else {
            returnArray.push(i);
        }
    }
    return returnArray;
}

function display(fbArray) {
    let tableBody = document.getElementById("results");

    let rowTemplate = document.getElementById("fbTemplate");

    tableBody.innerHTML = "";

    for (let i = 0; i < fbArray.length; i += 5) {
        let tableRow = document.importNode(rowTemplate.content, true);
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = fbArray[i];
        rowCols[1].textContent = fbArray[i + 1];
        rowCols[2].textContent = fbArray[i + 2];
        rowCols[3].textContent = fbArray[i + 3];
        rowCols[4].textContent = fbArray[i + 4];
        tableBody.appendChild(tableRow);
    }
}