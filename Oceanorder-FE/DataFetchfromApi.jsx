import { useState, useEffect } from "react";

export const useDataFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../AllProductData.json');
        const jsonData = await response.json();
        setData(jsonData); 
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
  
  }, []);

  return (
    {data, setData}
 );
};