import React from 'react'
import { useParams } from 'react-router-dom'
import Helmet from '../components/helmet/Helmet';
import data from '../assets/data/products';
import { Col, Container, Row } from 'reactstrap';
import { motion } from 'framer-motion';

import { useDispatch } from 'react-redux';
import { cartActions } from '../components/redux/slice/cartSlice';
import { toast } from 'react-toastify';
import ProductList from '../components/UI/ProductList';
import ProductCard from '../components/UI/ProductCard';
const ProductDetail = () => {
  const { id } = useParams();

  const product = data.find((item) => item.id === id);

  // console.log(product);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    description,
  } = product;


  const dispatch=useDispatch()
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        imgUrl,
        productName,
        price,
      })
    );
    toast.success("Karta Elave olundu");
  };
  return (

    <div>
    <Helmet title={product.productName}>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img style={{ width: "100%" }} src={product.imgUrl} alt="" />
            </Col>

            <Col lg="6">
              <div className="product__details">
                <h2>{product.productName}</h2>
                <div className="product__rating d-flex align-items-center  gap-5 mb-3">
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    <span>
                      <i className="ri-star-half-s-line"></i>
                    </span>
                  </div>
                  <p>
                    (<span>{product.avgRating} </span>.ratings)
                  </p>
                </div>

                <h5>{product.description}</h5>
                <button className="btn btn-primary mt-3" onClick={addToCart}>Add to Cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container>
     <Row>

  
       <h1 className='text-center'>Oxsar Məhsullar</h1>
          {
            data.map((item,index)=>(
              item.category===product.category? (
             
                <ProductCard item={item} key={index}/>
              
              ):(<></>)
            ))
          }
        </Row>
      </Container>
    </Helmet>
  </div>
  )
}

export default ProductDetail