import React from "react";

const Price = (props) => {
    console.log(props)
  // Our api key 
  const apiKey = "507d6070853610d81ce3bb7a5a4c08f6";
  // Grabbing the Currency symbol from the URL Param
  const symbol = props.match.params.symbol;
  // Using the other two variables to create our URL
  const url = `https://financialmodelingprep.com/api/v3/income-statement/${symbol}?limit=120&apikey=${apiKey}`;

  //state to hold the  data
  const [stock, setStock] = React.useState(null);

  //function to fetch data
  const getStock = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStock(data);
  };

  // useEffect to run getStock when component mounts
  React.useEffect(() => {
    getStock();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {stock.name}
        </h1>
        <h2>{stock.price}</h2>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return stock ? loaded() : loading();
};

export default Price;