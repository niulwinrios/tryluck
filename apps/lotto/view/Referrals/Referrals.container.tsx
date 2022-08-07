import { useState } from 'react';
import { InitConfigTable, VirtualizedList } from 'wvl-virtualized-list';
import { TVColumns } from 'wvl-virtualized-list/dist/types';
import { Container, Header, Logo, Span } from './styled';

export const Referrals = () => {
  const [columns] = useState<TVColumns[]>([
    { name: 'Fecha de Ingreso', width: 15, accessor: 'data' },
    { name: 'Plan', width: 7, accessor: 'plan' },
    { name: 'Nivel', width: 7, accessor: 'level' },
    { name: 'User', width: 11, accessor: 'User' },
    { name: 'Nombre', width: 11, accessor: 'name' },
    { name: 'ID', width: 11, accessor: 'ID' },
    { name: 'Teléfono', width: 11, accessor: 'phone' },
    { name: 'Email', width: 15, accessor: 'email' },
    { name: 'País', width: 11, accessor: 'country' }
  ]);
  InitConfigTable.configStyles({
    header: {
      colors: { font: '#fff', border: 'none' },
      rowStyles: {
        backgroundColor: '#D42416',
        borderRadius: '5px'
      }
    },
    body: {
      cellStyles: { textAlign: 'center' }
    }
  });

  return (
    <>
      <Container>
        <Logo>
          <img src="/logotryluck.png" alt="" />
        </Logo>
        <Header>
          <Span>INFORME DE REFERIDOS</Span>
        </Header>
        <VirtualizedList
          filterable={false}
          columns={columns}
          banner={false}
          data={[
            {
              id: 1,
              data: '09/01/2022',
              plan: 'free',
              level: '1',
              User: 'Manologo',
              name: 'Jose G',
              ID: 'ID1234567',
              phone: '3011234567',
              email: 'josegregorio@gmail.com',
              country: 'Canada'
            },
            {
              id: 1,
              data: '09/01/2022',
              plan: 'free',
              level: '1',
              User: 'Manologo',
              name: 'Jose G',
              ID: 'ID1234567',
              phone: '3011234567',
              email: 'josegregorio@gmail.com',
              country: 'Canada'
            },
            {
              id: 1,
              data: '09/01/2022',
              plan: 'free',
              level: '1',
              User: 'Manologo',
              name: 'Jose G',
              ID: 'ID1234567',
              phone: '3011234567',
              email: 'josegregorio@gmail.com',
              country: 'Canada'
            },
            {
              id: 1,
              data: '09/01/2022',
              plan: 'free',
              level: '1',
              User: 'Manologo',
              name: 'Jose G',
              ID: 'ID1234567',
              phone: '3011234567',
              email: 'josegregorio@gmail.com',
              country: 'Canada'
            },
            {
              id: 1,
              data: '09/01/2022',
              plan: 'free',
              level: '1',
              User: 'Manologo',
              name: 'Jose G',
              ID: 'ID1234567',
              phone: '3011234567',
              email: 'josegregorio@gmail.com',
              country: 'Canada'
            },
            {
              id: 1,
              data: '09/01/2022',
              plan: 'free',
              level: '1',
              User: 'Manologo',
              name: 'Jose G',
              ID: 'ID1234567',
              phone: '3011234567',
              email: 'josegregorio@gmail.com',
              country: 'Canada'
            },
            {
              id: 1,
              data: '09/01/2022',
              plan: 'free',
              level: '1',
              User: 'Manologo',
              name: 'Jose G',
              ID: 'ID1234567',
              phone: '3011234567',
              email: 'josegregorio@gmail.com',
              country: 'Canada'
            }
          ]}
        />
      </Container>
    </>
  );
};
