import React, { useEffect, useCallback } from 'react';
import { Modal } from 'antd';
import { Form } from 'chaos-form-antd4';
import Fields from './Fields';
import { Entity, Field } from './types';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

export default ({
  fields,
  visible,
  dataSource,
  onOk,
  onCancel,
  transform,
  format,
  formProps,
  ...rest
}: {
  fields: Field[];
  visible: boolean;
  dataSource?: Entity;
  onOk: (entity: Entity) => void;
  onCancel: () => void;
  format?: (entity: Entity) => Entity;
  transform?: (entity: Entity) => Entity;
  formProps?: { [key: string]: any };
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible){
      if (dataSource){
        form.setFieldsValue(format ? format(dataSource) : dataSource);
      }
    } else {
      form.resetFields();
    };
  }, [visible, dataSource]);

  const handleOk = useCallback(() => {
    form.validateFields().then((vals: Entity) => {
      onOk(transform ? transform(vals) : vals);
    });
  }, []);

  return (
    <Modal
      title={dataSource ? '编辑' : '新增'}
      {...rest}
      visible={visible}
      onCancel={onCancel}
      onOk={handleOk}
    >
      <Form {...layout} {...formProps} form={form}>
        {fields.map(field => {
          console.log(field)
          const { fieldType, ...fieldProps } = field;
          const Field = Fields[fieldType];
          // @ts-ignore
          return <Field {...fieldProps} />;
        })}
      </Form>
    </Modal>
  );
}