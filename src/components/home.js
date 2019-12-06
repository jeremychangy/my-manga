import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Card, CardHeader, CardBody, CardTitle, CardText } from 'reactstrap'

class Home extends Component {
    render() {
        return (
            <div className="container">
<div className="col-md-auto">
                <Card>
                    <CardHeader tag="a" href="/m/0">Gintama</CardHeader>
                    <CardBody>
                        <CardTitle>[Gintama photo]</CardTitle>
                        <CardText>Sakata Gintoki is a samurai living in an era when samurai are no longer needed. To add to his troubles, oppressive aliens have moved in to invade. Gintoki lives with Kagura and Shinpachi, taking on odd jobs to make the world a better place... and to pay their rent.</CardText>
                    </CardBody>
                </Card>
            </div>
            </div>
            
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect()(Home)