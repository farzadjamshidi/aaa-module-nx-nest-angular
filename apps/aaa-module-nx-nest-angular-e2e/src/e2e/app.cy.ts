import { getGreeting } from '../support/app.po';

describe('aaa-module-nx-nest-angular', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Welcome aaa-module-nx-nest-angular');
  });
});
