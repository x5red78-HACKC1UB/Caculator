let input;
let input2;
input=document.getElementById("input1");
input2=document.getElementById("input2");
enter=document.getElementById("enter");
operation=document.getElementById("operation");
result=document.getElementById("result");
operationssign=operation.textContent;
operation.addEventListener("click",() =>{
if (operationssign==="+") {
    operation.textContent = "-"
    operationssign = operation.textContent;
    console.log("operationssign:", operationssign, "operation:", operation);
    console.log(integer1);
    console.log(integer2);

} else {
    if (operationssign==="-") {
        operation.textContent = "*"
        operationssign = operation.textContent;
        console.log("operationssign:", operationssign, "operation:", operation);
 console.log(integer1);
    console.log(integer2);
    } else{
        if(operationssign==="*"){
operation.textContent = "/"
operationssign = operation.textContent;
console.log("operationssign:", operationssign, "operation:", operation);
 console.log(integer1);
    console.log(integer2);
        }else{
            if(operationssign==="/"){
operation.textContent = "^"
operationssign = operation.textContent;
console.log("operationssign:", operationssign, "operation:", operation);
 console.log(integer1);
    console.log(integer2);
        }else{
            if(operationssign==="^"){
operation.textContent="+"
operationssign = operation.textContent;
console.log("operationssign:", operationssign, "operation:", operation);
 console.log(integer1);
    console.log(integer2);
            } 
        }
        }
          
    }
}
});
enter.addEventListener("click",() =>{
    let integer1=Number(input.value);
let integer2=Number(input2.value);

    if (operation.textContent==="+") {
        result.textContent=integer1+integer2;
    } else {
        if (operation.textContent==="-") {
            result.textContent=integer1-integer2;
        } else {
            if (operation.textContent==="*") {
                result.textContent=integer1*integer2;
            } else {
                if (operation.textContent==="/") {
                    result.textContent=integer1/integer2;
                }else{
                    if (operation.textContent==="^") {
                    result.textContent=integer1**integer2;
                }
                    
            }
        }
    }

    }
  if (isNaN(result.textContent)) {
        window.alert("USE NUMBERS :(");
        result.textContent= "Error";
    }
});
