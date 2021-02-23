import { order } from '../model/order';
import iphone from './iphone.png';

const OrderLanding = () => {
    return (
        <div className="layout-padding">
            <h2>Order Detail Page</h2>
            {order.items.map((item) => {
                return (
                    <>
                        <div className="order-container1">
                            <div className="left-section">
                            <figure>
                                <img src={iphone} height="550" width="550" />
                                <figcaption>{item.name}</figcaption>
                            </figure>
                            </div>
                            <div className="right-section">
                            <div className="order-spec">
                                <h4>{item.name}</h4>
                                <p><span className="grey-fg">color:</span> {' '} <span className="black-fg">{item.skuAttributes.color}</span> </p>
                                <p><span className="grey-fg">Size: </span>{' '} <span className="black-fg">{item.skuAttributes.size}</span></p>
                                <p><span className="grey-fg">Model: </span>{' '} <span className="black-fg">{item.skuAttributes.model}</span></p>
                                <p><span className="grey-fg">Plan: </span>{' '} <span className="black-fg">{item.plan}</span></p>
                                <p><span className="grey-fg">Status: </span>{' '} <span className="black-fg">{item.status}</span></p>
                            </div>
                            </div>
                        </div>
                    </>)
            })
            }
        </div>
    );
}

export default OrderLanding;