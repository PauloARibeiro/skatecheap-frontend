import * as React from 'react'
// COMPONENTS
import { List, ListItem } from '../../components/shared/index'
// UTILS
import useFetch from '../../utils/useFetch'
// STYLES
import '../../scss/index.scss'
import './home.scss'
// IMAGES
import fillowLogo from '../../static/images/fillow_logo.png'
import skatedeluxeLogo from '../../static/images/skatedeluxe_logo.png'

const Home = () => {
    const res = useFetch('http://localhost:3001/decks', {})
    const decks = res.response || []

    if (!res.response) {
        return <h1>loading</h1>
    }

    const checkBrandForLogo = (seller: string) => {
        switch (seller.toLowerCase()) {
            case 'fillow':
                return <img className="card-info__seller" src={fillowLogo} alt={seller} />

            case 'skatedeluxe':
                return <img className="card-info__seller" src={skatedeluxeLogo} alt={seller} />

            default:
                return <img className="card-info__seller" src={fillowLogo} alt={seller} />
        }
    }

    console.log(decks.map)
    // const list = () => {
    //     return decks.map((deck, index: number) => (
    //         <ListItem id={deck._id} key={index}>
    //             {deck.name}
    //         </ListItem>
    //     ))
    // }

    return (
        <div>
            <List classes="card-container">
                {decks.map((deck: any) => {
                    const { _id, href, name, image, brand, price, seller } = deck
                    return (
                        <ListItem id={_id} classes="card">
                            <a href={href} title={name}>
                                <img className="card__img" src={image} alt="img" />
                                <div className="card-info">
                                    <div className="card-info__brand">{brand}</div>
                                    <div className="card-info__deck">{name}</div>
                                    <div className="card-info__price">{price}</div>
                                    {checkBrandForLogo(seller)}
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
