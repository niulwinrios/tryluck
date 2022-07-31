
/* eslint-disable no-undef */
import { ReactElement } from 'react'

type DefaultProps = {
    children?: ReactElement | ReactElement[]
}
// eslint-disable-next-line @typescript-eslint/ban-types
export type ReactComponent<T = {}> = (props: DefaultProps & T) => ReactElement

export interface ICollapse {
    open?: boolean
    children?: ReactElement | ReactElement[]
}