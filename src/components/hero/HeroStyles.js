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

    @media(max-width: 576px){
      /* position: static; */
    } 

`

// export const HeroBtn = styled.button`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     padding: 10px;
//     bottom: 50px;
//     right: 50px;
//     width: 230px;
//     height: 60px;
//     font-family: "Poppins", sans-serif;
//     font-weight: 400;
//     font-size: 30px;
//     color: var(--bg);
//     background-color: var(--amarillo);
//     cursor: pointer;
//     border-radius: 15px;
//     box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

    
// `



export const HeroBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 10px;
  bottom: 30px;
  right: 30px;
  width: 230px;
  height: 60px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 30px;
  color: var(--bg);
  background-color: var(--amarillo);
  cursor: pointer;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  border: 0 solid #E5E7EB;
  box-sizing: border-box;
  display: flex;
  font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.75rem;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
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

@media(max-width: 576px){
      /* display: none; */
      /* background-color: black; */
      width: 100px;
      height: 30px;
      font-size: 13px;
      bottom:10px;
      right: 10px;
    } 

`