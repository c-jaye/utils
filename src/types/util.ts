export type Key = string | number | symbol
export type Falsey = false | 0 | 0n | "" | null | undefined

export type Obj<T = unknown, K extends Key = string> = Record<K, T>
export type Rec<T = unknown, K extends Key = Key> = Record<K, T>
export type Arr<T = unknown> = T[] | readonly T[]
export type Func<R = unknown, A extends Arr = []> = (...args: A) => R
export type Args<F extends Func> = F extends Func<unknown, infer A> ? A : never
export type Primitive = string | number | boolean | null | undefined | bigint | symbol

export type Maybe<T = null> = T | null | undefined
export type MaybePromise<T = void> = Promise<T> | T
export type MaybeFunc<R, A extends Arr = []> = R | Func<R, A>

export type JSONPrimitive = string | number | boolean | null
export type JSONValue = JSONPrimitive | JSONValue[] | { [k: string]: JSONValue }
export type JSONArray<T extends JSONValue = JSONValue> = T[]
export type JSONObject<T extends JSONValue = JSONValue> = Obj<T>

export type KeyOf<T> = keyof T & string
export type PartialObj<T> = Partial<T> & (T extends Obj<unknown> ? Obj<NonNullable<T[keyof T]>> : {})
export type ConvertEnums<T> = { [K in keyof T]: T[K] extends string | number | undefined ? `${NonNullable<T[K]>}` : T[K] }
export type Mutable<T> = { -readonly [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [key in K]?: Partial<T[key]> }
export interface LabelValue<T = unknown> { label: string, value: T }
