import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">{title || 'Bienvenue au'} </h1>
          <h1 className="hero-title">
            <span className="text-color-main">{name || 'Nom de léglise'}</span>
          </h1>
          <h2 className="hero-subtitle">{subtitle || 'Sous titre'}</h2>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'En savoir plus'}
              </Link>
            </span>
          </p>
          <p className="hero-cta">
            <a
              className="cta-btn cta-btn--hero"
              href="https://tithe.ly/give?c=1918004"
              target="_blank"
              rel="noopener noreferrer"
            >
              {cta || 'Don et Dîme'}
            </a>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
