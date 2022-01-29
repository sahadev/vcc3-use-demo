"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  name: 'Nome',
  tel: 'Fone',
  save: 'Salvar',
  confirm: 'Confirmar',
  cancel: 'Cancelar',
  delete: 'Excluir',
  loading: 'Carregando...',
  noCoupon: 'Nenhum cupom',
  nameEmpty: 'Por favor, preencha o nome',
  telInvalid: 'Telefone em formato inválido',
  vanCalendar: {
    end: 'Fim',
    start: 'Início',
    title: 'Calendário',
    startEnd: 'Início/Fim',
    weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
    monthTitle: (year, month) => month + "/" + year,
    rangePrompt: maxRange => "Escolha no m\xE1ximo " + maxRange + " dias"
  },
  vanCascader: {
    select: 'Selecione'
  },
  vanContactCard: {
    addText: 'Adicionar informações de contato'
  },
  vanContactList: {
    addText: 'Adicionar novo contato'
  },
  vanPagination: {
    prev: 'Anterior',
    next: 'Próximo'
  },
  vanPullRefresh: {
    pulling: 'Puxe para atualizar...',
    loosing: 'Solte para atualizar...'
  },
  vanSubmitBar: {
    label: 'Total：'
  },
  vanCoupon: {
    unlimited: 'Ilimitado',
    discount: discount => discount * 10 + "% de desconto",
    condition: condition => "Pelo menos " + condition
  },
  vanCouponCell: {
    title: 'Cupom',
    count: count => "Voc\xEA possui " + count + " cupom(ns)"
  },
  vanCouponList: {
    exchange: 'Usar',
    close: 'Fechar',
    enable: 'Disponível',
    disabled: 'Indisponível',
    placeholder: 'Código do cupom'
  },
  vanAddressEdit: {
    area: 'Área',
    postal: 'CEP',
    areaEmpty: 'Por favor, selecione uma área de recebimento',
    addressEmpty: 'Endereço não pode ser vazio',
    postalEmpty: 'CEP inválido',
    defaultAddress: 'Usar como endereço padrão'
  },
  vanAddressEditDetail: {
    label: 'Endereço',
    placeholder: 'Endereço'
  },
  vanAddressList: {
    add: 'Adicionar novo endereço'
  }
};
exports.default = _default;