import React from 'react';

import orderButtonStyles from './orderButton.module.scss';

const OrderButton = (props) => (
  <span
    className={
      props.style === 'thin' ? orderButtonStyles.orderButtonThin :
        orderButtonStyles.orderButton
    }
  >
    Užsisakyti
  </span>
)

export default OrderButton