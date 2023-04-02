/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { difficults } from "../../types/types";
import MainPage from "../../pages/main";

Given(
  "I open main site and chose {string} excercises",
  (difficult: difficults) => {
    MainPage.swichToDifficult(difficult);
  }
);

Given("I open {string} excercise", (excercise: string) => {
  MainPage.chooseExcercise(excercise);
});
