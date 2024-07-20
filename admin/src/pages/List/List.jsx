/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState } from 'react'
import './List.css'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {
  const [list, setList] = useState([]);
  
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    // console.log(response.data);
    if (response.data.success) {
      setList(response.data.data);
    }
    else{
      toast.error("Error occured");
    }
  }

  const removeFood = async (foodId) =>{
      // console.log(foodId);
      const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
  }




  useEffect(()=>{
    fetchList();
  })
  return (
    <div className='list add flex-col '>
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
           <strong>Image</strong>
           <strong>Name</strong>
           <strong>Category</strong>
           <strong>Price</strong>
           <strong>Action</strong>

        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/${item.image}`} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List