import styled, { css } from 'styled-components';

export const Container = styled.div<{ direction?: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Main = styled.div`
  width: 75%;
`;

export const Aside = styled.div`
  width: 25%;
`;

export const Table = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25px repeat(3, 1fr);
  grid-template-areas: 'header header header header' 'numero premio nombre dni';
  text-align: center;
  border: solid #000 1px;
`;

export const Header = styled.div`
  background-color: #cc171f;
  grid-column-start: header;
  grid-column-end: header;
  color: #fff;
  border-bottom: solid #000 1px;
`;

export const Numero = styled.div<{ background?: string }>`
  background-color: ${(props) => props.background || '#E3B8E1'};
  grid-column-start: numero;
  grid-column-end: numero;
  color: ${(props) => props.color || '#000'};
  border-bottom: solid #000 1px;
`;

export const Premio = styled.div<{ background?: string }>`
  background-color: ${(props) => props.background || '#fff'};
  grid-column-start: premio;
  grid-column-end: premio;
  color: ${(props) => props.color || '#000'};
  border-bottom: solid #000 1px;
`;

export const Nombre = styled.div<{ background?: string }>`
  background-color: ${(props) => props.background || '#fff'};
  grid-column-start: nombre;
  grid-column-end: nombre;
  color: ${(props) => props.color || '#000'};
  border-bottom: solid #000 1px;
`;

export const Dni = styled.div<{ background?: string }>`
  background-color: ${(props) => props.background || '#fff'};
  grid-column-start: dni;
  grid-column-end: dni;
  color: ${(props) => props.color || '#000'};
  border-bottom: solid #000 1px;
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
      height: 150px;
    `};
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: space-between;
`;

export const Imagen = styled.img`
  width: 100%;
  height: 100%;
`;
