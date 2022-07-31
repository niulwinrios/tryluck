/* eslint-disable @next/next/no-img-element */
import { Arrow, ArrowBanner } from './home.styled'
import { HomeProps } from './home.types'

import { FC } from 'react'
import { Settings } from 'react-slick'

const Product = [...Array(2)]

function SampleNextArrowProduct (props: any) {
    const { className, onClick } = props
    return (
        <Arrow
            className={className}
            onClick={onClick}
        />
    )
}

function SampleNextArrow (props: any) {
    const { className, onClick } = props
    return (
        <ArrowBanner
            right={props.right}
            className={className}
            onClick={onClick}
        />
    )
}

// CONFIGURACIÓN DEL SLICK PARA LOS BANNERS PRINCIPALES
const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow right/>,
    prevArrow: <SampleNextArrow key='ass' />
}

// CONFIGURACIÓN DEL SLICK PARA LOS PRODUCTOS
const settingsMulti : Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    nextArrow: <SampleNextArrowProduct />,
    prevArrow: <SampleNextArrowProduct />,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1524,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1354,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1270,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 830,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
            }
        },
        {
            breakpoint: 572,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}
export const HomeComponent: FC<HomeProps> = () => {
    return (
        <div>
            {/* SECCIÓN PRINCIPAL DLE BANNER */}
            {/* <DivSlider>
                <Slider arrows {...settings} >
                    {Product.map((x:any, i) => <img
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                        key={i}
                        src='/slider/bannerDeportivo.png'
                        alt='slider'
                    />)}
                </Slider>
            </DivSlider> */}
        </div>
    )
}
