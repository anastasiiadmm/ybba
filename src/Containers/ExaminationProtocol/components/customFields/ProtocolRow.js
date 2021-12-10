import React from 'react';

const ProtocolRow = (props) => {
  const { children, customStyle } = props;

  return <div className={customStyle}>{children}</div>;
};

export default ProtocolRow;
