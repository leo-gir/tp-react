import styled from "styled-components";
import hero from "../../assets/img/hero.jpeg"


export const HeroContaniner = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
    >img{
        width: 100%;
    }
`

export const HeroBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 10px;
    bottom: 50px;
    right: 50px;
    width: 230px;
    height: 60px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: var(--bg);
    background-color: var(--amarillo);
    cursor: pointer;
    border-radius: 15px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`


{/* <button class="button-53" role="button">Button 53</button> */}

export const Btn = styled.button`

/* CSS */


display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    padding: 10px;
    bottom: 50px;
    right: 50px;
    width: 230px;
    height: 60px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: var(--bg);
    background-color: var(--amarillo);
    cursor: pointer;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;




  /* background-color: #3DD1E7; */
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  /* color: #000000; */
  display: flex;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  /* justify-content: center; */
  line-height: 1.75rem;
  /* padding: .75rem 1.65rem; */
  /* position: relative; */
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  /* width: 100%; */
  /* max-width: 460px; */
  /* position: relative; */
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

&:focus {
  outline: 0;
}

&:after {
  content: '';
  position: absolute;
  border: 1px solid #000000;
  bottom: 4px;
  left: 4px;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
}

&:hover:after {
  bottom: 2px;
  left: 2px;
}

/* @media (min-width: 768px) {
  .button-53 {
    padding: .75rem 3rem;
    font-size: 1.25rem;
  }
} */

`