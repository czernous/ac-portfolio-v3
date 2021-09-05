import IMainLayoutProps from 'interfaces/main-layout-props';

export default function MainLayout(props: IMainLayoutProps) {
  return (
    <div className="page-wrapper">
      {props.children}
      <style jsx global>
        {`
          .page-wrapper {
            display: flex;
          }

          a {
            color: ${props.theme.link};
            text-decoration: none;
          }

          a:not(.nav-links__item a, .btn):hover {
            color: ${props.theme.linkHover};
          }
        `}
      </style>
    </div>
  );
}
