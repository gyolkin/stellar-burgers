# Проект: Stellar Burgers
[![React](https://img.shields.io/badge/React-18-blue?style=flat&logo=react&logoColor=white)](#)
[![RTK](https://img.shields.io/badge/Redux-Toolkit-purple?style=flat&logo=redux&logoColor=white)](#)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-blue?style=flat&logo=tailwindcss&logoColor=white)](#)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat&logo=typescript&logoColor=white)](#)

:heavy_exclamation_mark:[English version](./ENG_README.md)

## Описание
«Stellar Burgers» — это веб-приложение космической бургерной с адаптивным дизайном, выпускной проект курса **«React-разработчик»** от Яндекс Практикума. Приложение включает в себя большое количество функций, несколько ключевых пользовательских сценариев и сложную логику. Поскольку Практикум практически не затрагивает вопросы архитектуры кода и предоставляет готовую UI-библиотеку, в данном исполнении я попытался организовать код в соответствии с архитектурной методологией [Feature Sliced Design](https://feature-sliced.design/docs/get-started/overview) 🍰 и переписал UI-библиотеку, используя TailwindCSS и включая в нее некоторые дополнительные компоненты. Кроме того, вместо Create React App, который Практикум рекомендует в курсе, используется сборщик Vite. Есть и другие отличия, — как в стеке, так и в подходах, — которые будут заметны по описанию ниже или в процессе чтения кода.

## Live просмотр
![Главная страница сайта](./main.png)
Посмотреть live demo можно здесь: [Github Pages](https://gyolkin.github.io/stellar-burgers).

Либо запустить локально. Сделать это можно так:
```
git clone https://github.com/gyolkin/stellar-burgers.git
cd react-burger
npm i
npm run dev
```
Приложение запустится. В консоли появится ссылка, чтобы его открыть.

## Технологический стек
- React 18
- Redux Toolkit (& RTK Query)
- React Router DOM v6.3.0
- React DND
- TailwindCSS

## Несколько слов про FSD
«Жестких» нарушений методологии в проекте нет — для комфортной работы и поддержки проекта в том числе используется специальный плагин для ESLint. Некоторые «мягкие» нарушения, в основном касающиеся декомпозиции или логики использования сегмента *lib*, допускались чаще всего осознанно, исходя из конкретных потребностей данного проекта.

## Кое-что доделать...
Приложение находится в полностью рабочем состоянии, все необходимое присутствует и выполняет свою роль. Тем не менее планирую добавить/изменить несколько вещей в ближайшее время.

- [ ] Redux Persist: сохранение состояния конструктора в localStorage
- [ ] Валидация форм
- [ ] Тестирование функций (utils/helpers/etc)
- [ ] Тестирование компонентов
- [ ] FSD: отвязать модальное окно с созданным заказом от features/order.
- [ ] FSD: создать виджеты для модальных окон