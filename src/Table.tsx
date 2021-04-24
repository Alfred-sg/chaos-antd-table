import React, { useCallback, useMemo, forwardRef, useImperativeHandle } from 'react';
import { Table } from 'antd';
import Filter from './Filter';
import Editor from './Editor';
import useModal from './hooks/useModal';
import { Entity, Column } from './types';
import './index.less';

export default forwardRef(({
  columns,
  onFilter,
  formatForEditor,
  transformForEditor,
  onEditorSave,
  modalProps,
  editorFormProps,
  filterFormProps,
  ...rest
}: {
  columns: Column[];
  onFilter: (entity?: Entity) => void;
  formatForEditor?: (entity: Entity) => Entity;
  transformForEditor?: (entity: Entity) => Entity;
  onEditorSave: (vals: Entity, entity: Entity) => void;
  modalProps: { [key: string]: any };
  editorFormProps?: { [key: string]: any };
  filterFormProps?: { [key: string]: any };
}, ref) => {
  const finalColumns = useMemo(() => {
    return columns.filter(column => column.table !== false)
      .map(column => {
        const { fieldProps, type, ...rest } = column;
        return {
          ...rest,
          dataIndex: rest.key,
        };
      });
  }, [columns]);
  const filters = useMemo(() => {
    return columns.filter(column => !!column.filter)
      .map(column => ({
        ...column.fieldProps,
        name: column.key,
        fieldType: column.type,
        label: column.title,
        required: false,
      }));
  }, [columns]);
  const fields = useMemo(() => {
    return columns.filter(column => !!column.editor)
      .map(column => ({
        ...column.fieldProps,
        name: column.key,
        fieldType: column.type,
        label: column.title,
      }));
  }, [columns]);

  const { visible, dataSource: modalDataSource, show, hide } = useModal();
  const handleOk = useCallback((vals: Entity) => {
    onEditorSave && onEditorSave(vals, modalDataSource as Entity);
  }, [modalDataSource]);

  useImperativeHandle<any, any>(ref, () => ({
    show,
    hide,
  }));

  console.log(visible)
  return (
    <div>
      <Filter fields={filters} onFilter={onFilter} {...filterFormProps} />

      <Table {...rest} className="chaos-table-content" columns={finalColumns} />

      {fields.length && onEditorSave && (
        <Editor 
          {...modalProps}
          formProps={editorFormProps}
          fields={fields}
          visible={visible}
          dataSource={modalDataSource}
          onOk={handleOk}
          onCancel={hide}
          format={formatForEditor}
          transform={transformForEditor}
        />
      )}
    </div>
  )
});