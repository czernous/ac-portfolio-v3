import Link from 'next/link';

const Button = (props: any) => {
  const button = (
    <button className="btn submit" type={props.buttonType}>
      {props.text}
    </button>
  );
  const link = (
    <Link href={props.href}>
      <a className="btn">{props.text}</a>
    </Link>
  );

  return (
    <>
      {props.type === 'button' ? (
        <div className="btn-container">{button}</div>
      ) : (
        <div className="btn-container">{link}</div>
      )}{' '}
      <style jsx global>{`
        .btn-container {
          position: relative;
          overflow: hidden;
          z-index: 2;
          display: flex;
          width: fit-content;
        }

        .btn {
          font-weight: ${props.fontWeight};
          font-size: ${props.fontSize};
          padding: 0.5em ${props.width};
          color: ${props.theme.mainContrast};
          box-shadow: none;
          border: none;
          background-color: transparent;
          transition: color 0.5s, transform 0.2s, background-color 0.2s;
        }

        .btn:hover {
          color: ${props.theme.background};
        }

        .btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: ${props.borderWidth} solid ${props.theme.mainContrast};
          transition: opacity 0.3s, border 0.3s;
        }

        .btn:hover::before {
          opacity: 0;
        }

        .btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 150%;
          height: 400%;
          background-color: ${props.theme.mainContrast};
          border-color: transparent;
          border-radius: 50%;
          transform: translate(-12%, -20%) scale(0.1);
          opacity: 0;
          z-index: -1;
          transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
        }

        .btn:hover::after {
          opacity: 1;
          transform-origin: center;
          transform: scale(1) translate(-12%, -20%);
        }
      `}</style>
    </>
  );
};

export default Button;
