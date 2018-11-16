import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'react-emotion';
import { env } from './environments/environment';

import './index.scss';

const Div = styled('div') `
    font-size: 48px;
    font-family: 'Helvetica Neue', 'Franklin Gothic', sans-serif;
    margin: 0 auto;
    color: #313131;
`;
const Para = styled('p')`
    padding: 16px;
`;

const App = () => (
    <Div>
        <Para>
            Making stuff is fun!!!!
        </Para>
    </Div>
);

ReactDOM.render(<App />, document.getElementById('root'));
