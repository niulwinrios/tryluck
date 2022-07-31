import GlobalStyle from '../../GlobalStyle';
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
import { Header } from '../Header';
import { Imagen } from '../SuperLotto/styled';
import {
  BetsCard,
  BetsContainer,
  CardContainer,
  EstimateCard,
  GamesCard,
  Span,
  TeamCard,
  Tittle
} from './styled';

export const SportsBetting = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
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
                <DivMenu background="#222222" color="#fff">
                  <span>Deportes</span>
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Futbol</span>
                  <IconMenu
                    src="/estrella.png"
                    width="15px"
                    height="15px"
                    marginLeft
                  />
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Tenis</span>
                  <IconMenu
                    src="/estrella.png"
                    width="15px"
                    height="15px"
                    marginLeft
                  />
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Baloncesto</span>
                  <IconMenu
                    src="/estrella.png"
                    width="15px"
                    height="15px"
                    marginLeft
                  />
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Beisbol</span>
                  <IconMenu
                    src="/estrella.png"
                    width="15px"
                    height="15px"
                    marginLeft
                  />
                </DivMenu>
                <DivMenu>
                  <IconMenu src="/sport-icon.png" />
                  <span>Ciclismo</span>
                  <IconMenu
                    src="/estrella.png"
                    width="15px"
                    height="15px"
                    marginLeft
                  />
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

          <BetsContainer>
            <CardContainer>
              <BetsCard>
                <Tittle>Futbol / Amistoso entre clubes</Tittle>
                <GamesCard>
                  <Box width="100%">
                    <Box width="80%" direction="column">
                      <span>Arsenal</span>
                      <span>Manchester City</span>
                    </Box>
                    <Box width="15%" direction="column">
                      <span>0</span>
                      <span>0</span>
                    </Box>
                  </Box>
                  <Box width="40%">
                    <Box width="50%">
                      <span>0</span>
                      <img
                        src="/tarjetaroja.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                    <Box width="50%" margin>
                      <span>0</span>
                      <img
                        src="/tarjetaamarilla.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                  </Box>
                </GamesCard>
                <EstimateCard>
                  <TeamCard>
                    <Span> Arsenal </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Empate </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Manchester City </Span> 2.80
                  </TeamCard>
                </EstimateCard>
              </BetsCard>
              <BetsCard>
                <Tittle>Futbol / Amistoso entre clubes</Tittle>
                <GamesCard>
                  <Box width="100%">
                    <Box width="80%" direction="column">
                      <span>Arsenal</span>
                      <span>Manchester City</span>
                    </Box>
                    <Box width="15%" direction="column">
                      <span>0</span>
                      <span>0</span>
                    </Box>
                  </Box>
                  <Box width="40%">
                    <Box width="50%">
                      <span>0</span>
                      <img
                        src="/tarjetaroja.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                    <Box width="50%" margin>
                      <span>0</span>
                      <img
                        src="/tarjetaamarilla.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                  </Box>
                </GamesCard>
                <EstimateCard>
                  <TeamCard>
                    <Span> Arsenal </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Empate </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Manchester City </Span> 2.80
                  </TeamCard>
                </EstimateCard>
              </BetsCard>
              <BetsCard>
                <Tittle>Futbol / Amistoso entre clubes</Tittle>
                <GamesCard>
                  <Box width="100%">
                    <Box width="80%" direction="column">
                      <span>Arsenal</span>
                      <span>Manchester City</span>
                    </Box>
                    <Box width="15%" direction="column">
                      <span>0</span>
                      <span>0</span>
                    </Box>
                  </Box>
                  <Box width="40%">
                    <Box width="50%">
                      <span>0</span>
                      <img
                        src="/tarjetaroja.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                    <Box width="50%" margin>
                      <span>0</span>
                      <img
                        src="/tarjetaamarilla.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                  </Box>
                </GamesCard>
                <EstimateCard>
                  <TeamCard>
                    <Span> Arsenal </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Empate </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Manchester City </Span> 2.80
                  </TeamCard>
                </EstimateCard>
              </BetsCard>
            </CardContainer>
            <CardContainer>
              <BetsCard>
                <Tittle>Futbol / Amistoso entre clubes</Tittle>
                <GamesCard>
                  <Box width="100%">
                    <Box width="80%" direction="column">
                      <span>Arsenal</span>
                      <span>Manchester City</span>
                    </Box>
                    <Box width="15%" direction="column">
                      <span>0</span>
                      <span>0</span>
                    </Box>
                  </Box>
                  <Box width="40%">
                    <Box width="50%">
                      <span>0</span>
                      <img
                        src="/tarjetaroja.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                    <Box width="50%" margin>
                      <span>0</span>
                      <img
                        src="/tarjetaamarilla.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                  </Box>
                </GamesCard>
                <EstimateCard>
                  <TeamCard>
                    <Span> Arsenal </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Empate </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Manchester City </Span> 2.80
                  </TeamCard>
                </EstimateCard>
              </BetsCard>
              <BetsCard>
                <Tittle>Futbol / Amistoso entre clubes</Tittle>
                <GamesCard>
                  <Box width="100%">
                    <Box width="80%" direction="column">
                      <span>Arsenal</span>
                      <span>Manchester City</span>
                    </Box>
                    <Box width="15%" direction="column">
                      <span>0</span>
                      <span>0</span>
                    </Box>
                  </Box>
                  <Box width="40%">
                    <Box width="50%">
                      <span>0</span>
                      <img
                        src="/tarjetaroja.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                    <Box width="50%" margin>
                      <span>0</span>
                      <img
                        src="/tarjetaamarilla.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                  </Box>
                </GamesCard>
                <EstimateCard>
                  <TeamCard>
                    <Span> Arsenal </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Empate </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Manchester City </Span> 2.80
                  </TeamCard>
                </EstimateCard>
              </BetsCard>
              <BetsCard>
                <Tittle>Futbol / Amistoso entre clubes</Tittle>
                <GamesCard>
                  <Box width="100%">
                    <Box width="80%" direction="column">
                      <span>Arsenal</span>
                      <span>Manchester City</span>
                    </Box>
                    <Box width="15%" direction="column">
                      <span>0</span>
                      <span>0</span>
                    </Box>
                  </Box>
                  <Box width="40%">
                    <Box width="50%">
                      <span>0</span>
                      <img
                        src="/tarjetaroja.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                    <Box width="50%" margin>
                      <span>0</span>
                      <img
                        src="/tarjetaamarilla.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                  </Box>
                </GamesCard>
                <EstimateCard>
                  <TeamCard>
                    <Span> Arsenal </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Empate </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Manchester City </Span> 2.80
                  </TeamCard>
                </EstimateCard>
              </BetsCard>
            </CardContainer>
            <CardContainer>
              <BetsCard>
                <Tittle>Futbol / Amistoso entre clubes</Tittle>
                <GamesCard>
                  <Box width="100%">
                    <Box width="80%" direction="column">
                      <span>Arsenal</span>
                      <span>Manchester City</span>
                    </Box>
                    <Box width="15%" direction="column">
                      <span>0</span>
                      <span>0</span>
                    </Box>
                  </Box>
                  <Box width="40%">
                    <Box width="50%">
                      <span>0</span>
                      <img
                        src="/tarjetaroja.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                    <Box width="50%" margin>
                      <span>0</span>
                      <img
                        src="/tarjetaamarilla.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                  </Box>
                </GamesCard>
                <EstimateCard>
                  <TeamCard>
                    <Span> Arsenal </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Empate </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Manchester City </Span> 2.80
                  </TeamCard>
                </EstimateCard>
              </BetsCard>
              <BetsCard>
                <Tittle>Futbol / Amistoso entre clubes</Tittle>
                <GamesCard>
                  <Box width="100%">
                    <Box width="80%" direction="column">
                      <span>Arsenal</span>
                      <span>Manchester City</span>
                    </Box>
                    <Box width="15%" direction="column">
                      <span>0</span>
                      <span>0</span>
                    </Box>
                  </Box>
                  <Box width="40%">
                    <Box width="50%">
                      <span>0</span>
                      <img
                        src="/tarjetaroja.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                    <Box width="50%" margin>
                      <span>0</span>
                      <img
                        src="/tarjetaamarilla.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                  </Box>
                </GamesCard>
                <EstimateCard>
                  <TeamCard>
                    <Span> Arsenal </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Empate </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Manchester City </Span> 2.80
                  </TeamCard>
                </EstimateCard>
              </BetsCard>
              <BetsCard>
                <Tittle>Futbol / Amistoso entre clubes</Tittle>
                <GamesCard>
                  <Box width="100%">
                    <Box width="80%" direction="column">
                      <span>Arsenal</span>
                      <span>Manchester City</span>
                    </Box>
                    <Box width="15%" direction="column">
                      <span>0</span>
                      <span>0</span>
                    </Box>
                  </Box>
                  <Box width="40%">
                    <Box width="50%">
                      <span>0</span>
                      <img
                        src="/tarjetaroja.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                    <Box width="50%" margin>
                      <span>0</span>
                      <img
                        src="/tarjetaamarilla.png"
                        alt=""
                        width="15px"
                        height="20px"
                      />
                      <span>0</span>
                    </Box>
                  </Box>
                </GamesCard>
                <EstimateCard>
                  <TeamCard>
                    <Span> Arsenal </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Empate </Span> 2.80
                  </TeamCard>
                  <TeamCard>
                    <Span> Manchester City </Span> 2.80
                  </TeamCard>
                </EstimateCard>
              </BetsCard>
            </CardContainer>
          </BetsContainer>
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
