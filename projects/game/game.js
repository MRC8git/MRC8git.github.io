let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function house() {
    clear();
    print("You are in the House!" +
            "\n\n   You were in the living room playing with your friend, when the door blew open and your young puppy dashed out the door!");
    print("\nWhat do you want to do now? Here are your options:" +
        "\n\nTake (Shortcut)" +
        "\n\nGo to (NeighborHouse)");
    
    function processInput(input){
        if (input.toLowerCase() === "shortcut") {
            neighbordrivewayk();
        } else if (input.toLowerCase() === "neighborhouse") {
            neighborHouse();
        } else {
            stayHere();
            waitThenCall(house);
    }
    }
    waitForInput(processInput);

}

function neighborHouse() {
    clear();
    print("You are at the Neighbor's House!");
    print("\nWhat do you want to do next? Here are your options:" +
        "\n\n Ring the (doorbell)" +
        "\n\n Go to (House)" +
        "\n\n Take (Shortcut)");
    
    function processInput(input){
        if (input.toLowerCase() === "doorbell") {
            doorbell();
        } else if (input.toLowerCase() === "house") {
            house();
        } else if (input.toLowerCase() === "shortcut") {
            neighbordrivewayk();
        } else {
            stayHere();
            waitThenCall(neighborHouse);
        }
    }
    waitForInput(processInput);
}

function neighbordrivewayk() {
    clear();
    print("You are in the Neighbor kid's Driveway!");
    print("\nWhat do you want to do next? Here are your options:" +
        "\n\n Back to the (House)" +
        "\n\n Try the (NeighborHouse)");
    
    function processInput(input){
        if (input.toLowerCase() === "house") {
            house();
        } else if (input.toLowerCase() === "neighborhouse") {
            neighborHouse();
        } else {
            stayHere();
            waitThenCall(neighbordrivewayk);
        }
    }
    waitForInput(processInput);
}



function doorbell() {
    clear();
    print("You are at the Neighbor's House!");
    print("\nYou rang the doorbell, but no one answered");
    print("\nWhat do you want to do next? Here are your options:" +
        "\n\n Ring the (doorbell) again" +
        "\n\n Go to (House)" +
        "\n\n Take (Shortcut)");

     function processInput(input){
        if (input.toLowerCase() === "doorbell") {
            waitThenCall(doorbell);
        } else if (input.toLowerCase() === "house") {
            house();
        } else if (input.toLowerCase() === "shortcut") {
            neighbordrivewayk();
        } else {
            stayHere();
            waitThenCall(neighborHouse);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to Find The Floof! This is a text based game designed around a time my dog escaped." 
        + "\n\nStarting in the House, discover and explore locations by following the (prompts), to Find The Floof(your dog)! " 
        + "\n\nYou may stumble into the wrong places, don't worry--you can always go back! I even left some clues to help you find your way. Have fun, I wish you luck..."
        + "\n\nPress enter to begin");

    function processInput(input){
            house();
    }
    waitForInput(processInput);
}