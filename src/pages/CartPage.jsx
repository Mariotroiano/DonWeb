import React, { useEffect } from 'react'
import Header from '../components/Header'
import Table from '../components/Table'
import axios from 'axios'
import useCartPage from '../hooks/useCartPage'

const CartPage = props => {

    const { setTotalItemsInCart, productsList, setProductsList, searchCart, setSearchCart, showProducts, totalItemsInCart, history } = useCartPage()

    useEffect(() => {
        setStorage(productsList)
        setTotal(productsList)

    }, [productsList])

    const setStorage = (arrProducts) => {
        localStorage.setItem('productsInCart', JSON.stringify(arrProducts))
    }

    const setTotal = (productsId) => {
        localStorage.setItem('qtyProducts', productsId.length)
        setTotalItemsInCart(productsId.length)
    }

    const removeToCart = async (id) => {
        const productId = parseInt(id)
        const url = `http://c1300044.ferozo.com/removerItem.php?id_producto=${productId}`

        try {
            const { data } = await axios.post(url)
            console.log('data que viene de respuesta al borrar ', data)
            const newProductList = productsList.filter(product => product != id)
            setProductsList(newProductList)
        }
        catch (error) {
            console.log(error)
        }
    }   

    const renderToMain = () => {
        history.push('/')
    }

    const handleInputChange = (e) => {
        const inputValue = e.target.value
        setSearchCart(inputValue.toLowerCase())
    }

    return (

        <div>        

            <Header onChangeHandle={handleInputChange} btnName='Volver' onClickHandle={() => renderToMain()} qtyItems={totalItemsInCart}></Header>
            <Table>
                <tbody>

                    {showProducts.filter(product => product.nombre.toLowerCase().includes(searchCart)).map(product =>
                        <tr >
                            <th scope="row"></th>
                            <td>{product.nombre}</td>
                            <td>{product.periodo}</td>
                            <td>{product.valor}</td>
                            <td><button onClick={() => removeToCart(product.id_producto)} className="btn btn-outline-success my-2 my-sm-0">Eliminar del carrito</button>
                            </td>
                        </tr>
                    )}                    

                </tbody>
            </Table>
        </div>
    )
}

export default CartPage