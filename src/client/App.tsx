import * as React from 'react';
import { render } from 'react-dom';
import 'babel-polyfill';

import { Router } from './modules/common/Router';

render(
    <Router />,
    document.getElementById('root')
);
