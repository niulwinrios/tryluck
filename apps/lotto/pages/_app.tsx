import type { AppProps } from 'next/app';

//Styled
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'antd/dist/antd.css';
import '../shared/styles/styles.css';

//Dependency
import { FC } from 'react';

import { ThemeProvider } from 'styled-components';
import { LayoutPage } from '../shared/common/layout/LayoutPage';
import GlobalStyle from '../shared/styles/GlobalStyle';

// Hooks
import { useTheme } from '../shared/hooks';


const SafeHydrate: FC<{children: any}> = ({ children }) => {
  return (
      <div suppressHydrationWarning>
          {typeof window === 'undefined' ? null : children}
      </div>
  )
}

export default function Docs({Component, pageProps }:AppProps) {

  const [theme, handleTheme, mountedComponent, { keyTheme }]: any = useTheme()
  if (!mountedComponent) return <div />

  return (
  <>
  	<SafeHydrate>
		{/* Proveedor del tema de la aplicación */}
		  <ThemeProvider theme={theme}>
			  <GlobalStyle />
          <LayoutPage>
            <Component {...pageProps}/>
          </LayoutPage>
		  </ThemeProvider>
   	</SafeHydrate>
  </>
  )
}
