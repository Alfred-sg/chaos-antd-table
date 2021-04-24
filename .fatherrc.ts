import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  entry: 'src/index.tsx',
  esm: {
    type: 'babel',
    importLibToEs: true,
  },
  cjs: 'babel',
  extraBabelPlugins: [['import', { libraryName: 'antd', style: true }]],
  lessInBabelMode: true,
};

export default options;
