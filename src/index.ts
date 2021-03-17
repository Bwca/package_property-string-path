type Primitive = string | number | bigint | boolean | undefined | symbol;

export type PropertyStringPath<T, Prefix=''> = {
    [K in keyof T]: T[K] extends Primitive | Array<any> ? `${string & Prefix}${ string & K }` : `${string & Prefix}${ string & K }` | PropertyStringPath <T[K], `${ string & Prefix }${ string & K }.`> ;
}[keyof T];

export function propertyStringPathFactory<T, R=string>(): (path: PropertyStringPath<T>) => R {
	return (path: PropertyStringPath<T>) => (path as unknown as R);
}
