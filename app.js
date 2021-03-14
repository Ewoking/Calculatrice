//Array of all the calculator's buttons
const buttons = document.querySelectorAll(".calc-button");

//On going calculus display
let calcDisplay = document.querySelector(".calc-display").firstChild;

//Result diplay (really)
let resultDisplay = document.querySelector(".result-display").firstChild;

//Init all needed variables
let result="0";
let savedResult = "";
calcDisplay.textContent="";
resultDisplay.textContent = result;

/*Function that evaluates the operation
        return the result or 'Syntax Error'
*/
let doTheMaths = str => {
        if(str === ""){
                return 0;
        }
        let res = 0;
        try{
                res = eval(str);
                //savedResult = res;
        }catch (e){
                res = 'Syntax Error';
        }finally{
                return res;
        }
}


/*Callback function of the EventListeners of the calculator's buttons */
let clickSymbol = e => {

        /*Check if there is a previous result to begin a new operation*/
        if(savedResult!="" && e.currentTarget.classList.contains("operator")){
                calcDisplay.textContent = savedResult;
                savedResult="";
        }
        /*Reset operation */
        if (e.currentTarget.dataset.symbol === "new"){
                console.log("reset !");
                calcDisplay.textContent ="";
                resultDisplay.textContent="0";
                savedResult="";

        /*Erase last entry */
        }else if (e.currentTarget.dataset.symbol === "erase"){
                console.log("erase");
                calcDisplay.textContent = calcDisplay.textContent.slice(0,-1);
                savedResult="";

        /*DO THE MATHS */
        }else if (e.currentTarget.dataset.symbol === "="){
                console.log("do the maths");
                result = doTheMaths(calcDisplay.textContent);
                resultDisplay.textContent = result;
                if(result != "Syntax Error"){
                        savedResult = result;
                }
        
        /*Add selected symbol*/
        }else{
                console.log("add symbol " + e.currentTarget.dataset.symbol);
                calcDisplay.textContent += e.currentTarget.dataset.symbol;
        }

}

/* Create the EventListeners for the calculator's buttons
*/
buttons.forEach(element => {
        element.addEventListener("click", clickSymbol);
});