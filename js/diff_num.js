// You are given an odd length array of integers, 
// in which all of them are the same except one single number.
// Implement a method stray() which accepts such array 
// and returns that single number

function stray(arr)
{
	let n = 0;
	arr.map(function(a,i,w){
		if(w.indexOf(a) == w.lastIndexOf(a))
			n = a;
	});
	return n;
}

console.log(stray([1,1,2]));
console.log(stray([4,2,2,2,2]));
console.log(stray([4,4,4,4,5,4,4]));