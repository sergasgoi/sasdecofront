import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/productos.css';
import Items from '../components/api/Items';

const ProductosPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const cargarProductos = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/productos`);
            setProductos(response.data);
            setLoading(false);
        };

        cargarProductos();
    }, []);




    return (

        <div className="productos">
            <h1 className='tituloprod'>Productos</h1>
            <div className="product">


                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    productos.map(item => <Items key={item.id}
                        tit={item.titulo}
                        image={item.imagen}
                        prc={item.precio} />)
                )}
            </div>
        </div>

    )
}

export default ProductosPage;