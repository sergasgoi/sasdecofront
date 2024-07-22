import { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/home.css';
import ItemsInicio from '../components/api/ItemsInicio';



const HomePage = (props) => {

    const [loading, setLoading] = useState(false);
    const [inicio, setInicio] = useState([]);

    useEffect(() => {
        const cargarInicio = async () => {
            setLoading(true);
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/inicio`);
            setInicio(response.data);
            setLoading(false);
        };

        cargarInicio();
    }, []);




    return (

        <div className="home">
            <div className="ini">


                {loading ? (
                    <p>Cargando...</p>
                ) : (
                    inicio.map(item => <ItemsInicio key={item.id}
                        image={item.imagen} />)
                )}
            </div>
        </div>

    )
}

export default HomePage;