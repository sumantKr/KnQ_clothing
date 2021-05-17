import React from 'react'
import './form_input.scss'

export const FormInput=({handleChange,label,...otherFormProps})=>(
    <div className="group">
        <input className='form-input' onChange={handleChange} {...otherFormProps}/>
        {
            label?(
                <label className={`${otherFormProps.value.length?'shrink':''} form-input-label`}>
                {label}
                </label>
            ):null
        }
    </div>
)