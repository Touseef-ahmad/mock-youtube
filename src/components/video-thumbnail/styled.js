import styled from 'styled-components';

export const StyledThumbnailContainer = styled.div`
  display: flex;
  flex-basis: ${({ width }) => width};
  flex-direction: ${({ flexDirection }) => flexDirection};
  margin: 20px;
  max-width: ${({ width }) => width};
  padding: 10px;
`;

export const StyledImageContainer = styled.div`
  flex: 1;
  float: left;
  position: relative;
`;
export const StyledTitle = styled.p`
  flex: 1;
  margin: 0 20px;
`;
export const StyledPlayIconContainer = styled.div`
  align-items: center;
  color: transparent;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0px;
  margin: 0 auto;
  position: absolute;
  right: 0px;
  top: 0px;
  visibility: visible;
  width: 100%;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const StyledImage = styled.img`
  height: auto;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
