import styled from 'styled-components';
import bag from './bag.jpg';
import IconShoppingCartPlus from './IconShoppingCartPlus';
import './styles.css';
const BagCard = styled.div`
  margin: 10px auto;
  width: 140px;
  height: 180px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 130px 1fr 1fr;
  grid-column: 2;
  grid-row: 2/3;
`;

function Bag(props) {
  return (
    <BagCard>
      <img className='bagImg' alt={'Bagimage'} src={bag} />
      <p className='bagName'>Mintra BackPack</p>
      <p className='price'>EGP 1500</p>
      <div className='addToCartIcon'>
        <IconShoppingCartPlus />
      </div>
    </BagCard>
  );
}

export default Bag;
