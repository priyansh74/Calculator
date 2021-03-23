function clearAll()
{
    document.getElementById("input-in").value = "";
}
function inputNumber(a)
{
   let x = document.getElementById("input-in").value;
   let y =  x[x.length - 1];
   
   if(x.length == 1 && (y == '+' || y == '/' || y == '*'))
   {  
       clearAll();
       alert("Wrong Input, first input cannot be an operator.");
   }
   else if(y == '+' || y == '/' || y == '*' || y == '-') 
   {   let check = x[x.length - 2];
      // console.log(check);
      if(check == '+' || check == '-' || check == '*' || check == '/') 
      { x = x + a;
        let t = x.length;
        let temp = x.slice(0,t-2);
        
       // console.log(temp);
       temp = temp  + a;
        document.getElementById("input-in").value = temp;
      }
      else{
        x = x + a;
        document.getElementById("input-in").value = x; 
      }
    
   }
   else{
       x = x + a;
       document.getElementById("input-in").value = x;
   }
}
function answerValue()
{
  
  let str = document.getElementById("input-in").value;
  let operator = [];
  let operand = [];
  let flag = 0;
  let start=0;
  let end=0;
  //extracting operator and operand from the string input
  for(let i=0;i<str.length;i++)
  {
    if((flag == 0) && (str[i] >= '0' && str[i] <= '9'))
    {  
      let getNumber = str.slice(start+end,str.length);
      let temp = parseFloat(getNumber);
      
      operand.push(temp);
      flag = 1;
    }
    else if((flag == 1) && (str[i] == '+' || str[i] == '-' || str[i] == '/' || str[i] == '*'))
    { 
      operator.push(str[i]);
      flag = 0;
      start =i;
      end = 1;
    }
  }

  //console.log(operand);//[96,25,69,14]
  //console.log(operator);//[+,*,/]
  //finding the result from the arrays of operand and operator arrays
  let i=0;
  let j=0;
  let ans = 0;
  for(i=0;i<operand.length-1;i++)
  {
     let operatorType = operator[j++];
     switch (operatorType) {
      case "+":
        ans = operand[i] + operand[i+1];
        operand[i+1] = ans;
        break;
      case "-":
        ans = operand[i] - operand[i+1];
        operand[i+1] = ans;
        break;
      case "*":
        ans = operand[i] * operand[i+1];
        operand[i+1] = ans;
        break;
      case "/":
        if(operand[i+1] != 0){
        ans = operand[i] / operand[i+1];
        operand[i+1] = ans;}
        else
        alert("Division by zero !!");
        break;
      default : 
       ans = "0";
     }
   }
   document.getElementById("input-in").value = ans;
}
