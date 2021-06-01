#!/usr/bin/env node

import play from '../src/index.js';
import brainEven, { rule } from '../src/games/brainEven.js';

play(brainEven, rule);
