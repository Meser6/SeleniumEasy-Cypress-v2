import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

Then(`url powinien byc {string}`, (url : string) =>{
  cy.url().should('contains', url)
})

Then('url powinien zawierac stginga {string}', (url: string) =>{
  cy.url().should('contains', url)
})