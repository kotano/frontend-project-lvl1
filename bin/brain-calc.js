#!/usr/bin/env node

import play from '../src/index.js';
import brainCalc, { rule } from '../src/games/brainCalc.js';

play(brainCalc, rule);
