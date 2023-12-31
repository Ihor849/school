import styled from 'styled-components';

export const MenuWrapp = styled.div`

  display: flex;
  flex-direction: column;
  position: fixed;
  top: -100%;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 5;
  background-color: var(--gradient-bl);
  transition: top 1s;
  padding: 25px;

  &.active {
    top: 0;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }

`
  export const MenuHeader = styled.div.attrs(props => ({
    theme: props.theme,
  }))`
    position: relative;
    
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-self: center ;

    @media screen and (min-width: 768px) {
        width: 768px;
    }

    &>button.closeBtn {
        &> svg {
        transition:  all 1s ease-in-out;
        color: var(--text-color);
        scale: 2;
        }

    &:hover{
        background-color: #eee5;


        &> svg {
            transition: all 1s ease-in-out;
            fill:  ${props => props.theme === 'light' ? '#eee' : '#222'};
        }
    }
    }

`
export const MenuContent = styled.div`
    display: grid;
    place-items: center;
    /* grid-template-rows: 100px 200px ; */
    padding: 40px;
    gap: 40px;

    `