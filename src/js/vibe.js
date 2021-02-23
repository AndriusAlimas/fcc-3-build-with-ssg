const vibes = [
    " ... and you are awesome!",
    " ... have a wonderfull day!",
    " ... and you've got this!",
    " ... and so is this puppy! 🐶"
];

// choose a random good vibe
let vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// display a good vibe
document.querySelector(".vibe").append(vibe);