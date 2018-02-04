<!--
    Your're working with an intern that keeps coming to you with javascript code that won't run because
the braces, brackets, and parentheses are off. To save you both some time, you decide to write a
braces/brackets/parentheses validator.
"{[]()}" => true
"{[]()(}" => false 

-->

<?php
    
    function validateBrackets( $str ){ 
        
        $closersToOpeners = array(
            "(" => ")",
            "[" => "]",
            "{" => "}"
        );

        $charsInString = str_split( $str );

        $openers = array_keys( $closersToOpeners );
        $closers = array_values( $closersToOpeners );

        $openers_stack = [];

        foreach( $charsInString as $char ){

            if( in_array( $char, $openers ) ){

                array_push( $openers_stack, $char ); 

            } else if( in_array( $char, $closers ) ){

                    if( count( $openers_stack ) == 0 ){
                        return false;
                    } else {
                        $lastUnclosedOpener = array_pop( $openers_stack );
                        if( $closersToOpeners[ $lastUnclosedOpener ] != $char )
                            return false;
                    }
            }
        }

        return true;
    }

    $result = validateBrackets( "{[1245](mki)}" );
    if( $result )
        echo "correct";
    else
        echo "wrong"; 
?>