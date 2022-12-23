//Create array of 5 prefixes, 5 infixes and 5 suffixes
const prefixes = ["In the beginning, ", "According to ancient mythology, ", "Throughout human history, ", "As the holy scriptures say, ", "As the wise sages teach, "];
const infixes = ["amidst the stunning beauty of creation, ", "in the midst of the chaos of the cosmos, ", "among the wonders of miracles, ", "in the face of the complexity of the enigma, ", "when we contemplate the mysteries of the human condition, "];
const suffixes = ["the divine is revealed.", "humanity struggles to understand.", "nature reveals her secrets.", "faith brings us closer to the truth.", "the world reveals its mysteries."];

//function inputs arrays for prefixes, infixes and suffixes, outputs concantenated message
const randomText = (array1, array2, array3) => {
    //create return for random number generation
    const randomNum = () => Math.floor(Math.random() * 5);
    //return a string from each array with random index
    return array1[randomNum()] + array2[randomNum()] + array3[randomNum()];
}

console.log(randomText(prefixes, infixes, suffixes));
