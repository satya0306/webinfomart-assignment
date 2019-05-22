import React, { Component } from 'react';
import SearchMerchant from '../../components/SearchMerchant/SearchMerchant';
import MerchantTable from '../../components/MerchantTable/MerchantTable';

class Merchant extends Component {
    constructor(props){
        super(props);
        this.state ={
            filterText: "",
            merchants:[
                {
                    id: 1,
                    name: 'Max',
                    description: 'sports goods',
                    quantity: 10,
                    price: 500
                },
                {
                    id: 2,
                    name: 'Miller',
                    description: 'electronics goods',
                    quantity: 20,
                    price: 600
                },
                {
                    id: 3,
                    name: 'Mullar',
                    description: 'motor goods',
                    quantity: 30,
                    price: 700
                }    
            ]
        };
    }
    handleUserInput = (filterText) => {
        this.setState({filterText: filterText});
    };

    handleRowDel = (merchant) => {
        var index = this.state.merchants.indexOf(merchant);
        this.state.merchants.splice(index, 1);
        this.setState(this.state.merchants);
    };

    handleAddEvent = (evt) => {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var merchants = {
          id: id,
          name: "",
          description:"",
          price: 0,
          quantity: 0
        }
        this.state.merchants.push(merchants);
        this.setState(this.state.merchants);
    
      }

    handleMerchantTable = (evt) => {
        var item = {
          id: evt.target.id,
          name: evt.target.name,
          description:evt.target.description,
          value: evt.target.value
        };
        var merchants = this.state.merchants.slice();
        var newMerchants = merchants.map(function(merchant) {
            for (var key in merchant) {
                if (key === item.name && merchant.id === item.id ) {
                    merchant[key] = item.value;
                }
                // else if(key === item.description && merchant.id === item.id){
                //     merchant[key] = item.value;
                // }
            }
            return merchant;
        });
        this.setState({merchants:newMerchants});
    };

    render() {
        console.log(this.state.merchants)
        return (
            <div>
                <SearchMerchant 
                    filterText={this.state.filterText} 
                    onUserInput={this.handleUserInput}/>
                <MerchantTable  
                    filterText={this.state.filterText}
                    onMerchantTableUpdate={this.handleMerchantTable} 
                    onRowAdd={this.handleAddEvent} 
                    onRowDel={this.handleRowDel} 
                    merchants={this.state.merchants}/>
            </div>
        );
    }
}

export default Merchant;