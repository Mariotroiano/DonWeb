import  { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const useCartPage = () => {

    const [productsList, setProductsList] = useState(Array.from(JSON.parse(localStorage.getItem('productsInCart'))))
    const [totalItemsInCart, setTotalItemsInCart] = useState(JSON.parse(localStorage.getItem('qtyProducts')))
    const [showProducts, setShowProducts] = useState([])
    const [searchCart, setSearchCart] = useState('')
    const history = useHistory()
    let count = 1;

    useEffect(() => {

        const url = `http://c1300044.ferozo.com/getListadoCarrito.php?t=${new Date().getTime()}`

        const getCartList = async () => {
            try {
                const { data } = await axios.get(url)
                const totalProductsInCart = data.response                
                const result = totalProductsInCart.filter(prod => productsList.includes(parseInt(prod.id_producto)))
                setShowProducts(result)
            }
            catch (error){
                console.log(error)
            }
        }

        getCartList()

    }, [productsList])

    return {setTotalItemsInCart, productsList, setProductsList, searchCart, setSearchCart, showProducts, totalItemsInCart, history, count}

}

export default useCartPage