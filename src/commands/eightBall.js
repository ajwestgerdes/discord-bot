exports.eightBall = function (args) {
    var eball = Math.floor(Math.random() * 6) + 1;
    var equestion = ("Question: " + args.join(" "));
    var eanswer = '';

    
    //if logic for 8ball
        if (eball === 1) {
            eanswer = 'Luke says NO';
        } else if (eball === 2) {
            eanswer = 'No time Jetts cousins are here';
        } else if (eball === 3) {
            eanswer = 'Chungus gives thumbs up';
        } else if (eball === 4) {
            eanswer = 'Nah';
        } else if (eball === 5) {
            eanswer = 'Yesir';
        } else if (eball === 6) {
            eanswer = ' Same';
        }
        
        return (equestion + '\n8ball says: ' + eanswer);
}










