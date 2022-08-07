// Modules
import { FC, useState } from 'react';

// Components
import { Header } from './Header/Header.container';
import { TLayout } from './types';

// Utils, Styles and Types
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { ChildrenBox, Container, Main } from './styled';

// Library
library.add(fas);

export const LayoutPage: FC<TLayout> = ({ children }: TLayout) => {
  // Declaración de variables y estados
  const [showAside, setShowAside] = useState(false);

  return (
    <Container>
      <Main>
        <Header />
        {/* <SideBar
          showAside={showAside}
          handleClick={() => setShowAside(!showAside)}
        /> */}
        <ChildrenBox>{children}</ChildrenBox>
      </Main>
    </Container>
  );
};
