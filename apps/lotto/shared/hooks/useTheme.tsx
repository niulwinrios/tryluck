import { useEffect, useState } from 'react'
import { lightTheme } from '../styles/theme'

/**
 * Hook that changes theme
 * @returns {[{theme: object, handleTheme: void, mountedComponent: boolean, keys: object}]} argumentos
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTheme = (): [any, (mode: string) => void, boolean, any] => {
    const [theme, setTheme] = useState(lightTheme)
    const [keyTheme, setKeyTheme] = useState('light')
    const [mountedComponent, setMountedComponent] = useState(false)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setMode = (themeMode: any, mode: string) => {
        window.localStorage.setItem('theme', mode)
        setTheme(themeMode)
    }

    const handleTheme = (mode: string) => {
        // Mode === 'light' ? setMode(lightTheme, 'light') : setMode(darkTheme, mode)
        setMode(lightTheme, 'light')
        setKeyTheme(mode)
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')

        localTheme ? handleTheme(localTheme) : handleTheme('light')
        setMountedComponent(true)
    }, [])

    return [theme, handleTheme, mountedComponent, { keyTheme }]
}
