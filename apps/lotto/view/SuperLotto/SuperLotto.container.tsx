import {
  Aside,
  Box,
  Container,
  Dni,
  Header,
  Imagen,
  Main,
  Nombre,
  Numero,
  Premio,
  Table
} from './styled';

export const SuperLotto = () => {
  return (
    <Container>
      <Main>
        <Box width="100%" height>
          <Box direction="column">
            <div>Juego 1</div>
            <div>Juego 2</div>
            <div>Juego 3</div>
            <div>Juego 4</div>
            <div>Juego 5</div>
          </Box>
          <Box width="75%">
            <Imagen
              src="https://tomsriver.org/wp-content/uploads/2022/05/casion_night-toms-river-new-jersey.jpg"
              alt=""
            />
          </Box>
        </Box>
        <Box width="100%" background="blue">
          <Table>
            <Header>PRIMER SORTEO</Header>
            <Numero background="#cc171f" color="#fff">
              N°
            </Numero>
            <Premio background="#cc171f" color="#fff">
              PREMIO
            </Premio>
            <Nombre background="#cc171f" color="#fff">
              NOMBRE
            </Nombre>
            <Dni background="#cc171f" color="#fff">
              DNI
            </Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
            <Numero>1</Numero>
            <Premio>1 giftcard de 500 solos</Premio>
            <Nombre>Sanchez Diaz Jose Ramon</Nombre>
            <Dni>12345678</Dni>
          </Table>
        </Box>
      </Main>
      <Aside>
        <Box width="100%" height>
          <Imagen
            src="https://juegosdeslots.co/wp-content/uploads/2020/11/unnamed.jpg"
            alt=""
          />
        </Box>
        <Box width="100%" height>
          <Imagen
            src="https://juegosdeslots.co/wp-content/uploads/2020/11/unnamed.jpg"
            alt=""
          />
        </Box>
        <Box width="100%" height>
          <Imagen
            src="https://juegosdeslots.co/wp-content/uploads/2020/11/unnamed.jpg"
            alt=""
          />
        </Box>
        <Box width="100%" height>
          <Imagen
            src="https://juegosdeslots.co/wp-content/uploads/2020/11/unnamed.jpg"
            alt=""
          />
        </Box>
      </Aside>
    </Container>
  );
};
