/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore atque obcaecati placeat vero distinctio labore neque. Sequi assumenda voluptate consectetur.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='explore-menu-list-item' key={index}>
                        <img src={item.menu_image} alt="" className={category===item.menu_name? "active":""} />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
            <hr/>
    </div>
  )
}

export default ExploreMenu