import React from 'react'
import './services.scss'
import serviceData from '../assets/data/serviceData'
import { Col, Container, Row } from 'reactstrap'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section className='services'>
        <Container>
            <Row>
                {
                serviceData.map((item, index)=>(
                    <Col lg='3' key={index}>
                        <motion.div className='motion' style={{background:`${item.bg}`}} whileHover={{scale:1.18}}>
<span>
    <i className={item.icon}></i>
</span>
    <p>{item.subtitle}</p>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    </section>
  )
}

export default Services