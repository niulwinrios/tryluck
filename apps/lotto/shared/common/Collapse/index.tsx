// Modules
import { useEffect, useRef } from 'react'

// Styled
import { CollapseContent } from './styled'

// Types
import { ICollapse, ReactComponent } from './types'

export const Collapse: ReactComponent<ICollapse> = ({ children, open: show }: ICollapse) => {
    // Ref
    const collapseRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (show) {
            if (collapseRef.current) collapseRef.current.style.maxHeight = `${ collapseRef.current.scrollHeight }px`
        } else if (collapseRef.current?.style.maxHeight) collapseRef.current.style.maxHeight = ''
    }, [show, collapseRef])

    return (
        <CollapseContent ref={collapseRef}>
            {children}
        </CollapseContent>
    )
}