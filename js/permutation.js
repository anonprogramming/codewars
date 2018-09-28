// In this kata you have to create all permutations of an input string 
// and remove duplicates, if present. This means, you have to shuffle all 
// letters from the input in all possible orders.

// Examples:

// permutations('a'); // ['a']
// permutations('ab'); // ['ab', 'ba']
// permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

function permutation(elem) {
    if (elem.length == 1) {
        return Array.from(elem);
    }

    return getPermutations(Array.from(elem));
}

function getPermutations(charList) {
    const permutations = new Set();

    permutations.add(charList.join(""));
    permutations.add(reverse([...charList]));

    if (charList.length == 2) {
        return Array.from(permutations);
    }

    for (let index = 0; index < charList.length; index++) {
        const newCharList = charList.slice(0,index).concat(charList.slice(index+1))
        const permutation = Array.from(getPermutations(newCharList));
        
        for (let i = 0; i < permutation.length; i++) {
            permutation[i] = charList[index] + permutation[i];
            permutations.add(permutation[i])
        }
    }

    return Array.from(permutations);
}

function reverse(charList) {
    return charList.reverse().join("");
}

console.log(permutation("abcd"))