import MainLayout from 'layouts/main-layout/MainLayout';
import theme from 'styles/theme';

export default function Custom404(props: any) {
  return (
    <MainLayout theme={props.theme}>
      <h1>404 - Page Not Found</h1>
    </MainLayout>
  );
}
