
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model team_members
 * 
 */
export type team_members = $Result.DefaultSelection<Prisma.$team_membersPayload>
/**
 * Model teams
 * 
 */
export type teams = $Result.DefaultSelection<Prisma.$teamsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team_members`: Exposes CRUD operations for the **team_members** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Team_members
    * const team_members = await prisma.team_members.findMany()
    * ```
    */
  get team_members(): Prisma.team_membersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teams`: Exposes CRUD operations for the **teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.teams.findMany()
    * ```
    */
  get teams(): Prisma.teamsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    team_members: 'team_members',
    teams: 'teams'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "team_members" | "teams"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      team_members: {
        payload: Prisma.$team_membersPayload<ExtArgs>
        fields: Prisma.team_membersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.team_membersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.team_membersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>
          }
          findFirst: {
            args: Prisma.team_membersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.team_membersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>
          }
          findMany: {
            args: Prisma.team_membersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>[]
          }
          create: {
            args: Prisma.team_membersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>
          }
          createMany: {
            args: Prisma.team_membersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.team_membersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>[]
          }
          delete: {
            args: Prisma.team_membersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>
          }
          update: {
            args: Prisma.team_membersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>
          }
          deleteMany: {
            args: Prisma.team_membersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.team_membersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.team_membersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>[]
          }
          upsert: {
            args: Prisma.team_membersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$team_membersPayload>
          }
          aggregate: {
            args: Prisma.Team_membersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam_members>
          }
          groupBy: {
            args: Prisma.team_membersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Team_membersGroupByOutputType>[]
          }
          count: {
            args: Prisma.team_membersCountArgs<ExtArgs>
            result: $Utils.Optional<Team_membersCountAggregateOutputType> | number
          }
        }
      }
      teams: {
        payload: Prisma.$teamsPayload<ExtArgs>
        fields: Prisma.teamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.teamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.teamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          findFirst: {
            args: Prisma.teamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.teamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          findMany: {
            args: Prisma.teamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>[]
          }
          create: {
            args: Prisma.teamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          createMany: {
            args: Prisma.teamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.teamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>[]
          }
          delete: {
            args: Prisma.teamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          update: {
            args: Prisma.teamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          deleteMany: {
            args: Prisma.teamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.teamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.teamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>[]
          }
          upsert: {
            args: Prisma.teamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$teamsPayload>
          }
          aggregate: {
            args: Prisma.TeamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeams>
          }
          groupBy: {
            args: Prisma.teamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.teamsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    team_members?: team_membersOmit
    teams?: teamsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    team_members: number
    teams: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_members?: boolean | UsersCountOutputTypeCountTeam_membersArgs
    teams?: boolean | UsersCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTeam_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_membersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamsWhereInput
  }


  /**
   * Count Type TeamsCountOutputType
   */

  export type TeamsCountOutputType = {
    team_members: number
  }

  export type TeamsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_members?: boolean | TeamsCountOutputTypeCountTeam_membersArgs
  }

  // Custom InputTypes
  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsCountOutputType
     */
    select?: TeamsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountTeam_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_membersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nickname: string | null
    age_group: string | null
    role: string | null
    avatar: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    nickname: string | null
    age_group: string | null
    role: string | null
    avatar: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    nickname: number
    age_group: number
    role: number
    avatar: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    age_group?: true
    role?: true
    avatar?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    age_group?: true
    role?: true
    avatar?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    nickname?: true
    age_group?: true
    role?: true
    avatar?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    nickname: string
    age_group: string
    role: string
    avatar: string
    created_at: Date
    updated_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    age_group?: boolean
    role?: boolean
    avatar?: boolean
    created_at?: boolean
    updated_at?: boolean
    team_members?: boolean | users$team_membersArgs<ExtArgs>
    teams?: boolean | users$teamsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    age_group?: boolean
    role?: boolean
    avatar?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    age_group?: boolean
    role?: boolean
    avatar?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    nickname?: boolean
    age_group?: boolean
    role?: boolean
    avatar?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "nickname" | "age_group" | "role" | "avatar" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_members?: boolean | users$team_membersArgs<ExtArgs>
    teams?: boolean | users$teamsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      team_members: Prisma.$team_membersPayload<ExtArgs>[]
      teams: Prisma.$teamsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      nickname: string
      age_group: string
      role: string
      avatar: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team_members<T extends users$team_membersArgs<ExtArgs> = {}>(args?: Subset<T, users$team_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends users$teamsArgs<ExtArgs> = {}>(args?: Subset<T, users$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly nickname: FieldRef<"users", 'String'>
    readonly age_group: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly avatar: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.team_members
   */
  export type users$team_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    where?: team_membersWhereInput
    orderBy?: team_membersOrderByWithRelationInput | team_membersOrderByWithRelationInput[]
    cursor?: team_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_membersScalarFieldEnum | Team_membersScalarFieldEnum[]
  }

  /**
   * users.teams
   */
  export type users$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    where?: teamsWhereInput
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    cursor?: teamsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model team_members
   */

  export type AggregateTeam_members = {
    _count: Team_membersCountAggregateOutputType | null
    _avg: Team_membersAvgAggregateOutputType | null
    _sum: Team_membersSumAggregateOutputType | null
    _min: Team_membersMinAggregateOutputType | null
    _max: Team_membersMaxAggregateOutputType | null
  }

  export type Team_membersAvgAggregateOutputType = {
    id: number | null
    team_id: number | null
    user_id: number | null
  }

  export type Team_membersSumAggregateOutputType = {
    id: number | null
    team_id: number | null
    user_id: number | null
  }

  export type Team_membersMinAggregateOutputType = {
    id: number | null
    team_id: number | null
    user_id: number | null
    joined_at: Date | null
  }

  export type Team_membersMaxAggregateOutputType = {
    id: number | null
    team_id: number | null
    user_id: number | null
    joined_at: Date | null
  }

  export type Team_membersCountAggregateOutputType = {
    id: number
    team_id: number
    user_id: number
    joined_at: number
    _all: number
  }


  export type Team_membersAvgAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
  }

  export type Team_membersSumAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
  }

  export type Team_membersMinAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
    joined_at?: true
  }

  export type Team_membersMaxAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
    joined_at?: true
  }

  export type Team_membersCountAggregateInputType = {
    id?: true
    team_id?: true
    user_id?: true
    joined_at?: true
    _all?: true
  }

  export type Team_membersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_members to aggregate.
     */
    where?: team_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_membersOrderByWithRelationInput | team_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: team_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned team_members
    **/
    _count?: true | Team_membersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Team_membersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Team_membersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Team_membersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Team_membersMaxAggregateInputType
  }

  export type GetTeam_membersAggregateType<T extends Team_membersAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam_members]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam_members[P]>
      : GetScalarType<T[P], AggregateTeam_members[P]>
  }




  export type team_membersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_membersWhereInput
    orderBy?: team_membersOrderByWithAggregationInput | team_membersOrderByWithAggregationInput[]
    by: Team_membersScalarFieldEnum[] | Team_membersScalarFieldEnum
    having?: team_membersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Team_membersCountAggregateInputType | true
    _avg?: Team_membersAvgAggregateInputType
    _sum?: Team_membersSumAggregateInputType
    _min?: Team_membersMinAggregateInputType
    _max?: Team_membersMaxAggregateInputType
  }

  export type Team_membersGroupByOutputType = {
    id: number
    team_id: number
    user_id: number
    joined_at: Date
    _count: Team_membersCountAggregateOutputType | null
    _avg: Team_membersAvgAggregateOutputType | null
    _sum: Team_membersSumAggregateOutputType | null
    _min: Team_membersMinAggregateOutputType | null
    _max: Team_membersMaxAggregateOutputType | null
  }

  type GetTeam_membersGroupByPayload<T extends team_membersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Team_membersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Team_membersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Team_membersGroupByOutputType[P]>
            : GetScalarType<T[P], Team_membersGroupByOutputType[P]>
        }
      >
    >


  export type team_membersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team_members"]>

  export type team_membersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team_members"]>

  export type team_membersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    joined_at?: boolean
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team_members"]>

  export type team_membersSelectScalar = {
    id?: boolean
    team_id?: boolean
    user_id?: boolean
    joined_at?: boolean
  }

  export type team_membersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "team_id" | "user_id" | "joined_at", ExtArgs["result"]["team_members"]>
  export type team_membersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type team_membersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type team_membersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | teamsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $team_membersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "team_members"
    objects: {
      teams: Prisma.$teamsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      team_id: number
      user_id: number
      joined_at: Date
    }, ExtArgs["result"]["team_members"]>
    composites: {}
  }

  type team_membersGetPayload<S extends boolean | null | undefined | team_membersDefaultArgs> = $Result.GetResult<Prisma.$team_membersPayload, S>

  type team_membersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<team_membersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Team_membersCountAggregateInputType | true
    }

  export interface team_membersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['team_members'], meta: { name: 'team_members' } }
    /**
     * Find zero or one Team_members that matches the filter.
     * @param {team_membersFindUniqueArgs} args - Arguments to find a Team_members
     * @example
     * // Get one Team_members
     * const team_members = await prisma.team_members.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends team_membersFindUniqueArgs>(args: SelectSubset<T, team_membersFindUniqueArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team_members that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {team_membersFindUniqueOrThrowArgs} args - Arguments to find a Team_members
     * @example
     * // Get one Team_members
     * const team_members = await prisma.team_members.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends team_membersFindUniqueOrThrowArgs>(args: SelectSubset<T, team_membersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_membersFindFirstArgs} args - Arguments to find a Team_members
     * @example
     * // Get one Team_members
     * const team_members = await prisma.team_members.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends team_membersFindFirstArgs>(args?: SelectSubset<T, team_membersFindFirstArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team_members that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_membersFindFirstOrThrowArgs} args - Arguments to find a Team_members
     * @example
     * // Get one Team_members
     * const team_members = await prisma.team_members.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends team_membersFindFirstOrThrowArgs>(args?: SelectSubset<T, team_membersFindFirstOrThrowArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Team_members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_membersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Team_members
     * const team_members = await prisma.team_members.findMany()
     * 
     * // Get first 10 Team_members
     * const team_members = await prisma.team_members.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const team_membersWithIdOnly = await prisma.team_members.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends team_membersFindManyArgs>(args?: SelectSubset<T, team_membersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team_members.
     * @param {team_membersCreateArgs} args - Arguments to create a Team_members.
     * @example
     * // Create one Team_members
     * const Team_members = await prisma.team_members.create({
     *   data: {
     *     // ... data to create a Team_members
     *   }
     * })
     * 
     */
    create<T extends team_membersCreateArgs>(args: SelectSubset<T, team_membersCreateArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Team_members.
     * @param {team_membersCreateManyArgs} args - Arguments to create many Team_members.
     * @example
     * // Create many Team_members
     * const team_members = await prisma.team_members.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends team_membersCreateManyArgs>(args?: SelectSubset<T, team_membersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Team_members and returns the data saved in the database.
     * @param {team_membersCreateManyAndReturnArgs} args - Arguments to create many Team_members.
     * @example
     * // Create many Team_members
     * const team_members = await prisma.team_members.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Team_members and only return the `id`
     * const team_membersWithIdOnly = await prisma.team_members.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends team_membersCreateManyAndReturnArgs>(args?: SelectSubset<T, team_membersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team_members.
     * @param {team_membersDeleteArgs} args - Arguments to delete one Team_members.
     * @example
     * // Delete one Team_members
     * const Team_members = await prisma.team_members.delete({
     *   where: {
     *     // ... filter to delete one Team_members
     *   }
     * })
     * 
     */
    delete<T extends team_membersDeleteArgs>(args: SelectSubset<T, team_membersDeleteArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team_members.
     * @param {team_membersUpdateArgs} args - Arguments to update one Team_members.
     * @example
     * // Update one Team_members
     * const team_members = await prisma.team_members.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends team_membersUpdateArgs>(args: SelectSubset<T, team_membersUpdateArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Team_members.
     * @param {team_membersDeleteManyArgs} args - Arguments to filter Team_members to delete.
     * @example
     * // Delete a few Team_members
     * const { count } = await prisma.team_members.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends team_membersDeleteManyArgs>(args?: SelectSubset<T, team_membersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_membersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Team_members
     * const team_members = await prisma.team_members.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends team_membersUpdateManyArgs>(args: SelectSubset<T, team_membersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Team_members and returns the data updated in the database.
     * @param {team_membersUpdateManyAndReturnArgs} args - Arguments to update many Team_members.
     * @example
     * // Update many Team_members
     * const team_members = await prisma.team_members.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Team_members and only return the `id`
     * const team_membersWithIdOnly = await prisma.team_members.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends team_membersUpdateManyAndReturnArgs>(args: SelectSubset<T, team_membersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team_members.
     * @param {team_membersUpsertArgs} args - Arguments to update or create a Team_members.
     * @example
     * // Update or create a Team_members
     * const team_members = await prisma.team_members.upsert({
     *   create: {
     *     // ... data to create a Team_members
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team_members we want to update
     *   }
     * })
     */
    upsert<T extends team_membersUpsertArgs>(args: SelectSubset<T, team_membersUpsertArgs<ExtArgs>>): Prisma__team_membersClient<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_membersCountArgs} args - Arguments to filter Team_members to count.
     * @example
     * // Count the number of Team_members
     * const count = await prisma.team_members.count({
     *   where: {
     *     // ... the filter for the Team_members we want to count
     *   }
     * })
    **/
    count<T extends team_membersCountArgs>(
      args?: Subset<T, team_membersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Team_membersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Team_membersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Team_membersAggregateArgs>(args: Subset<T, Team_membersAggregateArgs>): Prisma.PrismaPromise<GetTeam_membersAggregateType<T>>

    /**
     * Group by Team_members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {team_membersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends team_membersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: team_membersGroupByArgs['orderBy'] }
        : { orderBy?: team_membersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, team_membersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeam_membersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the team_members model
   */
  readonly fields: team_membersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for team_members.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__team_membersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends teamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, teamsDefaultArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the team_members model
   */
  interface team_membersFieldRefs {
    readonly id: FieldRef<"team_members", 'Int'>
    readonly team_id: FieldRef<"team_members", 'Int'>
    readonly user_id: FieldRef<"team_members", 'Int'>
    readonly joined_at: FieldRef<"team_members", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * team_members findUnique
   */
  export type team_membersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * Filter, which team_members to fetch.
     */
    where: team_membersWhereUniqueInput
  }

  /**
   * team_members findUniqueOrThrow
   */
  export type team_membersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * Filter, which team_members to fetch.
     */
    where: team_membersWhereUniqueInput
  }

  /**
   * team_members findFirst
   */
  export type team_membersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * Filter, which team_members to fetch.
     */
    where?: team_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_membersOrderByWithRelationInput | team_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for team_members.
     */
    cursor?: team_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_membersScalarFieldEnum | Team_membersScalarFieldEnum[]
  }

  /**
   * team_members findFirstOrThrow
   */
  export type team_membersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * Filter, which team_members to fetch.
     */
    where?: team_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_membersOrderByWithRelationInput | team_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for team_members.
     */
    cursor?: team_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_membersScalarFieldEnum | Team_membersScalarFieldEnum[]
  }

  /**
   * team_members findMany
   */
  export type team_membersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * Filter, which team_members to fetch.
     */
    where?: team_membersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of team_members to fetch.
     */
    orderBy?: team_membersOrderByWithRelationInput | team_membersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing team_members.
     */
    cursor?: team_membersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` team_members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` team_members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of team_members.
     */
    distinct?: Team_membersScalarFieldEnum | Team_membersScalarFieldEnum[]
  }

  /**
   * team_members create
   */
  export type team_membersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * The data needed to create a team_members.
     */
    data: XOR<team_membersCreateInput, team_membersUncheckedCreateInput>
  }

  /**
   * team_members createMany
   */
  export type team_membersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many team_members.
     */
    data: team_membersCreateManyInput | team_membersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * team_members createManyAndReturn
   */
  export type team_membersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * The data used to create many team_members.
     */
    data: team_membersCreateManyInput | team_membersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * team_members update
   */
  export type team_membersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * The data needed to update a team_members.
     */
    data: XOR<team_membersUpdateInput, team_membersUncheckedUpdateInput>
    /**
     * Choose, which team_members to update.
     */
    where: team_membersWhereUniqueInput
  }

  /**
   * team_members updateMany
   */
  export type team_membersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update team_members.
     */
    data: XOR<team_membersUpdateManyMutationInput, team_membersUncheckedUpdateManyInput>
    /**
     * Filter which team_members to update
     */
    where?: team_membersWhereInput
    /**
     * Limit how many team_members to update.
     */
    limit?: number
  }

  /**
   * team_members updateManyAndReturn
   */
  export type team_membersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * The data used to update team_members.
     */
    data: XOR<team_membersUpdateManyMutationInput, team_membersUncheckedUpdateManyInput>
    /**
     * Filter which team_members to update
     */
    where?: team_membersWhereInput
    /**
     * Limit how many team_members to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * team_members upsert
   */
  export type team_membersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * The filter to search for the team_members to update in case it exists.
     */
    where: team_membersWhereUniqueInput
    /**
     * In case the team_members found by the `where` argument doesn't exist, create a new team_members with this data.
     */
    create: XOR<team_membersCreateInput, team_membersUncheckedCreateInput>
    /**
     * In case the team_members was found with the provided `where` argument, update it with this data.
     */
    update: XOR<team_membersUpdateInput, team_membersUncheckedUpdateInput>
  }

  /**
   * team_members delete
   */
  export type team_membersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    /**
     * Filter which team_members to delete.
     */
    where: team_membersWhereUniqueInput
  }

  /**
   * team_members deleteMany
   */
  export type team_membersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which team_members to delete
     */
    where?: team_membersWhereInput
    /**
     * Limit how many team_members to delete.
     */
    limit?: number
  }

  /**
   * team_members without action
   */
  export type team_membersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
  }


  /**
   * Model teams
   */

  export type AggregateTeams = {
    _count: TeamsCountAggregateOutputType | null
    _avg: TeamsAvgAggregateOutputType | null
    _sum: TeamsSumAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  export type TeamsAvgAggregateOutputType = {
    id: number | null
    creator_id: number | null
  }

  export type TeamsSumAggregateOutputType = {
    id: number | null
    creator_id: number | null
  }

  export type TeamsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    creator_id: number | null
    invite_code: string | null
    created_at: Date | null
  }

  export type TeamsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    creator_id: number | null
    invite_code: string | null
    created_at: Date | null
  }

  export type TeamsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    creator_id: number
    invite_code: number
    created_at: number
    _all: number
  }


  export type TeamsAvgAggregateInputType = {
    id?: true
    creator_id?: true
  }

  export type TeamsSumAggregateInputType = {
    id?: true
    creator_id?: true
  }

  export type TeamsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creator_id?: true
    invite_code?: true
    created_at?: true
  }

  export type TeamsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creator_id?: true
    invite_code?: true
    created_at?: true
  }

  export type TeamsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creator_id?: true
    invite_code?: true
    created_at?: true
    _all?: true
  }

  export type TeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to aggregate.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned teams
    **/
    _count?: true | TeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsMaxAggregateInputType
  }

  export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams[P]>
      : GetScalarType<T[P], AggregateTeams[P]>
  }




  export type teamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teamsWhereInput
    orderBy?: teamsOrderByWithAggregationInput | teamsOrderByWithAggregationInput[]
    by: TeamsScalarFieldEnum[] | TeamsScalarFieldEnum
    having?: teamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsCountAggregateInputType | true
    _avg?: TeamsAvgAggregateInputType
    _sum?: TeamsSumAggregateInputType
    _min?: TeamsMinAggregateInputType
    _max?: TeamsMaxAggregateInputType
  }

  export type TeamsGroupByOutputType = {
    id: number
    name: string
    description: string | null
    creator_id: number
    invite_code: string
    created_at: Date
    _count: TeamsCountAggregateOutputType | null
    _avg: TeamsAvgAggregateOutputType | null
    _sum: TeamsSumAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  type GetTeamsGroupByPayload<T extends teamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
        }
      >
    >


  export type teamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creator_id?: boolean
    invite_code?: boolean
    created_at?: boolean
    team_members?: boolean | teams$team_membersArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type teamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creator_id?: boolean
    invite_code?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type teamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creator_id?: boolean
    invite_code?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type teamsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    creator_id?: boolean
    invite_code?: boolean
    created_at?: boolean
  }

  export type teamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "creator_id" | "invite_code" | "created_at", ExtArgs["result"]["teams"]>
  export type teamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team_members?: boolean | teams$team_membersArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type teamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type teamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $teamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "teams"
    objects: {
      team_members: Prisma.$team_membersPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      creator_id: number
      invite_code: string
      created_at: Date
    }, ExtArgs["result"]["teams"]>
    composites: {}
  }

  type teamsGetPayload<S extends boolean | null | undefined | teamsDefaultArgs> = $Result.GetResult<Prisma.$teamsPayload, S>

  type teamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<teamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamsCountAggregateInputType | true
    }

  export interface teamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teams'], meta: { name: 'teams' } }
    /**
     * Find zero or one Teams that matches the filter.
     * @param {teamsFindUniqueArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends teamsFindUniqueArgs>(args: SelectSubset<T, teamsFindUniqueArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {teamsFindUniqueOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends teamsFindUniqueOrThrowArgs>(args: SelectSubset<T, teamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindFirstArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends teamsFindFirstArgs>(args?: SelectSubset<T, teamsFindFirstArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindFirstOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends teamsFindFirstOrThrowArgs>(args?: SelectSubset<T, teamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.teams.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.teams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsWithIdOnly = await prisma.teams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends teamsFindManyArgs>(args?: SelectSubset<T, teamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teams.
     * @param {teamsCreateArgs} args - Arguments to create a Teams.
     * @example
     * // Create one Teams
     * const Teams = await prisma.teams.create({
     *   data: {
     *     // ... data to create a Teams
     *   }
     * })
     * 
     */
    create<T extends teamsCreateArgs>(args: SelectSubset<T, teamsCreateArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {teamsCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends teamsCreateManyArgs>(args?: SelectSubset<T, teamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {teamsCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends teamsCreateManyAndReturnArgs>(args?: SelectSubset<T, teamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teams.
     * @param {teamsDeleteArgs} args - Arguments to delete one Teams.
     * @example
     * // Delete one Teams
     * const Teams = await prisma.teams.delete({
     *   where: {
     *     // ... filter to delete one Teams
     *   }
     * })
     * 
     */
    delete<T extends teamsDeleteArgs>(args: SelectSubset<T, teamsDeleteArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teams.
     * @param {teamsUpdateArgs} args - Arguments to update one Teams.
     * @example
     * // Update one Teams
     * const teams = await prisma.teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends teamsUpdateArgs>(args: SelectSubset<T, teamsUpdateArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {teamsDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends teamsDeleteManyArgs>(args?: SelectSubset<T, teamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends teamsUpdateManyArgs>(args: SelectSubset<T, teamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {teamsUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends teamsUpdateManyAndReturnArgs>(args: SelectSubset<T, teamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teams.
     * @param {teamsUpsertArgs} args - Arguments to update or create a Teams.
     * @example
     * // Update or create a Teams
     * const teams = await prisma.teams.upsert({
     *   create: {
     *     // ... data to create a Teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams we want to update
     *   }
     * })
     */
    upsert<T extends teamsUpsertArgs>(args: SelectSubset<T, teamsUpsertArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.teams.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends teamsCountArgs>(
      args?: Subset<T, teamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamsAggregateArgs>(args: Subset<T, TeamsAggregateArgs>): Prisma.PrismaPromise<GetTeamsAggregateType<T>>

    /**
     * Group by Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teamsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends teamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teamsGroupByArgs['orderBy'] }
        : { orderBy?: teamsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, teamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the teams model
   */
  readonly fields: teamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team_members<T extends teams$team_membersArgs<ExtArgs> = {}>(args?: Subset<T, teams$team_membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$team_membersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the teams model
   */
  interface teamsFieldRefs {
    readonly id: FieldRef<"teams", 'Int'>
    readonly name: FieldRef<"teams", 'String'>
    readonly description: FieldRef<"teams", 'String'>
    readonly creator_id: FieldRef<"teams", 'Int'>
    readonly invite_code: FieldRef<"teams", 'String'>
    readonly created_at: FieldRef<"teams", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * teams findUnique
   */
  export type teamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams findUniqueOrThrow
   */
  export type teamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams findFirst
   */
  export type teamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * teams findFirstOrThrow
   */
  export type teamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * teams findMany
   */
  export type teamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter, which teams to fetch.
     */
    where?: teamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of teams to fetch.
     */
    orderBy?: teamsOrderByWithRelationInput | teamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing teams.
     */
    cursor?: teamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * teams create
   */
  export type teamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * The data needed to create a teams.
     */
    data: XOR<teamsCreateInput, teamsUncheckedCreateInput>
  }

  /**
   * teams createMany
   */
  export type teamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teams.
     */
    data: teamsCreateManyInput | teamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * teams createManyAndReturn
   */
  export type teamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * The data used to create many teams.
     */
    data: teamsCreateManyInput | teamsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * teams update
   */
  export type teamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * The data needed to update a teams.
     */
    data: XOR<teamsUpdateInput, teamsUncheckedUpdateInput>
    /**
     * Choose, which teams to update.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams updateMany
   */
  export type teamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teams.
     */
    data: XOR<teamsUpdateManyMutationInput, teamsUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamsWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
  }

  /**
   * teams updateManyAndReturn
   */
  export type teamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * The data used to update teams.
     */
    data: XOR<teamsUpdateManyMutationInput, teamsUncheckedUpdateManyInput>
    /**
     * Filter which teams to update
     */
    where?: teamsWhereInput
    /**
     * Limit how many teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * teams upsert
   */
  export type teamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * The filter to search for the teams to update in case it exists.
     */
    where: teamsWhereUniqueInput
    /**
     * In case the teams found by the `where` argument doesn't exist, create a new teams with this data.
     */
    create: XOR<teamsCreateInput, teamsUncheckedCreateInput>
    /**
     * In case the teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teamsUpdateInput, teamsUncheckedUpdateInput>
  }

  /**
   * teams delete
   */
  export type teamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
    /**
     * Filter which teams to delete.
     */
    where: teamsWhereUniqueInput
  }

  /**
   * teams deleteMany
   */
  export type teamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teams to delete
     */
    where?: teamsWhereInput
    /**
     * Limit how many teams to delete.
     */
    limit?: number
  }

  /**
   * teams.team_members
   */
  export type teams$team_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the team_members
     */
    select?: team_membersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the team_members
     */
    omit?: team_membersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: team_membersInclude<ExtArgs> | null
    where?: team_membersWhereInput
    orderBy?: team_membersOrderByWithRelationInput | team_membersOrderByWithRelationInput[]
    cursor?: team_membersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Team_membersScalarFieldEnum | Team_membersScalarFieldEnum[]
  }

  /**
   * teams without action
   */
  export type teamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teams
     */
    select?: teamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the teams
     */
    omit?: teamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: teamsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    nickname: 'nickname',
    age_group: 'age_group',
    role: 'role',
    avatar: 'avatar',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Team_membersScalarFieldEnum: {
    id: 'id',
    team_id: 'team_id',
    user_id: 'user_id',
    joined_at: 'joined_at'
  };

  export type Team_membersScalarFieldEnum = (typeof Team_membersScalarFieldEnum)[keyof typeof Team_membersScalarFieldEnum]


  export const TeamsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    creator_id: 'creator_id',
    invite_code: 'invite_code',
    created_at: 'created_at'
  };

  export type TeamsScalarFieldEnum = (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    nickname?: StringFilter<"users"> | string
    age_group?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    avatar?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    team_members?: Team_membersListRelationFilter
    teams?: TeamsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    age_group?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    team_members?: team_membersOrderByRelationAggregateInput
    teams?: teamsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    nickname?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    age_group?: StringFilter<"users"> | string
    role?: StringFilter<"users"> | string
    avatar?: StringFilter<"users"> | string
    created_at?: DateTimeFilter<"users"> | Date | string
    updated_at?: DateTimeFilter<"users"> | Date | string
    team_members?: Team_membersListRelationFilter
    teams?: TeamsListRelationFilter
  }, "id" | "email" | "nickname">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    age_group?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    nickname?: StringWithAggregatesFilter<"users"> | string
    age_group?: StringWithAggregatesFilter<"users"> | string
    role?: StringWithAggregatesFilter<"users"> | string
    avatar?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type team_membersWhereInput = {
    AND?: team_membersWhereInput | team_membersWhereInput[]
    OR?: team_membersWhereInput[]
    NOT?: team_membersWhereInput | team_membersWhereInput[]
    id?: IntFilter<"team_members"> | number
    team_id?: IntFilter<"team_members"> | number
    user_id?: IntFilter<"team_members"> | number
    joined_at?: DateTimeFilter<"team_members"> | Date | string
    teams?: XOR<TeamsScalarRelationFilter, teamsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type team_membersOrderByWithRelationInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
    teams?: teamsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type team_membersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    team_id_user_id?: team_membersTeam_idUser_idCompoundUniqueInput
    AND?: team_membersWhereInput | team_membersWhereInput[]
    OR?: team_membersWhereInput[]
    NOT?: team_membersWhereInput | team_membersWhereInput[]
    team_id?: IntFilter<"team_members"> | number
    user_id?: IntFilter<"team_members"> | number
    joined_at?: DateTimeFilter<"team_members"> | Date | string
    teams?: XOR<TeamsScalarRelationFilter, teamsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "team_id_user_id">

  export type team_membersOrderByWithAggregationInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
    _count?: team_membersCountOrderByAggregateInput
    _avg?: team_membersAvgOrderByAggregateInput
    _max?: team_membersMaxOrderByAggregateInput
    _min?: team_membersMinOrderByAggregateInput
    _sum?: team_membersSumOrderByAggregateInput
  }

  export type team_membersScalarWhereWithAggregatesInput = {
    AND?: team_membersScalarWhereWithAggregatesInput | team_membersScalarWhereWithAggregatesInput[]
    OR?: team_membersScalarWhereWithAggregatesInput[]
    NOT?: team_membersScalarWhereWithAggregatesInput | team_membersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"team_members"> | number
    team_id?: IntWithAggregatesFilter<"team_members"> | number
    user_id?: IntWithAggregatesFilter<"team_members"> | number
    joined_at?: DateTimeWithAggregatesFilter<"team_members"> | Date | string
  }

  export type teamsWhereInput = {
    AND?: teamsWhereInput | teamsWhereInput[]
    OR?: teamsWhereInput[]
    NOT?: teamsWhereInput | teamsWhereInput[]
    id?: IntFilter<"teams"> | number
    name?: StringFilter<"teams"> | string
    description?: StringNullableFilter<"teams"> | string | null
    creator_id?: IntFilter<"teams"> | number
    invite_code?: StringFilter<"teams"> | string
    created_at?: DateTimeFilter<"teams"> | Date | string
    team_members?: Team_membersListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type teamsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    creator_id?: SortOrder
    invite_code?: SortOrder
    created_at?: SortOrder
    team_members?: team_membersOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type teamsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    invite_code?: string
    AND?: teamsWhereInput | teamsWhereInput[]
    OR?: teamsWhereInput[]
    NOT?: teamsWhereInput | teamsWhereInput[]
    name?: StringFilter<"teams"> | string
    description?: StringNullableFilter<"teams"> | string | null
    creator_id?: IntFilter<"teams"> | number
    created_at?: DateTimeFilter<"teams"> | Date | string
    team_members?: Team_membersListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "invite_code">

  export type teamsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    creator_id?: SortOrder
    invite_code?: SortOrder
    created_at?: SortOrder
    _count?: teamsCountOrderByAggregateInput
    _avg?: teamsAvgOrderByAggregateInput
    _max?: teamsMaxOrderByAggregateInput
    _min?: teamsMinOrderByAggregateInput
    _sum?: teamsSumOrderByAggregateInput
  }

  export type teamsScalarWhereWithAggregatesInput = {
    AND?: teamsScalarWhereWithAggregatesInput | teamsScalarWhereWithAggregatesInput[]
    OR?: teamsScalarWhereWithAggregatesInput[]
    NOT?: teamsScalarWhereWithAggregatesInput | teamsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"teams"> | number
    name?: StringWithAggregatesFilter<"teams"> | string
    description?: StringNullableWithAggregatesFilter<"teams"> | string | null
    creator_id?: IntWithAggregatesFilter<"teams"> | number
    invite_code?: StringWithAggregatesFilter<"teams"> | string
    created_at?: DateTimeWithAggregatesFilter<"teams"> | Date | string
  }

  export type usersCreateInput = {
    email: string
    password: string
    nickname: string
    age_group: string
    role: string
    avatar: string
    created_at?: Date | string
    updated_at?: Date | string
    team_members?: team_membersCreateNestedManyWithoutUsersInput
    teams?: teamsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    nickname: string
    age_group: string
    role: string
    avatar: string
    created_at?: Date | string
    updated_at?: Date | string
    team_members?: team_membersUncheckedCreateNestedManyWithoutUsersInput
    teams?: teamsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    age_group?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUpdateManyWithoutUsersNestedInput
    teams?: teamsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    age_group?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUncheckedUpdateManyWithoutUsersNestedInput
    teams?: teamsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
    nickname: string
    age_group: string
    role: string
    avatar: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    age_group?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    age_group?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type team_membersCreateInput = {
    joined_at?: Date | string
    teams: teamsCreateNestedOneWithoutTeam_membersInput
    users: usersCreateNestedOneWithoutTeam_membersInput
  }

  export type team_membersUncheckedCreateInput = {
    id?: number
    team_id: number
    user_id: number
    joined_at?: Date | string
  }

  export type team_membersUpdateInput = {
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: teamsUpdateOneRequiredWithoutTeam_membersNestedInput
    users?: usersUpdateOneRequiredWithoutTeam_membersNestedInput
  }

  export type team_membersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type team_membersCreateManyInput = {
    id?: number
    team_id: number
    user_id: number
    joined_at?: Date | string
  }

  export type team_membersUpdateManyMutationInput = {
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type team_membersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teamsCreateInput = {
    name: string
    description?: string | null
    invite_code: string
    created_at?: Date | string
    team_members?: team_membersCreateNestedManyWithoutTeamsInput
    users: usersCreateNestedOneWithoutTeamsInput
  }

  export type teamsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    creator_id: number
    invite_code: string
    created_at?: Date | string
    team_members?: team_membersUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUpdateManyWithoutTeamsNestedInput
    users?: usersUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creator_id?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type teamsCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    creator_id: number
    invite_code: string
    created_at?: Date | string
  }

  export type teamsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teamsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creator_id?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Team_membersListRelationFilter = {
    every?: team_membersWhereInput
    some?: team_membersWhereInput
    none?: team_membersWhereInput
  }

  export type TeamsListRelationFilter = {
    every?: teamsWhereInput
    some?: teamsWhereInput
    none?: teamsWhereInput
  }

  export type team_membersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type teamsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    age_group?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    age_group?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    nickname?: SortOrder
    age_group?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TeamsScalarRelationFilter = {
    is?: teamsWhereInput
    isNot?: teamsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type team_membersTeam_idUser_idCompoundUniqueInput = {
    team_id: number
    user_id: number
  }

  export type team_membersCountOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
  }

  export type team_membersAvgOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
  }

  export type team_membersMaxOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
  }

  export type team_membersMinOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
    joined_at?: SortOrder
  }

  export type team_membersSumOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type teamsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creator_id?: SortOrder
    invite_code?: SortOrder
    created_at?: SortOrder
  }

  export type teamsAvgOrderByAggregateInput = {
    id?: SortOrder
    creator_id?: SortOrder
  }

  export type teamsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creator_id?: SortOrder
    invite_code?: SortOrder
    created_at?: SortOrder
  }

  export type teamsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creator_id?: SortOrder
    invite_code?: SortOrder
    created_at?: SortOrder
  }

  export type teamsSumOrderByAggregateInput = {
    id?: SortOrder
    creator_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type team_membersCreateNestedManyWithoutUsersInput = {
    create?: XOR<team_membersCreateWithoutUsersInput, team_membersUncheckedCreateWithoutUsersInput> | team_membersCreateWithoutUsersInput[] | team_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_membersCreateOrConnectWithoutUsersInput | team_membersCreateOrConnectWithoutUsersInput[]
    createMany?: team_membersCreateManyUsersInputEnvelope
    connect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
  }

  export type teamsCreateNestedManyWithoutUsersInput = {
    create?: XOR<teamsCreateWithoutUsersInput, teamsUncheckedCreateWithoutUsersInput> | teamsCreateWithoutUsersInput[] | teamsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: teamsCreateOrConnectWithoutUsersInput | teamsCreateOrConnectWithoutUsersInput[]
    createMany?: teamsCreateManyUsersInputEnvelope
    connect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
  }

  export type team_membersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<team_membersCreateWithoutUsersInput, team_membersUncheckedCreateWithoutUsersInput> | team_membersCreateWithoutUsersInput[] | team_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_membersCreateOrConnectWithoutUsersInput | team_membersCreateOrConnectWithoutUsersInput[]
    createMany?: team_membersCreateManyUsersInputEnvelope
    connect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
  }

  export type teamsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<teamsCreateWithoutUsersInput, teamsUncheckedCreateWithoutUsersInput> | teamsCreateWithoutUsersInput[] | teamsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: teamsCreateOrConnectWithoutUsersInput | teamsCreateOrConnectWithoutUsersInput[]
    createMany?: teamsCreateManyUsersInputEnvelope
    connect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type team_membersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<team_membersCreateWithoutUsersInput, team_membersUncheckedCreateWithoutUsersInput> | team_membersCreateWithoutUsersInput[] | team_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_membersCreateOrConnectWithoutUsersInput | team_membersCreateOrConnectWithoutUsersInput[]
    upsert?: team_membersUpsertWithWhereUniqueWithoutUsersInput | team_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: team_membersCreateManyUsersInputEnvelope
    set?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    disconnect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    delete?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    connect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    update?: team_membersUpdateWithWhereUniqueWithoutUsersInput | team_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: team_membersUpdateManyWithWhereWithoutUsersInput | team_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: team_membersScalarWhereInput | team_membersScalarWhereInput[]
  }

  export type teamsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<teamsCreateWithoutUsersInput, teamsUncheckedCreateWithoutUsersInput> | teamsCreateWithoutUsersInput[] | teamsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: teamsCreateOrConnectWithoutUsersInput | teamsCreateOrConnectWithoutUsersInput[]
    upsert?: teamsUpsertWithWhereUniqueWithoutUsersInput | teamsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: teamsCreateManyUsersInputEnvelope
    set?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    disconnect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    delete?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    connect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    update?: teamsUpdateWithWhereUniqueWithoutUsersInput | teamsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: teamsUpdateManyWithWhereWithoutUsersInput | teamsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: teamsScalarWhereInput | teamsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type team_membersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<team_membersCreateWithoutUsersInput, team_membersUncheckedCreateWithoutUsersInput> | team_membersCreateWithoutUsersInput[] | team_membersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: team_membersCreateOrConnectWithoutUsersInput | team_membersCreateOrConnectWithoutUsersInput[]
    upsert?: team_membersUpsertWithWhereUniqueWithoutUsersInput | team_membersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: team_membersCreateManyUsersInputEnvelope
    set?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    disconnect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    delete?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    connect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    update?: team_membersUpdateWithWhereUniqueWithoutUsersInput | team_membersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: team_membersUpdateManyWithWhereWithoutUsersInput | team_membersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: team_membersScalarWhereInput | team_membersScalarWhereInput[]
  }

  export type teamsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<teamsCreateWithoutUsersInput, teamsUncheckedCreateWithoutUsersInput> | teamsCreateWithoutUsersInput[] | teamsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: teamsCreateOrConnectWithoutUsersInput | teamsCreateOrConnectWithoutUsersInput[]
    upsert?: teamsUpsertWithWhereUniqueWithoutUsersInput | teamsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: teamsCreateManyUsersInputEnvelope
    set?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    disconnect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    delete?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    connect?: teamsWhereUniqueInput | teamsWhereUniqueInput[]
    update?: teamsUpdateWithWhereUniqueWithoutUsersInput | teamsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: teamsUpdateManyWithWhereWithoutUsersInput | teamsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: teamsScalarWhereInput | teamsScalarWhereInput[]
  }

  export type teamsCreateNestedOneWithoutTeam_membersInput = {
    create?: XOR<teamsCreateWithoutTeam_membersInput, teamsUncheckedCreateWithoutTeam_membersInput>
    connectOrCreate?: teamsCreateOrConnectWithoutTeam_membersInput
    connect?: teamsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutTeam_membersInput = {
    create?: XOR<usersCreateWithoutTeam_membersInput, usersUncheckedCreateWithoutTeam_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTeam_membersInput
    connect?: usersWhereUniqueInput
  }

  export type teamsUpdateOneRequiredWithoutTeam_membersNestedInput = {
    create?: XOR<teamsCreateWithoutTeam_membersInput, teamsUncheckedCreateWithoutTeam_membersInput>
    connectOrCreate?: teamsCreateOrConnectWithoutTeam_membersInput
    upsert?: teamsUpsertWithoutTeam_membersInput
    connect?: teamsWhereUniqueInput
    update?: XOR<XOR<teamsUpdateToOneWithWhereWithoutTeam_membersInput, teamsUpdateWithoutTeam_membersInput>, teamsUncheckedUpdateWithoutTeam_membersInput>
  }

  export type usersUpdateOneRequiredWithoutTeam_membersNestedInput = {
    create?: XOR<usersCreateWithoutTeam_membersInput, usersUncheckedCreateWithoutTeam_membersInput>
    connectOrCreate?: usersCreateOrConnectWithoutTeam_membersInput
    upsert?: usersUpsertWithoutTeam_membersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTeam_membersInput, usersUpdateWithoutTeam_membersInput>, usersUncheckedUpdateWithoutTeam_membersInput>
  }

  export type team_membersCreateNestedManyWithoutTeamsInput = {
    create?: XOR<team_membersCreateWithoutTeamsInput, team_membersUncheckedCreateWithoutTeamsInput> | team_membersCreateWithoutTeamsInput[] | team_membersUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: team_membersCreateOrConnectWithoutTeamsInput | team_membersCreateOrConnectWithoutTeamsInput[]
    createMany?: team_membersCreateManyTeamsInputEnvelope
    connect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutTeamsInput = {
    create?: XOR<usersCreateWithoutTeamsInput, usersUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTeamsInput
    connect?: usersWhereUniqueInput
  }

  export type team_membersUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<team_membersCreateWithoutTeamsInput, team_membersUncheckedCreateWithoutTeamsInput> | team_membersCreateWithoutTeamsInput[] | team_membersUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: team_membersCreateOrConnectWithoutTeamsInput | team_membersCreateOrConnectWithoutTeamsInput[]
    createMany?: team_membersCreateManyTeamsInputEnvelope
    connect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type team_membersUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<team_membersCreateWithoutTeamsInput, team_membersUncheckedCreateWithoutTeamsInput> | team_membersCreateWithoutTeamsInput[] | team_membersUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: team_membersCreateOrConnectWithoutTeamsInput | team_membersCreateOrConnectWithoutTeamsInput[]
    upsert?: team_membersUpsertWithWhereUniqueWithoutTeamsInput | team_membersUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: team_membersCreateManyTeamsInputEnvelope
    set?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    disconnect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    delete?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    connect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    update?: team_membersUpdateWithWhereUniqueWithoutTeamsInput | team_membersUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: team_membersUpdateManyWithWhereWithoutTeamsInput | team_membersUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: team_membersScalarWhereInput | team_membersScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<usersCreateWithoutTeamsInput, usersUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: usersCreateOrConnectWithoutTeamsInput
    upsert?: usersUpsertWithoutTeamsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutTeamsInput, usersUpdateWithoutTeamsInput>, usersUncheckedUpdateWithoutTeamsInput>
  }

  export type team_membersUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<team_membersCreateWithoutTeamsInput, team_membersUncheckedCreateWithoutTeamsInput> | team_membersCreateWithoutTeamsInput[] | team_membersUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: team_membersCreateOrConnectWithoutTeamsInput | team_membersCreateOrConnectWithoutTeamsInput[]
    upsert?: team_membersUpsertWithWhereUniqueWithoutTeamsInput | team_membersUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: team_membersCreateManyTeamsInputEnvelope
    set?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    disconnect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    delete?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    connect?: team_membersWhereUniqueInput | team_membersWhereUniqueInput[]
    update?: team_membersUpdateWithWhereUniqueWithoutTeamsInput | team_membersUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: team_membersUpdateManyWithWhereWithoutTeamsInput | team_membersUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: team_membersScalarWhereInput | team_membersScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type team_membersCreateWithoutUsersInput = {
    joined_at?: Date | string
    teams: teamsCreateNestedOneWithoutTeam_membersInput
  }

  export type team_membersUncheckedCreateWithoutUsersInput = {
    id?: number
    team_id: number
    joined_at?: Date | string
  }

  export type team_membersCreateOrConnectWithoutUsersInput = {
    where: team_membersWhereUniqueInput
    create: XOR<team_membersCreateWithoutUsersInput, team_membersUncheckedCreateWithoutUsersInput>
  }

  export type team_membersCreateManyUsersInputEnvelope = {
    data: team_membersCreateManyUsersInput | team_membersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type teamsCreateWithoutUsersInput = {
    name: string
    description?: string | null
    invite_code: string
    created_at?: Date | string
    team_members?: team_membersCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    invite_code: string
    created_at?: Date | string
    team_members?: team_membersUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsCreateOrConnectWithoutUsersInput = {
    where: teamsWhereUniqueInput
    create: XOR<teamsCreateWithoutUsersInput, teamsUncheckedCreateWithoutUsersInput>
  }

  export type teamsCreateManyUsersInputEnvelope = {
    data: teamsCreateManyUsersInput | teamsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type team_membersUpsertWithWhereUniqueWithoutUsersInput = {
    where: team_membersWhereUniqueInput
    update: XOR<team_membersUpdateWithoutUsersInput, team_membersUncheckedUpdateWithoutUsersInput>
    create: XOR<team_membersCreateWithoutUsersInput, team_membersUncheckedCreateWithoutUsersInput>
  }

  export type team_membersUpdateWithWhereUniqueWithoutUsersInput = {
    where: team_membersWhereUniqueInput
    data: XOR<team_membersUpdateWithoutUsersInput, team_membersUncheckedUpdateWithoutUsersInput>
  }

  export type team_membersUpdateManyWithWhereWithoutUsersInput = {
    where: team_membersScalarWhereInput
    data: XOR<team_membersUpdateManyMutationInput, team_membersUncheckedUpdateManyWithoutUsersInput>
  }

  export type team_membersScalarWhereInput = {
    AND?: team_membersScalarWhereInput | team_membersScalarWhereInput[]
    OR?: team_membersScalarWhereInput[]
    NOT?: team_membersScalarWhereInput | team_membersScalarWhereInput[]
    id?: IntFilter<"team_members"> | number
    team_id?: IntFilter<"team_members"> | number
    user_id?: IntFilter<"team_members"> | number
    joined_at?: DateTimeFilter<"team_members"> | Date | string
  }

  export type teamsUpsertWithWhereUniqueWithoutUsersInput = {
    where: teamsWhereUniqueInput
    update: XOR<teamsUpdateWithoutUsersInput, teamsUncheckedUpdateWithoutUsersInput>
    create: XOR<teamsCreateWithoutUsersInput, teamsUncheckedCreateWithoutUsersInput>
  }

  export type teamsUpdateWithWhereUniqueWithoutUsersInput = {
    where: teamsWhereUniqueInput
    data: XOR<teamsUpdateWithoutUsersInput, teamsUncheckedUpdateWithoutUsersInput>
  }

  export type teamsUpdateManyWithWhereWithoutUsersInput = {
    where: teamsScalarWhereInput
    data: XOR<teamsUpdateManyMutationInput, teamsUncheckedUpdateManyWithoutUsersInput>
  }

  export type teamsScalarWhereInput = {
    AND?: teamsScalarWhereInput | teamsScalarWhereInput[]
    OR?: teamsScalarWhereInput[]
    NOT?: teamsScalarWhereInput | teamsScalarWhereInput[]
    id?: IntFilter<"teams"> | number
    name?: StringFilter<"teams"> | string
    description?: StringNullableFilter<"teams"> | string | null
    creator_id?: IntFilter<"teams"> | number
    invite_code?: StringFilter<"teams"> | string
    created_at?: DateTimeFilter<"teams"> | Date | string
  }

  export type teamsCreateWithoutTeam_membersInput = {
    name: string
    description?: string | null
    invite_code: string
    created_at?: Date | string
    users: usersCreateNestedOneWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutTeam_membersInput = {
    id?: number
    name: string
    description?: string | null
    creator_id: number
    invite_code: string
    created_at?: Date | string
  }

  export type teamsCreateOrConnectWithoutTeam_membersInput = {
    where: teamsWhereUniqueInput
    create: XOR<teamsCreateWithoutTeam_membersInput, teamsUncheckedCreateWithoutTeam_membersInput>
  }

  export type usersCreateWithoutTeam_membersInput = {
    email: string
    password: string
    nickname: string
    age_group: string
    role: string
    avatar: string
    created_at?: Date | string
    updated_at?: Date | string
    teams?: teamsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTeam_membersInput = {
    id?: number
    email: string
    password: string
    nickname: string
    age_group: string
    role: string
    avatar: string
    created_at?: Date | string
    updated_at?: Date | string
    teams?: teamsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTeam_membersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTeam_membersInput, usersUncheckedCreateWithoutTeam_membersInput>
  }

  export type teamsUpsertWithoutTeam_membersInput = {
    update: XOR<teamsUpdateWithoutTeam_membersInput, teamsUncheckedUpdateWithoutTeam_membersInput>
    create: XOR<teamsCreateWithoutTeam_membersInput, teamsUncheckedCreateWithoutTeam_membersInput>
    where?: teamsWhereInput
  }

  export type teamsUpdateToOneWithWhereWithoutTeam_membersInput = {
    where?: teamsWhereInput
    data: XOR<teamsUpdateWithoutTeam_membersInput, teamsUncheckedUpdateWithoutTeam_membersInput>
  }

  export type teamsUpdateWithoutTeam_membersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutTeam_membersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creator_id?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUpsertWithoutTeam_membersInput = {
    update: XOR<usersUpdateWithoutTeam_membersInput, usersUncheckedUpdateWithoutTeam_membersInput>
    create: XOR<usersCreateWithoutTeam_membersInput, usersUncheckedCreateWithoutTeam_membersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTeam_membersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTeam_membersInput, usersUncheckedUpdateWithoutTeam_membersInput>
  }

  export type usersUpdateWithoutTeam_membersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    age_group?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: teamsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTeam_membersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    age_group?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: teamsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type team_membersCreateWithoutTeamsInput = {
    joined_at?: Date | string
    users: usersCreateNestedOneWithoutTeam_membersInput
  }

  export type team_membersUncheckedCreateWithoutTeamsInput = {
    id?: number
    user_id: number
    joined_at?: Date | string
  }

  export type team_membersCreateOrConnectWithoutTeamsInput = {
    where: team_membersWhereUniqueInput
    create: XOR<team_membersCreateWithoutTeamsInput, team_membersUncheckedCreateWithoutTeamsInput>
  }

  export type team_membersCreateManyTeamsInputEnvelope = {
    data: team_membersCreateManyTeamsInput | team_membersCreateManyTeamsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutTeamsInput = {
    email: string
    password: string
    nickname: string
    age_group: string
    role: string
    avatar: string
    created_at?: Date | string
    updated_at?: Date | string
    team_members?: team_membersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutTeamsInput = {
    id?: number
    email: string
    password: string
    nickname: string
    age_group: string
    role: string
    avatar: string
    created_at?: Date | string
    updated_at?: Date | string
    team_members?: team_membersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTeamsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTeamsInput, usersUncheckedCreateWithoutTeamsInput>
  }

  export type team_membersUpsertWithWhereUniqueWithoutTeamsInput = {
    where: team_membersWhereUniqueInput
    update: XOR<team_membersUpdateWithoutTeamsInput, team_membersUncheckedUpdateWithoutTeamsInput>
    create: XOR<team_membersCreateWithoutTeamsInput, team_membersUncheckedCreateWithoutTeamsInput>
  }

  export type team_membersUpdateWithWhereUniqueWithoutTeamsInput = {
    where: team_membersWhereUniqueInput
    data: XOR<team_membersUpdateWithoutTeamsInput, team_membersUncheckedUpdateWithoutTeamsInput>
  }

  export type team_membersUpdateManyWithWhereWithoutTeamsInput = {
    where: team_membersScalarWhereInput
    data: XOR<team_membersUpdateManyMutationInput, team_membersUncheckedUpdateManyWithoutTeamsInput>
  }

  export type usersUpsertWithoutTeamsInput = {
    update: XOR<usersUpdateWithoutTeamsInput, usersUncheckedUpdateWithoutTeamsInput>
    create: XOR<usersCreateWithoutTeamsInput, usersUncheckedCreateWithoutTeamsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutTeamsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutTeamsInput, usersUncheckedUpdateWithoutTeamsInput>
  }

  export type usersUpdateWithoutTeamsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    age_group?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    age_group?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type team_membersCreateManyUsersInput = {
    id?: number
    team_id: number
    joined_at?: Date | string
  }

  export type teamsCreateManyUsersInput = {
    id?: number
    name: string
    description?: string | null
    invite_code: string
    created_at?: Date | string
  }

  export type team_membersUpdateWithoutUsersInput = {
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: teamsUpdateOneRequiredWithoutTeam_membersNestedInput
  }

  export type team_membersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type team_membersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type teamsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type team_membersCreateManyTeamsInput = {
    id?: number
    user_id: number
    joined_at?: Date | string
  }

  export type team_membersUpdateWithoutTeamsInput = {
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutTeam_membersNestedInput
  }

  export type team_membersUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type team_membersUncheckedUpdateManyWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    joined_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}