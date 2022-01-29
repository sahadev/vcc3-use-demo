import { buildProps, definePropType } from '../../../utils/props.mjs';
import '../../../utils/util.mjs';
import { isObject } from '@vue/shared';

const dateTableProps = buildProps({
  selectedDay: {
    type: definePropType(Object)
  },
  range: {
    type: definePropType(Array)
  },
  date: {
    type: definePropType(Object),
    required: true
  },
  hideHeader: {
    type: Boolean
  }
});
const dateTableEmits = {
  pick: (value) => isObject(value)
};

export { dateTableEmits, dateTableProps };
//# sourceMappingURL=date-table.mjs.map
