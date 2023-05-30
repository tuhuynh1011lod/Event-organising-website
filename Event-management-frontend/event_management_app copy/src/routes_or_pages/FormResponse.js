import React, { Component } from 'react';

import Response from '../components/Response';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';


import '../style/FormResponse.css';
import '../style/App.css';

class FormResponse extends Component {
  render() {
    return (
      <div className="App">
        <Title 
            title='Welcome ' 
            user='' 
            subtitle='Let continue your event managing process'>
        </Title>
        <SearchBar></SearchBar>
        <div className='form-response-body'>
        <div className='response-button'>
            <button>
                Total Response(s)
            </button>
            <button>
                Analysis
            </button>
        </div>
        <div className='form-total-responses'>
            <Response/>
            <Response/>
            <Response/>
            <Response/>
            <Response/>
            <Response/>
            <Response/>
            <Response/>
            <Response/>
            <Response/>
            <Response/>
            
        </div>
        <div className='form-analysis'>

        </div>
      </div>
      </div>
    )
  }
}
export default FormResponse;
