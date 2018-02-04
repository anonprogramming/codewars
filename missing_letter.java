// Find the missing letter in the array.
// The letters will be arranged sequentially and only one letter will be missing
// e.g ['a','b','d','e','f'] -> return 'c'

public static char missingLetter(char[] c)
    {
       int prev = (int)c[0];
       char missingLetter = 'a'; // initialized to any arbitrary value
       for(int i = 1; i < c.length; i++)
       {
           if(((int)c[i] - prev) == 1)
           {
               prev = (int)c[i];
           }          
           else{
                missingLetter = (char)((int)(c[i]) - 1);
                break;
           }
               
       }
       return missingLetter;
    }