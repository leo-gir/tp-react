import { NotFoundContainer, StyledFontAwesomeIcon } from "./NotFoundStyles";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";


export default function NotFound() {
  return (
    <>
    <NotFoundContainer>
    <StyledFontAwesomeIcon icon={faTriangleExclamation}/>
    <h4>La página a la que intentás acceder no existe</h4>
    </NotFoundContainer>
    </>
  )
}
