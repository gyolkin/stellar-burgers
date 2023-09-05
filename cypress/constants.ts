import { constantsMap, apiMap } from '../src/shared/model';

const base_url = constantsMap.shared.config.apiUrl;

export const selectors = {
  ingredient_bun: '[data-cy="643d69a5c3f7b9001cfa093c"]',
  ingredient_sauce: '[data-cy="643d69a5c3f7b9001cfa0942"]',
  ingredient_main: '[data-cy="643d69a5c3f7b9001cfa0940"]',
  constructor_ingredient_bun: '[data-cy="set-643d69a5c3f7b9001cfa093c"]',
  constructor_ingredient_sauce: '[data-cy="set-643d69a5c3f7b9001cfa0942"]',
  constructor_ingredient_main: '[data-cy="set-643d69a5c3f7b9001cfa0940"]',
  close_modal: '[data-cy="close-modal"]',
  constructor_container: '[data-cy="constructor-container"]',
  order_button: constantsMap.features.order.orderButton,
  login_page_text: constantsMap.pages.login.mainText,
  order_modal_text: constantsMap.entities.order.modal.mainText,
};

export const api = {
  order: base_url + apiMap.postOrder,
  login: base_url + apiMap.postLogin,
};
