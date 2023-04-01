/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Given("Otwieram strone glowna", () =>{
  cy.visit('/')
})