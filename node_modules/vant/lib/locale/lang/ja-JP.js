"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: 'お名前',
  tel: '電話番号',
  save: 'セーブ',
  confirm: '確認',
  cancel: 'キャンセル',
  delete: '削除',
  loading: '読み込み中...',
  noCoupon: 'クーポンはありません',
  nameEmpty: '名前を入力してください',
  telInvalid: '正しい電話番号を入力してください',
  vanCalendar: {
    end: '終了',
    start: '開始',
    title: '日付選択',
    confirm: '確認',
    startEnd: '開始/終了',
    weekdays: ['日', '月', '火', '水', '木', '金', '土'],
    monthTitle: (year, month) => year + "\u5E74" + month + "\u6708",
    rangePrompt: maxRange => maxRange + "\u65E5\u307E\u3067\u9078\u629E"
  },
  vanCascader: {
    select: '選択する'
  },
  vanContactCard: {
    addText: '連絡先を追加'
  },
  vanContactList: {
    addText: '新しい連絡先を追加'
  },
  vanPagination: {
    prev: '前のページ',
    next: '次のページ'
  },
  vanPullRefresh: {
    pulling: 'プルダウンして更新...',
    loosing: 'リリース時に更新...'
  },
  vanSubmitBar: {
    label: '合計：'
  },
  vanCoupon: {
    unlimited: '入場ありません',
    discount: discount => 10 - discount + "\u5272\u5F15",
    condition: condition => condition + "\u5186\u4EE5\u4E0A\u3067\u5229\u7528\u53EF\u80FD"
  },
  vanCouponCell: {
    title: 'クーポン',
    count: count => count + "\u679A\u304C\u5229\u7528\u53EF\u80FD"
  },
  vanCouponList: {
    exchange: '両替',
    close: 'クーポンを使用しません',
    enable: '利用可能',
    disabled: '利用できません',
    placeholder: '割引コードを入力してください'
  },
  vanAddressEdit: {
    area: '地域',
    postal: '郵便番号',
    areaEmpty: '地域を選択してください',
    addressEmpty: '詳しい住所を入力してください',
    postalEmpty: '間違った郵便番号',
    defaultAddress: 'デフォルトの住所に設定'
  },
  vanAddressEditDetail: {
    label: '詳しい住所',
    placeholder: '番地、階の部屋番号など'
  },
  vanAddressList: {
    add: '住所を追加'
  }
};
exports.default = _default;