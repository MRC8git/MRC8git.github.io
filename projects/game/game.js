let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function house() {
    clear();
    print("\nYou are in the House!");
    print("\nWhere do you want to go next? These are your choices:" +
        "\n\nneighborDriveway");
    
    function processInput(input){
        if (input.toLowerCase() === "neighbordriveway") {
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

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to Find the Floof! Press any key to begin");

    function processInput(input){
            house();
    }
    waitForInput(processInput);
}