/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SimpleFormDemo from "../../pages/basicExercise/simpleFormDemo";

When("I send {string} message", (message: string) => {
  SimpleFormDemo.sendMessage(message);
});
Then("There should be {string} at My message section", (message: string) => {
  SimpleFormDemo.getReceivedMessage.should("contain", message);
});
When("I send {int} and {int} values", (value1: number, value2: number) => {
  SimpleFormDemo.sendValues(value1, value2);
});
Then("There should be {int} at Total section", (sum: number) => {
  SimpleFormDemo.getTotalSum();
  cy.get("@totalSum").should("eq", sum);
});
