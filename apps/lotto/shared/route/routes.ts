import { nanoid } from 'nanoid';

// ROLES (1: Gerencia), (2: Comercial) (3: Planner),
const ID = nanoid(20)

export interface RoutesInterface {
	key?: any;
	path?: string;
	name?: string;
	icon?: string;
	type?: number;
	role?: number[];
	subModule?: any[];
}
export const routes: RoutesInterface[] = [
    {
        key: 'x',
        name: 'Juegos',
        path: '/home',
    },
    {
        key: 'xx',
        name: 'SUPER LOTTO',
        path: '/management/campaign',
    },
    {
        key: 'xxx',
        name: 'APUESTAS DEPORTIVAS',
        path: '/management/customer-follow-up',
    },
    {
        key: 'xxxx',
        name: 'INFORMACIÓN',
        path: '/planner/customer-prospect',
    },
    {
        key: 'xxxxxx',
        name: 'SIMULADOR',
        path: '/planner/customer-prospect',
    },
]