# LogicProScripterRandomMIDI
A short JS code that "randomly" outputs notes in Logic Pro scripter

This program uses the pitch and velocity of midi inputs as the seed, to generate new "random" notes. To make the notes being generated each time are the same, the program just made some simple calculations to the pitch and velocity of the input, rather than generate random number. The program also restrict the note generated between C2 to B4 (exclude), for better sounding chords and prevent the number generated is out of the range of 0-127.
