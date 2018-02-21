import { TerminalConfig } from './TerminalConfig';
import { FileConfig } from './FileConfig';
const intel = require('intel');

const config = (process.env.BTSX_ENV && process.env.BTSX_ENV == 'prod')
    ? new FileConfig()
    : new TerminalConfig();

intel.config({ ...config });

const Main = intel.getLogger('main');
const Express = intel.getLogger('express');

export { Main, Express };
