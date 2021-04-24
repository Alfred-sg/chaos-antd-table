export type Entity = {
  [key: string]: any;
};

export type Field = {
  fieldType: string;
  name: string;
  label: string;
  [key: string]: any;
};

export type Column = {
  key: string;
  type: string;
  editor: boolean;
  [key: string]: any;
  fieldProps: {
    [key: string]: any;
  }
};