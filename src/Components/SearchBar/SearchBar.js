import styled from 'styled-components';
import IconSearch from './IconSearch';
const SearchBarStyled = styled.input`
  /* position: relative; */
  width: 80%;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 22px;
  padding: 5px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function SearchBar() {
  return (
    <div className='searchContainer' style={{ position: 'relative' }}>
      <SearchBarStyled name='searchbar' placeholder='Search....' />
      <IconSearch />
    </div>
  );
}

export default SearchBar;
