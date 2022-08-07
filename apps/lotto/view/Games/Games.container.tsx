import {
  Aside,
  BannerBox,
  BannerContainer,
  BannerText,
  Box,
  Button,
  Container,
  DivMenu,
  GamesMenu,
  HeaderMain,
  IconMenu,
  LottoImage,
  Main,
  SpanBanner
} from '../generalstyled';
import { Imagen } from '../SuperLotto/styled';

export const Games = () => {
  return (
    <>
      <BannerContainer>
        <LottoImage src="/banner-lotto.png" />
        <BannerBox>
          <Box width="100%">
            <SpanBanner width="5%">SUPER LOTTO</SpanBanner>
            <BannerText>
              SIN RIESGO DE PERDIDA.!!! GANA HASTA EL 700% DE TUS APUESTAS
            </BannerText>
          </Box>
          <Button>REGÍSTRATE</Button>
        </BannerBox>
      </BannerContainer>
      <Container>
        <Main>
          <HeaderMain>
            <Box width="100%" height>
              <GamesMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Juego 1</span>
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Juego 2</span>
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Juego 3</span>
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Juego 4</span>
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Juego 5</span>
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Juego 6</span>
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
          <Box width="100%">
            <img
              src="https://bonosdeapuesta-media.s3.eu-west-3.amazonaws.com/wp-content/uploads/2021/05/04033026/juegos-de-ruleta.png"
              alt=""
              width="100%"
            />
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
