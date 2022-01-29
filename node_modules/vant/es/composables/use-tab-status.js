import { inject } from 'vue'; // eslint-disable-next-line

export var TAB_STATUS_KEY = Symbol();
export var useTabStatus = () => inject(TAB_STATUS_KEY, null);