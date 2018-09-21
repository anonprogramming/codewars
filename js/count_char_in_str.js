// The main idea is to count all the occuring characters(UTF-8) in string. 
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
// What if the string is empty ? Then the result should be empty object literal { }

function count (string) { 
    const charsCount = {};

    if (string.length > 0) {
        string.split("").map((char,i,w) => {
            charsCount[char] = (charsCount[char] == undefined) ? 1 : ++charsCount[char];
        });
        return charsCount;
    }

    return {};
}

console.log(count("abaa"))