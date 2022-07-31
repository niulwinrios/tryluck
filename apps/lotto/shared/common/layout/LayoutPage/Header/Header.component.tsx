import { useRouter } from 'next/router'
import { FC } from 'react'
import { ButtonCustom, Head, Menu, Option, OptionHeader } from './styled'

export const HeaderView: FC<any> = ({ModuleRoutes}) => {
    const router = useRouter()

    return (
        <Head>
            <img src='/logotryluck.png' alt='IMG' width='140px' height='45px' />
            <OptionHeader>
                {ModuleRoutes.map((x:any, i:string) => <Option key={`ModuleRoutes${i}`}>{x?.name}</Option>)}
            </OptionHeader>
            <Menu>
                <ButtonCustom onClick={()=> console.log('w')}>
                    Únete
                </ButtonCustom>
            </Menu>
        </Head>
    )
}