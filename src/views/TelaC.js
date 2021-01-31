import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
    const p = props.route.params
    const numero = p && p.numero ? p.numero : 0
    return(
        <TextoCentral corFundo='#e54433'>
             Tela C - {numero}
        </TextoCentral>
    )
}
