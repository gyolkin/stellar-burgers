export const constantsMap = {
  pages: {
    home: {
      mainText: 'Соберите бургер',
      constructorContainer: {
        onEmptyText: 'Перетащите сюда ингредиенты, чтобы собрать бургер',
        onAddBunText: 'Добавьте булочку в заказ!',
      },
    },
    feed: {
      mainText: 'Лента заказов',
      doneText: 'Готовы:',
      pendingText: 'В работе:',
      doneAllTimeText: 'Выполнено за все время:',
      doneTodayText: 'Выполнено за сегодня:',
      tabs: {
        mainTab: 'История',
        statsTab: 'Статистика',
      },
      orders: {
        loadingText: 'Загружаем историю заказов...',
        errorText:
          'Ошибка загрузки. Пожалуйста, обновите страницу или попробуйте позже',
      },
    },
    order: {
      loadingText: 'Загружаем заказ...',
      ingredientsText: 'Состав:',
    },
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
    forgotPassword: {
      mainText: 'Восстановление пароля',
      rememberPasswordText: 'Вспомнили пароль?',
      rememberPasswordLink: 'Войти',
    },
    resetPassword: {
      mainText: 'Сброс пароля',
      rememberPasswordText: 'Вспомнили пароль?',
      rememberPasswordLink: 'Войти',
    },
    profile: {
      orders: {
        errorText:
          'Ошибка загрузки. Пожалуйста, обновите страницу или попробуйте позже',
        loadingText: 'Загружаем историю ваших заказов...',
      },
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
      footerText: 'В этом разделе вы можете изменить свои персональные данные',
    },
  },
  features: {
    order: {
      orderButton: 'Оформить заказ',
    },
    auth: {
      login: {
        loginLink: 'Войти',
        loginButton: 'Войти',
        profileLink: 'Профиль',
        errorHeadingText: 'Ошибка авторизации',
      },
      register: {
        registerLink: 'Зарегистрироваться',
        registerButton: 'Зарегистрироваться',
        errorHeadingText: 'Ошибка регистрации',
      },
      profile: {
        changeButton: 'Сохранить изменения',
        loadingText: 'Отправляем данные...',
        successText: 'Изменения сохранены',
        errorHeadingText: 'Ошибка изменения данных',
      },
      logout: {
        logoutButton: 'Выйти',
        loadingText: 'Выходим...',
      },
      forgotPassword: {
        continueButton: 'Восстановить',
        errorHeadingText: 'Ошибка восстановления',
      },
      resetPassword: {
        resetButton: 'Подтвердить',
        errorHeadingText: 'Ошибка сброса пароля',
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
      status: {
        done: 'Выполнен',
        created: 'Создан',
        pending: 'Готовится',
      },
      modal: {
        headingText: 'Детали заказа',
        mainText: 'Ваш заказ начали готовить',
        inactiveText: 'Дождитесь готовности на орбитальной станции',
        loadingText: 'Создаем заказ...',
        iconSize: 100,
      },
    },
  },
  shared: {
    config: {
      apiUrl: 'https://norma.nomoreparties.space/api/',
      wsUrl: 'wss://norma.nomoreparties.space/',
      modalCloseKey: 'Escape',
      defaultError: 'Пожалуйста, перезагрузите страницу или попробуйте позже',
      reloadPageText: 'Перезагрузить страницу',
    },
  },
};
