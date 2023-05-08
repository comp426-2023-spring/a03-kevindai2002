#!/usr/bin/env node

import minimist from "minimist";
import { play_game } from "../lib/rpsls.js";

const args = minimist(process.argv.slice(2)); 

if (args.h) { 
    console.log(
        `
        Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)
        -h, --help      display this help message and exit
        -r, --rules     display the rules and exit
        Examples:
        node-rps        Return JSON with single player RPS result.
                        e.g. {"player":"rock"}
        node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                        e.g {"player":"rock","opponent":"scissors","result":"win"}
        `
    );
    process.exit(0);
}

if (args.r) {
    console.log(
        `
        Rules for Rock Paper Scissors:
        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors
        `
    );
    process.exit(0);
}

const rps_choices = ["rock", "paper", "scissors"];

var choice = args._[0];
console.log(JSON.stringify(play_game(rps_choices, choice))); // put player choice in the rps function
process.exit(0); // exit successfully