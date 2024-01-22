import './SideBar.css';
function SideBar(props) {
  return (
    <div className='side-bar'>
      <h3>Shop by</h3>
      <div className='colorPicker'>
        <h4>Colors</h4>
        <div className='colors'>
          <div className='color'></div>
          <div className='color'></div>
          <div className='color'></div>
          <div className='color'></div>
          <div className='color'></div>
          <div className='color'></div>
          <div className='color'></div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
export default SideBar;
