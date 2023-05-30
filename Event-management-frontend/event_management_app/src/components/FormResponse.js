import React, { Component } from 'react'
import Response from './Response'

class FormResponse extends Component {
  render() {
    return (
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
    )
  }
}
export default FormResponse;
