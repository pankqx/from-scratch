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