import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const useMainPage = ()=>{
    const [productsId, setProductsId] = useState(localStorage.getItem('productsInCart')?  Array.from(JSON.parse(localStorage.getItem('productsInCart'))): [])
    const [planItems, setPlanItems] = useState([]);
    const [totalItems, setTotalItems] = useState(0)
    const [search, setSearch] = useState('')
    const history = useHistory();
    let count = 1;

    useEffect(() => {

        const setPlan = async () => {
            const url = `http://c1300044.ferozo.com/getListado.php`
            try {
                const data = await axios.get(url)
                setPlanItems(data.data.response.planes)
            }
            catch (error) {
                console.log(error)
            }
        }

        setPlan()

    }, [])

    return {productsId, setProductsId, search, setSearch, totalItems, setTotalItems, count, planItems, history}
}

export default useMainPage