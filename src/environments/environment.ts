export let env: any;
declare const process: any;

import { environment as dev } from './environment.dev';
import { environment as uat } from './environment.uat';
import { environment as prod } from './environment.prod';
if (process.env.NODE_ENV === 'prod') {
    env = prod;
} else if (process.env.NODE_ENV === 'uat') {
    env = uat;
} else {
    env = dev;
}
