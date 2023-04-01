/// <reference types="Cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import POMExample from '../pages/pageObjectExample'

Then(`url powinien zawierac {string}`, (url : string) =>{
  cy.url().should('contains', url)
})

Then('url powinien miec w sobie {string}', (url: string) =>{
  cy.url().should('contains', url)
  POMExample.print()
})