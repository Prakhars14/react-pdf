import React, { useState } from 'react';
import Axios from 'axios';

const Home=()=> {
  const [name,setName]=useState();
  const pdfHandler=()=>{
    Axios.post('http://localhost:8000/create-pdf', {name:name},
    {responseType: 'arraybuffer',
    headers: {
      'Accept': 'application/pdf'
    }})
    .then((response) => {
        const blob = new Blob([response.data], {type: 'application/pdf'})
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.download = `your-file-name.pdf`
        link.click()
    })
  }

  return (
    <div className="container">
      <h3 className="d-flex justify-content-center p-3">Enter your name below</h3>
      <div  className="d-flex justify-content-center p-3">
      <input className="form-control-sm" type="text" value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="d-flex justify-content-center p-3">
        <button className="btn btn-primary" onClick={pdfHandler}>Generate pdf</button>
      </div>
    </div>
  );
}

export default Home;
