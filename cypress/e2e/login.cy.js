describe('Login OrangeHRM', () => {
    it('should login successfully', () => {
      cy.visit('/');
  
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
  
      cy.get('h6').contains('Dashboard').should('be.visible');

    });

    it('should show error with wrong credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
      
        cy.get('input[name="username"]').type('wrongUser');
        cy.get('input[name="password"]').type('wrongPassword');
        cy.get('button[type="submit"]').click();
      
        cy.get('.oxd-alert-content-text')
          .should('contain.text', 'Invalid credentials')
          .screenshot('login-invalid'); 
      });

      it('should logout successfully after login', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
      
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
           
        cy.get('h6').contains('Dashboard').should('be.visible');
      
        cy.get('img[alt="profile picture"]').click();
      
        cy.contains('Logout').click();
      
        cy.get('input[name="username"]').should('be.visible');
      
        cy.screenshot('logout-success');
        Cypress.on('uncaught:exception', (err, runnable) => {
          // Retorna false para prevenir que Cypress falle el test
          return false;
        });
        
      });
      
  });
  