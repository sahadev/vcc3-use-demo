import { buildProps } from '../../../utils/props.mjs';
import '../../../hooks/index.mjs';
import { radioEmits } from './radio.mjs';
import { useSizeProp } from '../../../hooks/use-common-props/index.mjs';

const radioGroupProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: ""
  },
  fill: {
    type: String,
    default: ""
  },
  textColor: {
    type: String,
    default: ""
  }
});
const radioGroupEmits = radioEmits;

export { radioGroupEmits, radioGroupProps };
//# sourceMappingURL=radio-group.mjs.map
