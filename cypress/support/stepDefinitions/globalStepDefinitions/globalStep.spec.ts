/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { difficult } from "../../types/types";

Given(
  "I open main site and chose {string} excercises",
  (difficult: difficult) => {}
);
