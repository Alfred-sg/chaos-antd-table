import React, { useRef } from 'react';
import Table from 'chaos-antd-table';

console.log(333)

export default () => {
  const tableRef = useRef(null);
  const columns = [{
    title: 'id',
    key: 'id',
    filter: true,
    editor: true,
    type: 'input',
  }, {
    title: '操作',
    key: 'actions',
    render(text, row){
      return <a onClick={() => tableRef.current && tableRef.current.show(row)}>编辑</a>
    }
  }];
  console.log(111)

  return (
    <Table 
      columns={columns}
      dataSource={[{ id: 111 }]}
      pagination={false}
      onFilter={vals => console.log(vals)}
      onEditorSave={vals => console.log(vals)}
      ref={tableRef}
    />
  )
}