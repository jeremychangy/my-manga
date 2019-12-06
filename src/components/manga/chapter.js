import React, { Component } from "react";
import { Button } from "reactstrap";
import { ButtonGroup, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import gin from '../../gin'

class Chapter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            chapter: parseInt(this.props.match.params.chapter, 10),
            pages: []
        }

        this.toggle = this.toggle.bind(this);
        this.changeChapter = this.changeToChapter.bind(this);
    }

    toggle() {
        if (this.state.open)
            this.setState({ open: false })
        else
            this.setState({ open: true })
    }

    changeToChapter(chapter) {
        if (chapter < 0 || chapter >= gin.length)
            return
        
        let path = `/m/${chapter}`;
        this.props.history.push(path);
        window.location.reload(false)
        window.scrollTo(0, 0)
    }

    componentDidMount() {
        let chapter = this.state.chapter;
        this.setState({ pages: gin[chapter]})
    }

    render() {
        return (
            <React.Fragment>
                <div className="flex justify-center">
                    <div className="justify-center">
                        <ButtonGroup>
                            <Button color="white" onClick={() => this.changeToChapter(this.state.chapter - 1)}>{`<`}</Button>

                            <ButtonDropdown isOpen={this.state.open} toggle={this.toggle}>
                                <DropdownToggle color="white" caret>
                                {`chapter ${this.state.chapter}`}
                                </DropdownToggle>
                                <DropdownMenu>
                                  {
                                      gin.map((chapter, index) => {
                                          let format = `chapter ${index}`
                                          let href = `/m/${index}`
                                          return <DropdownItem tag='a' href={href}>{format}</DropdownItem>
                                      })
                                  }
                                </DropdownMenu>
                            </ButtonDropdown>
                              
                            <Button color="white" onClick={() => this.changeToChapter(this.state.chapter + 1)}>{`>`}</Button>
                        </ButtonGroup>
                    </div>                        
                    <div>
                        {this.state.pages.map((link) => <img src={link} alt='chapter page' />)}
                    </div>
                    <div className="justify-center">

                    <ButtonGroup>
                        <Button color="white" onClick={() => this.changeToChapter(this.state.chapter - 1)}>{`<`}</Button>
                        
                        <ButtonDropdown isOpen={this.state.open} toggle={this.toggle}>
                            <DropdownToggle color="white" caret>
                            {`chapter ${this.state.chapter}`}
                            </DropdownToggle>
                            <DropdownMenu>
                              {
                                  gin.map((chapter, index) => {
                                      let format = `chapter ${index}`
                                      let href = `/m/${index}`
                                      return <DropdownItem tag='a' href={href}>{format}</DropdownItem>
                                  })
                              }
                            </DropdownMenu>
                        </ButtonDropdown>
                          
                        <Button color="white" onClick={() => this.changeToChapter(this.state.chapter + 1)}>{`>`}</Button>
                    </ButtonGroup>

                    </div>   
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Chapter);
