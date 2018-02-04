// Write a function called longest which will take a string of space-separated 
// words and will return the longest one.

// For example:

// longest("This is Andela") => "Andela"

// longest("A") => "A"

function longest(word){
	let wordList = word.split(' ');

	let longestPos = 0;

	for(let i =0 ; i < wordList.length; i++){
		if(i == wordList.length - 1)
            break;
        if(wordList[longestPos].length < wordList[i+1].length)
            longestPos = i + 1;
	}

	return wordList[longestPos];
}

console.log(longest("i am in andela"));