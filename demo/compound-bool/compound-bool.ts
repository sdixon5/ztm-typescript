/* eslint-disable */
import { strict as assert } from "assert";

// NOT
const writing = true;
const reading = !writing;

assert.equal(reading, false);

// OR
// (pick 1 movie)
const rating = 9;
const favoriteMovie = false;

const suggestMovie = rating > 8 || favoriteMovie;
assert.equal(suggestMovie, true);

// AND
const age = 18;
const isTeenager = age >= 13 && age < 20;
assert.equal(isTeenager, true);

// our package
const packageWeight = 30;
const packageLength = 50;
const feeExemption = false;

//these compound statements should be broken up into "units" to reduce complexity and chances for mistakes.
const extraFee = !feeExemption && (packageWeight > 25 || packageLength > 40);
assert.equal(extraFee, true);
