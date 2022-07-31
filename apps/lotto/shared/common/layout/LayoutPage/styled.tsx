import styled from 'styled-components'

// Container
export const Container = styled.div`
    height: 100vh;
    width: 100vw;
`
export const Main = styled.div`
    display: grid;
    height: 100vh;
    width: 100vw;
    transition: .5s;
    grid-template-areas: 
    "header header" 
    "children aside";
    grid-template-rows: minmax(min-content, 1px) 1fr;
    grid-template-columns: 4fr minmax(min-content, 1px);
    background-color:${ props => props.theme.BGAColor };
`
export const ChildrenBox = styled.div`
    grid-area: children;
    flex-direction:column;
    overflow:auto;
    width:100%;
    height:100%;
    padding:0px 10px;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color:${({theme}) => theme.backgrounds.general};
`
