export const constantsMap = {
  pages: {
    login: {
      mainText: 'Вход',
      registerText: 'Вы новый пользователь?',
      registerLink: 'Зарегистрироваться',
      forgotPasswordText: 'Забыли пароль?',
      forgotPasswordLink: 'Восстановить пароль',
    },
    register: {
      mainText: 'Регистрация',
      loginText: 'Уже зарегистрированы?',
      loginLink: 'Войти',
    },
    notFound: {
      mainText: 'К сожалению, данной страницы не существует',
      backButton: 'Вернуться назад',
    },
  },
  widgets: {
    layoutNavbar: {
      homeLink: 'Конструктор',
      feedLink: 'Лента заказов',
    },
    layoutSidebar: {
      mainLink: 'Профиль',
      ordersLink: 'История заказов',
      logoutLink: 'Выйти',
      footerText: 'В этом разделе вы можете изменить свои персональные данные',
    },
    ingredientsContainer: {
      mainText: 'Соберите бургер',
    },
    constructorContainer: {
      onEmptyText: 'Перетащите сюда ингредиенты, чтобы создать бургер',
      onAddBunText: 'Добавьте булочку в заказ!',
    },
  },
  features: {
    order: {
      orderButton: 'Оформить заказ',
    },
    auth: {
      login: {
        loginLink: 'Войти',
        profileLink: 'Профиль',
      },
      register: {
        registerLink: 'Зарегистрироваться',
      },
    },
    constructor: {
      add: {
        addText: 'Добавить',
      },
      remove: {
        removeText: 'Удалить',
      },
    },
  },
  entities: {
    ingredient: {
      types: {
        bun: 'Булочки',
        sauce: 'Соусы',
        main: 'Начинки',
      },
      details: {
        calories: 'Калории, ккал',
        carbohydrates: 'Углеводы, г',
        fat: 'Жиры, г',
        proteins: 'Белки, г',
      },
      modal: {
        headingText: 'Детали ингредиента',
      },
    },
    order: {
      modal: {
        mainText: 'Ваш заказ начали готовить',
        inactiveText: 'Дождитесь готовности на орбитальной станции',
        loadingText: 'Создаем заказ...',
        iconSize: 100,
      },
    },
  },
  shared: {
    config: {
      cookieExpires: { expires: 7 },
      modalCloseKey: 'Escape',
      defaultError:
        'Возникла ошибка. Пожалуйста, перезагрузите страницу или попробуйте позже',
    },
  },
};
