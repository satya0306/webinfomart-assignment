import React, { Component } from 'react';

class SearchMerchant extends Component {

    handleChange = () => {
        this.props.onUserInput(this.refs.filterTextInput.value);
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="Search..." 
                    value={this.props.filterText} 
                    ref="filterTextInput" 
                    onChange={this.handleChange}/>
            </div>
        );
    }
}

export default SearchMerchant;