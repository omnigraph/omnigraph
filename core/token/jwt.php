<?php
require_once '../../../../vendor/autoload.php';

use Lcobucci\JWT\Parser;
use Lcobucci\JWT\Builder;
// use Lcobucci\JWT\ValidationData;
use Lcobucci\JWT\Signer\Keychain;
use Lcobucci\JWT\Signer\Rsa\Sha256;

class Jwt {
    static function create() {
        $keychain = new Keychain();
        $signer = new Sha256();

        $contents = file_get_contents('jwt.pem');
        $key = $keychain->getPrivateKey($contents);
        return (new Builder())->setIssuer('omnigraph')
                              ->setIssuedAt(time())
                              ->setExpiration(time() + 60 * 60 * 24 * 30)
                              #->set('uid', $user->id)
                              ->sign($signer, $key)
                              ->getToken();
    }
    static function validate(string $jwtString) {
        $token = (new Parser())->parse($jwtString);
        $keychain = new Keychain();
        $signer = new Sha256();

        $contents = file_get_contents('jwt.pub');
        return $token->verify($signer, $keychain->getPublicKey($contents));
    }
}
$t = Jwt::create();
var_dump(Jwt::validate($t));
?>
