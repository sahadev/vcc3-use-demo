"use strict";

exports.__esModule = true;
exports.default = void 0;

var _vue = require("vue");

var _utils = require("../utils");

var _use = require("@vant/use");

var _useExpose = require("../composables/use-expose");

// Utils
// Composables
var [name, bem] = (0, _utils.createNamespace)('form');
var formProps = {
  colon: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  showError: Boolean,
  labelWidth: _utils.numericProp,
  labelAlign: String,
  inputAlign: String,
  scrollToError: Boolean,
  validateFirst: Boolean,
  submitOnEnter: _utils.truthProp,
  validateTrigger: (0, _utils.makeStringProp)('onBlur'),
  showErrorMessage: _utils.truthProp,
  errorMessageAlign: String
};

var _default = (0, _vue.defineComponent)({
  name,
  props: formProps,
  emits: ['submit', 'failed'],

  setup(props, _ref) {
    var {
      emit,
      slots
    } = _ref;
    var {
      children,
      linkChildren
    } = (0, _use.useChildren)(_utils.FORM_KEY);

    var getFieldsByNames = names => {
      if (names) {
        return children.filter(field => names.includes(field.name));
      }

      return children;
    };

    var validateSeq = names => new Promise((resolve, reject) => {
      var errors = [];
      var fields = getFieldsByNames(names);
      fields.reduce((promise, field) => promise.then(() => {
        if (!errors.length) {
          return field.validate().then(error => {
            if (error) {
              errors.push(error);
            }
          });
        }
      }), Promise.resolve()).then(() => {
        if (errors.length) {
          reject(errors);
        } else {
          resolve();
        }
      });
    });

    var validateAll = names => new Promise((resolve, reject) => {
      var fields = getFieldsByNames(names);
      Promise.all(fields.map(item => item.validate())).then(errors => {
        errors = errors.filter(Boolean);

        if (errors.length) {
          reject(errors);
        } else {
          resolve();
        }
      });
    });

    var validateField = name => {
      var matched = children.find(item => item.name === name);

      if (matched) {
        return new Promise((resolve, reject) => {
          matched.validate().then(error => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });
      }

      return Promise.reject();
    };

    var validate = name => {
      if (typeof name === 'string') {
        return validateField(name);
      }

      return props.validateFirst ? validateSeq(name) : validateAll(name);
    };

    var resetValidation = name => {
      if (typeof name === 'string') {
        name = [name];
      }

      var fields = getFieldsByNames(name);
      fields.forEach(item => {
        item.resetValidation();
      });
    };

    var scrollToField = (name, options) => {
      children.some(item => {
        if (item.name === name) {
          item.$el.scrollIntoView(options);
          return true;
        }

        return false;
      });
    };

    var getValues = () => children.reduce((form, field) => {
      form[field.name] = field.formValue.value;
      return form;
    }, {});

    var submit = () => {
      var values = getValues();
      validate().then(() => emit('submit', values)).catch(errors => {
        emit('failed', {
          values,
          errors
        });

        if (props.scrollToError && errors[0].name) {
          scrollToField(errors[0].name);
        }
      });
    };

    var onSubmit = event => {
      (0, _utils.preventDefault)(event);
      submit();
    };

    linkChildren({
      props
    });
    (0, _useExpose.useExpose)({
      submit,
      validate,
      scrollToField,
      resetValidation
    });
    return () => (0, _vue.createVNode)("form", {
      "class": bem(),
      "onSubmit": onSubmit
    }, [slots.default == null ? void 0 : slots.default()]);
  }

});

exports.default = _default;