function equivalentCheck(){ //Thies allow the last value to remain in view until other buttons are pressed,
    if (parseInt(document.getElementById('equivalent').value))
    {
        document.getElementById('equivalent').value = 0;
        document.getElementById('result').value = 0;
    }
}

function input(x){
    equivalentCheck();

    let y = parseFloat(document.getElementById('result').value);

    if (document.getElementById('decimalVar').value == 0)
    {
        x += y * 10; // Multiply the text input by 10 and add the value of x.
        document.getElementById('result').value = x; // Return x to the text output
    }
    else{
        let decimalCount = parseInt(document.getElementById('decimalVar').value); 

        if (decimalCount == 1){
            x *= 1/10; //We are using math to place the decimal point.
            y += x;
            document.getElementById('result').value += y;

        }else{
            document.getElementById('result').value += x;

        }
        decimalCount ++;
        document.getElementById('decimalVar').value = decimalCount;
    }

    // if(document.getElementById('result').value == 0)//Checks the 0 in the screen for the first time
    // {
    //     document.getElementById('result').value = x;

    // }else{
    //     document.getElementById('result').value += x;

    // }

}

function equals(){
    operator(parseInt(document.getElementById('operation').value));
    document.getElementById('result').value = document.getElementById('operand').value;
    document.getElementById('operand').value = "";
    document.getElementById('equivalent').value = 1;
}

function allClear(){
    document.getElementById('result').value = 0;
    document.getElementById('operation').value = 0;
    document.getElementById('operand').value = "";
    document.getElementById('equivalent').value = 0;


}

function plusMinus(){
    let x = parseFloat(document.getElementById('result').value);

    x*= -1;
    document.getElementById('result').value = x;
}

function square(){
    let x = parseFloat(document.getElementById('result').value);

    x*= x;
    document.getElementById('result').value = x;
}
function percent(){
    let x = parseFloat(document.getElementById('result').value);

    x= x/100;
    document.getElementById('result').value = x;
}

function decimalPoint(){
    if (document.getElementById('decimalVar').value == 0) // This prevents multiple decimal
    {
        document.getElementById('decimalVar').value = 1;
    }
    if(parseInt(document.getElementById('operation').value)){ // If this is an empty string it will return false
        document.getElementById('result').value = 0;
    }
}


function operandCheck(){
    if(document.getElementById('operand').value == ""){
         document.getElementById('operand').value = document.getElementById('result').value;
    
         document.getElementById('result').value = 0; 
         document.getElementById('equivalent').value = 1;
         //This is temporary
    
    } else{
        operatorCheck();
    }
}

function operatorCheck(){
    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('result').value);

    switch (parseInt(document.getElementById('operation').value )){
        case 1 : //addition
            a += b;
            break;

        case 2 ://substraction
            a -= b;
            break;

        case 3 : //Multiply
            a *= b;
            break;    

         case 4 ://Division
            a /= b;
            break;

    }
    document.getElementById('operand').value = a;
    document.getElementById('result').value = a;
    document.getElementById('equivalent').value = 1;



}

function operator(x){
    switch (x){
        case 1:
            document.getElementById('operation').value = 1; //Addition
            break;
        case 2:
            document.getElementById('operation').value = 2; //Substraction
            break;
        case 3:
            document.getElementById('operation').value = 3; //Multiply
            break;
        case 4:
            document.getElementById('operation').value = 4; //Division
            break;
        default:

    }
    operandCheck();
}