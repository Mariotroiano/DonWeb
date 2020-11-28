import React, { useEffect } from 'react'
import Header from '../components/Header'
import Table from '../components/Table'
import axios from 'axios'
import useMainPage from '../hooks/useMainPage'

const MainPage = () => {

    const { productsId, setProductsId, search, setSearch, totalItems, setTotalItems, planItems, history } = useMainPage()
    let { count } = useMainPage()

    useEffect(() => {
        console.log(productsId)
        setStorage(productsId)
        setTotal(productsId)

    }, [productsId])

    const handleInputChange = (e) => {
        const inputValue = e.target.value
        setSearch(inputValue.toLowerCase())
    }

    const setStorage = (arrProducts) => {
        localStorage.setItem('productsInCart', JSON.stringify(arrProducts))
    }

    const setTotal = (productsId) => {

        localStorage.setItem('qtyProducts', productsId.length)
        setTotalItems(productsId.length)
    }

    const renderToCart = () => history.push('/cart');

    const addToCart = async (plan, period) => {
        const url = `http://c1300044.ferozo.com/agregarItem.php?plan=${plan}&periodo=${period}`
        try {
            const { data } = await axios.post(url)
            setProductsId([...productsId, data.response.id_producto])
        }
        catch (error) {
            console.log(error)
        }
    }
    //console.log('inputSearch ', search)

    //console.log('totalItems ' , totalItems)
    return (

        <div>
            <Header onChangeHandle={handleInputChange} qtyItems={totalItems} btnName='Ver Carrito' onClickHandle={() => renderToCart()} />
            <Table setTotalQty={setTotal}>
                <tbody>
                    {planItems.filter(planItem => planItem.nombre.toLowerCase().includes(search)).map((planItem) => {
                        return planItem.periodos.map(period => {

                            return <tr key={count}>
                                <th scope="row">{count++}</th>
                                <td>{planItem.nombre}</td>
                                <td>{period.periodo}</td>
                                <td>{period.valor}</td>
                                <td><button className="btn btn-outline-success my-2 my-sm-0"
                                    onClick={() => addToCart(planItem.plan, period.periodo)} >Agregar al carrito</button>
                                </td>

                            </tr>
                        })
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default MainPage