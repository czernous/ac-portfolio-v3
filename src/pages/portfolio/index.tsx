import { fakePortfolio } from '../../mock-data/fake-portfolio';
import { useContext, useEffect } from 'preact/hooks';
import { AppContext } from '../_app';
import { IAppState } from '../../interfaces/app-state';
import MainLayout from '../../layouts/main-layout/MainLayout';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import { gsap } from 'gsap';
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

export default function Portfolio() {
  const ctx = useContext(AppContext);
  const appState: IAppState = { ...ctx } as IAppState;
    gsap.registerPlugin(ScrollTrigger);
  const animateCards = () => {
      gsap.set('.portfolio-item', {
          opacity: 0,
          scale: 0.9,
      });
      gsap.set('.portfolio-item h3', {
      opacity: 0,
      y: 75,
      scale: 0.9,
    });
    gsap.set('.portfolio-item__image', {
      opacity: 0,
      y: 50,
      scale: 0.9,
    });
    ScrollTrigger.batch('.portfolio-item', {
      onEnter: (batch) => {
        batch.forEach((item, index) => {
          const settings = {
              opacity: 1,
              y: 0,
              scale: 1,
              stagger: 0.4,
              delay: index * 0.3,
          }
            gsap.to(item.children, settings);
            gsap.to(item.children[3], settings)
            gsap.to(item, settings);
        });

      },
      once: true,
    });
  };
  useEffect(() => {
    animateCards();
  }, []);
  return (
    <MainLayout theme={appState.data.style}>
      <Navbar
        theme={appState.data.style}
        toggleTheme={appState.toggleFunc}
        mobileHeight="0px"
      />
      <div className="container-xxl">
        <h1 className="page-title my-5 mx-3">Portfolio</h1>
        <div className="portfolio">
          {fakePortfolio.map((item) => {
            const { image, description, title, url, codeUrl } = item;
            return (
              <div className="portfolio-item">
                <h3>{title}</h3>
                <img
                  className="portfolio-item__image img-fluid"
                  src={image}
                  alt=""
                />
                <p>{description}</p>
                <div className="portfolio-item__footer d-flex justify-content-between">
                  <Button
                    type="link"
                    href={url}
                    text="Learn more"
                    fontWeight="700"
                    width="2em"
                    marginTop=""
                    borderWidth="3px"
                    theme={appState.data.style}
                  />
                  <a className="repo-link-btn" href={codeUrl}>{`</>`}</a>
                </div>
              </div>
            );
          })}
          <style jsx>
            {`
              .portfolio {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
                gap: 1em;
              }

              .portfolio-item {
                padding: 1em;
                margin: 1em;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
              }

              .portfolio-item h3 {
                color: ${appState.data.style.headerText};
                font-weight: 700;
              }

              .portfolio-item__image {
                max-height: 200px;
                width: 100%;
                object-fit: cover;
                margin: 1em 0;
              }
              .portfolio-item__footer {
                display: flex;
                align-items: center;
              }
              .portfolio-item__footer > a.repo-link-btn {
                font-size: 1.5em;
                font-weight: 700;
                transition: transform 0.3s cubic-bezier(0.3, 0.33, 0.28, 0.32);
              }
              .portfolio-item__footer > a.repo-link-btn:hover {
                transform: scale3d(1.1, 1.2, 1.1);
              }
            `}
          </style>
        </div>
      </div>
    </MainLayout>
  );
}
