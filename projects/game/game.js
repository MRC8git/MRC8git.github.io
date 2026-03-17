let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
var kids = false;
var haveFloof = false;

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
        "\n\n Many of your friends are right behind you. You see one friend, Derek, further down Nettle Rd." +
        "\nYou briefly see your other friend, Parker zoom past on a bike. He was headed toward Dogwood Park");
    print("\nWhat do you want to do next?" +
        "\n\n> Back to the corner of Fourth & (Oak)" +
        "\n\n> Talk to (Derek)" +
        "\n\n> See where (Parker) is going");
    
    function processInput(input){
        if (input.toLowerCase() === "oak") {
            fourthOak();
        } else if (input.toLowerCase() === "derek") {
            derekInfo();
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

function derekInfo() {
    clear();
    print("You are on the corner of Fourth St & Nettle Ln!" +
        "\n\n Many of your friends are right behind you. You see one friend, Derek, further down Nettle Rd." +
        "\n\n   You call out to Derek, asking about your dog. Derek yells back, saying he saw which way she ran and telling you to follow him...");
    print("\nWhat do you want to do next?" +
        "\n\n> Back to the corner of Fourth & (Oak)" +
        "\n\n> Follow (Derek)");
    
    function processInput(input){
        if (input.toLowerCase() === "oak") {
            fourthOak();
        } else if (input.toLowerCase() === "derek") {
            followDerek();
        } else {
            stayHere();
            waitThenCall(derekInfo);
        }
    }
      waitForInput(processInput);
}

function followDerek() {
    clear();
    print("You are on Eigth St, between Nettle Ln & Quokka Rd!" +
        "\n\n   You followed Derek around the corner, and you finally see The Floof! She sits when you tell her to, but then you get too close and she bolts off in the direction of Dogwood Park...");
    print("\nWhat do you want to do next?" +
        "\n\n> (Chase) The Floof" +
        "\n\n> Run (back) to the corner Fourth & Nettle");
    
    function processInput(input){
        if (input.toLowerCase() === "chase") {
            floofChase1();
        } else if (input.toLowerCase() === "back") {
            fourthNettle();
        } else {
            stayHere();
            waitThenCall(followDerek);
        }
    }
      waitForInput(processInput);
}

function floofChase1() {
    clear();
    print("You are at the entrance to Dogwood Park!" +
        "\n\n   You watch as the floof runs into the park and disappears down one of the paths...");
    print("\nWhat do you want to do next?" +
        "\n\n> (Chase) The Floof" +
        "\n\n> Run (back) to the corner Fourth & Nettle");
    
    function processInput(input){
        if (input.toLowerCase() === "chase") {
            floofChase2();
        } else if (input.toLowerCase() === "back") {
            followDerek();
        } else {
            stayHere();
            waitThenCall(floofChase1);
        }
    }
      waitForInput(processInput);
}

function floofChase2() {
    clear();
    print("You are inside of Dogwood Park" +
        "\n\n   You see the floof run down a gravel path and out through another entrance of the park that you've never gone through before." +
        " In the chaos of the chase, you forgot to put on shoes so gravel path=ouch. There is another path that will lead to the same place, and it doesn't have gravel---but it does have a weird smell...");
    print("\nWhat do you want to do next?" +
        "\n\n> Screw it (gravel) path" +
        "\n\n> Smelly, schmelly, I ain't taking no gravel pat, (dirt) is the way to go!" +
        "\n\n> Head (back) to the entrance of the park");
    
    function processInput(input){
        if (input.toLowerCase() === "gravel") {
            ouchyOw();
        } else if (input.toLowerCase() === "dirt") {
            stinkySchmelly();
        } else if (input.toLowerCase() === "back") {
            floofChase1();
        } else {
            stayHere();
            waitThenCall(floofChase2);
        }
    }
      waitForInput(processInput);
}

function stinkySchmelly() {
    clear();
    print("You are on the schmelly path" +
        "\n\n   Yeah, no. Looks like a squirrel died and is rotting here...");
    print("\nWhat do you want to do next?" +
        "\n\n> Seems like (gravel), is the way to go");
    
    function processInput(input){
        if (input.toLowerCase() === "gravel") {
            floofChase2();
        } else {
            stayHere();
            waitThenCall(stinkySchmelly);
        }
    }
      waitForInput(processInput);
}

function ouchyOw() {
    haveFloof= true;
    clear();
    print("You are in a cul de sac that you've never seen before" +
        "\n\n   You see the floof run dowwn the center of the street and into someone's backyard, past an old man mowing his lawn. You follow her, running a few laps around some houses. She suprises you by jumping over a four foot stone retaining wall. Eventually your coming back around, so that you are facing Dogwood Park, and Penny runs into the street this time. Some neighbor woman comes up on the sidewalk and starts distracting penny---thank goodness it allows you to get behind her and grab her!!!(a slow-moving car stopped 1 foot away form her after seeing you run into the street.");
    print("\nYou Won! Congrats! What do you want to do now?" +
        "\n\n> Head back to the (beginning) and explore" +
        "\n\n> That was fun, I'm (done)");
    
    function processInput(input){
        if (input.toLowerCase() === "beginning") {
            house();
        }  else if (input.toLowerCase() === "done") {
            waitThenCall(gameOver);
        } else {
            stayHere();
            waitThenCall(ouchyOw);
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
    print("You are on the corner of Fourth St & Quokka Rd!" +
       "\n\n    You still don't see any sign of her, but you remember that noise from earlier and also wonder if you should find some help...");
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

function followParker1() {
    clear();
    print("You are on the corner of Fourth St & Quokka Rd!" +
       "\n\n    You  don't see any sign of your dog and it seems like Parker was going somewhere else");
    print("\nWhat do you want to do next?" +
        "\n\n> Back to the corner of Fourth & (Nettle)");
    
    function processInput(input){
        if (input.toLowerCase() === "nettle") {
            fourthNettle();
        } else {
            stayHere();
            waitThenCall(followParker1);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    clear();
    print("Welcome to Find The Floof! This is a text based game designed around a time my dog escaped." 
        + "\n\nStarting in the House, discover and explore locations by following the (prompts), to Find The Floof(your dog)! " 
        + "\n\nYou may take a few wrong turns, but don't worry--you can always go back! I even left some clues to help you find your way. Have fun, I wish you luck..."
        + "\n\nPress enter to begin");

    function processInput(input){
            house();
    }
    waitForInput(processInput);
}

function gameOver(){
    clear();
    print("Thank you for playing, I hope you had fun!" +
          "\n\n You may (go back) to the beginning if you wish, but you have to refresh the page if you want to play again");

    function processInput(input){
          if (input.toLowerCase() === "go back") {
            start();
        } else {
            stayHere();
            waitThenCall(gameOver);
        }
    }
    waitForInput(processInput);
}