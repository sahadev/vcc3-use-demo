export default {
  name: 'Navn',
  tel: 'Telefon',
  save: 'Lagre',
  confirm: 'Bekreft',
  cancel: 'Avbryt',
  delete: 'Slett',
  loading: 'Laster...',
  noCoupon: 'Ingen kuponger',
  nameEmpty: 'Vennligst fyll inn navn',
  telInvalid: 'Ugyldig telefonnummer',
  vanCalendar: {
    end: 'Slutt',
    start: 'Start',
    title: 'Kalendar',
    startEnd: 'Start/Slutt',
    weekdays: ['Søn', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'Lør'],
    monthTitle: (year, month) => year + "/" + month,
    rangePrompt: maxRange => "Maks. " + maxRange + " dager"
  },
  vanCascader: {
    select: 'Plukke ut'
  },
  vanContactCard: {
    addText: 'Legg til kontakt info'
  },
  vanContactList: {
    addText: 'Legg til ny kontakt'
  },
  vanPagination: {
    prev: 'Forrige',
    next: 'Neste'
  },
  vanPullRefresh: {
    pulling: 'Dra for oppdatering...',
    loosing: 'Mist for oppdatering...'
  },
  vanSubmitBar: {
    label: 'Totalt：'
  },
  vanCoupon: {
    unlimited: 'Uendelig',
    discount: discount => discount * 10 + "% avslag",
    condition: condition => "Minst " + condition
  },
  vanCouponCell: {
    title: 'Kupong',
    count: count => "Du har " + count + " kuponger"
  },
  vanCouponList: {
    exchange: 'Bytte',
    close: 'Lukk',
    enable: 'Tilgjengelig',
    disabled: 'Utilgjengelig',
    placeholder: 'Kupong kode'
  },
  vanAddressEdit: {
    area: 'Område',
    postal: 'Postkode',
    areaEmpty: 'Vennligst fyll inn område',
    addressEmpty: 'Addresse kan ikke være tomt',
    postalEmpty: 'Feil postkode',
    defaultAddress: 'Sett som standard adresse'
  },
  vanAddressEditDetail: {
    label: 'Adresse',
    placeholder: 'Adresse'
  },
  vanAddressList: {
    add: 'Legg til ny adresse'
  }
};