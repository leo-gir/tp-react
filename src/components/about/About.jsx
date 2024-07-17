import {
    AboutWelcomeContainer,
    AboutImgContaniner,
    TextAboutContainer,
    TestimoniesContainer,
    TestimoniesCards,
    AboutHeroImg,
    SectionContainer
} from "./AboutStyles";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { StyledFontAwesomeIcon } from "./AboutStyles";
import AboutHero from "../../assets/img/aboutHero.png";
import TiendaImg from "../../assets/img/tienda.png";

function About() {
    return (
        <>
            <AboutHeroImg src={AboutHero} alt="" />

            <SectionContainer>
                <h2>Sobre Nosotrxs</h2>

                <AboutWelcomeContainer>
                    <h3>Bienvenidxs a Fusión Urbana</h3>
                    <h4>
                        Tu destino para lo último en moda urbana y tecnología
                    </h4>

                    <AboutImgContaniner>
                        <img src={TiendaImg} alt="" />
                    </AboutImgContaniner>
                    <TextAboutContainer>
                        <p>
                            En Fusión Urbana, nos enorgullecemos de ofrecer una
                            experiencia de compra única que combina lo mejor de
                            la moda contemporánea y los dispositivos
                            electrónicos más innovadores. Nuestra tienda es un
                            reflejo de la vibrante cultura urbana, donde la moda
                            se fusiona con la tecnología para crear un ambiente
                            moderno y dinámico. En Fusión Urbana, vas a
                            encontrar una cuidadosa selección de ropa de
                            tendencia y los últimos gadgets electrónicos que se
                            adaptan a tu estilo de vida urbano. Nuestro equipo
                            está comprometido en brindarte un servicio
                            excepcional y asesoramiento personalizado para que
                            encuentres los productos que mejor se ajusten a tus
                            necesidades y gustos. En Fusión Urbana, no solo
                            vendemos productos, creamos una experiencia de
                            compra que te inspira y te conecta con la esencia de
                            la vida urbana. Unite a la comunidad de Fusión
                            Urbana y descubrí un mundo de estilo, innovación y
                            creatividad. ¡Bienvenidx a Fusión Urbana, donde la
                            moda y la tecnología se fusionan para crear un
                            estilo de vida urbano único!
                        </p>
                    </TextAboutContainer>
                </AboutWelcomeContainer>
            </SectionContainer>

            <TestimoniesContainer>
                <TestimoniesCards>
                    <StyledFontAwesomeIcon icon={faQuoteLeft} />
                    <p>
                        Fusión Urbana es mi destino de compras favorito. La
                        fusión de moda y tecnología aquí es simplemente
                        increíble. ¡Una experiencia de compra que nunca
                        decepciona!
                    </p>
                    <span>Martin G.</span>
                </TestimoniesCards>
                <TestimoniesCards>
                    <StyledFontAwesomeIcon icon={faQuoteLeft} />
                    <p>
                        Encontré en Fusión Urbana la combinación perfecta de
                        estilo y funcionalidad. Los dispositivos electrónicos y
                        la ropa de tendencia se adaptan a mi vida urbana de
                        manera excepcional. ¡Recomendado al 100%!
                    </p>
                    <span>Julieta V.</span>
                </TestimoniesCards>
                <TestimoniesCards>
                    <StyledFontAwesomeIcon icon={faQuoteLeft} />
                    <p>
                        Fusión Urbana no es solo una tienda, es un lugar donde
                        la moda y la tecnología se unen para crear un estilo de
                        vida único. Cada visita es una inspiración. ¡Gracias por
                        hacer de mis compras una experiencia inolvidable!
                    </p>
                    <span>Diego S.</span>
                </TestimoniesCards>
            </TestimoniesContainer>
        </>
    );
}

export default About;
