import React from 'react';
import * as ChaosForm from 'chaos-form-antd4';

const Fields: {
  [key: string]: React.FunctionComponent<any> | React.ClassicComponent<any>;
} = {
  'auto-complete': ChaosForm.AutoComplete,
  'cascader': ChaosForm.Cascader,
  'checkbox': ChaosForm.Checkbox,
  'date-picker': ChaosForm.DatePicker,
  'input': ChaosForm.Input,
  'input-number': ChaosForm.InputNumber,
  'metions': ChaosForm.Mentions,
  'radio': ChaosForm.Radio,
  'rate': ChaosForm.Rate,
  'select': ChaosForm.Select,
  'slider': ChaosForm.Slider,
  'switch': ChaosForm.Switch,
  'transfer': ChaosForm.Transfer,
  'tree-select': ChaosForm.TreeSelect,
  'time-picker': ChaosForm.TimePicker,
  'upload': ChaosForm.Upload,
  'list': ChaosForm.List,
};

export default Fields;