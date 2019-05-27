import React, { Component } from 'react';
import { withRouter } from "react-router";

class MerchantDetails extends Component {
    state={
        merchant: this.props.location.state.merchant
    }
    render() {
        console.log(this.state.merchant)
        return (
            <div>
                 <div>Hello Merchant</div>
            </div>
        );
    }
}

export default withRouter(MerchantDetails);








// import React from 'react';
// import { withRouter } from "react-router";

// const MerchantDetails = () => {
//     return (
//         <div>
//             <div>Hello Merchant</div>
//         </div>
//     );
// };

// export default withRouter(MerchantDetails);