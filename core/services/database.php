<?php

class Database
{
	private $user = 'root';
    private $pass = 'system';

    // create a new database connection and return it
    public static connect() 
    {
	    $conn = new PDO('mysql:host=localhost; dbname=system', $user, $pass);
		return $conn;
    }
    
    // destroy database connection
    public static disconnect($conn) 
    {
	    $conn->destroy();
	    return true;
    }

}
?>

?>