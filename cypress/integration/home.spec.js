describe('Home Page', () => {
  it('Renders all components', () => {
    cy.visit('/');

    cy.findByRole('link', { name: 'About' }).should('be.visible');
    cy.findByRole('heading', { name: 'Upcoming Events' }).should('be.visible');
    cy.findByText('The team at Meet/Hang/Code').should('be.visible');
  });

  it('Renders the correct nav item classes', () => {
    cy.visit('/');

    cy.get('nav a').should(($a) => {
      const classes = $a.map((i, el) => {
        return Cypress.$(el).attr('class');
      });
      classes.each((i, classNames) => {
        expect(classNames).to.match(/header__navlink/);
      });
    });
  });

  it('Does not render the featured event in the upcoming events list', () => {
    cy.visit('/');

    cy.get('main a').should(($a) => {
      const links = [
        ...$a.map((i, el) => {
          return Cypress.$(el).attr('href');
        }),
      ];
      const noDuplicates = links.every(
        (link, i, arr) => arr.indexOf(link) === arr.lastIndexOf(link),
      );
      expect(noDuplicates).to.equal(true);
    });
  });

  it('Does not display any past dates', () => {
    cy.visit('/');

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
