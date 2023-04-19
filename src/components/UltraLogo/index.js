import ultraLogo from '../../assets/ultra-logo.png';
import {
  LogoContainer
} from '../../styles/UltraLogo/styles';

export default function UltraLogo () {
  return (
    <LogoContainer>
      <img src={ultraLogo} alt="tecnologia que aproxima" height={125} width={250}/>
    </LogoContainer>
  );
};