import {PropertyStringPath, propertyStringPathFactory} from '../../dist';

import { User } from './user.model';

const getUserProps = propertyStringPathFactory<User>();

getUserProps('address.geo.lng');

const userPropPath: PropertyStringPath<User> = 'address.geo.lng';

const bookPath = propertyStringPathFactory<Book>()('details.author.name');


interface Book {
    title: string;
    details: {
        type: string;
        published: Date | string;
        author: {
            name: string;
            born: Date | string;
            died: Date | string | null;
        };
    };
}