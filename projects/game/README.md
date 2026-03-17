# Find The Floof

## Setting

This game takes place in a mirror neighborhood of my own. I kept the rough layout of my neighborhood, but changed street names around and made a few things closer together/farther apart.

## Map

```mermaid
graph TD;
    bus(((Bus)))-->Commons;
    Library-->Commons;
    Box-->Cafeteria;
    Cafeteria-->Commons;
    Commons-->Outside;
    Outside-->Portable;
    Portable-->rm511;
    Portable-->Bathroom;
```

The player starts in the House, and is then provided with options about what to do/where to go. The end goal is the cul de sac past Dogwood Park, but there are plenty of decoys along the way--so the play must work to find the right path!

## Story

When the user gets to rm511, they learn that the teacher is asleep.
They must take the teacher's coffee mug to the library, get it 
filled, and then bring it back to the teacher.

The game starts 15 minutes before the morning class bell, and each
move costs 1 minute. So this journey must be completed in 15 moves.
Some moves (like reading a book in the library) cost extra time.

## Global Variables

The most important variables are
`kids` and `haveFloof`, which are both
booleans that are vital to  the
story. Depending on `kids`,
some locations will display different situations and prompts. For example, if you go to the corner of Fourth St & Nettle Ln without the having gone through the shortcut, it won't provide an important interaction. Instead, it will lead you on a bit of a goose chase until you reach Dogwood Park, then it will really hint to go back and take the shortcut/check out that area. If you go to the corner of Fourth St & Nettle Ln, having gone through the shortcut, it will provide you with an opportunity to have an important interaction. This interaction leads you in the right direction to win the game. 

I also have numeric variables called `day` and `minute` which keep track of 
time. `minute` starts at 0 and counts up
with each move.

I have a little HUD map, and use a bunch of 
boolean variables to control which
rooms the player has discovered. A map is only displayed after the user
visits it.