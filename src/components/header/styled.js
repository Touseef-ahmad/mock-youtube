import styled from 'styled-components';

export const StyledHeader = styled.header`
  align-items: center;
  border-bottom: 1px solid #999999;
  display: flex;
  padding: '0 30px 0 30px';
  text-align: center;
`;

export const StyledLogoContainer = styled.div`
  align-items: center;
  display: flex;
  font-family: sans-serif;
  justify-self: flex-start;
  list-style: none;
  text-decoration: none;
`;

export const StyledBrandName = styled.span`
  font-size: 20px;
  font-weight: bolder;
  margin: 0 10px 0 10px;
`;

export const StyledBrandNameSup = styled.sup`
  font-size: 10px;
  font-weight: lighter;
  margin: 0;
`;

export const StyledFrom = styled.form`
  color: 'red';
  flex: 2;
`;

export const StyledInput = styled.input`
  padding: 5px;
  width: 30%;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid black;
  padding: 5px 20px 5px 20px;
`;
