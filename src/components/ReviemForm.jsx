import React from 'react'
import "./ReviemForm.css"

import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill
} from 'react-icons/bs'

const ReviemForm = ({data, updateFieldHandler }) => {
  return (
    <div className='reviem-form'>
      <div className="form-control score-container">
        <label className="radio-container">
          <input type="radio" 
          value='unsatisfied' 
          name='review' 
          required 
          checked={data.reviem ==="unsatisfied"}
          onChange={(e) => updateFieldHandler("reviem", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className="radio-container">
          <input 
          type="radio" 
          value='neutral' 
          name='review' 
          required 
          checked={data.reviem ==="neutral"}
          onChange={(e) => updateFieldHandler("reviem", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input 
          type="radio" 
          value='satisfied' 
          name='review' 
          required 
          checked={data.reviem ==="satisfied"}
          onChange={(e) => updateFieldHandler("reviem", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input 
          type="radio" 
          value='very_satisfied' 
          name='review' 
          required 
          checked={data.reviem ==="very_satisfied"}
          onChange={(e) => updateFieldHandler("reviem", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>

      </div>
      <div className='form-control'>
        <label htmlFor="comment">Comentario:</label>
        <textarea 
        name="comment" 
        id="comment" 
        placeholder='Conte como foi a sua experiência com o produto...' 
        required
        value={data.comment || ""}
        onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default ReviemForm