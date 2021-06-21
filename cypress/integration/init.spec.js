describe('Cypress', () => {
  it('visits the app', () => {
    cy.visit('/');
    cy.findByText(/upcoming/gi).should('be.visible');
  });
});
