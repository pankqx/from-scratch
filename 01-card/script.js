const name = "Pank";
let likes = 0;

function greet() {
    console.log(`Hello, ${name}! Welcome to JavaScript.`);
}

function likeCard() {
    likes++;
    console.log(`Total likes: ${likes}`);
}

greet();
likeCard();
likeCard();


// Profile Card Interaction

const username = "Pank";
let likes = 0;

function displayWelcome() {
    console.log(`Welcome to ${username}'s profile!`);
}

function addLike() {
    likes++;
    console.log(`Likes: ${likes}`);
}

function resetLikes() {
    likes = 0;
    console.log("Likes reset!");
}

displayWelcome();
addLike();
addLike();
addLike();
