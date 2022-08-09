describe('DnD Spells landing page', () => {
  before(() => {
    cy.visit('/spells');
  });
  it('should display spells table and navigate to spell details', () => {
    cy.get('[data-testid="dancing-lights"').should(
      'have.text',
      'Dancing Lights'
    );
    cy.get('[data-testid="dancing-lights"').click();
    cy.get('[data-testid="spell-name-header"').should(
      'have.text',
      'Dancing Lights'
    );
  });
});
