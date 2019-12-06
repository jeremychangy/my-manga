import React from 'react'
import { connect } from 'react-redux'

const User = (props) => {
    return (
        <div>
            <h1>
                {props.match.params.username}
            </h1>
            <h2>Mangas:</h2>
            <ul>
              <a href="/m/0">Gintama</a>
            </ul> 
        </div>
    )
}

export default User