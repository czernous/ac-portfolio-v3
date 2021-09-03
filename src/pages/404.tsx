import MainLayout from "layouts/main-layout/MainLayout";
import Link from "next/link";
import theme from "styles/theme";

export default function Custom404(props: any) {
  return (
    <MainLayout theme={props.theme}>
      <div className="container-xxl d-flex flex-column flex-sm-row justify-content-center align-items-center min-vh-100">
        <div className="error-code text-center me-5">
          <h1 className="error-code__text fw-700">404</h1>
        </div>
        <div className="error-message">
          <p>The page you&apos;ve requested doesn&apos;t exist</p>
          <small className="text-center">
            click{" "}
            <Link href="/">
              <a className="error-message__link">here</a>
            </Link>{" "}
            to return to the home page
          </small>
        </div>
      </div>
      <style jsx>{`
        .error-code__text {
          font-size: 5em;
          font-weight: 700;
          position: relative;
        }
        .error-code__text::after {
          content: "";
          position: absolute;
          top: 20%;
          right: -20%;
          height: 65%;
          width: 7px;
          background: ${props.theme.headerText};
        }

        @media (max-width: 573px) {
          .error-code__text::after {
            display: none;
          }
        }
        .error-message p {
          margin-bottom: -0.1em;
          font-size: 1.3em;
        }

        @media (max-width: 650px) {
          .error-message p {
            font-size: 1em;
          }
        }

        .error-message small {
          font-size: 0.8em;
        }

        .error-message__link {
          font-weight: 700;
          text-decoration: underline;
          text-decoration-style: dotted;
          text-decoration-thickness: 3px;
          transition: all 0.3s ease;
        }
        .error-message__link:hover {
          text-decoration-style: solid;
        }
      `}</style>
    </MainLayout>
  );
}
