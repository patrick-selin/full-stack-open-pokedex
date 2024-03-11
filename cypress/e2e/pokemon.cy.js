describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://localhost:5005')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })

  it('user can go from the front page to the right Pokemon page', function() {
    cy.visit('http://localhost:5005')
    cy.contains('ivysaur').click()
    cy.url().should('include', '/pokemon/ivysaur')
    cy.contains('ivysaur').should('exist')
    cy.contains('chlorophyll').should('exist')
  })
})
