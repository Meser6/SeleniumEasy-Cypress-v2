/// <reference types="Cypress" />
import { difficults } from "../types/types";

class MainPage {
  exerciseSwitchButton(difficult: difficults) {
    return cy.get(`li>[data-original-title='${difficult}']`);
  }
  excerciseButton(excerciseName: string) {
    return cy
      .get('div[class*="active"] a.list-group-item')
      .contains(excerciseName);
  }

  swichToDifficult(difficult: difficults) {
    cy.visit("/");
    this.exerciseSwitchButton(difficult).click();
  }

  chooseExcercise(excerciseName: string) {
    this.excerciseButton(excerciseName).click();
  }
}
export default new MainPage();
