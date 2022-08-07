import { Button, Checkbox } from 'antd';
import { Input, useInitConfigInput } from 'form-tool';
import GlobalStyle from '../../GlobalStyle';
import { Box } from '../generalstyled';
import {
  BoxConditions,
  BoxInfo,
  Conditions,
  Container,
  DivButton,
  DivCheck,
  Header,
  Info,
  Logo,
  Span,
  Texto,
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
              <Input name="name" title="Primer Nombre" value="" />
              <Input name="name" title="Email" value="" />
              <Input name="name" title="Contraseña" value="" />
            </Tittles>
            <Tittles>
              <Input name="name" title="Segundo Nombre" value="" />
              <Input name="name" title="Confirmar Email" value="" />
              <Input name="name" title="Confirmar Contraseña" value="" />
            </Tittles>
            <Tittles>
              <Input name="name" title="Primer Apellido" value="" />
              <Input name="name" title="Teléfono Móvil" value="" />
              <Input name="name" title="Usuario" value="" />
            </Tittles>
            <Tittles>
              <Input name="name" title="Segundo Apellido" value="" />
              <Input name="name" title="Confirmar Teléfono" value="" />
              <Input name="name" title="Link de Referido" value="" />
            </Tittles>
          </Box>
          <Conditions>
            <BoxConditions>
              <DivCheck>
                <Checkbox>
                  <Texto>
                    Declaro que soy una persona expuesta políticamente
                  </Texto>
                </Checkbox>
              </DivCheck>
              <DivCheck>
                <Checkbox>
                  <Texto>Declaro el origen lícito de los fondos</Texto>
                </Checkbox>
              </DivCheck>
              <DivCheck>
                <Checkbox>
                  <Texto>Aceptar términos y condiciones</Texto>
                </Checkbox>
              </DivCheck>
            </BoxConditions>
            <BoxConditions align="flex-end" justify="center">
              <Texto>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy.
              </Texto>
              <Texto>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.
              </Texto>
            </BoxConditions>
          </Conditions>
          <DivButton>
            <Button type="primary" danger>
              Terminar Registro
            </Button>
          </DivButton>
        </Info>
      </Container>
    </>
  );
};
