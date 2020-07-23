// PALINDROME EST UN MOT QUI LORSQUE L'ON INVERSE CHAQUE LETTRE RESTE LE MEME MOT
// EXEMPLE : aba, kayak

function isPalindrome(word) {
    if(word.split('').reverse().join('') == word){
        return true +' '+ word + ' est un palindrome';
    } else
        return false +' '+ word + ' n\est pas un palindrome';
}

// split permet de décomposer le chaine de caractère sout forme s'un tableau
// reverse inverse toute les données du tableau 
// join modifie la séparation des valeurs du tableau 

const dataTest = ['aba', 'aka', 'refjlsfk', 'kayak', 'Kayak', 'fooaoaoaf']
const test = (testVal, testFn) => {
    console.log(testFn(testVal))
};

dataTest.map(testVal => test(testVal, isPalindrome))