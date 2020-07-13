import React, { useState, useEffect } from 'react'

import { AcordionProps, defaultProps } from './Accordion.types'

import './Accordion.scss'

const Acordion: React.FC<AcordionProps> = (props) => {
    let { children, label, isOpen = false } = props

    const [isToggled, setIsToggled] = useState(false)

    const handleToggle = () => {
        return setIsToggled(!isToggled)
    }

    useEffect(() => {
        setIsToggled(isOpen)
    }, [isOpen])

    return (
        <div className={`accordion accordion--${isToggled}`}>
            <div className="accordion__header" onClick={handleToggle}>
                <span className="accordion__header--label">{label}</span>
                <div className="accordion__header__close">X</div>
            </div>

            <div className="accordion__content">{children}</div>
        </div>
    )
}

Acordion.defaultProps = defaultProps

export default Acordion
