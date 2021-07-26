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
          a {
            color: ${props.theme.link};
            text-decoration: none;
          }

          a:hover {
            color: ${props.theme.linkHover};
          }
        `}
      </style>
    </div>
  );
}
