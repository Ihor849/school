import { HomeTitle, HomeWrapper } from "./Page.styled";
import HomePage from '../images/HomePage.jpg'

export const Home  =()=> {


    return (
      <HomeWrapper  >
        <HomeTitle  >
        BEST CAR FOR RENT 
        </HomeTitle>
        <img src={HomePage} alt="HomePage"/>

      </HomeWrapper>
    );
  }