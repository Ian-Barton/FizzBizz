function getValues() {
    document.getElementById("results").innerHTML = "";
    let start = parseInt(document.getElementById("startValue").value);
    let end = parseInt(document.getElementById("endValue").value);
    getLogic(start, end);
}
function getLogic(start, end) {
    let rowTemplate = "";
    let rows = 0;
    let bg_style = `colBG1`
    for (let i = start; i <= end; i++) {
        rows++;
        if(i % 3 == 0 && i % 5 == 0) {
            rowTemplate += `<div class="col-2 px-2 ${bg_style}">Fizz Bizz</div>`
        }
        else {
            if(i % 3 == 0) {
                rowTemplate += `<div class="col-2 px-2 ${bg_style}">Fizz</div>` 
            }
            else if(i % 5 == 0) {
                rowTemplate += `<div class="col-2 px-2 ${bg_style}">Bizz</div>`
            }
            else {
                rowTemplate += `<div class="col-2 px-2 ${bg_style}">${i}</div>`
            }
        }
        if (rows % 10 == 0) {
            bg_style = `colBG1`;
        }
        else if (rows % 5 == 0){
            bg_style = `colBG2`;
        }
    }
    document.getElementById("results").innerHTML += rowTemplate;
}
function display() {

}