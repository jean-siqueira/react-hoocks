import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import DataContext from '../../data/DataContext'

const UseContext = (props) => {

    const contexto = useContext(DataContext)

    function addNumber(delta) {
        contexto.setState({
            ...contexto.state,
            number: contexto.state.number + delta
        })
    }

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <div className="center">
                <span className="text">{contexto.state.text}</span>
                <span className="text">{contexto.state.number}</span>
            </div>

            <div>
                <button className="btn" 
                    onClick={()=> addNumber(-1)}>-1</button>
                <button className="btn"
                    onClick={()=> addNumber(+1)}>+1</button>
            </div>
        </div>
    )
}

export default UseContext
