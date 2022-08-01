import { useState } from 'react';
import { InitConfigTable, VirtualizedList } from 'wvl-virtualized-list';
import { Container, Header, Logo, Span } from './styled';

export const Referrals = () => {
  const [columns] = useState([{ name: 'Plan', width: 11, accessor: 'plan' }]);
  InitConfigTable.configStyles({
    header: {
      colors: { background: '#ff0000', font: '#000000' }
    }
  });

  return (
    <>
      <Container>
        <Logo>
          <img src="/logotryluck.png" alt="" />
        </Logo>
        <Header>
          <Span>Informe de Referidos</Span>
        </Header>
        <VirtualizedList
          filterable={false}
          columns={columns}
          data={[{ id: 1, plan: 'free' }]}
        />
      </Container>
    </>
  );
};
