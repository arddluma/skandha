#!/usr/bin/env node

import {writeDataFile} from "./data-path";
import {getGitData} from "./index.js";

// Script to write the git data file (json) used by the build procedures to persist git data.
writeDataFile(getGitData());