    // step 3:
const myArray = [];
    myArray[0] = 1;
    myArray[1] = 2;
    myArray[2] = 3;
    myArray[3] = 4;
    myArray[4] = 5;
    myArray[5] = 6;

    // step 4:
const funkySingle = function(input)
    {
        input += 1;
        console.log(input);  
    }

    // step 5:
function funkyDouble(expression,number)
    {
        if (number % 2 == 0) 
        {   
            console.log(number);
        } 
        else
        {
            console.log("The number is odd");
        }   
    }

    // step 6:
for (let i in myArray) 
    {
        let counter = myArray[i];
        let funkyCall = funkySingle(counter)
        const final = funkyDouble(funkyCall, counter); 
    }



