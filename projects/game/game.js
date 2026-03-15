let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
var kids = false;

//If you need, add any "helper" functions here


//Make one function for each location
function house() {
    clear();
    print("You are in the House!" +
            "\n\n   You were in the living room playing with your friend, when the door blew open and your young puppy dashed out the door! You hear some noise coming from past the 'shortcut', but you think you see a flash of fur down the street...");
    print("\nWhat do you want to do now?" +
        "\n\n> Run down the (street)" +
        "\n\n> Take (Shortcut)" +
        "\n\n> Go to (NeighborHouse)");
    
    function processInput(input){
        if (input.toLowerCase() === "street") {
            fourthOak();
        } else if (input.toLowerCase() === "shortcut") {
            kids = true;
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
    print("\nWhat do you want to do next?" +
        "\n\n> Ring the (doorbell)" +
        "\n\n> Go to (House)" +
        "\n\n> Take (Shortcut)" +
        "\n\n> Head down the (street)");
    
    function processInput(input){
        if (input.toLowerCase() === "doorbell") {
            doorbell();
        } else if (input.toLowerCase() === "house") {
            house();
        } else if (input.toLowerCase() === "street") {
            fourthOak();
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
    print("You are in the Neighbor kid's Driveway!" +
        "\n\n   Looks like your neighbor had some friends over, there's 8 kids in the driveway! Many are also your friends, who immeadiately decide to help!"
    );
    print("\nWhat do you want to do next?" +
        "\n\n> Run down the big (street)" +
        "\n\n> Back to the (House)" +
        "\n\n> Try the (NeighborHouse)");
    
    function processInput(input){
        if (input.toLowerCase() === "house") {
            house();
        } else if (input.toLowerCase() === "neighborhouse") {
            neighborHouse();
        } else if (input.toLowerCase() === "street") {
            fourthOak();
        } else {
            stayHere();
            waitThenCall(neighbordrivewayk);
        }
    }
    waitForInput(processInput);
}

function fourthOak() {
if (kids == true){
    clear();
    print("You are on the corner of Fourth St & Oak Rd!" +
        "\n\n Your friends tell you they think they saw her go down Fourth St");
    print("\nWhat do you want to do next?" +
        "\n\n> Back to neighbor kid's (driveway)" +
        "\n\n> Keep going to the next (corner) on Fourth St");
    
    function processInput(input){
        if (input.toLowerCase() === "driveway") {
            neighbordrivewayk();
        } else if (input.toLowerCase() === "corner") {
            fourthNettle();
        } else {
            stayHere();
            waitThenCall(fourthOak);
        }
    }
} else {
        clear();
    print("You are on the corner of Fourth St & Oak Rd!" +
            "\n\n You still hear that noise, but you feel like the flash of fur you saw was headed in the other direction...");
    print("\nWhat do you want to do next?" +
        "\n\n> Keep going to the next (corner)" +
        "\n\n> Head back to the (house)");
    
    function processInput(input){
        if (input.toLowerCase() === "corner") {
            fourthNettle();
        } else if (input.toLowerCase() === "house") {
            house();
        }else {
            stayHere();
            waitThenCall(fourthOak);
        }
    }
}
    waitForInput(processInput);
}

function fourthNettle() {
    if (kids == true) {
    clear();
    print("You are on the corner of Fourth St & Nettle Ln!" +
        "\n\n Many of your friends are right behind you. You see one friend, Derek, further down Nettle Rd.");
    print("\nWhat do you want to do next?" +
        "\n\n> Back to the corner of Fourth & (Oak)" +
        "\n\n> Talk to (Derek)" +
         "\n\n> Follow (Parker)");
    
    function processInput(input){
        if (input.toLowerCase() === "oak") {
            fourthOak();
        } else if (input.toLowerCase() === "derek") {
            followDerek1();
        } else if (input.toLowerCase() === "parker") {
            followParker1();
        } else {
            stayHere();
            waitThenCall(fourthNettle);
        }
    }
} else {
    clear();
    print("You are on the corner of Fourth St & Nettle Ln!" +
       "\n\n    You don't see anything, but you think she might have been headed to the big park(Dogwood Park) further down Fourth Street...");
    print("\nWhat do you want to do next?" +
        "\n\n> Back to the corner of Fourth & (Oak)" +
        "\n\n> (Continue) down Fourth St");
    
    function processInput(input){
        if (input.toLowerCase() === "oak") {
            fourthOak();
        } else if (input.toLowerCase() === "continue") {
            continueOn();
        } else {
            stayHere();
            waitThenCall(fourthNettle);
        }
    }
}
    waitForInput(processInput);
}

function doorbell() {
    clear();
    print("You are at the Neighbor's House!");
    print("\nYou rang the doorbell, but no one answered");
    print("\nWhat do you want to do next? Here are your options:" +
        "\n\n> Ring the (doorbell) again" +
        "\n\n> Go to (House)" +
        "\n\n> Take (Shortcut)" +
        "\n\n> Head down the (street)");

     function processInput(input){
        if (input.toLowerCase() === "doorbell") {
            waitThenCall(doorbell);
        } else if (input.toLowerCase() === "house") {
            house();
        } else if (input.toLowerCase() === "shortcut") {
            neighbordrivewayk();
        } else if (input.toLowerCase() === "street") {
            fourthOak();
        } else {
            stayHere();
            waitThenCall(neighborHouse);
        }
    }
    waitForInput(processInput);
}

function continueOn() {
    clear();
    print("You are on the corner of Fourth St & Quokka Ln!" +
       "\n\n    You still don't see any sign of her, but you remember that noise from earlier...");
    print("\nWhat do you want to do next?" +
        "\n\n> Back to the corner of Fourth & (Nettle)" +
        "\n\n> Look in (Dogwood) park");
    
    function processInput(input){
        if (input.toLowerCase() === "nettle") {
            fourthNettle();
        } else if (input.toLowerCase() === "Dogwood") {
            dogwoodPark();
        } else {
            stayHere();
            waitThenCall(continueOn);
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
        + "\n\nYou may take a few wrong turns, but don't worry--you can always go back! I even left some clues to help you find your way. Have fun, I wish you luck..."
        + "\n\nPress enter to begin");

    function processInput(input){
            house();
    }
    waitForInput(processInput);
}