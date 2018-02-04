//  The new "Avengers" movie has just been released! 
//  There are a lot of people at the cinema box office standing in a huge line. 
//  Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

// Anu is currently working as a clerk. 
// He wants to sell a ticket to every single person in this line.

// Can Anu sell a ticket to each person and 
// give the change if he initially has no money and 
// sells the tickets strictly in the order people follow in the line?

// Return YES, if Anu can sell a ticket to each person and give the change. Otherwise return NO.
// Examples:

// // === JavaScript ==

// tickets([25, 25, 50]) // => YES 
// tickets([25, 100])  => NO 
//tickets([25,25,25,100]) => YES
//tickets([25,50,25,25,50,50,25,25,25,100,50,25,100,50,100]
//         // => NO. Vasya will not have enough money to give change

	function tickets(people)
	{
		if(people[0] != 25)
			 return "NO";
			
		var change = [];
		change.push(people[0]);
		
		var canSell = "NO";
			
		for(var i = 1; i < people.length; i++)
		{
			if(people[i] == 25)
			{
				canSell = "YES";
				change.push(people[i]);
				continue;
			}
				
				
			if(people[i] == 50)
			{
				if(change.indexOf(25) != -1)
				{
					canSell = "YES";
					change.splice(change.indexOf(25),1,people[i]);
					continue;
				}
					canSell = "NO";
			}
			
			if(people[i] == 100)
			{
				if((change.indexOf(25) != -1) && (change.indexOf(50) != -1))
				{
					canSell = "YES";
					change.splice(change.indexOf(25),1);
					change.splice(change.indexOf(50),1,100);
					continue;
				}
					canSell = "NO";
					let count = 0;
					let pos = change.indexOf(25);
					while(pos != -1)
					{
						pos = change.indexOf(25,pos + 1);
						count++;
					}

					if(count == 3)
						canSell = "YES";
			}
		}
		return canSell;
	}
	
	console.log(tickets([25,25,50,100]));

	//if the first person in the line comes with a bill greater than 25 then he can't sell the tickets