// write function that takes a string argument and displays them like below
// accum("abc") //-> A-Bb-Ccc
// accum("aBcd") //->A-Bb-Ccc-Dddd

function accum(text){
	return text.split('')
	.map(function(a,i){
		return a.toUpperCase()+a.repeat(i).toLowerCase();
	})
	.join('-');
}

console.log(accum("ZpglnRxqenU"));
