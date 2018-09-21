// Count the number of Duplicates

// Write a function that will return the count of distinct 
//case-insensitive alphabetic characters and numeric digits 
//that occur more than once in the input string. 
//The input string can be assumed to contain only alphanumeric characters, 
//including digits, uppercase and lowercase alphabets.

// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabbcdeB" -> 2 # 'a' and 'b'
// "indivisibility" -> 1 # 'i'
// "Indivisibilities" -> 2 # 'i' and 's'
// "aa11" -> 2 # 'a' and '1'

function duplicateCount(text){
	let count = 0, lettersWithDuplicates = [];

	text
	.toLowerCase()
	.split('')
	.map(function(a,i,w){
		if(w.indexOf(a) != w.lastIndexOf(a))
		{
			if(lettersWithDuplicates.indexOf(a) == -1)
			{
				count++;
				lettersWithDuplicates.push(a);
			}
		}
	})
	return count;
}

console.log(duplicateCount("aabbccdeB22"));