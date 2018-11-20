declare const FB;
interface LoginResponse {
    status: 'connected' | 'not_authorized' | 'unknown';
    authResponse?: {
        accessToken: string;
        expiresIn: number;
        reauthorize_required_in: number;
        signedRequest: string;
        userID: string;
    }
}
export class FacebookService {
    static saveInfo(info: LoginResponse) {
        if (info.status === 'connected') {
            localStorage.setItem('fbInfo', JSON.stringify(info.authResponse));
        }
    }
    static getStatus(): Promise<LoginResponse> {
        return new Promise( (resolve, reject) => {
            try {
                FB.getLoginStatus((res) => {
                    resolve(res);
                })
            } catch(e) {
                reject(e);
            }
        })
    }
    static logout(): Promise<any> {
        return new Promise( (resolve, reject) => {
            try {
                FB.logout(res => resolve(res));
            } catch(e) {
                reject(e)
            }
        })
    }
}
