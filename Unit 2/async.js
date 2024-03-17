async function myAsync() {

    var runner1 = false;
    var runner2 = false;
    var loser = "";

    var runner1Go = new Promise(function(resolve) {
        setTimeout(() => {
            loser = runner1;
            resolve(loser = true);
        }, 3000);
    });

    var runner2Go = new Promise(function(resolve) {
        setTimeout(() => {
            loser = runner2;
            resolve(loser = true);
        }, 4000);
    });

    var run1 = await runner1Go;
    var run2 = await runner2Go;

    var myArray = [run1,run2,loser];
    return myArray;

};

myAsync().then(function(myArray) {
    console.log(myArray[2]);
});