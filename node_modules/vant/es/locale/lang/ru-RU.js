export default {
  name: 'Имя',
  tel: 'Телефон',
  save: 'Сохранить',
  confirm: 'Подтвердить',
  cancel: 'Отмена',
  delete: 'Удалить',
  loading: 'Загрузка...',
  noCoupon: 'Нет купонов',
  nameEmpty: 'Пожалуйста укажите имя',
  telInvalid: 'Некорректный номер телефона',
  vanCalendar: {
    end: 'Конец',
    start: 'Начало',
    title: 'Каленарь',
    startEnd: 'Начало/Конец',
    weekdays: ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'],
    monthTitle: (year, month) => year + "/" + month,
    rangePrompt: maxRange => "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0431\u043E\u043B\u0435\u0435 " + maxRange + " \u0434\u043D\u0435\u0439"
  },
  vanCascader: {
    select: 'Выбрать'
  },
  vanContactCard: {
    addText: 'Добавить информацию'
  },
  vanContactList: {
    addText: 'Создать контакт'
  },
  vanPagination: {
    prev: 'Назад',
    next: 'Вперед'
  },
  vanPullRefresh: {
    pulling: 'Потяните для обновления...',
    loosing: 'Отпустите для обновления...'
  },
  vanSubmitBar: {
    label: 'Всего：'
  },
  vanCoupon: {
    unlimited: 'Безлимитный',
    discount: discount => discount * 10 + "% \u0441\u043A\u0438\u0434\u043A\u0430",
    condition: condition => "\u041A\u0430\u043A \u043C\u0438\u043D\u0438\u043C\u0443\u043C " + condition
  },
  vanCouponCell: {
    title: 'Купон',
    count: count => "\u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C " + count + " \u043A\u0443\u043F\u043E\u043D\u043E\u0432"
  },
  vanCouponList: {
    exchange: 'Обмен',
    close: 'Закрыть',
    enable: 'Доступно',
    disabled: 'Недоступно',
    placeholder: 'Код купона'
  },
  vanAddressEdit: {
    area: 'Область',
    postal: 'Индекс',
    areaEmpty: 'Укажите зону доставки',
    addressEmpty: 'Адрес не может быть пустым',
    postalEmpty: 'Некорректный индекс',
    defaultAddress: 'Сделать адресом по умолчанию'
  },
  vanAddressEditDetail: {
    label: 'Адрес',
    placeholder: 'Адрес'
  },
  vanAddressList: {
    add: 'Новый адрес'
  }
};