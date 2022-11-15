import React, { ImgHTMLAttributes } from 'react';

const NextImageMock: React.FC<ImgHTMLAttributes<never>> = (props) => (
  <img {...props} />
);

export default NextImageMock;
