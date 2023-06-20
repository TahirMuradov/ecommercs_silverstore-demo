import React, { useState } from 'react'
import Helmet from '../components/helmet/Helmet'
import data from '../assets/data/products'
import ProductCard from '../components/UI/ProductCard'
import ProductList from '../components/UI/ProductList'
import { Container, Row } from 'reactstrap'
const Shop = () => {
  let myCategories = [];
  let myCategories2= [];
  let counter=0;
for(let i=0;i<data.length;i++)
{
  myCategories.push(data[i].category)
  myCategories2.push(data[i].category)

  }
        for (let j = 0; j < myCategories.length; j++) {
        
          for (let k = 0; k < myCategories2.length; k++) {
            if(myCategories[j]==myCategories2[k]){
            counter++;
            if(counter>1){
             myCategories2.splice(k,1)
              
        
            }
          }
        
      }
      counter=0;
    }
    let split;
    let uppersCategory=[];
   myCategories2.map((category,index)=>{
    split=category.split("");
   let uppers=split[0].toUpperCase()
split.splice(0,1,uppers);
uppersCategory[index]=split.join("");
   })
console.log(uppersCategory);
console.log(myCategories2);

const [productData,setProductdata]=useState();

const handleFiltered = (e) =>{
const filteredValue= e.target.value;
const filteredData= data.filter(
  (item)=>  item.category===filteredValue
  );
  setProductdata(filteredData);
}
const [searchData,setsearchData]=useState();

const handleSearch = (e) =>{
const searchValue=e.target.value;
const searchProducts=data.filter(
  (item)=>item.productName.toLowerCase().includes(searchValue.toLowerCase())
  
  );
  setsearchData(searchProducts);
}



  return (
    <Helmet title="Shop sehife">
        <select name="cetegory" id="categoryselect" className='categoryselect' onChange={handleFiltered}>
  <option value="selectcategory" >Select Category</option>
    {
      myCategories2.map((category,index)=>(
        <option value={category} key={index}>{uppersCategory[index]}</option>
      ))
    }
 
  </select>
  <input type="text" onChange={handleSearch}/>
<Container>
  <Row>
    {
      productData? (<ProductList data={productData}/>):(<p>Axtarmaq Isdediyniz Mehsulun adini veya kateqoriyasini daxil edin</p>)
    }
 
  </Row>
  <Row>
    {
      searchData? (<ProductList data={searchData}/>):(<p></p>)
    }
 
  </Row>
  {
    data? (  <Row>
   
  {
   myCategories2.map((item, index)=>(
     <Container key={index}>
 <Row key={index}>
       <h1 className='text-center' key={index}>{uppersCategory[index]}</h1>
       {data.map((it,index)=>(
         item===it.category? (
 
           <ProductCard item={it}key={index}/>
         )
         :(console.log())
 
       ))}
 
 </Row>
     </Container>
   ))
  }
 
   </Row>):(<h5>LOOODAING......</h5>)
  }
</Container>


    </Helmet>
  )
}

export default Shop