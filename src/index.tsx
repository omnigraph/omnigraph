import * as React from 'react';
import * as ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import styled from 'react-emotion';
// import { env } from './environments/environment';

import './index.scss';

const Para = styled('p')`
    font-size: 48px;
    font-family: 'Helvetica Neue', 'Franklin Gothic', sans-serif;
    margin: 0 auto;
    color: #313131;
`;

const responseFacebook = (res) => console.log(res);

const App = () => (
    <Para>
        <FacebookLogin
            appId="333110180577690"
            autoLoad={true}
            fields="name,email,picture"
            onClick={(e) => console.log(e)}
            callback={responseFacebook} />
        {/* <div className="fb-login-button" data-width="120" data-max-rows="1" data-size="medium" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div> */}
    </Para>
);

ReactDOM.render(<App/>, document.getElementById('root'));
