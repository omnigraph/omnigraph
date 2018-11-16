<?php
require_once('./database.php');
require_once('./token.php');

class Authentication
{
    // authenticate user credentials
    public static authenticate($email,$pass) 
    {
	    $con = Database::connect();
	    
	    //$con->query()
	    $email,$pass
	    if(true)
	    {
		    Token::generate();
	    }
	    else
	    {
		    //return false
	    }
    }
}
?>