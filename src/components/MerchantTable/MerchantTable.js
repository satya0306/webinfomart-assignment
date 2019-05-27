import React from 'react';
import MerchantRow from '../MerchantRow/MerchantRow';
const MerchantTable = (props) => {

    var onMerchantTableUpdate = props.onMerchantTableUpdate;
    var rowDel = props.onRowDel;
    var filterText = props.filterText;
    var merchant = props.merchants.map(merchant => {
        if (merchant.name.indexOf(filterText) === -1 ) {
          return null;
        }
        return (<MerchantRow 
                    onMerchantTableUpdate={onMerchantTableUpdate} 
                    merchant={merchant} 
                    onDelEvent={rowDel} 
                    key={merchant.id}/>)
        
    });
    return (
        <div>
            <button type="button" onClick={props.onRowAdd} className="btn btn-success pull-right">Add</button>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {merchant}
                </tbody>
    
            </table>
        </div>
    );
};

export default MerchantTable;