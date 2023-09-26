import { Wrapper } from "./Container.styled"

// Оболочка (grid - контейнер)
export const Container = ({children})=>{

  return(
    <Wrapper className="wrapper">
      {children}
    </Wrapper>
  )
}