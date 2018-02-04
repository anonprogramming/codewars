// // The goal of this exercise is to convert a string to a new string 
// where each character in the new string is '(' 
// if that character appears only once in the original string, or ')' 
// 	if that character appears more than once in the original string. 
// 		Ignore capitalization when determining if a character is a duplicate.

// // Examples:

// "din" => "((("

// "recede" => "()()()"

// "Success" => ")())())"

// "(( @" => "))(("

function duplicateEncode(word){
	let words = word.toLowerCase();
	let newWord = [];
	
	for(let i = 0; i < words.length; i++)
	{
		for(let j = i + 1; j < words.length; j++)
		{
			if(words[i] == words[j])
			{
				newWord[j] = ")";
				newWord[i] = ")";
			}
		}
		if(newWord[i] != ")")
			newWord[i] = "(";
	}
	return newWord.join("");
}
console.log(duplicateEncode("Success"));

//OR

function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

console.log(duplicateEncode("Success"));