describe('Home Page', () => {
  it('Renders all components', () => {
    cy.visit('/events');

    cy.findByRole('link', { name: 'About' }).should('be.visible');
    cy.findByRole('heading', { name: 'Upcoming Events' }).should('be.visible');
    cy.findByText('The team at Meet/Hang/Code').should('be.visible');
  });

  it('Renders the active navigation item class', () => {
    cy.visit('/events');

    cy.get('nav a[class*=header__navlink-active]')
      .contains('All Events')
      .should('be.visible');
  });

  it('Does not display any past dates', () => {
    cy.visit('/events');

    cy.get(
      'main [class*=event-details] h4, main [class*=event-details] h5',
    ).should(($dateEl) => {
      const dates = [
        ...$dateEl.map((i, el) => {
          return Cypress.$(el).text();
        }),
      ].filter((text) => !text.includes('Where'));

      const noPastDates = dates.every((date) => {
        const today = new Date();
        const eventDate = new Date(date);
        return eventDate > today;
      });
      expect(noPastDates).to.equal(true);
    });
  });
});
