import React from 'react';
import { order } from '../model/order';
import iphone from './iphone.png';
import checkCirlce from './check-circle-regular.svg';
import checkCirlce1 from './check-circle-regular1.svg';
import shipping from './shipping-fast-solid.svg';
import { Router, useHistory } from 'react-router-dom';


const OrderDetail = () => {
    const history = useHistory();
    const goDetailPage = e => {

        // e.preventDefault();
        console.log(e);
        history.push("/order/1");
    }
    return (
        <>
            <div className="order-container">
                <h2>Order Detail</h2>

                {order.items.map((item) => {
                    return (
                        <>
                            <div className="order-card" onClick={goDetailPage}>
                                <div className="table">
                                    <div className="table-cell">
                                        <img src={iphone} height="200" width="200" />
                                    </div>
                                    <div className="table-cell">
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td width="10%"></td>
                                                    <td>
                                                        <div className="text-center">
                                                            <img src={item.status == 'ordered' ? checkCirlce : checkCirlce1} height="24" width="24" />
                                                            <p className={item.status == 'ordered' ? 'green-fg': 'black-fg'}>Ordered</p>
                                                        </div>
                                                    </td>
                                                    <td className="border">
                                                        
                                                    </td>
                                                    <td>
                                                        <div className="text-center">
                                                            <img src={shipping} height="24" width="24" />
                                                            <p>Shipped</p>
                                                        </div>
                                                    </td>
                                                    <td className="border">

                                                    </td>
                                                    <td width="80"></td>
                                                    <td>
                                                        <div className="text-center">
                                                            <img src={item.status == 'delivered' ? checkCirlce : checkCirlce1} height="24" width="24" /> 
                                                            <p className={item.status == 'delivered' ? 'green-fg': 'black-fg'}>Delivered</p> 
                                                        </div>
                                                    </td>
                                                    <td width="10%"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="clear"></div>
                                </div>
                                <div class="container">

                                </div>
                                <div className="order-spec">
                                    <h4>{item.name}</h4>
                                    <span className="grey-fg">{item.skuAttributes.color}</span> <span className="grey-fg">{item.skuAttributes.size}</span>
                                    <span className="grey-fg">{item.skuAttributes.model}</span>
                                    <p className="grey-fg">{item.plan}</p>
                                </div>
                            </div>
                        </>)
                })
                }
            </div>
        </>

    );
}

export default OrderDetail;