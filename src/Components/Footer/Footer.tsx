// Dependancies
import BtnGenerateCV from "../../Utils/BtnGenerateCV/BtnGenerate";
import styled from "styled-components";
import { Link } from "react-router-dom";

// SCSS
import "./Footer.scss"

// Styled Components
const StyledH3 = styled.h3`
  color: ${(props:any) => props.theme.secondary};
  font-size: 2em;
  border-bottom: 2px solid ${(props:any) => props.theme.secondary};
  padding-bottom: 20px;
  max-width: 80%;
  margin: 40px auto;
  text-align: center;
  min-width: 80%;
`;
const StyledEm = styled.em`
  color: ${(props:any) => props.theme.secondary};
`;

const Footer = () => {
  return(
    <footer>
      <div className="container__clippath"></div>

      <div className="container__top">
        <div className="left">
          <StyledH3 id="h3">Menu rapide</StyledH3>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/story">Story</Link></li>
            <li><Link to="/projects">Projets</Link></li>
            <li><Link to="/contact">Contactez-moi</Link></li>
          </ul>
        </div>
        
        <div className="middle">
          <StyledH3>Télécharger Mon CV &ndash; ( pdf )</StyledH3>
          <div className="content">
            <p>
              Inspiré d'un CV trouvé sur google,<br/><StyledEm>je l'ai ré-écris entièrement en JavaScript avec le librairie jsPDF</StyledEm>.<br /><br />Ainsi, cliquez simplement sur la représentation du CV pour générer celui-ci au format PDF.
            </p>
            <figure>
              <BtnGenerateCV />
            </figure>
          </div>
        </div>

        <div className="right">
          <StyledH3>Remerciements</StyledH3>
          <ul>
            <li>Ma famille</li>
            <li>La famille Vigoureux</li>
            <li>La 3W Academy</li>
            <li>Les communautés sur discord</li>
            <li>Erwan et Quentin sur Dyma.fr</li>
            <li>Les formateurs que j'ai pu avoir</li>
          </ul>
        </div>
      </div>

      <div className="container__bottom">
        <span>&copy; Copyright 2021</span>
        <span>&#128241; 06.22.63.79.24</span>
        <span>
            <a
              href="https://www.linkedin.com/in/alain-guillon-22b3b4b6/"
              target="_blanck"
              className="link"
            >
              <img 
                src="/images/linkedin.png" 
                alt="Icon Github" 
                width="25" 
              />
            </a>

            <a href="https://github.com/Zyrass" target="_blanck" className="link">
              <img 
                src="/images/github.png" 
                alt="Icon Github" 
                width="25" 
              />
            </a>
            <a href="https://gitlab.com/Zyrass" target="_blanck" className="link">
              <img 
                src="/images/gitlab.png" 
                alt="Icon Gitlab" 
                width="25"
                onClick={() => BtnGenerateCV }
              />
            </a>
        </span>
        <span>Mentions Légales</span>
        <span>Codé avec passion <span style={{
            color: "red"
        }}>♥ ♥ ♥</span></span>
      </div>
    </footer>
  )
}


export default Footer