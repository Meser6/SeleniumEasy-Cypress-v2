/// <reference types="Cypress" />

class SimpleFormDemo {
  get formToSendMessageElement() {
    return cy.get("form#get-input input");
  }
  get showMessageButtonElement() {
    return cy.get("form#get-input>button");
  }
  get receivedMessageElement() {
    return cy.get("div#user-message");
  }
  get formToSendAElement() {
    return cy.get("#sum1");
  }
  get formToSendBElement() {
    return cy.get("#sum2");
  }
  get getTotalButtonElement() {
    return cy.get("#gettotal button");
  }
  get receivedSumElement() {
    return cy.get("#displayvalue");
  }

  sendMessage(message: string) {
    this.formToSendMessageElement.type(message);
    this.showMessageButtonElement.click();
  }
  sendValues(a: number, b: number) {
    this.formToSendAElement.type(String(a));
    this.formToSendBElement.type(String(b));
    this.getTotalButtonElement.click();
  }
  get getReceivedMessage() {
    return this.receivedMessageElement.invoke("text");
  }
  getTotalSum() {
    this.receivedSumElement.invoke("text").then(parseFloat).as("totalSum");
  }
}
export default new SimpleFormDemo();
