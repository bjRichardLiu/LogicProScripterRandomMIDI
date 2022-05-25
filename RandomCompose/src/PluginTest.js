function HandleMIDI(event) {

    var randomNote;

    var a = event.pitch % 11 + 1;
    var b = event.velocity % 13 + 2;

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
    event.velocity = 80;

    event.send();

}