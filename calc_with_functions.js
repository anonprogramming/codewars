function performOperation(f,o,l)
{
	switch(o)
	{
		case '*':
			return f * l;
		case '/':
			return f / l;
		case '+':
			return f + l;
		case '-':
			return f - l;
	}
}

function zero(arg)
{
	if(arg == undefined)
		return 0;

	return performOperation(0,arg[0],arg[1]);
}

function one(arg)
{
	if(arg == undefined)
		return 1;

	return performOperation(1,arg[0],arg[1]);
}

function two(arg)
{
	if(arg == undefined)
		return 2;

	return performOperation(2,arg[0],arg[1]);
}

function three(arg)
{
	if(arg == undefined)
		return 3;

	return performOperation(3,arg[0],arg[1]);
}

function four(arg)
{
	if(arg == undefined)
		return 4;

	return performOperation(4,arg[0],arg[1]);
}

function five(arg)
{
	if(arg == undefined)
		return 5;

	return performOperation(5,arg[0],arg[1]);
}

function six(arg)
{
	if(arg == undefined)
		return 6;

	return performOperation(6,arg[0],arg[1]);
}

function seven(arg)
{
	if(arg == undefined)
		return 7;

	return performOperation(7,arg[0],arg[1]);
}

function eight(arg)
{
	if(arg == undefined)
		return 8;

	return performOperation(8,arg[0],arg[1]);
}

function nine(arg)
{
	if(arg == undefined)
		return 9;

	return performOperation(9,arg[0],arg[1]);
}

function plus(arg)
{
	return ['+',arg];
}

function minus(arg)
{
	return ['-',arg];
}

function times(arg)
{
	return ['*',arg];
}


function dividedBy(arg)
{
	return ['/',arg];
}

console.log(five(dividedBy(three())));