    // step 3:
const myArray = [];
    myArray[0] = 0;
    myArray[1] = 10;
    myArray[2] = 100;
    myArray[3] = 1000;

    // step 4:
const funkySingle = function(myArray)
    {
        return myArray[0] + 1;
    }

console.log(funkySingle(myArray));

    // step 5:
function funkyDouble(funkySingle, myArray)
    {
        if (myArray[0] % 2 !== 0) 
        {
            return funkySingle(myArray[0]);
        } 
        else 
        {
            return "The number is odd";
        }
    }

console.log(funkyDouble(funkySingle, myArray));
