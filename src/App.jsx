import React from 'react';
import useB58WDTamil from './CustomHook/useB58WDTamil';

const App = () => {
  
  const [data] = useB58WDTamil('https://6643a2606c6a65658707de9e.mockapi.io/api/book')
  
  return (
    <>
    {data && data.map((ele,index)=>{
      return(
        <div key={index}>
          <h1>{ele.book.title}</h1>
          <p>{ele.book.author}</p>
        </div>
      )
    })}
    </>
  );
};

export default App;