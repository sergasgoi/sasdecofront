import React from 'react';


const ItemsInicio = (props) => {

    const { image } = props;

    return (

        <img className="imgini" src={image} alt="" />


    )
}

export default ItemsInicio;