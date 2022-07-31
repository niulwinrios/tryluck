import { FC } from 'react'
import { ContainerAside } from './styled'
import { TSideBarV } from './types'

export const SideBarView: FC<TSideBarV> = ({ ModuleRoutes, showAside, handleClick }: TSideBarV) => {

    return (
        <ContainerAside>
           <span>Espacio publicitario</span>
        </ContainerAside>
    )
}