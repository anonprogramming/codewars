<?php 
	//Map data structure problem
	//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
	//DNA_strand("ATTGC") // returns "TAACG"
	//DNA_strand("GTAT") // returns "CATA"
	
	function DNA_strand($dna)
	{
		$conversion = ["T"=>"A", "A"=>"T", "G"=>"C", "C"=>"G"];
		$dna = str_split($dna);
		$result = "";
		foreach($dna as $element)
		{
			$result .= $conversion[$element];
		}
		return $result;
	}
	
	echo DNA_strand("AGTTCATGGTCAAC");