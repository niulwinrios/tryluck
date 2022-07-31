import { Context, createContext, FC, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme'

// Proveedor del tema de la aplicación, con styled components, manejado desde el contexto de react
export const ThemeContext: Context<any> = createContext({})

export const Theme: FC<any> = ({ children }) => {

    // Estado que define el tema en uso
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            {/* Proveedor del contexto de react, para manejar el tema desde cualquier parte de la aplicación */}
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {/* Configuración del tema que usara styledComponent */}
                <ThemeProvider theme={(theme !== 'dark' ? lightTheme : darkTheme) as any}>
                    {/* Renderizado de todos los componentes(pages) */}
                    {children}
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    )
}
