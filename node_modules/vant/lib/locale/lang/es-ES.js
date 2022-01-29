"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: 'Nombre',
  tel: 'Teléfono',
  save: 'Guardar',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
  delete: 'Eliminar',
  loading: 'Cargando...',
  noCoupon: 'Sin cupones',
  nameEmpty: 'Por favor rellena el nombre',
  telInvalid: 'Teléfono inválido',
  vanCalendar: {
    end: 'Fin',
    start: 'Inicio',
    title: 'Calendario',
    startEnd: 'Inicio/Fin',
    weekdays: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    monthTitle: (year, month) => year + "/" + month,
    rangePrompt: maxRange => "Elija no m\xE1s de " + maxRange + " d\xEDas"
  },
  vanCascader: {
    select: 'Seleccione'
  },
  vanContactCard: {
    addText: 'Añadir información de contacto'
  },
  vanContactList: {
    addText: 'Añadir nuevo contacto'
  },
  vanPagination: {
    prev: 'Anterior',
    next: 'Siguiente'
  },
  vanPullRefresh: {
    pulling: 'Tira para recargar...',
    loosing: 'Suelta para recargar...'
  },
  vanSubmitBar: {
    label: 'Total：'
  },
  vanCoupon: {
    unlimited: 'Ilimitado',
    discount: discount => discount * 10 + "% de descuento",
    condition: condition => "Al menos " + condition
  },
  vanCouponCell: {
    title: 'Cupón',
    count: count => "You have " + count + " coupons"
  },
  vanCouponList: {
    exchange: 'Intercambio',
    close: 'Cerrar',
    enable: 'Disponible',
    disabled: 'No disponible',
    placeholder: 'Código del cupón'
  },
  vanAddressEdit: {
    area: 'Área',
    postal: 'Código Postal',
    areaEmpty: 'Por favor selecciona una área de recogida',
    addressEmpty: 'La dirección no puede estar vacia',
    postalEmpty: 'Código postal inválido',
    defaultAddress: 'Establecer como dirección por defecto'
  },
  vanAddressEditDetail: {
    label: 'Dirección',
    placeholder: 'Dirección'
  },
  vanAddressList: {
    add: 'Anadir dirección'
  }
};
exports.default = _default;