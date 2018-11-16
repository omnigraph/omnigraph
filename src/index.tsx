import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'react-emotion';
import { env } from './environments/environment';

import './index.scss';

const Para = styled('p')`
    font-size: 48px;
    font-family: 'Helvetica Neue', 'Franklin Gothic', sans-serif;
    margin: 0 auto;
    color: #313131;
`;

const App = () => (
    <Para>
        Making stuff is fun!!!!
    </Para>
);

ReactDOM.render(<App/>, document.getElementById('root'));
