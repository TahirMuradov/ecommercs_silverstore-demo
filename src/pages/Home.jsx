import React from "react";
import Helmet from "../components/helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import heroimg from "../assets/images/hero-img.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles/home.scss";
import Services from "../services/Services";
import data from '../assets/data/products'
import ProductList from "../components/UI/ProductList";
import Oclok from "../components/UI/Oclok";
const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title="Ana sehife">
     
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="hero__content">
                <p className="hero__subtitle">Tredingin product in {year}</p>
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid autem distinctio at vitae eligendi eius sequi
                  </p>
                <motion.button whileHover={{ scale: 1.3 }} className="buy__btn">
                  <Link to="/shop">Shop Now</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="12">
              <img src={heroimg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <Oclok/>
     <Container>
      <Row>

  <ProductList data={data}/>
      </Row>
     </Container>
    </Helmet>
  );
};

export default Home;
