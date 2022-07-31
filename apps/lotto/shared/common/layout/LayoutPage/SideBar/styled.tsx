import styled from 'styled-components'

type TContainerAside = {
    show?: boolean
}
export const ContainerAside = styled.div<TContainerAside>`
    grid-area: aside;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    transition: .3s;
    width:260px;
    background-color:  ${ ({ theme }) => theme.backgrounds.light };
    border-right:1px solid #f1f1f1;
    padding:10px;
`