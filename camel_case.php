<?php 

function camel_case($words)
{
	$wordsArray = explode(' ',$words);
	$CamelCaseWord = "";
	foreach($wordsArray as $word)
	{
		$CamelCaseWord .= ucfirst($word);
	}
	return $CamelCaseWord;
}

camel_case("camel case word");