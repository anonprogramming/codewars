// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
function list(names){
	if(names.length == 0)
		return '';

	if(names.length == 1)
		return names[0].name;

	if(names.length == 2)
		return `${names[0].name} & ${names[1].name}`;

	if(names.length > 2)
	{
		let format_string = "";
		for(let i =0; i < names.length; i++)
		{
			if((names.length - i) == 2)
			{
				format_string += `${names[i].name} & ${names[i + 1].name}`;
				break;
			}
			format_string += `${names[i].name}, `;
		}
		return format_string;
	}
}

console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]))