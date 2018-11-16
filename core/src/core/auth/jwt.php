<?php
require_once '../../../vendor/autoload.php';

use Lcobucci\JWT\Parser;
use Lcobucci\JWT\Builder;
// use Lcobucci\JWT\ValidationData;
use Lcobucci\JWT\Signer\Keychain;
use Lcobucci\JWT\Signer\Rsa\Sha256;

$signer = new Sha256();
$keychain = new Keychain();

class Jwt {
    public function create() {
        $contents = file_get_contents('jwt.pem');
        $key = $keychain->getPrivateKey($contents);
        return (new Builder())->setIssuer('omnigraph')
                              ->setIssuedAt(time())
                              ->setExpiration(time() + 60 * 60 * 24 * 30)
                              #->set('uid', $user->id)
                              ->sign($signer, $key)
                              ->getToken();
    }
    public function validate(string $jwtString) {
        $token = (new Parser())->parse($jwtString);
        $contents = file_get_contents('jwt.pub');
        return $token->verify($this->signer, $keychain->getPublicKey($contents));
        return $token->validate($data);
    }
}
$j = new Jwt();
$t = $j->create();
var_dump($j->validate($t));
?>
