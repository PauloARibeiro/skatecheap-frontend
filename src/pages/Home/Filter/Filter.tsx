import * as React from 'react'

// CONSTANTS
import { API_BRANDS_DECKS } from '../../../constants/api'

// SHARED COMPONENTS
import { Checkbox, Accordion, IconChevron } from '../../../components/shared/index'

// UTILS
import useFetch from '../../../utils/useFetch'

// STYLES
import './Filter.scss'

import { COLORS } from '../../../constants/colors'

const Filter: React.FC = (props) => {
    const resDecks = useFetch(API_BRANDS_DECKS, {})
    const decks = resDecks.response || []

    if (!decks) {
        return <h1>loading</h1>
    }

    const onChange = () => {
        return true
    }

    return (
        <aside className="filters-container">
            <div className="filters">
                <div className="filters__header">
                    <span className="filters__header__txt">Filters</span>
                    <div className="filters__header__close">
                        <IconChevron color={COLORS.CTA} hoverColor={COLORS.WHITE} />
                    </div>
                </div>
                <div className="filters__section">
                    <Accordion>
                        <div className="filters__section__items">
                            {decks.map((deck) => {
                                return (
                                    <Checkbox
                                        classes="filters__section__items--item"
                                        value={`brand-${deck}`}
                                        key={`brand-${deck}`}
                                        checked={false}
                                        label={deck}
                                        onChange={onChange}
                                    />
                                )
                            })}
                        </div>
                    </Accordion>
                </div>
            </div>
        </aside>
    )
}

export default Filter
