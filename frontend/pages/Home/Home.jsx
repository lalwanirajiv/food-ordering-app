/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './Home.css'
import Header from '../../src/Components/Navbar/Header/Header'
import ExploreMenu from '../../src/Components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../src/Components/FoodDisplay/FoodDisplay'
const Home = () => {
    const [category, setCategory] = useState("All");
    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category}/>
        </div>
    )
}

export default Home