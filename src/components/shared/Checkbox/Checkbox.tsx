import React from 'react'
import classnames from 'classnames'

import { CheckboxProps, defaultProps } from './Checkbox.types'

import './Checkbox.scss'

const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { checked, value, onChange, label, name, disabled, classes } = props

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        return onChange(event.target.checked)
    }

    const styleClasses = classnames('checkbox-container', classes, { disabled })

    return (
        <label className={styleClasses}>
            {label}
            <input
                className="checkbox"
                type="checkbox"
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

Checkbox.defaultProps = defaultProps

export default Checkbox
