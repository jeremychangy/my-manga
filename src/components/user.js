import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        return (
            <div> 
                <h5 className="App-header">Home</h5>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect()(Home)