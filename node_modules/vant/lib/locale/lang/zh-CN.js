"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: '姓名',
  tel: '电话',
  save: '保存',
  confirm: '确认',
  cancel: '取消',
  delete: '删除',
  loading: '加载中...',
  noCoupon: '暂无优惠券',
  nameEmpty: '请填写姓名',
  telInvalid: '请填写正确的电话',
  vanCalendar: {
    end: '结束',
    start: '开始',
    title: '日期选择',
    confirm: '确定',
    startEnd: '开始/结束',
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    monthTitle: (year, month) => year + "\u5E74" + month + "\u6708",
    rangePrompt: maxRange => "\u6700\u591A\u9009\u62E9 " + maxRange + " \u5929"
  },
  vanCascader: {
    select: '请选择'
  },
  vanContactCard: {
    addText: '添加联系人'
  },
  vanContactList: {
    addText: '新建联系人'
  },
  vanPagination: {
    prev: '上一页',
    next: '下一页'
  },
  vanPullRefresh: {
    pulling: '下拉即可刷新...',
    loosing: '释放即可刷新...'
  },
  vanSubmitBar: {
    label: '合计：'
  },
  vanCoupon: {
    unlimited: '无使用门槛',
    discount: discount => discount + "\u6298",
    condition: condition => "\u6EE1" + condition + "\u5143\u53EF\u7528"
  },
  vanCouponCell: {
    title: '优惠券',
    count: count => count + "\u5F20\u53EF\u7528"
  },
  vanCouponList: {
    exchange: '兑换',
    close: '不使用优惠券',
    enable: '可用',
    disabled: '不可用',
    placeholder: '请输入优惠码'
  },
  vanAddressEdit: {
    area: '地区',
    postal: '邮政编码',
    areaEmpty: '请选择地区',
    addressEmpty: '请填写详细地址',
    postalEmpty: '邮政编码不正确',
    defaultAddress: '设为默认收货地址'
  },
  vanAddressEditDetail: {
    label: '详细地址',
    placeholder: '街道门牌信息'
  },
  vanAddressList: {
    add: '新增地址'
  }
};
exports.default = _default;