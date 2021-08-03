import MainLayout from 'layouts/main-layout/MainLayout';
import Navbar from 'components/Navbar/Navbar';
import { useContext } from 'preact/hooks';
import { AppContext } from './_app';
import { IAppState } from '../interfaces/app-state';
import Button from '../components/Button/Button';

export default function Contact() {
  const ctx = useContext(AppContext);
  const appState = { ...ctx } as IAppState;

  return (
    <MainLayout theme={appState.data.style}>
      <Navbar
        theme={appState.data.style}
        toggleTheme={appState.toggleFunc}
        mobileHeight="0px"
      />
      <div className="container-xxl">
        <h1 className="page-title my-5 mx-3">Contact</h1>
        <div className="contact col-xs-12 col-md-6 mx-3">
          <form action='https://formspree.io/meqraoeo' target='_blank' method='POST' className="contact-form">
            <div className="contact-form__field mb-3 d-flex flex-column">
              <label htmlFor="name" className="form-label mb-2">
                Full name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="fullName"
                placeholder="Enter your full name"
              />
            </div>
            <div className="contact-form__field mb-3 d-flex flex-column">
              <label htmlFor="email" className="form-label mb-2">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="fullName"
                placeholder="Enter your email"
              />
            </div>
            <div className="contact-form__field d-flex flex-column">
              <label htmlFor="message" className="form-label mb-2">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                aria-describedby="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <Button
              type="button"
              buttonType="submit"
              text="Send"
              fontWeight="700"
              customClasses="mt-3 py-1"
              containerWidth="100%"
              width="44%"
              marginTop=""
              borderWidth="3px"
              theme={appState.data.style}
            />
          </form>
        </div>
      </div>
        <style jsx>
            {`
              .contact-form__field > input,
              .contact-form__field > textarea {
                background: ${appState.data.style.inputBackground};
                border: none;
                padding: 0.5em 1em;
              }
             
              .contact-form__field > input::placeholder,
              .contact-form__field > textarea::placeholder {
                color: ${appState.data.style.placeholderText}
              }
              textarea {
                min-height: 10em;
                resize: vertical;
              }
            `}
        </style>
    </MainLayout>
  );
}