import IMainLayoutProps from 'interfaces/main-layout-props';
import mainLayout from 'styles/main-layout';

export default function MainLayout(props: IMainLayoutProps) {
  return (
    <div className="page-wrapper">
      {props.children}
      <style jsx global>
        {mainLayout}
      </style>
      <style jsx global>
        {`
          body {
            background: ${props.theme.background};
            color: ${props.theme.text};
          }
          a {
            color: ${props.theme.link};
            text-decoration: none;
            font-weight: 600;
          }

          a:hover {
            color: ${props.theme.linkHover};
          }
          .page-wrapper {
            margin-top: 90px;
          }
        `}
      </style>
    </div>
  );
}
