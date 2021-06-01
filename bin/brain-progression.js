#!/usr/bin/env node

import play from '../src/index.js';
import brainProgression, { rule } from '../src/games/brainProgression.js';

play(brainProgression, rule);
