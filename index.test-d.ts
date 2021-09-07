import {expectType} from 'tsd';
import elegantSpinner, {spinnerFrames} from './index.js';

const frame = elegantSpinner();

expectType<string>(frame());
expectType<readonly string[]>(spinnerFrames);
