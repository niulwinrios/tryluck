import {
  Aside,
  Box,
  Container,
  DivMenu,
  GamesMenu,
  HeaderMain,
  IconMenu,
  Main
} from '../generalstyled';
import { Header } from '../Header';
import {
  Dni,
  HeaderLotto,
  Imagen,
  Nombre,
  Numero,
  Premio,
  Table
} from './styled';

export const SuperLotto = () => {
  return (
    <>
      <Header />
      <Container>
        <Main>
          <HeaderMain>
            <Box width="100%" height>
              <GamesMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Sorteo 00001 - 5/07/23</span>
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Sorteo 00001 - 5/07/23</span>
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Sorteo 00001 - 5/07/23</span>
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Sorteo 00001 - 5/07/23</span>
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Sorteo 00001 - 5/07/23</span>
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Sorteo 00001 - 5/07/23</span>
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Sorteo 00001 - 5/07/23</span>
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Sorteo 00001 - 5/07/23</span>
                </DivMenu>
              </GamesMenu>
              <Box width="75%">
                <Imagen
                  src="https://tomsriver.org/wp-content/uploads/2022/05/casion_night-toms-river-new-jersey.jpg"
                  alt=""
                />
              </Box>
            </Box>
          </HeaderMain>
          <Box width="100%" background="blue">
            <Table>
              <HeaderLotto>PRIMER SORTEO</HeaderLotto>
              <Numero background="#ff020f" color="#fff">
                N°
              </Numero>
              <Premio background="#ff020f" color="#fff">
                PREMIO
              </Premio>
              <Nombre background="#ff020f" color="#fff">
                NOMBRE
              </Nombre>
              <Dni background="#ff020f" color="#fff">
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
    </>
  );
};
