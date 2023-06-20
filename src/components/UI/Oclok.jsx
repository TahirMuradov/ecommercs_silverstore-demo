import React, { useEffect, useState } from 'react'
import counterImg from '../../assets/images/counter-timer-img.png'
import '../../styles/oclok.scss'
import { Col, Container, Row } from 'reactstrap';
const Oclok = () => {
    const[date,setDate]=useState()
    const[hours,setHours]=useState()
    const[minutes,setMinutes]=useState()
    const[seconds,setSeconds]=useState()
    
   let interval;
  
  const countDown=()=>{
    const destionation=new Date("July 15, 2023").getTime() 
  
    /*hansi tarixe qeder davam edirse onu yaziriq ve yazilis beledi:: 1-ci:: ayi---gun--il::
    .getTime()-- verdiyimiz tarixe qeder olan Millisaniyyeni qaytarir ve destination adina == edir
    */
  
     interval=setInterval(() => { 
      
   const now=new Date().getTime();//bu gunun tarixini Millisaniyye ile aldiq
   const different=destionation - now //verdiyimiz vaxdan bu gunu Millisaniyye edib cixdiq
   const days=Math.floor(different / (1000 * 60 * 60 * 24))/*aldigimiz Milli saniyyeni 1ci gune cevirmek ucun 
   1ci saniyyeye vururuq(1000)
            sonra deqiqeye(60)
            sonra saata(60)
            sonra gune(24)
            //gunu aldiq 
   */
  
   const hours=Math.floor(
    (different % (1000 * 60 * 60 * 24))/(1000 * 60 * 60)
     );
   const minutes=Math.floor(
    (different % (1000 * 60 * 60 ))/(1000 * 60)
   );
   const seconds=Math.floor((different % (1000 * 60)) / 1000); 
   
   
   if(different<0){
    clearInterval(interval)
   }
   else{
    setDate(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
   }
  
    });
  }
  
    useEffect(()=>{
      countDown()
    },[])
  
  console.log("render olundu");
  
    return (
     <>
     <div className="clock__wrapper my-5">
  
     
     <Container>
     <Row>
  
  <Col lg='5' md='12'>
  <h5 className='mb-2'>Limited Offers</h5>
  <h4 className='mb-3'>Quality Armchair</h4>
  <div className=' d-flex align-items-center fap-3 text-white'>
      <div className="clock__data d-flex  align-items-center gap-3 justify-content-center text-center">
        <div className="text-center ">
          <h1 className="text-white fs-3 mb-2 ">{date}</h1>
          <h5 className='text-white fs-6'>Days</h5>
        </div>
      <span className='text-white fs-3 mb-4'>:</span>
      </div>
  
      <div className="clock__data d-flex  align-items-center gap-3">
        <div className="text-center justify-content-center">
          <h1 className="text-white fs-3 mb-2">{hours}</h1>
          <h5 className='text-white fs-6'>Hours</h5>
        </div>
      <span className='text-white fs-3 mb-4'>:</span>
      </div>
  
      <div className="clock__data d-flex  align-items-center gap-3">
        <div className="text-center justify-content-center">
          <h1 className="text-white fs-3 mb-2">{minutes}</h1>
          <h5 className='text-white fs-6'>minut</h5>
        </div>
      <span className='text-white fs-3 mb-4'>:</span>
      </div>
  
      <div className="clock__data d-flex  align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">{seconds}</h1>
          <h5 className='text-white fs-6'>Seconds</h5>
        </div>
    
      </div>
    
     </div> 
     <button className='clock__button'>Vist Store</button>
  </Col>
  
  
  
   <Col lg="6" md='none'>
    <img className='counterImg' src={counterImg} alt="" />
   </Col> 
     
     </Row>
     </Container>
     </div>
     </>
    )
  }
  

export default Oclok