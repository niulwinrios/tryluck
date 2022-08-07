import { Button, Checkbox } from 'antd';
import { Input, useInitConfigInput } from 'form-tool';
import {
  BoxAmount,
  BoxInfo,
  BoxInput,
  Container,
  DivButton,
  DivCheck,
  Header,
  Info,
  Logo,
  Span,
  Texto
} from './styled';

export const Metamask = () => {
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
      color: '#363636'
    },
    container: {}
  });

  return (
    <Container>
      <Logo>
        <img src="/logotryluck.png" alt="" />
      </Logo>
      <Header>
        <Span>RECARGA A TRAVÉS DE METAMASK</Span>
      </Header>
      <Info>
        <DivButton>
          <Button
            type="primary"
            danger
            style={{
              background: '#D42416',
              borderRadius: '5px',
              width: '100%',
              height: '40px',
              fontSize: '16px'
            }}
          >
            Cantidad Rápida
          </Button>
        </DivButton>
        <BoxAmount>
          <BoxInput>
            <Input
              name="name"
              lActiveTitle={false}
              title=""
              value=""
              placeholder="100"
              iStyles={{ height: '45px' }}
            />
          </BoxInput>
          <BoxInput>
            <Input
              name="name"
              title=""
              value=""
              placeholder="200"
              iStyles={{ height: '45px' }}
            />
          </BoxInput>
          <BoxInput>
            <Input
              name="name"
              title=""
              value=""
              placeholder="500"
              iStyles={{ height: '45px' }}
            />
          </BoxInput>
          <BoxInput>
            <Input
              name="name"
              title=""
              value=""
              placeholder="1000"
              iStyles={{ height: '45px' }}
            />
          </BoxInput>
        </BoxAmount>
        <BoxInfo>
          <Input
            name="name"
            title=""
            value=""
            placeholder="Cantidad a Recargar"
            iStyles={{ height: '40px' }}
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
              width: '50%',
              height: '40px',
              fontSize: '16px'
            }}
          >
            Confirmar Recarga
          </Button>
        </DivButton>
      </Info>
    </Container>
  );
};
