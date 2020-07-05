import React, { useState } from 'react'
import classnames from 'classnames'

import { InputProps, defaultProps } from './Input.types'

import './Input.scss'

export const Input: React.FC<InputProps> = (props) => {
    let { hint, placeholder, type, value, name, onChange, state } = props

    const [inputValue, setValue] = useState(value)

    const styleClassesWrapper = classnames('form-filed-wrapper', state)
    const styleClassesForm = classnames('form-field', state)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        onChange(event.target.value)
    }

    return (
        <div className={styleClassesWrapper}>
            <div className={styleClassesForm}>
                <input
                    className="form-field__input"
                    type={type}
                    name={name}
                    autoComplete="off"
                    required
                    value={inputValue}
                    onChange={handleChange}
                />
                <label htmlFor="name" className="form-field__label">
                    <span className="form-field__content">{placeholder}</span>
                </label>
            </div>

            <span className="form-filed-wrapper__hint">{hint}</span>
        </div>
    )
}

Input.defaultProps = defaultProps
