import * as React from "react";

export const Balls3x = (props) => (
  <svg
    width={74}
    height={19}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <rect x={54} width={20} height={19} rx={9.5} fill='#8A6FFF' />
    <rect x={27} width={20} height={19} rx={9.5} fill='#B2A0FF' />
    <rect width={20} height={19} rx={9.5} fill='#E1DBFF' />
  </svg>
);
