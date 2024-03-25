document.addEventListener("DOMContentLoaded", function() {

    // Classes
    class Player{
        constructor(name, hp, attack, defense) {
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
        }
    }
    class Opponent{
        constructor(name, hp, attack, defense) {
            this.name = name;
            this.hp = hp;
            this.attack = attack;
            this.defense = defense;
        }
    }

    // Variables 
    var opponent;
    var player;
    const pButton = document.getElementById("btnNewPlayer");
    const punch = document.getElementById("btnMovePunch");
    const heal = document.getElementById("btnMoveHeal");

 //----- General Functions -----//

    const hp = () => {
        let hp = Math.floor(Math.random() * 11) + 90;
        return hp;
    }

    const attack = () => {
        let atk = Math.ceil(Math.random() * 20) + 10;
        return atk;
    }

    const defense = () => {
        let def = Math.ceil(Math.random() * 11) + 1;
        return def;
    }

 //----- Ability Functions -----//

    function punchDmg() {
       const dmg = Math.floor(Math.random()*11) + 21;

       return dmg;
    }

    function healAmount() {
        const healValue = Math.floor(Math.random() * 20) + 1;
        return healValue;
     }

    pButton.addEventListener("click", () => {

        //Player Details:
        const playerName = document.getElementById("pName").value;
        player = new Player(playerName, hp(), attack(), defense());

        document.getElementById("pStats").innerHTML= "Name: " + playerName + "<br>" +
                                                     "HP: " + player.hp +"<br>" +
                                                     "Attack: " + player.attack + "<br>" +
                                                     "Defense: " + player.defense;

        // Opponent Details:                                        
        opponent = new Opponent("Skele", hp(), attack(), defense());

        document.getElementById("oStats").innerHTML= "Name: Skele<br>" +
                                                     "HP: " + opponent.hp +"<br>" +
                                                     "Attack: " + opponent.attack + "<br>" +
                                                     "Defense: " + opponent.defense;              
    });

 //----- Ability click events -----//

 ///// Punch /////   
    punch.addEventListener("click", function() {
        const playerValue = punchDmg() - opponent.defense;
        const opponentValue = punchDmg() - player.defense;

        const opponentArray = ["punch", "Heal"];
        const rng = Math.floor(Math.random() * 2); 
        const opponentMove = opponentArray[rng];

        if (opponentMove === "punch") {
            console.log("You punched Skele for " + playerValue + " damage.");
            console.log("Skele punched you for " + opponentValue + " damage.");

            player.hp -= opponentValue;


            document.getElementById("pStats").innerHTML = "Name: " + player.name + "<br>" +
                                                          "HP: " + player.hp +"<br>" +
                                                          "Attack: " + player.attack + "<br>" +
                                                          "Defense: " + player.defense;

            opponent.hp -= playerValue;                                              

            document.getElementById("oStats").innerHTML= "Name: Skele<br>" +
                                                         "HP: " + opponent.hp +"<br>" +
                                                         "Attack: " + opponent.attack + "<br>" +
                                                         "Defense: " + opponent.defense;   
        }
        else {
            const healAmounts = healAmount();
            console.log("You punched Skele for " + playerValue + " damage.");
            console.log("Skele healed for " + healAmounts + "." );

            opponent.hp += healAmounts;

           document.getElementById("oStats").innerHTML= "Name: Skele<br>" +
                                                         "HP: " + opponent.hp +"<br>" +
                                                         "Attack: " + opponent.attack + "<br>" +
                                                         "Defense: " + opponent.defense;
        }
        if (player.hp <= 0) {
            console.log("Skele has slain " + player.name );
            this.disabled = true;
            alert("You have been defeated. Game over.");
        }
        else if (opponent.hp <= 0){
            console.log(player.name + " has slain Skele.");
            this.disabled = true;
            alert("Congratulations, you win!");

        }
        
            this.disabled = true;
            setTimeout(() => {
            this.disabled = false; 
            }, 500);
    });

///// Heal /////   
    heal.addEventListener("click", function() {

        let healAbility = healAmount();
        player.hp += healAbility;

        document.getElementById("pStats").innerHTML = "Name: " + player.name + "<br>" +
                                                      "HP: " + player.hp +"<br>" +
                                                      "Attack: " + player.attack + "<br>" +
                                                      "Defense: " + player.defense;

        this.disabled = true;
        setTimeout(() => {
            this.disabled = false; 
        }, 5000);
    });
    
});