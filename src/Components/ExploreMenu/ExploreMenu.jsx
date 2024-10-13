import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="ExploreMenu" id="ExploreMenu">
        <h1>Explore Our Menu</h1>
        <p className="ExploreMenu-text">Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings elevate your dining experience,one delicious meal at a time.</p>
      <div className="ExploreMenu-list">
        {menu_list.map((item,index) => {
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="ExploreMenu-list-item">
                    <img className={category===item.menu_name?"active":""} src={item.menu_image}></img>
                    <p>{item.menu_name}</p>

                </div>
            )
        })}
      </div>
      <hr></hr>
    </div>
  )
}

export default ExploreMenu