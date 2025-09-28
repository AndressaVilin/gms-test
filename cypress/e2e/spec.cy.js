/// <reference types="cypress"/>


describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatórios', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#signup-firstname').type('Fabio')
    cy.get('#signup-lastname').type('Araujo')
    cy.get('#signup-email').type('fabio19111@gmail.com')
    cy.get('#signup-phone').type('12345678')
    cy.get('#signup-password').type('123A@@123')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })
})