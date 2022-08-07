import { Button, Checkbox } from 'antd';
import { Input, useInitConfigInput } from 'form-tool';
import {
  BoxInfo,
  Container,
  DivButton,
  DivCheck,
  Header,
  Info,
  Logo,
  Span,
  Texto
} from './styled';

export const Withdrawal = () => {
  const [configInput, setConfigInput] = useInitConfigInput();

  setConfigInput({
    ...configInput,
    label: {},
    input: {
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      styles: { fontWeight: 'bold' },
      textAlign: 'center',
      backgroundColor: '#D5DCE1',
      color: '#5D5D5D'
    },
    container: {}
  });

  return (
    <Container>
      <Logo>
        <img src="/logotryluck.png" alt="" />
      </Logo>
      <Header>
        <Span>RETIRAR</Span>
      </Header>
      <Info>
        <DivButton>
          <Button
            type="primary"
            danger
            style={{
              background: '#D42416',
              borderRadius: '5px',
              width: '70%',
              height: '60px',
              fontSize: '16px'
            }}
          >
            <span>27.883.485 YAZ /</span>
            <br />
            <span>39,05 USDT</span>
          </Button>
        </DivButton>
        <BoxInfo>
          <Input
            name="name"
            title=""
            value=""
            placeholder="Cantidad a Retirar"
          />
          <Input
            name="name"
            title=""
            value=""
            placeholder="Contraseña de Retiro"
          />
        </BoxInfo>
        <DivCheck>
          <Checkbox>
            <Texto>Acepte Términos y Condiciones</Texto>
          </Checkbox>
        </DivCheck>
        <DivButton>
          <Button
            type="primary"
            danger
            style={{
              background: '#D42416',
              borderRadius: '5px',
              width: '90%',
              height: '40px',
              fontSize: '16px'
            }}
          >
            Confirmar Retiro
          </Button>
        </DivButton>
      </Info>
    </Container>
  );
};
