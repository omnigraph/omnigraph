<?php

require_once('vendor/autoload.php');
require_once('../services/token.php');
require_once('../services/authentication.php');

namespace Omnigraph\User;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class User extends ObjectType
{
	private $id;
    private $name;
    private $email;
    private $role;
    private $token;
    
    function __construct($name,$email,$role,$token)
    {
	    $config = [
            // Note: 'name' is not needed in this form:
            // it will be inferred from class name by omitting namespace and dropping "Type" suffix
            'fields' => [
                'id' => Type::id()
            ]
        ];

        parent::__construct($config);
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