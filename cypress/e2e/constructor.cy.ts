import '@4tw/cypress-drag-drop';
import { selectors, api } from '../constants';

describe('E2E тестирование конструктора', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  it('Проверка невозможности оформить заказ для неавторизованного пользователя', () => {
    cy.get(selectors.ingredient_bun).drag(selectors.constructor_container);
    cy.get(selectors.constructor_ingredient_bun).should('be.visible');
    cy.get(selectors.ingredient_main).drag(selectors.constructor_container);
    cy.get(selectors.constructor_ingredient_main).should('be.visible');
    cy.get(selectors.ingredient_sauce).drag(selectors.constructor_container);
    cy.get(selectors.constructor_ingredient_sauce).should('be.visible');
    cy.get('button').contains(selectors.order_button).click();
    cy.get('p').contains(selectors.login_page_text).should('be.visible');
  });

  it('Проверка оформления заказа для авторизованного пользователя', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type(Cypress.env('email'));
    cy.get('input[name="password"]').type(Cypress.env('password'));
    cy.intercept('POST', api.login).as('login');
    cy.get('button[type="submit"]').click();
    cy.wait('@login', { timeout: 50000 })
      .its('response.statusCode')
      .should('eq', 200);
    cy.getCookie('accessToken').get('value').should('not.be.empty');
    cy.getCookie('refreshToken').get('value').should('not.be.empty');
    cy.get(selectors.ingredient_bun).drag(selectors.constructor_container);
    cy.get(selectors.constructor_ingredient_bun).should('be.visible');
    cy.get(selectors.ingredient_main).drag(selectors.constructor_container);
    cy.get(selectors.constructor_ingredient_main).should('be.visible');
    cy.get(selectors.ingredient_sauce).drag(selectors.constructor_container);
    cy.get(selectors.constructor_ingredient_sauce).should('be.visible');
    cy.intercept('POST', api.order).as('order');
    cy.get('button').contains(selectors.order_button).click();
    cy.wait('@order', { timeout: 50000 })
      .its('response.statusCode')
      .should('eq', 200);
    cy.get('p').contains(selectors.order_modal_text).should('be.visible');
  });
});
