import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  AiFillGithub,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Type from './Type';
import Avatar from '../../Assets/avatar.png';

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = Avatar;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
                {' '}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I&apos;M
                <strong className="main-name"> RITIKA RAWAT</strong>
              </h1>

              <div className="type-sec" style={{ padding: 50, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={Avatar}
                alt="home pic"
                className={`img-fluid home-image ${imageLoaded ? 'fade-in' : ''}`}
                style={{ maxHeight: '450px' }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to
                {' '}
                <span className="purple">connect </span>
                with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/ritikarawat220"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/Ritikarawat22"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/rawatritika/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
