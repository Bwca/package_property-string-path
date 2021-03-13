import { propertyStringPathFactory } from '../../dist';

import { User } from './user.model';

const getUserProps = propertyStringPathFactory<User>();

getUserProps('address.geo.lng');

const userPropPath: PropPath<User> = 'address.geo.lng';
