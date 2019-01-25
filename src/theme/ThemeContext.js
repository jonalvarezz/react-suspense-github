import { createContext } from 'react';

// Same as AntD
// https://ant.design/docs/react/customize-theme
export const defaultTheme = {
  primaryColor: '#1890ff', // primary color for all components
  linkColor: '#1890ff', // link color
  successColor: '#52c41a', // success state color
  warningColor: '#faad14', // warning state color
  errorColor: '#f5222d', // error state color
  fontSizeBase: '14px', // major text font size
  headingColor: 'rgba(0, 0, 0, .85)', // heading text color
  textColor: 'rgba(0, 0, 0, .65)', // major text color
  textColorSecondary: 'rgba(0, 0, 0, .45)', // secondary text color
  disabledColor: 'rgba(0, 0, 0, .25)', // disable state color
  borderRadiusBase: '4px', // major border radius
  borderColorBase: '#d9d9d9', // major border color
  boxShadowBase: '0 2px 8px rgba(0, 0, 0, .15)' // major shadow for layers
};

const Context = createContext(defaultTheme);

export default Context;
