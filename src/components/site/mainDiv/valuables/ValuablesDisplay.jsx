import React, { useState, useEffect } from 'react';
import ItemsList from "./ItemsList";
import ItemInfoCard from "./ItemInfoCard";

const ValuablesDisplay = () => {
    return (
        <div className="main">
        <h1>Your Valuables</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure mollitia itaque dolorum quam saepe nobis, a similique alias quidem libero veniam nesciunt odit rerum praesentium. Ratione provident excepturi ipsam ducimus.</p>
        <ItemsList />
        <ItemInfoCard />
    </div>
    );
}
 
export default ValuablesDisplay;