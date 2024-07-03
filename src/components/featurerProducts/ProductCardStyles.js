import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25%;
    min-height: 390px;
    border: solid 1px var(--gris-azulado);
    border-radius: 20px;
    padding: 10px;

    >img{
        top: 20px;
        max-width: 80%;
        border-radius: 20px;
        margin: 20px;
    }
    >span{
        display: flex;
        text-align: end;
        font-family: "Poppins", sans-serif;
        align-items: start;
        justify-content: start;
        font-weight: 200;
        font-size: 15px;
        color: white;
        margin-bottom: 15px;
    }
    >h4{
        text-align: center;
    }

    @media(max-width: 1200px){
        width: 40%;
    }

    @media(max-width: 768px){
        min-width: 270px;
    }
`

export const BtnContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    width: 80%;
    margin-bottom: 18px;
`


export const AddBtn= styled.button`

  align-self: center;
  background-color: var(--amarillo);
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  border-color: var(--gris-azulado);
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: black;
  cursor: pointer;
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  line-height: 20px;
  outline: none;
  padding: 10px;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;


&:hover {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}

&:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
}
`


export const DetailsBtn = styled(AddBtn)`
    background-color: var(--gris-claro);
`
