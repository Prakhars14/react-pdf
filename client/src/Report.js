import React, { useEffect, useState } from 'react'
import queryString from 'query-string';
import './App.css';

const Report = (props) => {

    const [queryState,setQuery]=useState({});

    useEffect(() => {
      let query=queryString.parse(props.location&&props.location.search);
      setQuery(query);
      console.log(query);
    }, []);

    return (
        <div className="container bg-light">
            <div>
                <h1 className="d-flex justify-content-center align-items-center">Report Page</h1>
            </div>
            <div>
            <h4 className="d-flex justify-content-center align-items-center">Hello {queryState.name}</h4>
            </div>
           
        </div>
    )
}

export default Report
