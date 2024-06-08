import React, { useEffect, useState } from 'react';

const useB58WDTamil = (url) => {
    const [data,setData] = useState(null)
    useEffect(()=>{
        fetch(url)
       .then(res=>res.json())
       .then(data=>setData(data))
      },[url])
    return [data]
};

export default useB58WDTamil;