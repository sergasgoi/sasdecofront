import React from 'react';

const ItemsNosotros = (props) => {

    const { tit, image, ley } = props;

    return (

        <div className='sobrenosotros'>
            <div>
                <img  className="cajaimg" src={image} alt="" />
            </div>
            <div className="cajaescrita">
                <h1>{tit}:</h1>
                <p>{ley}</p>
            </div>
        </div>
        

    )
}


export default ItemsNosotros;