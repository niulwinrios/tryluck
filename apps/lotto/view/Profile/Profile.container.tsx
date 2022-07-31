import GlobalStyle from '../../GlobalStyle';
import { Box } from '../generalstyled';
import {
  BoxInfo,
  Container,
  Header,
  Info,
  Input,
  Logo,
  Span,
  Tittles
} from './styled';

export const Profile = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Logo>
          <img src="/logotryluck.png" alt="" />
        </Logo>
        <Header>
          <Span>COMPLETAR PERFIL</Span>
        </Header>
        <Info>
          <Box width="100%" direction="column">
            <Tittles>
              <BoxInfo>1. Datos de Información</BoxInfo>
              <BoxInfo>2. Datos Personales</BoxInfo>
              <BoxInfo>3. Datos de Cuentas</BoxInfo>
            </Tittles>
            <Tittles>
              <BoxInfo direction="column">
                <label htmlFor="">Nombre</label>
                <input type="text" />
              </BoxInfo>
              <BoxInfo direction="column">
                <label htmlFor="">Nombre</label>
                <Input type="text" />
              </BoxInfo>
              <BoxInfo direction="column">
                <label htmlFor="">Nombre</label>
                <input type="text" />
              </BoxInfo>
            </Tittles>
          </Box>

          <div>informacion</div>
          <div>boton</div>
        </Info>
      </Container>
    </>
  );
};
