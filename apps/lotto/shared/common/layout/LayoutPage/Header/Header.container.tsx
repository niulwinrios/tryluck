import { FC } from 'react'
import { getModulesRoutes } from '../../../../route'
import { HeaderView } from './Header.component'

export const Header: FC<any> = ({ handleClick, showAside }: any) =>{

    // Rutas
    const ModuleRoutes = getModulesRoutes()

    return (
        <HeaderView 
            ModuleRoutes={ModuleRoutes}
        />
    )
}