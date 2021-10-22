import { Link } from 'react-router-dom'
import currencies from '../data/currencies';

const Dashboard = (props) => {


    

    return (
        <div className="currencies">
            {
                
                currencies.map((coin, idx) => {

              
                    const { name, symbol } = coin

                    return(
                      
                        <Link to={`/price/${symbol}`} key={idx} >
                           
                            <h2>{name}</h2>
                        </Link>
                    )
                })
            }
        </div>
    )
};

export default Dashboard;