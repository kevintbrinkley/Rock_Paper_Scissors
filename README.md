Backend coding for a Javascript Rock, Paper, Scissors game!  

v0.1-- 
-The game runs entirely in the console at this point.  Initialize the game by typing "game()" into your browser's console
-computerPlay() returns the computer's selection with a random number generater
-playerPrompt() has the user input their selection each round
-playRound() calls on computerPlay() and playerPrompt() to source new choices each round   and then compares the options to return win, lose, or draw
-game() loops 5 times, calling on playRound() each time to produce a new round outcome     and updates the scores for each round.  After 5 rounds, it outputs the overall winner    with score comparison, and requests the user to refresh their page

v0.2--
-Created front end for the game. Automatically starts when option of Rock Paper or Scissors is selected
-Left side of screen displays scores, updates of what each player selected, and the outcome of the round
-After 5 points are earned by either player, the option buttons are disabled and a reset game button pops up
-The middle of the screen has buttons for each option the player can choose.  The buttons are fa hands of each option.
-The right side of the screen logs the winner of each game, with player wins in blue and computer wins in red
-Almost all of the back end coding had to be reworked. I restarted the project with the front end, and then created new back end coding using what I learned from version 1.  

This project was built with knowledge and basic instruction; From The Odin Project's [curriculum] (https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors) 