import React, { Component } from "react";

class Chapter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pages: []
        }

    }

    getPages() {
        let link = 'https://s6.mkklcdnv6.com/mangakakalot/r1/read_gintama_manga_online_free/chapter_175_its_important_to_spend_a_little_time_alone/'
        let links = Array(20)
        for (let i = 1; i <= 20; i++) {
            links[i] = link.concat(i,'.jpg')
            console.log(links[i])
        }
        this.setState({ pages: links })

    }

    componentDidMount() {
        this.getPages()
    }

    render() {
        return (
            <React.Fragment>
                <div className="flex justify-center">
                    <div>
                        {this.state.pages.map((link) => <img src={link} alt='chapter page' />)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Chapter;