import styled from "styled-components";
// import { theme } from "../../../../../data/theme";

// import Text from "../../../../atoms/text/Text";

const StyledListing = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;

`;

const StyledAddress = styled.div`
  display: flex;
  justify-content: flex-start;

`;

const Tab = ({ id, name, address, onClick, city, phone }) => {
  return (
    <StyledListing id={`listing-${id}`} onClick={(e) => onClick(e)}>
    </StyledListing>
  );
};

export default Tab;
