import MainLayout from 'layouts/main-layout/MainLayout';
import theme from 'styles/theme';

let colorScheme = theme.colors.dark;

export default function Custom404() {
  return (
    <MainLayout theme={colorScheme}>
      <h1>404 - Page Not Found</h1>
    </MainLayout>
  );
}
