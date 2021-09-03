import MainLayout from "layouts/main-layout/MainLayout";
import Navbar from "components/Navbar/Navbar";
import { useContext, useEffect } from "preact/hooks";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { AppContext } from "./_app";
import { IAppState } from "../interfaces/app-state";

export default function Contact() {
  const ctx = useContext(AppContext);
  const appState = { ...ctx } as IAppState;

  const animateAboutPage = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".about__text",
      {
        duration: 0.8,
        y: 100,
        opacity: 0,
        delay: 0.2,
        stagger: 0.1,
      },
      {
        duration: 0.8,
        y: 0,
        opacity: 1,
        delay: 0.2,
        stagger: 0.1,
      },
    );

    tl.fromTo(
      ".about__image",
      {
        duration: 0.9,
        x: 100,
        opacity: 0,
        delay: -0.1,
      },
      {
        duration: 0.9,
        x: 0,
        opacity: 1,
        delay: -0.1,
      },
    );
  };

  useEffect(() => {
    animateAboutPage();
  }, []);

  return (
    <MainLayout theme={appState.data.style}>
      <Navbar
        theme={appState.data.style}
        toggleTheme={appState.toggleFunc}
        mobileHeight="0px"
      />
      <div className="container-xxl">
        <h1 className="page-title my-5 mx-3">About</h1>
        <div className="mx-3 about d-flex justify-content-between flex-sm-column-reverse flex-md-row">
          <div className="about__text col-sm-12 col-md-6">
            <p>
              Hi, my name is Anton and I’m a Full Stack Web Developer. My
              fascination with computers began at a young age. Every computer I
              owned, I built for myself. But life happened. I was forced to get
              a job to earn an income to support myself. So I went to
              university, graduated with a degree in English and became an
              interpreter and then a teacher.
            </p>
            <p>
              I travelled and taught all over the world. But I couldn’t repress
              the feeling of what it would be like to have followed my instinct
              to work with technology. After much thought, I decided to teach
              myself code, got a job with an IT company and have never looked
              back.
            </p>
            <p>
              Since working in IT I have come across my fair share of poor
              quality websites. This has inspired me to start a business
              creating high-quality custom websites that align with your vision
              and brand. Hence, setting you apart from your competition.
            </p>
            <p>
              My expertise in both front end and back end development means that
              I am a one stop business. I offer frontend services that include
              responsiveness and seo. But I can also help you with your
              website’s backend, for instance creating custom admin panels or
              integrating new frontends with the existing backend.
            </p>
            <p>
              Working with me follows a process which includes: <br />
              <ul>
                <br />
                <li>Reading and analyzing your work brief</li>
                <li>Creating a mockup</li>
                <li>Building your website</li>
              </ul>
              So are you ready to take your business to the next step by
              improving your rankings, reducing bounce rates andincreasing your
              revenue? <br />
              <br />
              <Link href="/contact">
                <a style={{ fontWeight: 500, textDecoration: "underline" }}>
                  Contact me
                </a>
              </Link>{" "}
              to get a quote
            </p>
          </div>
          <div className="about__image col-sm-12 col-md-5 d-xs-none mb-3">
            <Image
              src={`ac-dev-portfolio/portfolio_images/site_assets/ac-profile-image_cbgpjg.webp`}
              className="image"
              alt="Anton's picture"
              layout="fill"
              objectFit="cover"
              blurDataURL={`/e_blur:1793/ac-dev-portfolio/portfolio_images/site_assets/ac-profile-image_cbgpjg.webp`}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .about__image {
          position: relative;
          min-height: 400px;
        }
      `}</style>
    </MainLayout>
  );
}
