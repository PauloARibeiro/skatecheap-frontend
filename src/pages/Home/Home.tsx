import * as React from 'react'

// CONSTANTS
import { API_DECKS } from '../../constants/api'

// COMPONENTS
import { List, ListItem, Input } from '../../components/shared/index'
import Filter from './Filter/Filter'

// UTILS
import useFetch from '../../utils/useFetch'

// STYLES
import '../../scss/index.scss'
import './home.scss'

const Home = () => {
    const resDecks = useFetch(API_DECKS, {})
    const decks = resDecks.response || []

    if (!resDecks.response) {
        return <h1>loading</h1>
    }

    const checkIfDiscount = (hasDiscount: boolean, price: string) => {
        if (hasDiscount) {
            return <div className="card-info__deck--discount">{price}</div>
        }

        return (
            <div className="card-info__price discount">
                <div className="card-info__price--original">{price}</div>
                <div className="card-info__price--discount">{price}</div>
            </div>
        )
    }

    const onChange = (e: any) => {
        console.log(e)
    }

    return (
        <div>
            <Filter />

            <Input placeholder="Search" onChange={onChange} />

            <List classes="card-container">
                {decks.map((deck: any) => {
                    const { _id, href, name, image, brand, price, seller, hasDiscount } = deck

                    return (
                        <ListItem id={_id} classes="card">
                            <a href={href} title={name}>
                                <div className="card__discount">13%</div>
                                <img className="card__img" src={image} alt="img" />
                                <div className="card-info">
                                    <div className="card-info__brand">{brand}</div>
                                    <div className="card-info__deck">{name}</div>
                                    {checkIfDiscount(hasDiscount, price)}
                                    <img
                                        className="card-info__seller"
                                        src={`/assets/images/${seller}_logo.png`}
                                        alt={seller}
                                    />
                                </div>
                            </a>
                        </ListItem>
                    )
                })}
            </List>
        </div>
    )
}

export default Home
