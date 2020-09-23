import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  padding: 0 60px 0 60px;
`;

export const StyledSuggestionsDiv = styled.div`
  flex-basis: 40%;
  height: 100vh;
  margin: 0 30px 0 30px;
`;

export const StyledVideoWrapper = styled.div`
  height: 0;
  padding-bottom: 56.25%; /* 16:9 */
  position: relative;
`;
export const StyledIframe = styled.iframe`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;
