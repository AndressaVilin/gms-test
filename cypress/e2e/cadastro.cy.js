/// <reference types="cypress"/>


describe('US-012-Funcionalidade: Cadastro de membros', () => {
  beforeEach(() => {
    cy.visit('/')

  })

  it('Deve fazer o cadastro de campos obrigatórios', () => {
    var email = `fabio${Date.now()}@teste.com`
    cy.preencherCadastro("Fabio","Araujo", email, "92435627", "Anressa@1263")
    cy.get('#signup-response').should('contain', 'Cadastro realizado com sucesso!')
  })

  it('Deve validar mensagem de erro com campo nome invalido', () => {
    cy.preencherCadastro("Fabio20","Araujo", "Fbio@tete.com", "92435627", "Anressa@1263")
    cy.get('#signup-response').should('contain','Nome deve conter apenas caracteres alfabéticos')
  })
})