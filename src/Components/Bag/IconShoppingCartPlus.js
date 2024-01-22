function IconShoppingCartPlus(props) {
  return (
    <svg
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      viewBox='0 0 24 24'
      height='1em'
      width='1em'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' />
      <path d='M8 19 A2 2 0 0 1 6 21 A2 2 0 0 1 4 19 A2 2 0 0 1 8 19 z' />
      <path d='M19 19 A2 2 0 0 1 17 21 A2 2 0 0 1 15 19 A2 2 0 0 1 19 19 z' />
      <path d='M17 17H6V3H4' />
      <path d='M6 5l6.005.429m7.138 6.573L19 13H6M15 6h6m-3-3v6' />
    </svg>
  );
}

export default IconShoppingCartPlus;
