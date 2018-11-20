<?php

require_once('vendor/autoload.php');
require_once('../services/token.php');
require_once('../services/authentication.php');

namespace Omnigraph\User;

class User extends ObjectType
{
	private $id;
    private $name;
    private $email;
    private $role;
    private $token;
    
    function __construct($name,$email,$role,$token)
    {
	    
    }
    private function getInfo()
    {

    }
    private function login($email,$pass)
    {
		$JWT = Authentication::authenticate($this->$email,$this->$pass);
    }
    private function logout($token)
    {
		Token::destroy($this->$token);
    }
}
?>