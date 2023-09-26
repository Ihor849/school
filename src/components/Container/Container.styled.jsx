import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  
  grid-template-rows: 100px auto 70px;

  grid-template-areas:
  "h"
  "m"
  "f"
`;
