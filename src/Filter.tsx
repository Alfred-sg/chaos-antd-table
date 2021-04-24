import React, { useCallback } from 'react';
import { Button, Row, Col } from 'antd';
import { Form } from 'chaos-form-antd4';
import Fields from './Fields';
import { Entity, Field } from './types';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

export default ({
  fields,
  onFilter,
  ...rest
}: {
  fields: Field[];
  onFilter: (entity?: Entity) => void;
  formProps?: { [key: string]: any };
}) => {
  const [form] = Form.useForm();
  const handleSearch = useCallback(() => {
    const vals = form.getFieldsValue();
    let filters: undefined | { [key: string]: any };
    Object.keys(vals).forEach(key => {
      if (vals[key] !== undefined){
        if (!filters) filters = {};
        filters[key] = vals[key];
      }
    })
    onFilter && onFilter(filters);
  }, []);
  const handleReset = useCallback(() => {
    form.resetFields();
    onFilter && onFilter();
  }, []);

  return (
    <Form {...layout} {...rest} form={form} className="chaos-table-filter">
      <Row gutter={12}>
        {fields.map(field => {
          const { fieldType, ...fieldProps } = field;
          const Field = Fields[fieldType];
          return (
            <Col span={6}>
              <Field {...fieldProps} />
            </Col>
          );
        })}
        <Col span={6} className="chaos-table-filter-btns">
          <Button type="primary" onClick={handleSearch}>查询</Button>
          <Button onClick={handleReset} style={{marginLeft: 10}}>重置</Button>
        </Col>
      </Row>
    </Form>
  );

}