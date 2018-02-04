// In this kata you will create a function that takes a list of non-negative integers 
// and strings and returns a new list with the strings filtered out.
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
function filter_list(list)
{
	for(let i = list.length -1; i >= 0; i--)
	{
		if(typeof list[i] == 'string')
			list.splice(i,1);
	}
	return list;
}

console.log(filter_list([1,2,'aasf','1','123',123]));