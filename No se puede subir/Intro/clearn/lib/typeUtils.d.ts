type OptionalExceptFor<T, TRequired extends keyof T> = Partial<T> & Pick<T, TRequired>
type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U
// https://stackoverflow.com/questions/41980195/recursive-partialt-in-typescript
type RecursivePartial<T> = Partial<{ [P in keyof T]: RecursivePartial<T[P]> | T[P] }>
