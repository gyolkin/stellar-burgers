import '@4tw/cypress-drag-drop';
import { selectors } from '../constants';

describe('E2E тестирование просмотра деталей ингредиента', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('/');
  });

  it('Проверка работоспособности модального окна с деталями ингредиента', () => {
    cy.get(selectors.ingredient_bun).click();
    cy.get(selectors.close_modal).should('be.visible');
    cy.get(selectors.close_modal).click();
    cy.get(selectors.close_modal).should('not.exist');
  });

  it('Проверка работоспособности модального окна после перезагрузки страницы', () => {
    cy.get(selectors.ingredient_bun).click();
    cy.get(selectors.close_modal).should('be.visible');
    cy.reload();
    cy.get(selectors.close_modal).should('be.visible');
  });
});
