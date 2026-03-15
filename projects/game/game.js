let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function house() {
    clear();
    print("\nYou are in the House!");
    print("\nWhere do you want to go next? These are your choices:" +
        "\n\nShortcut" +
        "\n\nNeighbor(" );
    
    function processInput(input){
        if (input.toLowerCase() === "shortcut") {
            neighbordriveway();
        } else {
            stayHere();
            waitThenCall(house);
        }
    }
    waitForInput(processInput);
}

function neighbordriveway() {
    clear();
    print("\nYou are in the Neighbor's Driveway!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\nHouse");
    
    function processInput(input){
        if (input.toLowerCase() === "house") {
            house();
        } else {
            stayHere();
            waitThenCall(neighbordriveway);
        }
    }
    waitForInput(processInput);
}

function neighbordriveway() {
    clear();
    print("\nYou are in the Neighbor's Driveway!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\nHouse");
    
    function processInput(input){
        if (input.toLowerCase() === "house") {
            house();
        } else {
            stayHere();
            waitThenCall(neighbordriveway);
        }
    }
    waitForInput(processInput);
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to Find the Floof! This is a text based game designed around a time my dog escaped." 
        + "\n\nStarting in the House, discover and explore locations by following the prompts(only input what isn't in parentheses so... not this), to Find the Floof(my dog)! " 
        + "\n\nYou may stumble into the wrong places, don't worry--you can always go back! I even left some clues to help you find your way. Have fun, I wish you luck..."
        + "\n\nPress any key to begin");

    function processInput(input){
            house();
    }
    waitForInput(processInput);
}