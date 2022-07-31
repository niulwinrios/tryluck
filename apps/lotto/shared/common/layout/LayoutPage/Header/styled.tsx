import styled from 'styled-components'

export const Head = styled.header`
    grid-area: header;
    width: 100%;
    display: flex;
    padding:1em 2rem;
    flex-direction: row;
    gap:10px;
    border-bottom:1px solid #f1f1f1;
    align-items: center;
    justify-content: space-between;
`
export const Menu = styled.div`
    display: flex;
    gap:10px;
    align-items:center;
`
export const ButtonCustom = styled.button`
    display:flex;
    justify-content:center;
    background-color:#CC171F;
    align-items:center;
    border-radius:13px;
    font-size:22px;
    width:110px;
    border:3px solid #CC171F;
    height:35px;
    transition:.1s;
    cursor: pointer;
    color: #fff;
    :hover{
        transform:scale(1.1);
    }
`
export const OptionHeader = styled.div`
    display: flex;
    flex-direction:row;
    width:100%;
    height:100%;
    gap:10px;
    justify-content:center;
    align-items:center;
`
export const Option = styled.button`
    font-size:17px;
    padding:0px 30px;
    border:none;
    width:auto;
    height:100%;
    background-color:transparent;
    cursor: pointer;
    color:#CC171F;
    text-transform: uppercase;
    font-weight:900;
`