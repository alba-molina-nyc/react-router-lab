import { useState, useEffect } from 'react'
// useParams is a hook from react-router-dom
import { useParams } from 'react-router-dom'

const Price = (props) => {
  
    const apiKey = '507d6070853610d81ce3bb7a5a4c08f6'

    const { symbol } = useParams()
    
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`;

  
    const [stock, setStock ] = useState(null)

  
    const getStock = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setStock(data)
    }



    useEffect(() => {
        getStock()
    }, [])
    const loading = () => {
       
        return <h1>Loading...</h1>
    }


    const loaded = () => {
        return (
            <div>
                <h1>
                  {stock[0].companyName} 
                </h1>
                <h2>{stock[0].price}</h2>
                <h2>{stock[0].symbol}</h2>
            </div>
        )
    }

  
    return stock ? loaded() : loading()
}

export default Price;