import React, { Component } from "react";
import Chapter from "./chapter";

class Info extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            name: '',
            chapters: []
        }

    }

    render() {
        return (
            <React.Fragment>
                <div className="flex justify-center">
                    <div>
                        {this.state.chapters.map((chapter) => <Chapter chapter={chapter}/>)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Info;
