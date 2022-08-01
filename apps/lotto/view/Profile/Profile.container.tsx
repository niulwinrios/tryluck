import { Input as TextInput, useInitConfigInput } from 'form-tool';
import GlobalStyle from '../../GlobalStyle';
import { Box } from '../generalstyled';
import {
  BoxInfo,
  Container,
  Header,
  Info,
  Logo,
  Span,
  Tittles
} from './styled';

export const Profile = () => {
  const [configInput, setConfigInput] = useInitConfigInput();

  setConfigInput({
    ...configInput,
    label: {
      fontSize: '15px'
    },
    input: {
      border: 'none',
      borderRadius: 0,
      styles: { borderBottom: '1px solid #9e9e9e' }
    },
    container: {
      styles: { width: '30%' },
      margin: '15px 0'
    }
  });
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
              <TextInput name="name" title="Primer Nombre" value="" />
              <TextInput name="name" title="Email" value="" />
              <TextInput name="name" title="Contraseña" value="" />
            </Tittles>
            <Tittles>
              <TextInput name="name" title="Segundo Nombre" value="" />
              <TextInput name="name" title="Confirmar Email" value="" />
              <TextInput name="name" title="Confirmar Contraseña" value="" />
            </Tittles>
            <Tittles>
              <TextInput name="name" title="Primer Apellido" value="" />
              <TextInput name="name" title="Teléfono Móvil" value="" />
              <TextInput name="name" title="Usuario" value="" />
            </Tittles>
            <Tittles>
              <TextInput name="name" title="Segundo Apellido" value="" />
              <TextInput name="name" title="Confirmar Teléfono" value="" />
              <TextInput name="name" title="Link de Referido" value="" />
            </Tittles>
          </Box>

          <div>informacion</div>
          <div>boton</div>
        </Info>
      </Container>
    </>
  );
};
