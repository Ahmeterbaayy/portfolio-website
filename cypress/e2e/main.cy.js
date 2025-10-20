describe('Portfolio Ana Akış', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173');
  });

  it('Ana sayfa başlığı ve profil bölümü görünüyor', () => {
    cy.contains('Profile').should('exist');
    cy.contains('About Me').should('exist');
  });

  it('Tema değiştirilebiliyor', () => {
    cy.get('button[aria-label="toggle theme"]').click();
    cy.get('html').should('have.class', 'dark');
    cy.get('button[aria-label="toggle theme"]').click();
    cy.get('html').should('not.have.class', 'dark');
  });

  it('Dil değiştirilebiliyor', () => {
    cy.get('button[aria-label="toggle language"]').click();
    cy.contains('Profil').should('exist'); // Türkçe başlık
    cy.get('button[aria-label="toggle language"]').click();
    cy.contains('Profile').should('exist'); // İngilizce başlık
  });

  it('Hire Me butonu API isteği atıyor ve toast gösteriyor', () => {
    cy.intercept('POST', '**/api/users', { statusCode: 201, body: { id: 1 } }).as('hireMe');
    cy.contains('Hire Me').first().click();
    cy.wait('@hireMe');
    cy.contains('Başarıyla gönderildi').should('exist');
  });
});
