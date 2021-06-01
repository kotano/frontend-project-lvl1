#!/usr/bin/env node

import play from '../src/index.js';
import brainPrime, { rule } from '../src/games/brainPrime.js';

play(brainPrime, rule);
