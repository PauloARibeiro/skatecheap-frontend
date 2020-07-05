import React from 'react'
import classnames from 'classnames'

import { RadioProps, defaultProps } from './Radio.types'

import './Radio.scss'

export const Radio: React.FC<RadioProps> = (props) => {
    const { checked, value, onChange, label, name, disabled, classes } = props

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        return onChange(event.target.checked)
    }

    const styleClasses = classnames('radio-container', classes, { disabled })

    return (
        <label className={styleClasses}>
            {label}
            <input
                className="radio"
                type="radio"
                defaultChecked={checked}
                value={value}
                onChange={handleChange}
                name={name}
                disabled={disabled}
            />
            <span className="checkmark"></span>
        </label>
    )
}

Radio.defaultProps = defaultProps
