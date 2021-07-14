import theme from 'styles/theme';

export const themeReducer = (state: any, action: any) => {
  switch (action) {
    case 'SET_LIGHT_THEME':
      return (state = {
        data: {
          style: theme.colors.light,
          name: 'LIGHT',
        },
      });
    case 'SET_DARK_THEME':
      return (state = {
        data: {
          style: theme.colors.dark,
          name: 'DARK',
        },
      });
    default:
      throw new Error('INVALID THEME');
  }
};
