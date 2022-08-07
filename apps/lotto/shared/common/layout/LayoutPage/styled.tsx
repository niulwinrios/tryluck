import styled from 'styled-components';

// Container
export const Container = styled.div`
  width: 100%;
`;
export const Main = styled.div`
  display: grid;
  width: 100%;
  transition: 0.5s;
  grid-template-areas:
    'header header'
    'children children';
  grid-template-rows: minmax(min-content, 1px) 1fr;
  grid-template-columns: 4fr minmax(min-content, 1px);
  background-color: ${(props) => props.theme.BGAColor};
`;
export const ChildrenBox = styled.div`
  grid-area: children;
  flex-direction: column;
  overflow: auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgrounds.general};
`;
