#!/usr/bin/env node

import play from '../src/index.js';
import brainGcd, { rule } from '../src/games/brainGcd.js';

play(brainGcd, rule);
