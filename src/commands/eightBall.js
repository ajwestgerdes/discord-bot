exports.eightBall = function (args) {
    var eball = Math.floor(Math.random() * 7) + 1;
    var equestion = ("Question: " + args.join(" "));
    var eanswer = '';

    
    //if logic for 8ball
        if (eball === 1) {
            eanswer = 'Luke says NO';
        } else if (eball === 2) {
            eanswer = 'Maybe, ask when Jetts cousins leave';
        } else if (eball === 3) {
            eanswer = 'Chungus gives thumbs up';
        } else if (eball === 4) {
            eanswer = 'Nah';
        } else if (eball === 5) {
            eanswer = 'Yesir';
        } else if (eball === 6) {
            eanswer = 'Same';
        }else if (eball === 7) {
            eanswer = 'Big yes';
        }
        
        return (equestion + '\n8ball says: ' + eanswer);
}










