import React from 'react';
import './DetailRow.css';

type DetailRowProps = {
  name: string;
  children?: React.ReactNode;
};

export const DetailRow: React.FC<DetailRowProps> = ({
  name,
  children,
}: DetailRowProps) => (
  <div className="item-row">
    <div className="item-name">{name}</div>
    <div className="item-value">{children}</div>
  </div>
);
export default DetailRow;
