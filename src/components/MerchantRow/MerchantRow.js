import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import { withRouter } from "react-router";
import EditableCell from '../EditableCell/EditableCell';

class MerchantRow extends Component{

    onDelEvent = ()=> {
        this.props.onDelEvent(this.props.merchant);
    }
    render(){

        return (
            <tr className="eachRow">
                <Link to={{
                    pathname:'/merchant-details/' + this.props.merchant.id,
                    state:{merchant:this.props.merchant}
                    }}>
                    <EditableCell onMerchantTableUpdate={this.props.onMerchantTableUpdate} cellData={{
                        "type": "name",
                        value: this.props.merchant.name,
                        id: this.props.merchant.id
                    }}/>
                </Link>
                <EditableCell onMerchantTableUpdate={this.props.onMerchantTableUpdate} cellData={{
                    type: "description",
                    value: this.props.merchant.description,
                    id: this.props.merchant.id
                }}/>
                <EditableCell onMerchantTableUpdate={this.props.onMerchantTableUpdate} cellData={{
                    type: "quantity",
                    value: this.props.merchant.quantity,
                    id: this.props.merchant.id
                }}/>
                <EditableCell onMerchantTableUpdate={this.props.onMerchantTableUpdate} cellData={{
                    type: "price",
                    value: this.props.merchant.price,
                    id: this.props.merchant.id
                }}/>
                <td className="del-cell">
                    <input type="button" onClick={this.onDelEvent} value="X" className="del-btn"/>
                </td>
            </tr>
        );
    }
};

export default withRouter(MerchantRow);