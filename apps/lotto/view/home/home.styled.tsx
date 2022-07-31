import styled, { DefaultTheme } from 'styled-components'

type TTitle = {
    color?: keyof DefaultTheme['text']
}

export const Title = styled.h2<TTitle>`
    color: ${ ({ theme, color }) => color && theme.text?.[color] };
    margin: 50px 0;
`
type TSpan = {
    color?: keyof DefaultTheme['colors']
}

export const Span = styled.span<TSpan>`
    color: ${ ({ theme, color }) => color && theme.colors?.[color] };
    margin: 50px 0;
`
export const DivSlider = styled.div`
    position:relative;
    padding: 0em;
    border-radius: 5px;
`
export const GridSection = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(25% - 5px));
    justify-content: space-between;
    gap: 5px;
    @media (max-width: 1240px) {
        grid-template-columns: repeat(auto-fill, calc(33% - 5px));
    };

    @media (max-width: 880px) {
        grid-template-columns: repeat(auto-fill, calc(50% - 5px));
    };
    @media (max-width: 600px) {
        grid-template-columns: repeat(auto-fill, calc(100% - 5px));
    };
`
export const GridArea = styled.section`
    display: grid;
    grid-template-areas:
    "banner item1 item2"
    "banner item3 item4";
    grid-template-columns:  calc(50% - 10px) calc(25% - 10px) 25%;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    @media (max-width: 1090px) {
        grid-template-areas:
        "banner banner"
        "item1 item2"
        "item3 item4";
        grid-template-columns: 50% 50%;
    }
    @media (max-width: 600px) {
        grid-template-areas:
        "banner"
        "item1"
        "item2";
        grid-template-columns: 100%;
    }
`

type TGridItem = {
    gridArea?: number | string;
    height?: string;
}

export const GridItem = styled.div<TGridItem>`
    grid-area: ${ ({ gridArea }) => gridArea };
    position:relative;
    height:${ ({ height }) => height || '100%' };
    width:${ ({ height }) => height || '100%' };
`
export const DivMarks = styled.div`
    display:flex;
    width:100%;
    gap:10px;
    overflow:auto;
    background-color:${ ({ theme }) => theme.backgrounds.light };
`
export const DivMedia = styled.div`
    display:flex;
    height:350px;
    width:100%;
    margin-top:30px;
    background-image: url('/assets/banner.png');
    background-repeat:no-repeat;
    background-size:100% 100%;
`
export const DivMediaBackground = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
    background-color:#0000008d;
    @media (max-width: 600px) {
        flex-direction:column;
}
`
export const DivMediaContent = styled.div<{AlignI?: string}>`
    display:flex;
    flex-direction:column;
    width:50%;
    justify-content:center;
    align-items:${ ({ AlignI }) => AlignI || 'center' };
    gap:5px;
    @media (max-width: 600px) {
        width:80%;
    }
`
export const TitleMedia = styled.span <{ weight?: string }>`
    display:flex;
    width:100%;
    text-align:flex-start;
    letter-spacing:2px;
    font-weight: ${ ({ weight }) => weight || '0' };
    justify-content:flex-start;
    font-size:42px;
    text-overflow:ellipsis;
    color: ${ ({ theme }) => theme.text.light };
    @media (max-width: 1180px) {
        font-size:32px;
        letter-spacing:2px;
    }
    @media (max-width: 850px) {
        font-size:25px;
        letter-spacing:1px;
    }
    @media (max-width: 680px) {
        font-size:18px;
        letter-spacing:1px;
    }
    @media (max-width: 600px) {
        display:flex;
        justify-content:center;
        font-size:18px;
        text-align:center;
        width:100%;
    }
`
export const ButtonMedia = styled.button`
    display:flex;
    width:80px;
    padding:8px 5px;
    border:none;
    border-radius:6px;
    font-size:12px;
    font-weight:600;
    text-align:center;
    background-color: ${ ({ theme }) => theme.backgrounds.light };
    justify-content:center;
    color: ${ ({ theme }) => theme.colors.primary };
    cursor: pointer;
    :hover{
        background-color: ${ ({ theme }) => theme.colors.primary };
        color: ${ ({ theme }) => theme.backgrounds.light };
    }
    @media (max-width: 600px) {
        display:flex;
        margin-top:10px;
        width:100%;
        justify-content:center;
    }
`
export const VideoMedia = styled.video`
    display:flex;
    width:70%;
    @media (max-width: 1024px) {
        width:80%;
    }
    @media (max-width: 765px) {
        width:90%;
        margin-bottom:10px;
    }
`
export const DivProducts = styled.div`
    margin: 0em 8em 4em;
    border-radius: 5px;
    position:relative;
    @media (max-width: 1024px) {
        margin: 0em 2em 4em;
    }
    @media (max-width: 425px) {
        margin: 0;
    }
`

