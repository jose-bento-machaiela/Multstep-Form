import React from 'react'
import "./Thanks.css"

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

const emijiData ={
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill/>,
  very_satisfied: <BsFillEmojiHeartEyesFill/>,
}

const Thanks = ({data}) => {
  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sua próxima compra.</p>
      <p>Para concluir sua avaliação clique no botão de enviar abaixo.</p>
      <h3>Aqui esta o resumo da sua avaliação {data.name}:</h3>
      <p className="reviem-data">
        <span>Satisfação com o produto:</span>
        {emijiData[data.reviem]}
      </p>
      <p className="reviem-data">
        <span>Comentário:</span>
        {data.comment}
      </p>
    </div>
  )
}

export default Thanks