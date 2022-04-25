import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Foto.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              SEKILAS <span className="purple"> TENTANG</span> DIRI SAYA
            </h1>
            <p className="home-about-body">
              Hallo Semua Perkenalkan Nama saya, <span className="purple"> Leo pradana</span> 🤷‍♂️
              <br />
              <br /> Saat ini saya sedang menempuh pendidikan di
              <i>
                <b className="purple"> Politeknik Negeri Lampuang. </b>
              </i>
              <br />
              <br />
              saat ini saya sudah memiliki beberapa &nbsp;
              <i>
                <b className="purple"> skill  </b> dan 
                pengetahuan {" "}
                <b className="purple">
                tentang bahasa pemerograman
                </b>
              </i>
              <br />
              <br />
              saat ini, saya juga menerapkan semangat saya untuk mengembangkan produk dengan<b className="purple">Node.js</b> dan
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library dan Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js dan Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1> Temukan saya di </h1>
            <p>
              Jangan ragu untuk <span className="purple">terhubung  </span> dengan saya
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Leopradana68"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/leopradana01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in//"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://instagram.com/leopradana00?utm_medium=copy_link"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