export const GridTheBestSeller = styled.section`
    display: grid;
    grid-template-areas:
    " item1 item2 banner1 banner2"
    " item3 item4 banner1 banner2" ;
    grid-template-columns: calc(25% - 10px) calc(25% - 10px) calc(25% - 10px)  25%;
    grid-gap: 10px;
    @media (max-width: 1090px) {
        grid-template-areas:
        "banner1 banner2"
        "item1 item2"
        "item3 item4";
        grid-template-columns: 50% 50%;
    }
    @media (max-width: 600px) {
        grid-template-areas:
        "banner1"
        "item1"
        "item2";
        grid-template-columns: 100%;
    }
    @media (max-width: 680px) {
        display: none;
    }
`
export const ContainerBannerPromotion = styled(GridItem)`
    @media (max-width: 1090px) {
        height: 600px;
    }
`

export const GridIMagen = styled.section`
    display: grid;
    height:500px;
    margin-top:80px;
    grid-template-areas:
    "banner banner2 banner2"
    "banner item1 item2";
    grid-template-columns: calc(33% - 10px) 33%  33%;
    grid-template-rows: calc(50% - 10px) 50%;
    gap: 10px;
    @media (max-width: 1090px) {
        grid-template-areas:
        "banner banner2"
        "item1 item2";
        grid-template-columns: 49% 49%;
        grid-template-rows: 49% 49% ;
    }
    @media (max-width: 620px) {
        height:800px;
        grid-template-areas:
        "banner"
        "banner2"
        "item1"
        "item2";
        grid-template-columns: 1fr;
        grid-template-rows: 24% 24% 24% 24% ;
    }
`
export const GridImageBanner1 = styled.div<TGridItem>`
    grid-area: ${ ({ gridArea }) => gridArea };
    height: 100%;
    position:relative;
`
export const GridImageBanner2 = styled.div<TGridItem>`
    grid-area: ${ ({ gridArea }) => gridArea };
    height: 100%;
    position:relative;
`

export const GridCategory = styled.section`
    display: grid;
    grid-auto-rows:auto;
    grid-template-areas:
    "item1 item2 item3 item4";
    grid-template-columns: repeat(auto-fill, calc(25% - 10px));
    gap: 10px;
    @media (max-width: 975px) {
        display:none;
    }
`
export const GridItemCategory = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
`
export const ContainerGridCategory = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    @media (max-width: 975px) {
        display:none;
    }
`
export const Arrow = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:30px;
    width:30px;
    position:absolute;
    top:50%;
    right:-50px;
    border-radius:50%;
    background-color: ${ ({ theme }) => theme.colors.primary };
    :hover{
        background-color: ${ ({ theme }) => theme.colors.primary }; 
    }
    @media (max-width: 600px){
        display: none;
    }
`
export const ArrowBanner = styled.div<{right?: boolean}>`
    display:flex;
    align-items:center;
    justify-content:center;
    height:50px;
    width:50px;
    position:absolute;
    right: ${ ({ right }) => right ? '5px' : 'none' };
    left: ${ ({ right }) => !right ? '5px' : 'none' };
    /* left:5px; */
    /* right:5px; */
    z-index: 50;
    border-radius:50%;
    background-color: ${ ({ theme }) => theme.colors.primary };
    :hover{
        background-color: ${ ({ theme }) => theme.colors.primary }; 
    }
    @media (max-width: 600px){
        display: none;
    }
`
