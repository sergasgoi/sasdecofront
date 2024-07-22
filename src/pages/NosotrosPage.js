import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/nosotros.css';
import ItemsNosotros from '../components/api/ItemsNosotros';


const NosotrosPage = (props) => {

    const [loading, setLoading] = useState(false);
    const [nosotros, setNosotros] = useState([]);

    useEffect(() => {
        const cargarNosotros = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/nosotros`);
            setNosotros(response.data);
            setLoading(false);
        };

        cargarNosotros();
    }, []);



    return (

        <div className="nosotros">

            {loading ? (
                <p>Cargando...</p>
            ) : (
                nosotros.map(item => <ItemsNosotros key={item.id}
                    tit={item.titulo}
                    image={item.imagen}
                    ley={item.leyenda} />)
            )}
            
        </div>

    )
}


export default NosotrosPage;