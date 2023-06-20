import React from 'react'
import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { motion } from 'framer-motion'
import '../../styles/productcard.scss'
const ProductCard = ({item}) => {
  return (
  <>
  <Col lg='3'md='4' className='mb-2'>
<div className="product__item">
    <Link to={`/shop/${item.id}`}>
        <div className="product__img">
            <motion.img whileHover={{scale:0.9}} src={item.imgUrl}/>
        </div>
        <div className="product__info p-2">
            <h3 className="product__name">{item.productName}</h3>
            <span>{item.category}</span>
        </div>
    </Link>
    <div className="product__card-bottom d-flex aling-items-center justify-content-between">
        <span className='price'>${item.price}</span>
        <motion.span whileTap={{scale:1.3}}>
            <i className='ri-add-line'></i>
        </motion.span>
    </div>
</div>
  </Col>
  </>
  )
}

export default ProductCard