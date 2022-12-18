import React from 'react';
import Card from './Card';
import Sdata from './Sdata';



const nCard = (value) => {
      return (
      <Card key={value.key}
            imgsrc={value.imgsrc}
            title={value.title}
            sname={value.sname}
            link={value.link}/>
            );

}
function App(){
  return (
    <>
    <h1 className='heading_style'>List of 5 Best Netflix Series</h1>
    <div className='cards'>
      {Sdata.map(nCard)}
    </div>
    </>
  )
}

export default App;