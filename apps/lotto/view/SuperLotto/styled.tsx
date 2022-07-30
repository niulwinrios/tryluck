import styled from 'styled-components';

export const Table = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 25px repeat(3, 1fr);
  grid-template-areas: 'header header header header' 'numero premio nombre dni';
  text-align: center;
  border: solid #000 1px;
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
`;

export const HeaderLotto = styled.div`
  background-color: #ff020f;
  grid-column-start: header;
  grid-column-end: header;
  color: #fff;
  border-bottom: solid #000 1px;
`;

export const Numero = styled.div<{ background?: string }>`
  background-color: ${(props) => props.background || '#E3B8E1'};
  grid-column-start: numero;
  grid-column-end: numero;
  color: ${(props) => props.color || '#575757'};
  border-bottom: solid #000 1px;
`;

export const Premio = styled.div<{ background?: string }>`
  background-color: ${(props) => props.background || '#fff'};
  grid-column-start: premio;
  grid-column-end: premio;
  color: ${(props) => props.color || '#575757'};
  border-bottom: solid #000 1px;
`;

export const Nombre = styled.div<{ background?: string }>`
  background-color: ${(props) => props.background || '#fff'};
  grid-column-start: nombre;
  grid-column-end: nombre;
  color: ${(props) => props.color || '#575757'};
  border-bottom: solid #000 1px;
`;

export const Dni = styled.div<{ background?: string }>`
  background-color: ${(props) => props.background || '#fff'};
  grid-column-start: dni;
  grid-column-end: dni;
  color: ${(props) => props.color || '#575757'};
  border-bottom: solid #000 1px;
`;

export const Imagen = styled.img`
  width: 100%;
  height: 100%;
`;
