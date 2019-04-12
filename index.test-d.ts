import {expectType} from 'tsd';
import elegantSpinner = require('.');
const frame = elegantSpinner();

expectType<string>(frame());
expectType<readonly string[]>(elegantSpinner.frames);
