//Handles the midi event

function HandleMIDI(event) {

    var randomNote;

    // Use the pitch and velocity of the note for generating the new note
    var a = event.pitch % 11 + 1;
    var b = event.velocity % 13 + 2;

    //Fake random to make sure the note generated each time is the same
    var c = (a + b) * ((a + 1) % (b + 3) + 1);

    while (c < 48 || c > 83) {
        if (c < 48) {
            c += a % b + 1;
        } else if (c > 83) {
            c += - (a % b + 1);
        }
    }

    randomNote = c;

    event.pitch = randomNote;
    
    //sets the velocity to 80
    event.velocity = 80;

    event.send();

}
