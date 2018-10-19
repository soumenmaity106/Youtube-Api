import React, { Component } from 'react';

class search_bar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            term: ''
        }
    }

    render() {
        return (
            <div className="search_bar">
                <div className="form-group">
                    <input
                        className="form-control"
                        value={this.state.term}
                        onChange={event => this.onInputchange(event.target.value)}
                    />

                </div>
            </div>

        );
    }

    onInputchange(term){
        this.setState({term});
        this.props.onSerachTermChange(term)
    }
}

export default search_bar;
