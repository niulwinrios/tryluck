import styled, { css } from 'styled-components';

/** This is the banner container */
export const BannerContainer = styled.div`
  width: 100%;
  position: relative;
`;
export const LottoImage = styled.img`
  width: 100%;
  height: 550px;
`;
export const BannerBox = styled.div`
  width: 35%;
  height: 270px;
  position: absolute;
  z-index: 10;
  left: 100px;
  top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;
export const BannerText = styled.span<{
  width?: string;
  background?: string;
  size?: string;
}>`
  width: ${(props) => props.width || '85%'};
  color: #fff;
  margin: 5px;
  font-size: ${(props) => props.size || '25px'};
  font-weight: bold;
  display: flex;
  align-items: center;
`;
export const SpanBanner = styled.span<{
  width?: string;
  background?: string;
  size?: string;
}>`
  width: ${(props) => props.width || '70%'};
  height: 180px;
  color: #fff;
  margin: 5px;
  padding: 10px 5px;
  background-color: ${(props) => props.background || '#6e1515'};
  font-size: ${(props) => props.size || '20px'};
  text-align: left;
  writing-mode: vertical-lr;
  transform: rotate(180deg);
`;
export const Button = styled.button`
  width: 200px;
  height: 45px;
  background-color: #18a408;
  color: #fff;
  border: none;
  border-radius: 15px;
  font-size: 18px;
  font-weight: bolder;
`;

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
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DivMenu = styled.div<{ background?: string; color?: string }>`
  width: 100%;
  height: 30px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  background-color: ${(props) => props.background || '#fff'};
  color: ${(props) => props.color || '#575757'};
`;
export const IconMenu = styled.img<{ marginLeft?: boolean }>`
  height: ${(props) => props.height || '10px'};
  width: ${(props) => props.width || '10px'};
  margin: 0px 15px;
  ${(props) =>
    props.marginLeft &&
    css`
      margin-left: auto;
    `};
`;
/** This is the aside main */
export const Aside = styled.div`
  width: 25%;
`;

type TBox = {
  width?: string;
  background?: boolean;
  iscolorwhite?: boolean;
  height?: boolean;
  direction?: string;
  margin?: boolean;
};
export const Box = styled.div<TBox>`
  width: ${(props) => props.width || '25%'};
  ${(props) =>
    props.height &&
    css`
      height: 250px;
    `};
  ${(props) =>
    props.background &&
    css`
      background: red;
    `};
  display: flex;
  ${(props) =>
    props.margin &&
    css`
      margin: 0 15px;
    `};
  ${(props) =>
    props.iscolorwhite &&
    css`
      color: #fff;
    `};
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: space-between;
`;
