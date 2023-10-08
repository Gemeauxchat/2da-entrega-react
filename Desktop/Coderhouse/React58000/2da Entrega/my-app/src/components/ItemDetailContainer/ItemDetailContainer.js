import './ItemDetailContainer.css';
import { useState, useEffect } from 'react';
import { getElementById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {itemId} = useParams()

    useEffect(() => { 
        getElementById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
            });
    }, [itemId]); // Correctly placed empty dependency array

    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;
