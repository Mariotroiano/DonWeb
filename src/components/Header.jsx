import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ qtyItems, onClickHandle, btnName, onChangeHandle }) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" name='search' onChange={onChangeHandle} placeholder="nombre del producto" aria-label="Search" />
                </form>

                <div className='d-flex flex-row'>
                    <p className='mr-1 mt-1'>[{qtyItems}]</p>
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={onClickHandle} >{btnName}</button>
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    qtyItems : PropTypes.number.isRequired,
    onClickHandle : PropTypes.func.isRequired,
    btnName : PropTypes.string.isRequired,
}

export default Header



