exports.flip = function () {
    var flip = Math.floor(Math.random() * 2) + 1;
    //Logic for coin flip
    if (flip === 1) {
        return 'HEADS'
    } else if (flip === 2) {
        return 'TAILS'
    }
}
