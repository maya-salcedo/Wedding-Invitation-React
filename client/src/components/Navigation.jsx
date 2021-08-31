import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FlagContext } from './FlagContext';
import Select from 'react-select';

const StyledImage = styled.img`
  width: 30px;
  height: 25px;
`;

const NavWrapper = styled.div`
  padding-top: 0.75em;
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: center;
  & .nav-link {
    color: #679b9b !important;
    margin: 0.5%;
    text-decoration: none;
    padding: 4px;
  }
  & .nav-link:hover {
    border: solid #679b9b 1px;
    margin: 0.5%;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    text-decoration: none;
    color: #679b9b;
    padding: 3px;
  }
`;

const FlagWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const Navigation = () => {
  const { setFlag } = useContext(FlagContext);
  const [message, setMessage] = useState();
  const getOption = (e) => {
    console.log(e);
    setFlag(e.value);
  };

  const options = [
    {
      value: 'italy',
      label: (
        <div>
          <StyledImage src="image/italianflag.png" alt="italiano" />
        </div>
      ),
    },
    {
      value: 'english',
      label: (
        <div>
          <StyledImage src="image/englishflag.png" alt="english" />
        </div>
      ),
    },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      padding: 0,
      backgroundColor: '#fde2e2',
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: 'transparent',
      width: 80,
      border: 0,
      boxShadow: 'none',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    },
  };

  const query = flag === 'italy' ? '?it=true' : '';
  const getMessage = async () => {
    const { data } = await axios.get(`/api/navigation${query}`);
    setMessage(data);
  };

  useEffect(() => {
    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flag]);

  return (
    <div>
      <NavWrapper>
        <NavLink className="nav-link" to="/">
          HOME
        </NavLink>
        <NavLink className="nav-link" to="/wedding">
          WEDDING
        </NavLink>
        <NavLink className="nav-link" to="/gift">
          GIFTS
        </NavLink>
        <NavLink className="nav-link" to="/travel">
          TRAVEL
        </NavLink>
        <NavLink className="nav-link" to="/rsvp">
          RSVP
        </NavLink>
      </NavWrapper>
      <FlagWrapper>
        <Select
          onChange={(e) => getOption(e)}
          styles={customStyles}
          hideSelectedOptions={false}
          name="flag"
          id="flag"
          defaultValue={options[1]}
          options={options}
        />
      </FlagWrapper>
    </div>
  );
};

export default React.memo(Navigation);
