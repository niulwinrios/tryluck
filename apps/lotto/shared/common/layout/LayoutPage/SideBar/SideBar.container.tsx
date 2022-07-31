import { FC } from 'react'
import { SideBarView } from './SideBar.component'
import { TSideBarC } from './types'

export const SideBar: FC<TSideBarC> = ({ showAside, handleClick } :TSideBarC) => {

    // Rutas

    return (
        <SideBarView
            ModuleRoutes={[1,2,3]}
            showAside={showAside}
            handleClick={handleClick}
        />
    )
}