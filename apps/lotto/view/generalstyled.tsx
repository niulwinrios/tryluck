import styled, { css } from 'styled-components';

/** This is the parent container (contains the main container and aside container)*/
export const Container = styled.div<{ direction?: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
`;
/** This is the main container*/
export const Main = styled.div`
  width: 75%;
`;
/** This is the header main */
export const HeaderMain = styled.div`
  width: 100%;
`;
export const GamesMenu = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DivMenu = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  font-size: 18px;
  color: #575757;
  font-weight: bold;
`;
export const IconMenu = styled.img`
  height: 10px;
  width: 10px;
  margin: 0px 15px;
`;
/** This is the aside main */
export const Aside = styled.div`
  width: 25%;
`;

type TBox = {
  width?: string;
  background?: string;
  height?: boolean;
  direction?: string;
};
export const Box = styled.div<TBox>`
  width: ${(props) => props.width || '24%'};
  ${(props) =>
    props.height &&
    css`
      height: 250px;
    `};
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: space-between;
`;
