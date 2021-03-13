const buttons = document.querySelectorAll(".calc-button");

let calcDisplay = document.querySelector(".calc-display").firstChild;

let resultDisplay = document.querySelector(".result-display").firstChild;

let result="0";
calcDisplay.textContent="";
resultDisplay.textContent = result;

let isCorrectMath = str => {
        let re1 = /[\-\+\*\/\.][\-\+\*\/\.]/g;

        if(re1.test(str)){
                console.log("aie!");
                for(let exp of str.match(re1)){
                        console.log(exp);
                        if(exp != "**"){
                                return false;
                        }
                }    
        }
        return true;
}

let doTheMaths = str => {
        if(str === ""){
                return 0;
        }
        return eval(str);
}

let clickSymbol = e => {
        console.log(e.currentTarget);
        if (e.currentTarget.dataset.symbol === "new"){
                console.log("reset !");
                calcDisplay.textContent ="";
                resultDisplay.textContent="0";

        }else if (e.currentTarget.dataset.symbol === "erase"){
                console.log("erase");
                calcDisplay.textContent = calcDisplay.textContent.slice(0,-1);

        }else if (e.currentTarget.dataset.symbol === "="){
                console.log("do the maths");

                if(isCorrectMath(calcDisplay.textContent)){
                        console.log("it's correct !");
                        result = doTheMaths(calcDisplay.textContent);
                        resultDisplay.textContent = result;
                }else{
                        resultDisplay.textContent = "Syntax Error";
                }

        }else{
                calcDisplay.textContent += e.currentTarget.dataset.symbol;
        }

}

buttons.forEach(element => {
        element.addEventListener("click", clickSymbol);
});