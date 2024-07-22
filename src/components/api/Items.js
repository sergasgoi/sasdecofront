import React from 'react';

const Items = (props) => {

    const { tit, image, prc } = props;

    return (
        
        <div className="contprod">
            <div className="titulo2">
                {tit}
            </div>
            <div className="prod">
            <img src={image} alt=""/>
            </div>
            <div className="precio">
                {prc}
            </div>
        </div>
        
    )
}


export default Items;