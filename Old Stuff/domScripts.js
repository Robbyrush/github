document.addEventListener("DOMContentLoaded",() => {

    // assigns variables to the elements for easier use
    const mainDiv = document.querySelector("#main_container") 
    const body = document.querySelector("body");
    
    // event handler for the click event
    document.querySelector("#main_button").addEventListener("click", funkyColors);

    // creates nodes and attaches them to the page
    for (let i = 0; i < 5; i++) {
        const p = document.createElement("p");
        const t = document.createTextNode("Hello World!");
        p.appendChild(t);
        mainDiv.appendChild(p);
    }

    // function for the click event
    function funkyColors() {
        if (mainDiv.style.backgroundColor == "") {
            mainDiv.style.backgroundColor = "cornsilk";
            body.style.backgroundColor = "BurlyWood";
        }
        else {
            mainDiv.style.backgroundColor = "";
            body.style.backgroundColor = "";
        }
                
    }
});

