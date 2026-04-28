
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
 * Model quests
 * 
 */
export type quests = $Result.DefaultSelection<Prisma.$questsPayload>
/**
 * Model quest_checkpoints
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type quest_checkpoints = $Result.DefaultSelection<Prisma.$quest_checkpointsPayload>
/**
 * Model sessions
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type sessions = $Result.DefaultSelection<Prisma.$sessionsPayload>
/**
 * Model checkpoint_tasks
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type checkpoint_tasks = $Result.DefaultSelection<Prisma.$checkpoint_tasksPayload>
/**
 * Model task_choice_options
 * 
 */
export type task_choice_options = $Result.DefaultSelection<Prisma.$task_choice_optionsPayload>
/**
 * Model session_answers
 * 
 */
export type session_answers = $Result.DefaultSelection<Prisma.$session_answersPayload>
/**
 * Model session_checkpoints
 * 
 */
export type session_checkpoints = $Result.DefaultSelection<Prisma.$session_checkpointsPayload>

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

  /**
   * `prisma.quests`: Exposes CRUD operations for the **quests** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quests
    * const quests = await prisma.quests.findMany()
    * ```
    */
  get quests(): Prisma.questsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.quest_checkpoints`: Exposes CRUD operations for the **quest_checkpoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Quest_checkpoints
    * const quest_checkpoints = await prisma.quest_checkpoints.findMany()
    * ```
    */
  get quest_checkpoints(): Prisma.quest_checkpointsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkpoint_tasks`: Exposes CRUD operations for the **checkpoint_tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Checkpoint_tasks
    * const checkpoint_tasks = await prisma.checkpoint_tasks.findMany()
    * ```
    */
  get checkpoint_tasks(): Prisma.checkpoint_tasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task_choice_options`: Exposes CRUD operations for the **task_choice_options** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Task_choice_options
    * const task_choice_options = await prisma.task_choice_options.findMany()
    * ```
    */
  get task_choice_options(): Prisma.task_choice_optionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session_answers`: Exposes CRUD operations for the **session_answers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Session_answers
    * const session_answers = await prisma.session_answers.findMany()
    * ```
    */
  get session_answers(): Prisma.session_answersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session_checkpoints`: Exposes CRUD operations for the **session_checkpoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Session_checkpoints
    * const session_checkpoints = await prisma.session_checkpoints.findMany()
    * ```
    */
  get session_checkpoints(): Prisma.session_checkpointsDelegate<ExtArgs, ClientOptions>;
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
    teams: 'teams',
    quests: 'quests',
    quest_checkpoints: 'quest_checkpoints',
    sessions: 'sessions',
    checkpoint_tasks: 'checkpoint_tasks',
    task_choice_options: 'task_choice_options',
    session_answers: 'session_answers',
    session_checkpoints: 'session_checkpoints'
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
      modelProps: "users" | "team_members" | "teams" | "quests" | "quest_checkpoints" | "sessions" | "checkpoint_tasks" | "task_choice_options" | "session_answers" | "session_checkpoints"
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
      quests: {
        payload: Prisma.$questsPayload<ExtArgs>
        fields: Prisma.questsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.questsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.questsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>
          }
          findFirst: {
            args: Prisma.questsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.questsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>
          }
          findMany: {
            args: Prisma.questsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>[]
          }
          create: {
            args: Prisma.questsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>
          }
          createMany: {
            args: Prisma.questsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.questsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>[]
          }
          delete: {
            args: Prisma.questsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>
          }
          update: {
            args: Prisma.questsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>
          }
          deleteMany: {
            args: Prisma.questsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.questsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.questsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>[]
          }
          upsert: {
            args: Prisma.questsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$questsPayload>
          }
          aggregate: {
            args: Prisma.QuestsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuests>
          }
          groupBy: {
            args: Prisma.questsGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestsGroupByOutputType>[]
          }
          count: {
            args: Prisma.questsCountArgs<ExtArgs>
            result: $Utils.Optional<QuestsCountAggregateOutputType> | number
          }
        }
      }
      quest_checkpoints: {
        payload: Prisma.$quest_checkpointsPayload<ExtArgs>
        fields: Prisma.quest_checkpointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.quest_checkpointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quest_checkpointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.quest_checkpointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quest_checkpointsPayload>
          }
          findFirst: {
            args: Prisma.quest_checkpointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quest_checkpointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.quest_checkpointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quest_checkpointsPayload>
          }
          findMany: {
            args: Prisma.quest_checkpointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quest_checkpointsPayload>[]
          }
          create: {
            args: Prisma.quest_checkpointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quest_checkpointsPayload>
          }
          createMany: {
            args: Prisma.quest_checkpointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.quest_checkpointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quest_checkpointsPayload>[]
          }
          delete: {
            args: Prisma.quest_checkpointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quest_checkpointsPayload>
          }
          update: {
            args: Prisma.quest_checkpointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quest_checkpointsPayload>
          }
          deleteMany: {
            args: Prisma.quest_checkpointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.quest_checkpointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.quest_checkpointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quest_checkpointsPayload>[]
          }
          upsert: {
            args: Prisma.quest_checkpointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$quest_checkpointsPayload>
          }
          aggregate: {
            args: Prisma.Quest_checkpointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuest_checkpoints>
          }
          groupBy: {
            args: Prisma.quest_checkpointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Quest_checkpointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.quest_checkpointsCountArgs<ExtArgs>
            result: $Utils.Optional<Quest_checkpointsCountAggregateOutputType> | number
          }
        }
      }
      sessions: {
        payload: Prisma.$sessionsPayload<ExtArgs>
        fields: Prisma.sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findFirst: {
            args: Prisma.sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          findMany: {
            args: Prisma.sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          create: {
            args: Prisma.sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          createMany: {
            args: Prisma.sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          delete: {
            args: Prisma.sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          update: {
            args: Prisma.sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          deleteMany: {
            args: Prisma.sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>[]
          }
          upsert: {
            args: Prisma.sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      checkpoint_tasks: {
        payload: Prisma.$checkpoint_tasksPayload<ExtArgs>
        fields: Prisma.checkpoint_tasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.checkpoint_tasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkpoint_tasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.checkpoint_tasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkpoint_tasksPayload>
          }
          findFirst: {
            args: Prisma.checkpoint_tasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkpoint_tasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.checkpoint_tasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkpoint_tasksPayload>
          }
          findMany: {
            args: Prisma.checkpoint_tasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkpoint_tasksPayload>[]
          }
          create: {
            args: Prisma.checkpoint_tasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkpoint_tasksPayload>
          }
          createMany: {
            args: Prisma.checkpoint_tasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.checkpoint_tasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkpoint_tasksPayload>[]
          }
          delete: {
            args: Prisma.checkpoint_tasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkpoint_tasksPayload>
          }
          update: {
            args: Prisma.checkpoint_tasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkpoint_tasksPayload>
          }
          deleteMany: {
            args: Prisma.checkpoint_tasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.checkpoint_tasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.checkpoint_tasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkpoint_tasksPayload>[]
          }
          upsert: {
            args: Prisma.checkpoint_tasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$checkpoint_tasksPayload>
          }
          aggregate: {
            args: Prisma.Checkpoint_tasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckpoint_tasks>
          }
          groupBy: {
            args: Prisma.checkpoint_tasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<Checkpoint_tasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.checkpoint_tasksCountArgs<ExtArgs>
            result: $Utils.Optional<Checkpoint_tasksCountAggregateOutputType> | number
          }
        }
      }
      task_choice_options: {
        payload: Prisma.$task_choice_optionsPayload<ExtArgs>
        fields: Prisma.task_choice_optionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.task_choice_optionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_choice_optionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.task_choice_optionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_choice_optionsPayload>
          }
          findFirst: {
            args: Prisma.task_choice_optionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_choice_optionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.task_choice_optionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_choice_optionsPayload>
          }
          findMany: {
            args: Prisma.task_choice_optionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_choice_optionsPayload>[]
          }
          create: {
            args: Prisma.task_choice_optionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_choice_optionsPayload>
          }
          createMany: {
            args: Prisma.task_choice_optionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.task_choice_optionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_choice_optionsPayload>[]
          }
          delete: {
            args: Prisma.task_choice_optionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_choice_optionsPayload>
          }
          update: {
            args: Prisma.task_choice_optionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_choice_optionsPayload>
          }
          deleteMany: {
            args: Prisma.task_choice_optionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.task_choice_optionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.task_choice_optionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_choice_optionsPayload>[]
          }
          upsert: {
            args: Prisma.task_choice_optionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$task_choice_optionsPayload>
          }
          aggregate: {
            args: Prisma.Task_choice_optionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask_choice_options>
          }
          groupBy: {
            args: Prisma.task_choice_optionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Task_choice_optionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.task_choice_optionsCountArgs<ExtArgs>
            result: $Utils.Optional<Task_choice_optionsCountAggregateOutputType> | number
          }
        }
      }
      session_answers: {
        payload: Prisma.$session_answersPayload<ExtArgs>
        fields: Prisma.session_answersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.session_answersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_answersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.session_answersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_answersPayload>
          }
          findFirst: {
            args: Prisma.session_answersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_answersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.session_answersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_answersPayload>
          }
          findMany: {
            args: Prisma.session_answersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_answersPayload>[]
          }
          create: {
            args: Prisma.session_answersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_answersPayload>
          }
          createMany: {
            args: Prisma.session_answersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.session_answersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_answersPayload>[]
          }
          delete: {
            args: Prisma.session_answersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_answersPayload>
          }
          update: {
            args: Prisma.session_answersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_answersPayload>
          }
          deleteMany: {
            args: Prisma.session_answersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.session_answersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.session_answersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_answersPayload>[]
          }
          upsert: {
            args: Prisma.session_answersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_answersPayload>
          }
          aggregate: {
            args: Prisma.Session_answersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession_answers>
          }
          groupBy: {
            args: Prisma.session_answersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Session_answersGroupByOutputType>[]
          }
          count: {
            args: Prisma.session_answersCountArgs<ExtArgs>
            result: $Utils.Optional<Session_answersCountAggregateOutputType> | number
          }
        }
      }
      session_checkpoints: {
        payload: Prisma.$session_checkpointsPayload<ExtArgs>
        fields: Prisma.session_checkpointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.session_checkpointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_checkpointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.session_checkpointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_checkpointsPayload>
          }
          findFirst: {
            args: Prisma.session_checkpointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_checkpointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.session_checkpointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_checkpointsPayload>
          }
          findMany: {
            args: Prisma.session_checkpointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_checkpointsPayload>[]
          }
          create: {
            args: Prisma.session_checkpointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_checkpointsPayload>
          }
          createMany: {
            args: Prisma.session_checkpointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.session_checkpointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_checkpointsPayload>[]
          }
          delete: {
            args: Prisma.session_checkpointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_checkpointsPayload>
          }
          update: {
            args: Prisma.session_checkpointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_checkpointsPayload>
          }
          deleteMany: {
            args: Prisma.session_checkpointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.session_checkpointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.session_checkpointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_checkpointsPayload>[]
          }
          upsert: {
            args: Prisma.session_checkpointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$session_checkpointsPayload>
          }
          aggregate: {
            args: Prisma.Session_checkpointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession_checkpoints>
          }
          groupBy: {
            args: Prisma.session_checkpointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Session_checkpointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.session_checkpointsCountArgs<ExtArgs>
            result: $Utils.Optional<Session_checkpointsCountAggregateOutputType> | number
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
    quests?: questsOmit
    quest_checkpoints?: quest_checkpointsOmit
    sessions?: sessionsOmit
    checkpoint_tasks?: checkpoint_tasksOmit
    task_choice_options?: task_choice_optionsOmit
    session_answers?: session_answersOmit
    session_checkpoints?: session_checkpointsOmit
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
    quests: number
    sessions: number
    team_members: number
    teams: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quests?: boolean | UsersCountOutputTypeCountQuestsArgs
    sessions?: boolean | UsersCountOutputTypeCountSessionsArgs
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
  export type UsersCountOutputTypeCountQuestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
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
    sessions: number
    team_members: number
  }

  export type TeamsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | TeamsCountOutputTypeCountSessionsArgs
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
  export type TeamsCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountTeam_membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: team_membersWhereInput
  }


  /**
   * Count Type QuestsCountOutputType
   */

  export type QuestsCountOutputType = {
    quest_checkpoints: number
    sessions: number
  }

  export type QuestsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest_checkpoints?: boolean | QuestsCountOutputTypeCountQuest_checkpointsArgs
    sessions?: boolean | QuestsCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * QuestsCountOutputType without action
   */
  export type QuestsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestsCountOutputType
     */
    select?: QuestsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestsCountOutputType without action
   */
  export type QuestsCountOutputTypeCountQuest_checkpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quest_checkpointsWhereInput
  }

  /**
   * QuestsCountOutputType without action
   */
  export type QuestsCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
  }


  /**
   * Count Type Quest_checkpointsCountOutputType
   */

  export type Quest_checkpointsCountOutputType = {
    checkpoint_tasks: number
    session_answers: number
    session_checkpoints: number
  }

  export type Quest_checkpointsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkpoint_tasks?: boolean | Quest_checkpointsCountOutputTypeCountCheckpoint_tasksArgs
    session_answers?: boolean | Quest_checkpointsCountOutputTypeCountSession_answersArgs
    session_checkpoints?: boolean | Quest_checkpointsCountOutputTypeCountSession_checkpointsArgs
  }

  // Custom InputTypes
  /**
   * Quest_checkpointsCountOutputType without action
   */
  export type Quest_checkpointsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Quest_checkpointsCountOutputType
     */
    select?: Quest_checkpointsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Quest_checkpointsCountOutputType without action
   */
  export type Quest_checkpointsCountOutputTypeCountCheckpoint_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: checkpoint_tasksWhereInput
  }

  /**
   * Quest_checkpointsCountOutputType without action
   */
  export type Quest_checkpointsCountOutputTypeCountSession_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: session_answersWhereInput
  }

  /**
   * Quest_checkpointsCountOutputType without action
   */
  export type Quest_checkpointsCountOutputTypeCountSession_checkpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: session_checkpointsWhereInput
  }


  /**
   * Count Type SessionsCountOutputType
   */

  export type SessionsCountOutputType = {
    session_answers: number
    session_checkpoints: number
  }

  export type SessionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session_answers?: boolean | SessionsCountOutputTypeCountSession_answersArgs
    session_checkpoints?: boolean | SessionsCountOutputTypeCountSession_checkpointsArgs
  }

  // Custom InputTypes
  /**
   * SessionsCountOutputType without action
   */
  export type SessionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionsCountOutputType
     */
    select?: SessionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionsCountOutputType without action
   */
  export type SessionsCountOutputTypeCountSession_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: session_answersWhereInput
  }

  /**
   * SessionsCountOutputType without action
   */
  export type SessionsCountOutputTypeCountSession_checkpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: session_checkpointsWhereInput
  }


  /**
   * Count Type Checkpoint_tasksCountOutputType
   */

  export type Checkpoint_tasksCountOutputType = {
    session_answers: number
    task_choice_options: number
  }

  export type Checkpoint_tasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session_answers?: boolean | Checkpoint_tasksCountOutputTypeCountSession_answersArgs
    task_choice_options?: boolean | Checkpoint_tasksCountOutputTypeCountTask_choice_optionsArgs
  }

  // Custom InputTypes
  /**
   * Checkpoint_tasksCountOutputType without action
   */
  export type Checkpoint_tasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Checkpoint_tasksCountOutputType
     */
    select?: Checkpoint_tasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Checkpoint_tasksCountOutputType without action
   */
  export type Checkpoint_tasksCountOutputTypeCountSession_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: session_answersWhereInput
  }

  /**
   * Checkpoint_tasksCountOutputType without action
   */
  export type Checkpoint_tasksCountOutputTypeCountTask_choice_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_choice_optionsWhereInput
  }


  /**
   * Count Type Task_choice_optionsCountOutputType
   */

  export type Task_choice_optionsCountOutputType = {
    session_answers: number
  }

  export type Task_choice_optionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session_answers?: boolean | Task_choice_optionsCountOutputTypeCountSession_answersArgs
  }

  // Custom InputTypes
  /**
   * Task_choice_optionsCountOutputType without action
   */
  export type Task_choice_optionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task_choice_optionsCountOutputType
     */
    select?: Task_choice_optionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Task_choice_optionsCountOutputType without action
   */
  export type Task_choice_optionsCountOutputTypeCountSession_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: session_answersWhereInput
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
    quests?: boolean | users$questsArgs<ExtArgs>
    sessions?: boolean | users$sessionsArgs<ExtArgs>
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
    quests?: boolean | users$questsArgs<ExtArgs>
    sessions?: boolean | users$sessionsArgs<ExtArgs>
    team_members?: boolean | users$team_membersArgs<ExtArgs>
    teams?: boolean | users$teamsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      quests: Prisma.$questsPayload<ExtArgs>[]
      sessions: Prisma.$sessionsPayload<ExtArgs>[]
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
    quests<T extends users$questsArgs<ExtArgs> = {}>(args?: Subset<T, users$questsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends users$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, users$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * users.quests
   */
  export type users$questsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    where?: questsWhereInput
    orderBy?: questsOrderByWithRelationInput | questsOrderByWithRelationInput[]
    cursor?: questsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestsScalarFieldEnum | QuestsScalarFieldEnum[]
  }

  /**
   * users.sessions
   */
  export type users$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    cursor?: sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
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
    sessions?: boolean | teams$sessionsArgs<ExtArgs>
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
    sessions?: boolean | teams$sessionsArgs<ExtArgs>
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
      sessions: Prisma.$sessionsPayload<ExtArgs>[]
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
    sessions<T extends teams$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, teams$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * teams.sessions
   */
  export type teams$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    cursor?: sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
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
   * Model quests
   */

  export type AggregateQuests = {
    _count: QuestsCountAggregateOutputType | null
    _avg: QuestsAvgAggregateOutputType | null
    _sum: QuestsSumAggregateOutputType | null
    _min: QuestsMinAggregateOutputType | null
    _max: QuestsMaxAggregateOutputType | null
  }

  export type QuestsAvgAggregateOutputType = {
    id: number | null
    creator_id: number | null
    difficulty: number | null
    duration_minutes: number | null
  }

  export type QuestsSumAggregateOutputType = {
    id: number | null
    creator_id: number | null
    difficulty: number | null
    duration_minutes: number | null
  }

  export type QuestsMinAggregateOutputType = {
    id: number | null
    creator_id: number | null
    title: string | null
    description: string | null
    location_text: string | null
    image: string | null
    difficulty: number | null
    duration_minutes: number | null
    rules: string | null
    status: string | null
    is_hidden: boolean | null
    created_at: Date | null
    updated_at: Date | null
    rejection_reason: string | null
  }

  export type QuestsMaxAggregateOutputType = {
    id: number | null
    creator_id: number | null
    title: string | null
    description: string | null
    location_text: string | null
    image: string | null
    difficulty: number | null
    duration_minutes: number | null
    rules: string | null
    status: string | null
    is_hidden: boolean | null
    created_at: Date | null
    updated_at: Date | null
    rejection_reason: string | null
  }

  export type QuestsCountAggregateOutputType = {
    id: number
    creator_id: number
    title: number
    description: number
    location_text: number
    image: number
    difficulty: number
    duration_minutes: number
    rules: number
    status: number
    is_hidden: number
    created_at: number
    updated_at: number
    rejection_reason: number
    _all: number
  }


  export type QuestsAvgAggregateInputType = {
    id?: true
    creator_id?: true
    difficulty?: true
    duration_minutes?: true
  }

  export type QuestsSumAggregateInputType = {
    id?: true
    creator_id?: true
    difficulty?: true
    duration_minutes?: true
  }

  export type QuestsMinAggregateInputType = {
    id?: true
    creator_id?: true
    title?: true
    description?: true
    location_text?: true
    image?: true
    difficulty?: true
    duration_minutes?: true
    rules?: true
    status?: true
    is_hidden?: true
    created_at?: true
    updated_at?: true
    rejection_reason?: true
  }

  export type QuestsMaxAggregateInputType = {
    id?: true
    creator_id?: true
    title?: true
    description?: true
    location_text?: true
    image?: true
    difficulty?: true
    duration_minutes?: true
    rules?: true
    status?: true
    is_hidden?: true
    created_at?: true
    updated_at?: true
    rejection_reason?: true
  }

  export type QuestsCountAggregateInputType = {
    id?: true
    creator_id?: true
    title?: true
    description?: true
    location_text?: true
    image?: true
    difficulty?: true
    duration_minutes?: true
    rules?: true
    status?: true
    is_hidden?: true
    created_at?: true
    updated_at?: true
    rejection_reason?: true
    _all?: true
  }

  export type QuestsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quests to aggregate.
     */
    where?: questsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quests to fetch.
     */
    orderBy?: questsOrderByWithRelationInput | questsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: questsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned quests
    **/
    _count?: true | QuestsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestsMaxAggregateInputType
  }

  export type GetQuestsAggregateType<T extends QuestsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuests]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuests[P]>
      : GetScalarType<T[P], AggregateQuests[P]>
  }




  export type questsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: questsWhereInput
    orderBy?: questsOrderByWithAggregationInput | questsOrderByWithAggregationInput[]
    by: QuestsScalarFieldEnum[] | QuestsScalarFieldEnum
    having?: questsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestsCountAggregateInputType | true
    _avg?: QuestsAvgAggregateInputType
    _sum?: QuestsSumAggregateInputType
    _min?: QuestsMinAggregateInputType
    _max?: QuestsMaxAggregateInputType
  }

  export type QuestsGroupByOutputType = {
    id: number
    creator_id: number
    title: string
    description: string
    location_text: string
    image: string
    difficulty: number
    duration_minutes: number
    rules: string | null
    status: string
    is_hidden: boolean | null
    created_at: Date
    updated_at: Date
    rejection_reason: string | null
    _count: QuestsCountAggregateOutputType | null
    _avg: QuestsAvgAggregateOutputType | null
    _sum: QuestsSumAggregateOutputType | null
    _min: QuestsMinAggregateOutputType | null
    _max: QuestsMaxAggregateOutputType | null
  }

  type GetQuestsGroupByPayload<T extends questsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestsGroupByOutputType[P]>
            : GetScalarType<T[P], QuestsGroupByOutputType[P]>
        }
      >
    >


  export type questsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creator_id?: boolean
    title?: boolean
    description?: boolean
    location_text?: boolean
    image?: boolean
    difficulty?: boolean
    duration_minutes?: boolean
    rules?: boolean
    status?: boolean
    is_hidden?: boolean
    created_at?: boolean
    updated_at?: boolean
    rejection_reason?: boolean
    quest_checkpoints?: boolean | quests$quest_checkpointsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    sessions?: boolean | quests$sessionsArgs<ExtArgs>
    _count?: boolean | QuestsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quests"]>

  export type questsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creator_id?: boolean
    title?: boolean
    description?: boolean
    location_text?: boolean
    image?: boolean
    difficulty?: boolean
    duration_minutes?: boolean
    rules?: boolean
    status?: boolean
    is_hidden?: boolean
    created_at?: boolean
    updated_at?: boolean
    rejection_reason?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quests"]>

  export type questsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    creator_id?: boolean
    title?: boolean
    description?: boolean
    location_text?: boolean
    image?: boolean
    difficulty?: boolean
    duration_minutes?: boolean
    rules?: boolean
    status?: boolean
    is_hidden?: boolean
    created_at?: boolean
    updated_at?: boolean
    rejection_reason?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quests"]>

  export type questsSelectScalar = {
    id?: boolean
    creator_id?: boolean
    title?: boolean
    description?: boolean
    location_text?: boolean
    image?: boolean
    difficulty?: boolean
    duration_minutes?: boolean
    rules?: boolean
    status?: boolean
    is_hidden?: boolean
    created_at?: boolean
    updated_at?: boolean
    rejection_reason?: boolean
  }

  export type questsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "creator_id" | "title" | "description" | "location_text" | "image" | "difficulty" | "duration_minutes" | "rules" | "status" | "is_hidden" | "created_at" | "updated_at" | "rejection_reason", ExtArgs["result"]["quests"]>
  export type questsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest_checkpoints?: boolean | quests$quest_checkpointsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    sessions?: boolean | quests$sessionsArgs<ExtArgs>
    _count?: boolean | QuestsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type questsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type questsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $questsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "quests"
    objects: {
      quest_checkpoints: Prisma.$quest_checkpointsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
      sessions: Prisma.$sessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      creator_id: number
      title: string
      description: string
      location_text: string
      image: string
      difficulty: number
      duration_minutes: number
      rules: string | null
      status: string
      is_hidden: boolean | null
      created_at: Date
      updated_at: Date
      rejection_reason: string | null
    }, ExtArgs["result"]["quests"]>
    composites: {}
  }

  type questsGetPayload<S extends boolean | null | undefined | questsDefaultArgs> = $Result.GetResult<Prisma.$questsPayload, S>

  type questsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<questsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestsCountAggregateInputType | true
    }

  export interface questsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['quests'], meta: { name: 'quests' } }
    /**
     * Find zero or one Quests that matches the filter.
     * @param {questsFindUniqueArgs} args - Arguments to find a Quests
     * @example
     * // Get one Quests
     * const quests = await prisma.quests.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends questsFindUniqueArgs>(args: SelectSubset<T, questsFindUniqueArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quests that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {questsFindUniqueOrThrowArgs} args - Arguments to find a Quests
     * @example
     * // Get one Quests
     * const quests = await prisma.quests.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends questsFindUniqueOrThrowArgs>(args: SelectSubset<T, questsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questsFindFirstArgs} args - Arguments to find a Quests
     * @example
     * // Get one Quests
     * const quests = await prisma.quests.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends questsFindFirstArgs>(args?: SelectSubset<T, questsFindFirstArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quests that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questsFindFirstOrThrowArgs} args - Arguments to find a Quests
     * @example
     * // Get one Quests
     * const quests = await prisma.quests.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends questsFindFirstOrThrowArgs>(args?: SelectSubset<T, questsFindFirstOrThrowArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quests
     * const quests = await prisma.quests.findMany()
     * 
     * // Get first 10 Quests
     * const quests = await prisma.quests.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questsWithIdOnly = await prisma.quests.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends questsFindManyArgs>(args?: SelectSubset<T, questsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quests.
     * @param {questsCreateArgs} args - Arguments to create a Quests.
     * @example
     * // Create one Quests
     * const Quests = await prisma.quests.create({
     *   data: {
     *     // ... data to create a Quests
     *   }
     * })
     * 
     */
    create<T extends questsCreateArgs>(args: SelectSubset<T, questsCreateArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quests.
     * @param {questsCreateManyArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quests = await prisma.quests.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends questsCreateManyArgs>(args?: SelectSubset<T, questsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quests and returns the data saved in the database.
     * @param {questsCreateManyAndReturnArgs} args - Arguments to create many Quests.
     * @example
     * // Create many Quests
     * const quests = await prisma.quests.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quests and only return the `id`
     * const questsWithIdOnly = await prisma.quests.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends questsCreateManyAndReturnArgs>(args?: SelectSubset<T, questsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quests.
     * @param {questsDeleteArgs} args - Arguments to delete one Quests.
     * @example
     * // Delete one Quests
     * const Quests = await prisma.quests.delete({
     *   where: {
     *     // ... filter to delete one Quests
     *   }
     * })
     * 
     */
    delete<T extends questsDeleteArgs>(args: SelectSubset<T, questsDeleteArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quests.
     * @param {questsUpdateArgs} args - Arguments to update one Quests.
     * @example
     * // Update one Quests
     * const quests = await prisma.quests.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends questsUpdateArgs>(args: SelectSubset<T, questsUpdateArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quests.
     * @param {questsDeleteManyArgs} args - Arguments to filter Quests to delete.
     * @example
     * // Delete a few Quests
     * const { count } = await prisma.quests.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends questsDeleteManyArgs>(args?: SelectSubset<T, questsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quests
     * const quests = await prisma.quests.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends questsUpdateManyArgs>(args: SelectSubset<T, questsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quests and returns the data updated in the database.
     * @param {questsUpdateManyAndReturnArgs} args - Arguments to update many Quests.
     * @example
     * // Update many Quests
     * const quests = await prisma.quests.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quests and only return the `id`
     * const questsWithIdOnly = await prisma.quests.updateManyAndReturn({
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
    updateManyAndReturn<T extends questsUpdateManyAndReturnArgs>(args: SelectSubset<T, questsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quests.
     * @param {questsUpsertArgs} args - Arguments to update or create a Quests.
     * @example
     * // Update or create a Quests
     * const quests = await prisma.quests.upsert({
     *   create: {
     *     // ... data to create a Quests
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quests we want to update
     *   }
     * })
     */
    upsert<T extends questsUpsertArgs>(args: SelectSubset<T, questsUpsertArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questsCountArgs} args - Arguments to filter Quests to count.
     * @example
     * // Count the number of Quests
     * const count = await prisma.quests.count({
     *   where: {
     *     // ... the filter for the Quests we want to count
     *   }
     * })
    **/
    count<T extends questsCountArgs>(
      args?: Subset<T, questsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestsAggregateArgs>(args: Subset<T, QuestsAggregateArgs>): Prisma.PrismaPromise<GetQuestsAggregateType<T>>

    /**
     * Group by Quests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {questsGroupByArgs} args - Group by arguments.
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
      T extends questsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: questsGroupByArgs['orderBy'] }
        : { orderBy?: questsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, questsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the quests model
   */
  readonly fields: questsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for quests.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__questsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quest_checkpoints<T extends quests$quest_checkpointsArgs<ExtArgs> = {}>(args?: Subset<T, quests$quest_checkpointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends quests$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, quests$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the quests model
   */
  interface questsFieldRefs {
    readonly id: FieldRef<"quests", 'Int'>
    readonly creator_id: FieldRef<"quests", 'Int'>
    readonly title: FieldRef<"quests", 'String'>
    readonly description: FieldRef<"quests", 'String'>
    readonly location_text: FieldRef<"quests", 'String'>
    readonly image: FieldRef<"quests", 'String'>
    readonly difficulty: FieldRef<"quests", 'Int'>
    readonly duration_minutes: FieldRef<"quests", 'Int'>
    readonly rules: FieldRef<"quests", 'String'>
    readonly status: FieldRef<"quests", 'String'>
    readonly is_hidden: FieldRef<"quests", 'Boolean'>
    readonly created_at: FieldRef<"quests", 'DateTime'>
    readonly updated_at: FieldRef<"quests", 'DateTime'>
    readonly rejection_reason: FieldRef<"quests", 'String'>
  }
    

  // Custom InputTypes
  /**
   * quests findUnique
   */
  export type questsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * Filter, which quests to fetch.
     */
    where: questsWhereUniqueInput
  }

  /**
   * quests findUniqueOrThrow
   */
  export type questsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * Filter, which quests to fetch.
     */
    where: questsWhereUniqueInput
  }

  /**
   * quests findFirst
   */
  export type questsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * Filter, which quests to fetch.
     */
    where?: questsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quests to fetch.
     */
    orderBy?: questsOrderByWithRelationInput | questsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quests.
     */
    cursor?: questsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quests.
     */
    distinct?: QuestsScalarFieldEnum | QuestsScalarFieldEnum[]
  }

  /**
   * quests findFirstOrThrow
   */
  export type questsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * Filter, which quests to fetch.
     */
    where?: questsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quests to fetch.
     */
    orderBy?: questsOrderByWithRelationInput | questsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quests.
     */
    cursor?: questsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quests.
     */
    distinct?: QuestsScalarFieldEnum | QuestsScalarFieldEnum[]
  }

  /**
   * quests findMany
   */
  export type questsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * Filter, which quests to fetch.
     */
    where?: questsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quests to fetch.
     */
    orderBy?: questsOrderByWithRelationInput | questsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing quests.
     */
    cursor?: questsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quests.
     */
    distinct?: QuestsScalarFieldEnum | QuestsScalarFieldEnum[]
  }

  /**
   * quests create
   */
  export type questsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * The data needed to create a quests.
     */
    data: XOR<questsCreateInput, questsUncheckedCreateInput>
  }

  /**
   * quests createMany
   */
  export type questsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many quests.
     */
    data: questsCreateManyInput | questsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * quests createManyAndReturn
   */
  export type questsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * The data used to create many quests.
     */
    data: questsCreateManyInput | questsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * quests update
   */
  export type questsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * The data needed to update a quests.
     */
    data: XOR<questsUpdateInput, questsUncheckedUpdateInput>
    /**
     * Choose, which quests to update.
     */
    where: questsWhereUniqueInput
  }

  /**
   * quests updateMany
   */
  export type questsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update quests.
     */
    data: XOR<questsUpdateManyMutationInput, questsUncheckedUpdateManyInput>
    /**
     * Filter which quests to update
     */
    where?: questsWhereInput
    /**
     * Limit how many quests to update.
     */
    limit?: number
  }

  /**
   * quests updateManyAndReturn
   */
  export type questsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * The data used to update quests.
     */
    data: XOR<questsUpdateManyMutationInput, questsUncheckedUpdateManyInput>
    /**
     * Filter which quests to update
     */
    where?: questsWhereInput
    /**
     * Limit how many quests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * quests upsert
   */
  export type questsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * The filter to search for the quests to update in case it exists.
     */
    where: questsWhereUniqueInput
    /**
     * In case the quests found by the `where` argument doesn't exist, create a new quests with this data.
     */
    create: XOR<questsCreateInput, questsUncheckedCreateInput>
    /**
     * In case the quests was found with the provided `where` argument, update it with this data.
     */
    update: XOR<questsUpdateInput, questsUncheckedUpdateInput>
  }

  /**
   * quests delete
   */
  export type questsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
    /**
     * Filter which quests to delete.
     */
    where: questsWhereUniqueInput
  }

  /**
   * quests deleteMany
   */
  export type questsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quests to delete
     */
    where?: questsWhereInput
    /**
     * Limit how many quests to delete.
     */
    limit?: number
  }

  /**
   * quests.quest_checkpoints
   */
  export type quests$quest_checkpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quest_checkpoints
     */
    select?: quest_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quest_checkpoints
     */
    omit?: quest_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quest_checkpointsInclude<ExtArgs> | null
    where?: quest_checkpointsWhereInput
    orderBy?: quest_checkpointsOrderByWithRelationInput | quest_checkpointsOrderByWithRelationInput[]
    cursor?: quest_checkpointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Quest_checkpointsScalarFieldEnum | Quest_checkpointsScalarFieldEnum[]
  }

  /**
   * quests.sessions
   */
  export type quests$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    cursor?: sessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * quests without action
   */
  export type questsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quests
     */
    select?: questsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quests
     */
    omit?: questsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: questsInclude<ExtArgs> | null
  }


  /**
   * Model quest_checkpoints
   */

  export type AggregateQuest_checkpoints = {
    _count: Quest_checkpointsCountAggregateOutputType | null
    _avg: Quest_checkpointsAvgAggregateOutputType | null
    _sum: Quest_checkpointsSumAggregateOutputType | null
    _min: Quest_checkpointsMinAggregateOutputType | null
    _max: Quest_checkpointsMaxAggregateOutputType | null
  }

  export type Quest_checkpointsAvgAggregateOutputType = {
    id: number | null
    quest_id: number | null
    order_index: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type Quest_checkpointsSumAggregateOutputType = {
    id: number | null
    quest_id: number | null
    order_index: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type Quest_checkpointsMinAggregateOutputType = {
    id: number | null
    quest_id: number | null
    order_index: number | null
    title: string | null
    task_description: string | null
    code_word: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    hint: string | null
    point_rules: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Quest_checkpointsMaxAggregateOutputType = {
    id: number | null
    quest_id: number | null
    order_index: number | null
    title: string | null
    task_description: string | null
    code_word: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    hint: string | null
    point_rules: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Quest_checkpointsCountAggregateOutputType = {
    id: number
    quest_id: number
    order_index: number
    title: number
    task_description: number
    code_word: number
    latitude: number
    longitude: number
    hint: number
    point_rules: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Quest_checkpointsAvgAggregateInputType = {
    id?: true
    quest_id?: true
    order_index?: true
    latitude?: true
    longitude?: true
  }

  export type Quest_checkpointsSumAggregateInputType = {
    id?: true
    quest_id?: true
    order_index?: true
    latitude?: true
    longitude?: true
  }

  export type Quest_checkpointsMinAggregateInputType = {
    id?: true
    quest_id?: true
    order_index?: true
    title?: true
    task_description?: true
    code_word?: true
    latitude?: true
    longitude?: true
    hint?: true
    point_rules?: true
    created_at?: true
    updated_at?: true
  }

  export type Quest_checkpointsMaxAggregateInputType = {
    id?: true
    quest_id?: true
    order_index?: true
    title?: true
    task_description?: true
    code_word?: true
    latitude?: true
    longitude?: true
    hint?: true
    point_rules?: true
    created_at?: true
    updated_at?: true
  }

  export type Quest_checkpointsCountAggregateInputType = {
    id?: true
    quest_id?: true
    order_index?: true
    title?: true
    task_description?: true
    code_word?: true
    latitude?: true
    longitude?: true
    hint?: true
    point_rules?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Quest_checkpointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quest_checkpoints to aggregate.
     */
    where?: quest_checkpointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quest_checkpoints to fetch.
     */
    orderBy?: quest_checkpointsOrderByWithRelationInput | quest_checkpointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: quest_checkpointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quest_checkpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quest_checkpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned quest_checkpoints
    **/
    _count?: true | Quest_checkpointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Quest_checkpointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Quest_checkpointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Quest_checkpointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Quest_checkpointsMaxAggregateInputType
  }

  export type GetQuest_checkpointsAggregateType<T extends Quest_checkpointsAggregateArgs> = {
        [P in keyof T & keyof AggregateQuest_checkpoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuest_checkpoints[P]>
      : GetScalarType<T[P], AggregateQuest_checkpoints[P]>
  }




  export type quest_checkpointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: quest_checkpointsWhereInput
    orderBy?: quest_checkpointsOrderByWithAggregationInput | quest_checkpointsOrderByWithAggregationInput[]
    by: Quest_checkpointsScalarFieldEnum[] | Quest_checkpointsScalarFieldEnum
    having?: quest_checkpointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Quest_checkpointsCountAggregateInputType | true
    _avg?: Quest_checkpointsAvgAggregateInputType
    _sum?: Quest_checkpointsSumAggregateInputType
    _min?: Quest_checkpointsMinAggregateInputType
    _max?: Quest_checkpointsMaxAggregateInputType
  }

  export type Quest_checkpointsGroupByOutputType = {
    id: number
    quest_id: number
    order_index: number
    title: string
    task_description: string
    code_word: string
    latitude: Decimal
    longitude: Decimal
    hint: string | null
    point_rules: string | null
    created_at: Date
    updated_at: Date
    _count: Quest_checkpointsCountAggregateOutputType | null
    _avg: Quest_checkpointsAvgAggregateOutputType | null
    _sum: Quest_checkpointsSumAggregateOutputType | null
    _min: Quest_checkpointsMinAggregateOutputType | null
    _max: Quest_checkpointsMaxAggregateOutputType | null
  }

  type GetQuest_checkpointsGroupByPayload<T extends quest_checkpointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Quest_checkpointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Quest_checkpointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Quest_checkpointsGroupByOutputType[P]>
            : GetScalarType<T[P], Quest_checkpointsGroupByOutputType[P]>
        }
      >
    >


  export type quest_checkpointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quest_id?: boolean
    order_index?: boolean
    title?: boolean
    task_description?: boolean
    code_word?: boolean
    latitude?: boolean
    longitude?: boolean
    hint?: boolean
    point_rules?: boolean
    created_at?: boolean
    updated_at?: boolean
    checkpoint_tasks?: boolean | quest_checkpoints$checkpoint_tasksArgs<ExtArgs>
    quests?: boolean | questsDefaultArgs<ExtArgs>
    session_answers?: boolean | quest_checkpoints$session_answersArgs<ExtArgs>
    session_checkpoints?: boolean | quest_checkpoints$session_checkpointsArgs<ExtArgs>
    _count?: boolean | Quest_checkpointsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quest_checkpoints"]>

  export type quest_checkpointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quest_id?: boolean
    order_index?: boolean
    title?: boolean
    task_description?: boolean
    code_word?: boolean
    latitude?: boolean
    longitude?: boolean
    hint?: boolean
    point_rules?: boolean
    created_at?: boolean
    updated_at?: boolean
    quests?: boolean | questsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quest_checkpoints"]>

  export type quest_checkpointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quest_id?: boolean
    order_index?: boolean
    title?: boolean
    task_description?: boolean
    code_word?: boolean
    latitude?: boolean
    longitude?: boolean
    hint?: boolean
    point_rules?: boolean
    created_at?: boolean
    updated_at?: boolean
    quests?: boolean | questsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["quest_checkpoints"]>

  export type quest_checkpointsSelectScalar = {
    id?: boolean
    quest_id?: boolean
    order_index?: boolean
    title?: boolean
    task_description?: boolean
    code_word?: boolean
    latitude?: boolean
    longitude?: boolean
    hint?: boolean
    point_rules?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type quest_checkpointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quest_id" | "order_index" | "title" | "task_description" | "code_word" | "latitude" | "longitude" | "hint" | "point_rules" | "created_at" | "updated_at", ExtArgs["result"]["quest_checkpoints"]>
  export type quest_checkpointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkpoint_tasks?: boolean | quest_checkpoints$checkpoint_tasksArgs<ExtArgs>
    quests?: boolean | questsDefaultArgs<ExtArgs>
    session_answers?: boolean | quest_checkpoints$session_answersArgs<ExtArgs>
    session_checkpoints?: boolean | quest_checkpoints$session_checkpointsArgs<ExtArgs>
    _count?: boolean | Quest_checkpointsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type quest_checkpointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quests?: boolean | questsDefaultArgs<ExtArgs>
  }
  export type quest_checkpointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quests?: boolean | questsDefaultArgs<ExtArgs>
  }

  export type $quest_checkpointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "quest_checkpoints"
    objects: {
      checkpoint_tasks: Prisma.$checkpoint_tasksPayload<ExtArgs>[]
      quests: Prisma.$questsPayload<ExtArgs>
      session_answers: Prisma.$session_answersPayload<ExtArgs>[]
      session_checkpoints: Prisma.$session_checkpointsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quest_id: number
      order_index: number
      title: string
      task_description: string
      code_word: string
      latitude: Prisma.Decimal
      longitude: Prisma.Decimal
      hint: string | null
      point_rules: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["quest_checkpoints"]>
    composites: {}
  }

  type quest_checkpointsGetPayload<S extends boolean | null | undefined | quest_checkpointsDefaultArgs> = $Result.GetResult<Prisma.$quest_checkpointsPayload, S>

  type quest_checkpointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<quest_checkpointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Quest_checkpointsCountAggregateInputType | true
    }

  export interface quest_checkpointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['quest_checkpoints'], meta: { name: 'quest_checkpoints' } }
    /**
     * Find zero or one Quest_checkpoints that matches the filter.
     * @param {quest_checkpointsFindUniqueArgs} args - Arguments to find a Quest_checkpoints
     * @example
     * // Get one Quest_checkpoints
     * const quest_checkpoints = await prisma.quest_checkpoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends quest_checkpointsFindUniqueArgs>(args: SelectSubset<T, quest_checkpointsFindUniqueArgs<ExtArgs>>): Prisma__quest_checkpointsClient<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Quest_checkpoints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {quest_checkpointsFindUniqueOrThrowArgs} args - Arguments to find a Quest_checkpoints
     * @example
     * // Get one Quest_checkpoints
     * const quest_checkpoints = await prisma.quest_checkpoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends quest_checkpointsFindUniqueOrThrowArgs>(args: SelectSubset<T, quest_checkpointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__quest_checkpointsClient<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quest_checkpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quest_checkpointsFindFirstArgs} args - Arguments to find a Quest_checkpoints
     * @example
     * // Get one Quest_checkpoints
     * const quest_checkpoints = await prisma.quest_checkpoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends quest_checkpointsFindFirstArgs>(args?: SelectSubset<T, quest_checkpointsFindFirstArgs<ExtArgs>>): Prisma__quest_checkpointsClient<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Quest_checkpoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quest_checkpointsFindFirstOrThrowArgs} args - Arguments to find a Quest_checkpoints
     * @example
     * // Get one Quest_checkpoints
     * const quest_checkpoints = await prisma.quest_checkpoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends quest_checkpointsFindFirstOrThrowArgs>(args?: SelectSubset<T, quest_checkpointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__quest_checkpointsClient<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Quest_checkpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quest_checkpointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Quest_checkpoints
     * const quest_checkpoints = await prisma.quest_checkpoints.findMany()
     * 
     * // Get first 10 Quest_checkpoints
     * const quest_checkpoints = await prisma.quest_checkpoints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const quest_checkpointsWithIdOnly = await prisma.quest_checkpoints.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends quest_checkpointsFindManyArgs>(args?: SelectSubset<T, quest_checkpointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Quest_checkpoints.
     * @param {quest_checkpointsCreateArgs} args - Arguments to create a Quest_checkpoints.
     * @example
     * // Create one Quest_checkpoints
     * const Quest_checkpoints = await prisma.quest_checkpoints.create({
     *   data: {
     *     // ... data to create a Quest_checkpoints
     *   }
     * })
     * 
     */
    create<T extends quest_checkpointsCreateArgs>(args: SelectSubset<T, quest_checkpointsCreateArgs<ExtArgs>>): Prisma__quest_checkpointsClient<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Quest_checkpoints.
     * @param {quest_checkpointsCreateManyArgs} args - Arguments to create many Quest_checkpoints.
     * @example
     * // Create many Quest_checkpoints
     * const quest_checkpoints = await prisma.quest_checkpoints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends quest_checkpointsCreateManyArgs>(args?: SelectSubset<T, quest_checkpointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Quest_checkpoints and returns the data saved in the database.
     * @param {quest_checkpointsCreateManyAndReturnArgs} args - Arguments to create many Quest_checkpoints.
     * @example
     * // Create many Quest_checkpoints
     * const quest_checkpoints = await prisma.quest_checkpoints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Quest_checkpoints and only return the `id`
     * const quest_checkpointsWithIdOnly = await prisma.quest_checkpoints.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends quest_checkpointsCreateManyAndReturnArgs>(args?: SelectSubset<T, quest_checkpointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Quest_checkpoints.
     * @param {quest_checkpointsDeleteArgs} args - Arguments to delete one Quest_checkpoints.
     * @example
     * // Delete one Quest_checkpoints
     * const Quest_checkpoints = await prisma.quest_checkpoints.delete({
     *   where: {
     *     // ... filter to delete one Quest_checkpoints
     *   }
     * })
     * 
     */
    delete<T extends quest_checkpointsDeleteArgs>(args: SelectSubset<T, quest_checkpointsDeleteArgs<ExtArgs>>): Prisma__quest_checkpointsClient<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Quest_checkpoints.
     * @param {quest_checkpointsUpdateArgs} args - Arguments to update one Quest_checkpoints.
     * @example
     * // Update one Quest_checkpoints
     * const quest_checkpoints = await prisma.quest_checkpoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends quest_checkpointsUpdateArgs>(args: SelectSubset<T, quest_checkpointsUpdateArgs<ExtArgs>>): Prisma__quest_checkpointsClient<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Quest_checkpoints.
     * @param {quest_checkpointsDeleteManyArgs} args - Arguments to filter Quest_checkpoints to delete.
     * @example
     * // Delete a few Quest_checkpoints
     * const { count } = await prisma.quest_checkpoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends quest_checkpointsDeleteManyArgs>(args?: SelectSubset<T, quest_checkpointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quest_checkpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quest_checkpointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Quest_checkpoints
     * const quest_checkpoints = await prisma.quest_checkpoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends quest_checkpointsUpdateManyArgs>(args: SelectSubset<T, quest_checkpointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Quest_checkpoints and returns the data updated in the database.
     * @param {quest_checkpointsUpdateManyAndReturnArgs} args - Arguments to update many Quest_checkpoints.
     * @example
     * // Update many Quest_checkpoints
     * const quest_checkpoints = await prisma.quest_checkpoints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Quest_checkpoints and only return the `id`
     * const quest_checkpointsWithIdOnly = await prisma.quest_checkpoints.updateManyAndReturn({
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
    updateManyAndReturn<T extends quest_checkpointsUpdateManyAndReturnArgs>(args: SelectSubset<T, quest_checkpointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Quest_checkpoints.
     * @param {quest_checkpointsUpsertArgs} args - Arguments to update or create a Quest_checkpoints.
     * @example
     * // Update or create a Quest_checkpoints
     * const quest_checkpoints = await prisma.quest_checkpoints.upsert({
     *   create: {
     *     // ... data to create a Quest_checkpoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Quest_checkpoints we want to update
     *   }
     * })
     */
    upsert<T extends quest_checkpointsUpsertArgs>(args: SelectSubset<T, quest_checkpointsUpsertArgs<ExtArgs>>): Prisma__quest_checkpointsClient<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Quest_checkpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quest_checkpointsCountArgs} args - Arguments to filter Quest_checkpoints to count.
     * @example
     * // Count the number of Quest_checkpoints
     * const count = await prisma.quest_checkpoints.count({
     *   where: {
     *     // ... the filter for the Quest_checkpoints we want to count
     *   }
     * })
    **/
    count<T extends quest_checkpointsCountArgs>(
      args?: Subset<T, quest_checkpointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Quest_checkpointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Quest_checkpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Quest_checkpointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Quest_checkpointsAggregateArgs>(args: Subset<T, Quest_checkpointsAggregateArgs>): Prisma.PrismaPromise<GetQuest_checkpointsAggregateType<T>>

    /**
     * Group by Quest_checkpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {quest_checkpointsGroupByArgs} args - Group by arguments.
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
      T extends quest_checkpointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: quest_checkpointsGroupByArgs['orderBy'] }
        : { orderBy?: quest_checkpointsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, quest_checkpointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuest_checkpointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the quest_checkpoints model
   */
  readonly fields: quest_checkpointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for quest_checkpoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__quest_checkpointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    checkpoint_tasks<T extends quest_checkpoints$checkpoint_tasksArgs<ExtArgs> = {}>(args?: Subset<T, quest_checkpoints$checkpoint_tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quests<T extends questsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questsDefaultArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session_answers<T extends quest_checkpoints$session_answersArgs<ExtArgs> = {}>(args?: Subset<T, quest_checkpoints$session_answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session_checkpoints<T extends quest_checkpoints$session_checkpointsArgs<ExtArgs> = {}>(args?: Subset<T, quest_checkpoints$session_checkpointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_checkpointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the quest_checkpoints model
   */
  interface quest_checkpointsFieldRefs {
    readonly id: FieldRef<"quest_checkpoints", 'Int'>
    readonly quest_id: FieldRef<"quest_checkpoints", 'Int'>
    readonly order_index: FieldRef<"quest_checkpoints", 'Int'>
    readonly title: FieldRef<"quest_checkpoints", 'String'>
    readonly task_description: FieldRef<"quest_checkpoints", 'String'>
    readonly code_word: FieldRef<"quest_checkpoints", 'String'>
    readonly latitude: FieldRef<"quest_checkpoints", 'Decimal'>
    readonly longitude: FieldRef<"quest_checkpoints", 'Decimal'>
    readonly hint: FieldRef<"quest_checkpoints", 'String'>
    readonly point_rules: FieldRef<"quest_checkpoints", 'String'>
    readonly created_at: FieldRef<"quest_checkpoints", 'DateTime'>
    readonly updated_at: FieldRef<"quest_checkpoints", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * quest_checkpoints findUnique
   */
  export type quest_checkpointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quest_checkpoints
     */
    select?: quest_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quest_checkpoints
     */
    omit?: quest_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quest_checkpointsInclude<ExtArgs> | null
    /**
     * Filter, which quest_checkpoints to fetch.
     */
    where: quest_checkpointsWhereUniqueInput
  }

  /**
   * quest_checkpoints findUniqueOrThrow
   */
  export type quest_checkpointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quest_checkpoints
     */
    select?: quest_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quest_checkpoints
     */
    omit?: quest_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quest_checkpointsInclude<ExtArgs> | null
    /**
     * Filter, which quest_checkpoints to fetch.
     */
    where: quest_checkpointsWhereUniqueInput
  }

  /**
   * quest_checkpoints findFirst
   */
  export type quest_checkpointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quest_checkpoints
     */
    select?: quest_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quest_checkpoints
     */
    omit?: quest_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quest_checkpointsInclude<ExtArgs> | null
    /**
     * Filter, which quest_checkpoints to fetch.
     */
    where?: quest_checkpointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quest_checkpoints to fetch.
     */
    orderBy?: quest_checkpointsOrderByWithRelationInput | quest_checkpointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quest_checkpoints.
     */
    cursor?: quest_checkpointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quest_checkpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quest_checkpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quest_checkpoints.
     */
    distinct?: Quest_checkpointsScalarFieldEnum | Quest_checkpointsScalarFieldEnum[]
  }

  /**
   * quest_checkpoints findFirstOrThrow
   */
  export type quest_checkpointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quest_checkpoints
     */
    select?: quest_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quest_checkpoints
     */
    omit?: quest_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quest_checkpointsInclude<ExtArgs> | null
    /**
     * Filter, which quest_checkpoints to fetch.
     */
    where?: quest_checkpointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quest_checkpoints to fetch.
     */
    orderBy?: quest_checkpointsOrderByWithRelationInput | quest_checkpointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for quest_checkpoints.
     */
    cursor?: quest_checkpointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quest_checkpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quest_checkpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quest_checkpoints.
     */
    distinct?: Quest_checkpointsScalarFieldEnum | Quest_checkpointsScalarFieldEnum[]
  }

  /**
   * quest_checkpoints findMany
   */
  export type quest_checkpointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quest_checkpoints
     */
    select?: quest_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quest_checkpoints
     */
    omit?: quest_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quest_checkpointsInclude<ExtArgs> | null
    /**
     * Filter, which quest_checkpoints to fetch.
     */
    where?: quest_checkpointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of quest_checkpoints to fetch.
     */
    orderBy?: quest_checkpointsOrderByWithRelationInput | quest_checkpointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing quest_checkpoints.
     */
    cursor?: quest_checkpointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` quest_checkpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` quest_checkpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of quest_checkpoints.
     */
    distinct?: Quest_checkpointsScalarFieldEnum | Quest_checkpointsScalarFieldEnum[]
  }

  /**
   * quest_checkpoints create
   */
  export type quest_checkpointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quest_checkpoints
     */
    select?: quest_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quest_checkpoints
     */
    omit?: quest_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quest_checkpointsInclude<ExtArgs> | null
    /**
     * The data needed to create a quest_checkpoints.
     */
    data: XOR<quest_checkpointsCreateInput, quest_checkpointsUncheckedCreateInput>
  }

  /**
   * quest_checkpoints createMany
   */
  export type quest_checkpointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many quest_checkpoints.
     */
    data: quest_checkpointsCreateManyInput | quest_checkpointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * quest_checkpoints createManyAndReturn
   */
  export type quest_checkpointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quest_checkpoints
     */
    select?: quest_checkpointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the quest_checkpoints
     */
    omit?: quest_checkpointsOmit<ExtArgs> | null
    /**
     * The data used to create many quest_checkpoints.
     */
    data: quest_checkpointsCreateManyInput | quest_checkpointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quest_checkpointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * quest_checkpoints update
   */
  export type quest_checkpointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quest_checkpoints
     */
    select?: quest_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quest_checkpoints
     */
    omit?: quest_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quest_checkpointsInclude<ExtArgs> | null
    /**
     * The data needed to update a quest_checkpoints.
     */
    data: XOR<quest_checkpointsUpdateInput, quest_checkpointsUncheckedUpdateInput>
    /**
     * Choose, which quest_checkpoints to update.
     */
    where: quest_checkpointsWhereUniqueInput
  }

  /**
   * quest_checkpoints updateMany
   */
  export type quest_checkpointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update quest_checkpoints.
     */
    data: XOR<quest_checkpointsUpdateManyMutationInput, quest_checkpointsUncheckedUpdateManyInput>
    /**
     * Filter which quest_checkpoints to update
     */
    where?: quest_checkpointsWhereInput
    /**
     * Limit how many quest_checkpoints to update.
     */
    limit?: number
  }

  /**
   * quest_checkpoints updateManyAndReturn
   */
  export type quest_checkpointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quest_checkpoints
     */
    select?: quest_checkpointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the quest_checkpoints
     */
    omit?: quest_checkpointsOmit<ExtArgs> | null
    /**
     * The data used to update quest_checkpoints.
     */
    data: XOR<quest_checkpointsUpdateManyMutationInput, quest_checkpointsUncheckedUpdateManyInput>
    /**
     * Filter which quest_checkpoints to update
     */
    where?: quest_checkpointsWhereInput
    /**
     * Limit how many quest_checkpoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quest_checkpointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * quest_checkpoints upsert
   */
  export type quest_checkpointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quest_checkpoints
     */
    select?: quest_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quest_checkpoints
     */
    omit?: quest_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quest_checkpointsInclude<ExtArgs> | null
    /**
     * The filter to search for the quest_checkpoints to update in case it exists.
     */
    where: quest_checkpointsWhereUniqueInput
    /**
     * In case the quest_checkpoints found by the `where` argument doesn't exist, create a new quest_checkpoints with this data.
     */
    create: XOR<quest_checkpointsCreateInput, quest_checkpointsUncheckedCreateInput>
    /**
     * In case the quest_checkpoints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<quest_checkpointsUpdateInput, quest_checkpointsUncheckedUpdateInput>
  }

  /**
   * quest_checkpoints delete
   */
  export type quest_checkpointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quest_checkpoints
     */
    select?: quest_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quest_checkpoints
     */
    omit?: quest_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quest_checkpointsInclude<ExtArgs> | null
    /**
     * Filter which quest_checkpoints to delete.
     */
    where: quest_checkpointsWhereUniqueInput
  }

  /**
   * quest_checkpoints deleteMany
   */
  export type quest_checkpointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which quest_checkpoints to delete
     */
    where?: quest_checkpointsWhereInput
    /**
     * Limit how many quest_checkpoints to delete.
     */
    limit?: number
  }

  /**
   * quest_checkpoints.checkpoint_tasks
   */
  export type quest_checkpoints$checkpoint_tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkpoint_tasks
     */
    select?: checkpoint_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkpoint_tasks
     */
    omit?: checkpoint_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkpoint_tasksInclude<ExtArgs> | null
    where?: checkpoint_tasksWhereInput
    orderBy?: checkpoint_tasksOrderByWithRelationInput | checkpoint_tasksOrderByWithRelationInput[]
    cursor?: checkpoint_tasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Checkpoint_tasksScalarFieldEnum | Checkpoint_tasksScalarFieldEnum[]
  }

  /**
   * quest_checkpoints.session_answers
   */
  export type quest_checkpoints$session_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
    where?: session_answersWhereInput
    orderBy?: session_answersOrderByWithRelationInput | session_answersOrderByWithRelationInput[]
    cursor?: session_answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Session_answersScalarFieldEnum | Session_answersScalarFieldEnum[]
  }

  /**
   * quest_checkpoints.session_checkpoints
   */
  export type quest_checkpoints$session_checkpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsInclude<ExtArgs> | null
    where?: session_checkpointsWhereInput
    orderBy?: session_checkpointsOrderByWithRelationInput | session_checkpointsOrderByWithRelationInput[]
    cursor?: session_checkpointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Session_checkpointsScalarFieldEnum | Session_checkpointsScalarFieldEnum[]
  }

  /**
   * quest_checkpoints without action
   */
  export type quest_checkpointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the quest_checkpoints
     */
    select?: quest_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the quest_checkpoints
     */
    omit?: quest_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: quest_checkpointsInclude<ExtArgs> | null
  }


  /**
   * Model sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    id: number | null
    quest_id: number | null
    user_id: number | null
    team_id: number | null
    current_checkpoint_order: number | null
  }

  export type SessionsSumAggregateOutputType = {
    id: number | null
    quest_id: number | null
    user_id: number | null
    team_id: number | null
    current_checkpoint_order: number | null
  }

  export type SessionsMinAggregateOutputType = {
    id: number | null
    quest_id: number | null
    user_id: number | null
    team_id: number | null
    status: string | null
    transport_mode: string | null
    started_at: Date | null
    finished_at: Date | null
    current_checkpoint_order: number | null
  }

  export type SessionsMaxAggregateOutputType = {
    id: number | null
    quest_id: number | null
    user_id: number | null
    team_id: number | null
    status: string | null
    transport_mode: string | null
    started_at: Date | null
    finished_at: Date | null
    current_checkpoint_order: number | null
  }

  export type SessionsCountAggregateOutputType = {
    id: number
    quest_id: number
    user_id: number
    team_id: number
    status: number
    transport_mode: number
    started_at: number
    finished_at: number
    current_checkpoint_order: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    id?: true
    quest_id?: true
    user_id?: true
    team_id?: true
    current_checkpoint_order?: true
  }

  export type SessionsSumAggregateInputType = {
    id?: true
    quest_id?: true
    user_id?: true
    team_id?: true
    current_checkpoint_order?: true
  }

  export type SessionsMinAggregateInputType = {
    id?: true
    quest_id?: true
    user_id?: true
    team_id?: true
    status?: true
    transport_mode?: true
    started_at?: true
    finished_at?: true
    current_checkpoint_order?: true
  }

  export type SessionsMaxAggregateInputType = {
    id?: true
    quest_id?: true
    user_id?: true
    team_id?: true
    status?: true
    transport_mode?: true
    started_at?: true
    finished_at?: true
    current_checkpoint_order?: true
  }

  export type SessionsCountAggregateInputType = {
    id?: true
    quest_id?: true
    user_id?: true
    team_id?: true
    status?: true
    transport_mode?: true
    started_at?: true
    finished_at?: true
    current_checkpoint_order?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to aggregate.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sessionsWhereInput
    orderBy?: sessionsOrderByWithAggregationInput | sessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    id: number
    quest_id: number
    user_id: number | null
    team_id: number | null
    status: string
    transport_mode: string | null
    started_at: Date
    finished_at: Date | null
    current_checkpoint_order: number | null
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quest_id?: boolean
    user_id?: boolean
    team_id?: boolean
    status?: boolean
    transport_mode?: boolean
    started_at?: boolean
    finished_at?: boolean
    current_checkpoint_order?: boolean
    session_answers?: boolean | sessions$session_answersArgs<ExtArgs>
    session_checkpoints?: boolean | sessions$session_checkpointsArgs<ExtArgs>
    quests?: boolean | questsDefaultArgs<ExtArgs>
    teams?: boolean | sessions$teamsArgs<ExtArgs>
    users?: boolean | sessions$usersArgs<ExtArgs>
    _count?: boolean | SessionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quest_id?: boolean
    user_id?: boolean
    team_id?: boolean
    status?: boolean
    transport_mode?: boolean
    started_at?: boolean
    finished_at?: boolean
    current_checkpoint_order?: boolean
    quests?: boolean | questsDefaultArgs<ExtArgs>
    teams?: boolean | sessions$teamsArgs<ExtArgs>
    users?: boolean | sessions$usersArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quest_id?: boolean
    user_id?: boolean
    team_id?: boolean
    status?: boolean
    transport_mode?: boolean
    started_at?: boolean
    finished_at?: boolean
    current_checkpoint_order?: boolean
    quests?: boolean | questsDefaultArgs<ExtArgs>
    teams?: boolean | sessions$teamsArgs<ExtArgs>
    users?: boolean | sessions$usersArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type sessionsSelectScalar = {
    id?: boolean
    quest_id?: boolean
    user_id?: boolean
    team_id?: boolean
    status?: boolean
    transport_mode?: boolean
    started_at?: boolean
    finished_at?: boolean
    current_checkpoint_order?: boolean
  }

  export type sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quest_id" | "user_id" | "team_id" | "status" | "transport_mode" | "started_at" | "finished_at" | "current_checkpoint_order", ExtArgs["result"]["sessions"]>
  export type sessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session_answers?: boolean | sessions$session_answersArgs<ExtArgs>
    session_checkpoints?: boolean | sessions$session_checkpointsArgs<ExtArgs>
    quests?: boolean | questsDefaultArgs<ExtArgs>
    teams?: boolean | sessions$teamsArgs<ExtArgs>
    users?: boolean | sessions$usersArgs<ExtArgs>
    _count?: boolean | SessionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type sessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quests?: boolean | questsDefaultArgs<ExtArgs>
    teams?: boolean | sessions$teamsArgs<ExtArgs>
    users?: boolean | sessions$usersArgs<ExtArgs>
  }
  export type sessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quests?: boolean | questsDefaultArgs<ExtArgs>
    teams?: boolean | sessions$teamsArgs<ExtArgs>
    users?: boolean | sessions$usersArgs<ExtArgs>
  }

  export type $sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sessions"
    objects: {
      session_answers: Prisma.$session_answersPayload<ExtArgs>[]
      session_checkpoints: Prisma.$session_checkpointsPayload<ExtArgs>[]
      quests: Prisma.$questsPayload<ExtArgs>
      teams: Prisma.$teamsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quest_id: number
      user_id: number | null
      team_id: number | null
      status: string
      transport_mode: string | null
      started_at: Date
      finished_at: Date | null
      current_checkpoint_order: number | null
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type sessionsGetPayload<S extends boolean | null | undefined | sessionsDefaultArgs> = $Result.GetResult<Prisma.$sessionsPayload, S>

  type sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sessions'], meta: { name: 'sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {sessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sessionsFindUniqueArgs>(args: SelectSubset<T, sessionsFindUniqueArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sessionsFindFirstArgs>(args?: SelectSubset<T, sessionsFindFirstArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionsWithIdOnly = await prisma.sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sessionsFindManyArgs>(args?: SelectSubset<T, sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {sessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends sessionsCreateArgs>(args: SelectSubset<T, sessionsCreateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {sessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sessionsCreateManyArgs>(args?: SelectSubset<T, sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {sessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {sessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends sessionsDeleteArgs>(args: SelectSubset<T, sessionsDeleteArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {sessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sessionsUpdateArgs>(args: SelectSubset<T, sessionsUpdateArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {sessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sessionsDeleteManyArgs>(args?: SelectSubset<T, sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sessionsUpdateManyArgs>(args: SelectSubset<T, sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {sessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionsWithIdOnly = await prisma.sessions.updateManyAndReturn({
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
    updateManyAndReturn<T extends sessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {sessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends sessionsUpsertArgs>(args: SelectSubset<T, sessionsUpsertArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends sessionsCountArgs>(
      args?: Subset<T, sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sessionsGroupByArgs} args - Group by arguments.
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
      T extends sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sessionsGroupByArgs['orderBy'] }
        : { orderBy?: sessionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sessions model
   */
  readonly fields: sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session_answers<T extends sessions$session_answersArgs<ExtArgs> = {}>(args?: Subset<T, sessions$session_answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    session_checkpoints<T extends sessions$session_checkpointsArgs<ExtArgs> = {}>(args?: Subset<T, sessions$session_checkpointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_checkpointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    quests<T extends questsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, questsDefaultArgs<ExtArgs>>): Prisma__questsClient<$Result.GetResult<Prisma.$questsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teams<T extends sessions$teamsArgs<ExtArgs> = {}>(args?: Subset<T, sessions$teamsArgs<ExtArgs>>): Prisma__teamsClient<$Result.GetResult<Prisma.$teamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends sessions$usersArgs<ExtArgs> = {}>(args?: Subset<T, sessions$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the sessions model
   */
  interface sessionsFieldRefs {
    readonly id: FieldRef<"sessions", 'Int'>
    readonly quest_id: FieldRef<"sessions", 'Int'>
    readonly user_id: FieldRef<"sessions", 'Int'>
    readonly team_id: FieldRef<"sessions", 'Int'>
    readonly status: FieldRef<"sessions", 'String'>
    readonly transport_mode: FieldRef<"sessions", 'String'>
    readonly started_at: FieldRef<"sessions", 'DateTime'>
    readonly finished_at: FieldRef<"sessions", 'DateTime'>
    readonly current_checkpoint_order: FieldRef<"sessions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * sessions findUnique
   */
  export type sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findUniqueOrThrow
   */
  export type sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions findFirst
   */
  export type sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findFirstOrThrow
   */
  export type sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions findMany
   */
  export type sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter, which sessions to fetch.
     */
    where?: sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sessions to fetch.
     */
    orderBy?: sessionsOrderByWithRelationInput | sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sessions.
     */
    cursor?: sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * sessions create
   */
  export type sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a sessions.
     */
    data: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
  }

  /**
   * sessions createMany
   */
  export type sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sessions createManyAndReturn
   */
  export type sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many sessions.
     */
    data: sessionsCreateManyInput | sessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * sessions update
   */
  export type sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a sessions.
     */
    data: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
    /**
     * Choose, which sessions to update.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions updateMany
   */
  export type sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
  }

  /**
   * sessions updateManyAndReturn
   */
  export type sessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * The data used to update sessions.
     */
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyInput>
    /**
     * Filter which sessions to update
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * sessions upsert
   */
  export type sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the sessions to update in case it exists.
     */
    where: sessionsWhereUniqueInput
    /**
     * In case the sessions found by the `where` argument doesn't exist, create a new sessions with this data.
     */
    create: XOR<sessionsCreateInput, sessionsUncheckedCreateInput>
    /**
     * In case the sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sessionsUpdateInput, sessionsUncheckedUpdateInput>
  }

  /**
   * sessions delete
   */
  export type sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
    /**
     * Filter which sessions to delete.
     */
    where: sessionsWhereUniqueInput
  }

  /**
   * sessions deleteMany
   */
  export type sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sessions to delete
     */
    where?: sessionsWhereInput
    /**
     * Limit how many sessions to delete.
     */
    limit?: number
  }

  /**
   * sessions.session_answers
   */
  export type sessions$session_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
    where?: session_answersWhereInput
    orderBy?: session_answersOrderByWithRelationInput | session_answersOrderByWithRelationInput[]
    cursor?: session_answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Session_answersScalarFieldEnum | Session_answersScalarFieldEnum[]
  }

  /**
   * sessions.session_checkpoints
   */
  export type sessions$session_checkpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsInclude<ExtArgs> | null
    where?: session_checkpointsWhereInput
    orderBy?: session_checkpointsOrderByWithRelationInput | session_checkpointsOrderByWithRelationInput[]
    cursor?: session_checkpointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Session_checkpointsScalarFieldEnum | Session_checkpointsScalarFieldEnum[]
  }

  /**
   * sessions.teams
   */
  export type sessions$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * sessions.users
   */
  export type sessions$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: usersWhereInput
  }

  /**
   * sessions without action
   */
  export type sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sessions
     */
    select?: sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sessions
     */
    omit?: sessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: sessionsInclude<ExtArgs> | null
  }


  /**
   * Model checkpoint_tasks
   */

  export type AggregateCheckpoint_tasks = {
    _count: Checkpoint_tasksCountAggregateOutputType | null
    _avg: Checkpoint_tasksAvgAggregateOutputType | null
    _sum: Checkpoint_tasksSumAggregateOutputType | null
    _min: Checkpoint_tasksMinAggregateOutputType | null
    _max: Checkpoint_tasksMaxAggregateOutputType | null
  }

  export type Checkpoint_tasksAvgAggregateOutputType = {
    id: number | null
    checkpoint_id: number | null
  }

  export type Checkpoint_tasksSumAggregateOutputType = {
    id: number | null
    checkpoint_id: number | null
  }

  export type Checkpoint_tasksMinAggregateOutputType = {
    id: number | null
    checkpoint_id: number | null
    task_type: string | null
    question_text: string | null
    correct_answer: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Checkpoint_tasksMaxAggregateOutputType = {
    id: number | null
    checkpoint_id: number | null
    task_type: string | null
    question_text: string | null
    correct_answer: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Checkpoint_tasksCountAggregateOutputType = {
    id: number
    checkpoint_id: number
    task_type: number
    question_text: number
    correct_answer: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Checkpoint_tasksAvgAggregateInputType = {
    id?: true
    checkpoint_id?: true
  }

  export type Checkpoint_tasksSumAggregateInputType = {
    id?: true
    checkpoint_id?: true
  }

  export type Checkpoint_tasksMinAggregateInputType = {
    id?: true
    checkpoint_id?: true
    task_type?: true
    question_text?: true
    correct_answer?: true
    created_at?: true
    updated_at?: true
  }

  export type Checkpoint_tasksMaxAggregateInputType = {
    id?: true
    checkpoint_id?: true
    task_type?: true
    question_text?: true
    correct_answer?: true
    created_at?: true
    updated_at?: true
  }

  export type Checkpoint_tasksCountAggregateInputType = {
    id?: true
    checkpoint_id?: true
    task_type?: true
    question_text?: true
    correct_answer?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Checkpoint_tasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which checkpoint_tasks to aggregate.
     */
    where?: checkpoint_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checkpoint_tasks to fetch.
     */
    orderBy?: checkpoint_tasksOrderByWithRelationInput | checkpoint_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: checkpoint_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checkpoint_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checkpoint_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned checkpoint_tasks
    **/
    _count?: true | Checkpoint_tasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Checkpoint_tasksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Checkpoint_tasksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Checkpoint_tasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Checkpoint_tasksMaxAggregateInputType
  }

  export type GetCheckpoint_tasksAggregateType<T extends Checkpoint_tasksAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckpoint_tasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckpoint_tasks[P]>
      : GetScalarType<T[P], AggregateCheckpoint_tasks[P]>
  }




  export type checkpoint_tasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: checkpoint_tasksWhereInput
    orderBy?: checkpoint_tasksOrderByWithAggregationInput | checkpoint_tasksOrderByWithAggregationInput[]
    by: Checkpoint_tasksScalarFieldEnum[] | Checkpoint_tasksScalarFieldEnum
    having?: checkpoint_tasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Checkpoint_tasksCountAggregateInputType | true
    _avg?: Checkpoint_tasksAvgAggregateInputType
    _sum?: Checkpoint_tasksSumAggregateInputType
    _min?: Checkpoint_tasksMinAggregateInputType
    _max?: Checkpoint_tasksMaxAggregateInputType
  }

  export type Checkpoint_tasksGroupByOutputType = {
    id: number
    checkpoint_id: number
    task_type: string
    question_text: string | null
    correct_answer: string
    created_at: Date
    updated_at: Date
    _count: Checkpoint_tasksCountAggregateOutputType | null
    _avg: Checkpoint_tasksAvgAggregateOutputType | null
    _sum: Checkpoint_tasksSumAggregateOutputType | null
    _min: Checkpoint_tasksMinAggregateOutputType | null
    _max: Checkpoint_tasksMaxAggregateOutputType | null
  }

  type GetCheckpoint_tasksGroupByPayload<T extends checkpoint_tasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Checkpoint_tasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Checkpoint_tasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Checkpoint_tasksGroupByOutputType[P]>
            : GetScalarType<T[P], Checkpoint_tasksGroupByOutputType[P]>
        }
      >
    >


  export type checkpoint_tasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkpoint_id?: boolean
    task_type?: boolean
    question_text?: boolean
    correct_answer?: boolean
    created_at?: boolean
    updated_at?: boolean
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    session_answers?: boolean | checkpoint_tasks$session_answersArgs<ExtArgs>
    task_choice_options?: boolean | checkpoint_tasks$task_choice_optionsArgs<ExtArgs>
    _count?: boolean | Checkpoint_tasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkpoint_tasks"]>

  export type checkpoint_tasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkpoint_id?: boolean
    task_type?: boolean
    question_text?: boolean
    correct_answer?: boolean
    created_at?: boolean
    updated_at?: boolean
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkpoint_tasks"]>

  export type checkpoint_tasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    checkpoint_id?: boolean
    task_type?: boolean
    question_text?: boolean
    correct_answer?: boolean
    created_at?: boolean
    updated_at?: boolean
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkpoint_tasks"]>

  export type checkpoint_tasksSelectScalar = {
    id?: boolean
    checkpoint_id?: boolean
    task_type?: boolean
    question_text?: boolean
    correct_answer?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type checkpoint_tasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "checkpoint_id" | "task_type" | "question_text" | "correct_answer" | "created_at" | "updated_at", ExtArgs["result"]["checkpoint_tasks"]>
  export type checkpoint_tasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    session_answers?: boolean | checkpoint_tasks$session_answersArgs<ExtArgs>
    task_choice_options?: boolean | checkpoint_tasks$task_choice_optionsArgs<ExtArgs>
    _count?: boolean | Checkpoint_tasksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type checkpoint_tasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
  }
  export type checkpoint_tasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
  }

  export type $checkpoint_tasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "checkpoint_tasks"
    objects: {
      quest_checkpoints: Prisma.$quest_checkpointsPayload<ExtArgs>
      session_answers: Prisma.$session_answersPayload<ExtArgs>[]
      task_choice_options: Prisma.$task_choice_optionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      checkpoint_id: number
      task_type: string
      question_text: string | null
      correct_answer: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["checkpoint_tasks"]>
    composites: {}
  }

  type checkpoint_tasksGetPayload<S extends boolean | null | undefined | checkpoint_tasksDefaultArgs> = $Result.GetResult<Prisma.$checkpoint_tasksPayload, S>

  type checkpoint_tasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<checkpoint_tasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Checkpoint_tasksCountAggregateInputType | true
    }

  export interface checkpoint_tasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['checkpoint_tasks'], meta: { name: 'checkpoint_tasks' } }
    /**
     * Find zero or one Checkpoint_tasks that matches the filter.
     * @param {checkpoint_tasksFindUniqueArgs} args - Arguments to find a Checkpoint_tasks
     * @example
     * // Get one Checkpoint_tasks
     * const checkpoint_tasks = await prisma.checkpoint_tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends checkpoint_tasksFindUniqueArgs>(args: SelectSubset<T, checkpoint_tasksFindUniqueArgs<ExtArgs>>): Prisma__checkpoint_tasksClient<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Checkpoint_tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {checkpoint_tasksFindUniqueOrThrowArgs} args - Arguments to find a Checkpoint_tasks
     * @example
     * // Get one Checkpoint_tasks
     * const checkpoint_tasks = await prisma.checkpoint_tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends checkpoint_tasksFindUniqueOrThrowArgs>(args: SelectSubset<T, checkpoint_tasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__checkpoint_tasksClient<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkpoint_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkpoint_tasksFindFirstArgs} args - Arguments to find a Checkpoint_tasks
     * @example
     * // Get one Checkpoint_tasks
     * const checkpoint_tasks = await prisma.checkpoint_tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends checkpoint_tasksFindFirstArgs>(args?: SelectSubset<T, checkpoint_tasksFindFirstArgs<ExtArgs>>): Prisma__checkpoint_tasksClient<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Checkpoint_tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkpoint_tasksFindFirstOrThrowArgs} args - Arguments to find a Checkpoint_tasks
     * @example
     * // Get one Checkpoint_tasks
     * const checkpoint_tasks = await prisma.checkpoint_tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends checkpoint_tasksFindFirstOrThrowArgs>(args?: SelectSubset<T, checkpoint_tasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__checkpoint_tasksClient<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Checkpoint_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkpoint_tasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Checkpoint_tasks
     * const checkpoint_tasks = await prisma.checkpoint_tasks.findMany()
     * 
     * // Get first 10 Checkpoint_tasks
     * const checkpoint_tasks = await prisma.checkpoint_tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkpoint_tasksWithIdOnly = await prisma.checkpoint_tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends checkpoint_tasksFindManyArgs>(args?: SelectSubset<T, checkpoint_tasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Checkpoint_tasks.
     * @param {checkpoint_tasksCreateArgs} args - Arguments to create a Checkpoint_tasks.
     * @example
     * // Create one Checkpoint_tasks
     * const Checkpoint_tasks = await prisma.checkpoint_tasks.create({
     *   data: {
     *     // ... data to create a Checkpoint_tasks
     *   }
     * })
     * 
     */
    create<T extends checkpoint_tasksCreateArgs>(args: SelectSubset<T, checkpoint_tasksCreateArgs<ExtArgs>>): Prisma__checkpoint_tasksClient<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Checkpoint_tasks.
     * @param {checkpoint_tasksCreateManyArgs} args - Arguments to create many Checkpoint_tasks.
     * @example
     * // Create many Checkpoint_tasks
     * const checkpoint_tasks = await prisma.checkpoint_tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends checkpoint_tasksCreateManyArgs>(args?: SelectSubset<T, checkpoint_tasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Checkpoint_tasks and returns the data saved in the database.
     * @param {checkpoint_tasksCreateManyAndReturnArgs} args - Arguments to create many Checkpoint_tasks.
     * @example
     * // Create many Checkpoint_tasks
     * const checkpoint_tasks = await prisma.checkpoint_tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Checkpoint_tasks and only return the `id`
     * const checkpoint_tasksWithIdOnly = await prisma.checkpoint_tasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends checkpoint_tasksCreateManyAndReturnArgs>(args?: SelectSubset<T, checkpoint_tasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Checkpoint_tasks.
     * @param {checkpoint_tasksDeleteArgs} args - Arguments to delete one Checkpoint_tasks.
     * @example
     * // Delete one Checkpoint_tasks
     * const Checkpoint_tasks = await prisma.checkpoint_tasks.delete({
     *   where: {
     *     // ... filter to delete one Checkpoint_tasks
     *   }
     * })
     * 
     */
    delete<T extends checkpoint_tasksDeleteArgs>(args: SelectSubset<T, checkpoint_tasksDeleteArgs<ExtArgs>>): Prisma__checkpoint_tasksClient<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Checkpoint_tasks.
     * @param {checkpoint_tasksUpdateArgs} args - Arguments to update one Checkpoint_tasks.
     * @example
     * // Update one Checkpoint_tasks
     * const checkpoint_tasks = await prisma.checkpoint_tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends checkpoint_tasksUpdateArgs>(args: SelectSubset<T, checkpoint_tasksUpdateArgs<ExtArgs>>): Prisma__checkpoint_tasksClient<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Checkpoint_tasks.
     * @param {checkpoint_tasksDeleteManyArgs} args - Arguments to filter Checkpoint_tasks to delete.
     * @example
     * // Delete a few Checkpoint_tasks
     * const { count } = await prisma.checkpoint_tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends checkpoint_tasksDeleteManyArgs>(args?: SelectSubset<T, checkpoint_tasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkpoint_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkpoint_tasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Checkpoint_tasks
     * const checkpoint_tasks = await prisma.checkpoint_tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends checkpoint_tasksUpdateManyArgs>(args: SelectSubset<T, checkpoint_tasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Checkpoint_tasks and returns the data updated in the database.
     * @param {checkpoint_tasksUpdateManyAndReturnArgs} args - Arguments to update many Checkpoint_tasks.
     * @example
     * // Update many Checkpoint_tasks
     * const checkpoint_tasks = await prisma.checkpoint_tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Checkpoint_tasks and only return the `id`
     * const checkpoint_tasksWithIdOnly = await prisma.checkpoint_tasks.updateManyAndReturn({
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
    updateManyAndReturn<T extends checkpoint_tasksUpdateManyAndReturnArgs>(args: SelectSubset<T, checkpoint_tasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Checkpoint_tasks.
     * @param {checkpoint_tasksUpsertArgs} args - Arguments to update or create a Checkpoint_tasks.
     * @example
     * // Update or create a Checkpoint_tasks
     * const checkpoint_tasks = await prisma.checkpoint_tasks.upsert({
     *   create: {
     *     // ... data to create a Checkpoint_tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Checkpoint_tasks we want to update
     *   }
     * })
     */
    upsert<T extends checkpoint_tasksUpsertArgs>(args: SelectSubset<T, checkpoint_tasksUpsertArgs<ExtArgs>>): Prisma__checkpoint_tasksClient<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Checkpoint_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkpoint_tasksCountArgs} args - Arguments to filter Checkpoint_tasks to count.
     * @example
     * // Count the number of Checkpoint_tasks
     * const count = await prisma.checkpoint_tasks.count({
     *   where: {
     *     // ... the filter for the Checkpoint_tasks we want to count
     *   }
     * })
    **/
    count<T extends checkpoint_tasksCountArgs>(
      args?: Subset<T, checkpoint_tasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Checkpoint_tasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Checkpoint_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Checkpoint_tasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Checkpoint_tasksAggregateArgs>(args: Subset<T, Checkpoint_tasksAggregateArgs>): Prisma.PrismaPromise<GetCheckpoint_tasksAggregateType<T>>

    /**
     * Group by Checkpoint_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {checkpoint_tasksGroupByArgs} args - Group by arguments.
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
      T extends checkpoint_tasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: checkpoint_tasksGroupByArgs['orderBy'] }
        : { orderBy?: checkpoint_tasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, checkpoint_tasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckpoint_tasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the checkpoint_tasks model
   */
  readonly fields: checkpoint_tasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for checkpoint_tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__checkpoint_tasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quest_checkpoints<T extends quest_checkpointsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, quest_checkpointsDefaultArgs<ExtArgs>>): Prisma__quest_checkpointsClient<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session_answers<T extends checkpoint_tasks$session_answersArgs<ExtArgs> = {}>(args?: Subset<T, checkpoint_tasks$session_answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    task_choice_options<T extends checkpoint_tasks$task_choice_optionsArgs<ExtArgs> = {}>(args?: Subset<T, checkpoint_tasks$task_choice_optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_choice_optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the checkpoint_tasks model
   */
  interface checkpoint_tasksFieldRefs {
    readonly id: FieldRef<"checkpoint_tasks", 'Int'>
    readonly checkpoint_id: FieldRef<"checkpoint_tasks", 'Int'>
    readonly task_type: FieldRef<"checkpoint_tasks", 'String'>
    readonly question_text: FieldRef<"checkpoint_tasks", 'String'>
    readonly correct_answer: FieldRef<"checkpoint_tasks", 'String'>
    readonly created_at: FieldRef<"checkpoint_tasks", 'DateTime'>
    readonly updated_at: FieldRef<"checkpoint_tasks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * checkpoint_tasks findUnique
   */
  export type checkpoint_tasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkpoint_tasks
     */
    select?: checkpoint_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkpoint_tasks
     */
    omit?: checkpoint_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkpoint_tasksInclude<ExtArgs> | null
    /**
     * Filter, which checkpoint_tasks to fetch.
     */
    where: checkpoint_tasksWhereUniqueInput
  }

  /**
   * checkpoint_tasks findUniqueOrThrow
   */
  export type checkpoint_tasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkpoint_tasks
     */
    select?: checkpoint_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkpoint_tasks
     */
    omit?: checkpoint_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkpoint_tasksInclude<ExtArgs> | null
    /**
     * Filter, which checkpoint_tasks to fetch.
     */
    where: checkpoint_tasksWhereUniqueInput
  }

  /**
   * checkpoint_tasks findFirst
   */
  export type checkpoint_tasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkpoint_tasks
     */
    select?: checkpoint_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkpoint_tasks
     */
    omit?: checkpoint_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkpoint_tasksInclude<ExtArgs> | null
    /**
     * Filter, which checkpoint_tasks to fetch.
     */
    where?: checkpoint_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checkpoint_tasks to fetch.
     */
    orderBy?: checkpoint_tasksOrderByWithRelationInput | checkpoint_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for checkpoint_tasks.
     */
    cursor?: checkpoint_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checkpoint_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checkpoint_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of checkpoint_tasks.
     */
    distinct?: Checkpoint_tasksScalarFieldEnum | Checkpoint_tasksScalarFieldEnum[]
  }

  /**
   * checkpoint_tasks findFirstOrThrow
   */
  export type checkpoint_tasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkpoint_tasks
     */
    select?: checkpoint_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkpoint_tasks
     */
    omit?: checkpoint_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkpoint_tasksInclude<ExtArgs> | null
    /**
     * Filter, which checkpoint_tasks to fetch.
     */
    where?: checkpoint_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checkpoint_tasks to fetch.
     */
    orderBy?: checkpoint_tasksOrderByWithRelationInput | checkpoint_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for checkpoint_tasks.
     */
    cursor?: checkpoint_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checkpoint_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checkpoint_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of checkpoint_tasks.
     */
    distinct?: Checkpoint_tasksScalarFieldEnum | Checkpoint_tasksScalarFieldEnum[]
  }

  /**
   * checkpoint_tasks findMany
   */
  export type checkpoint_tasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkpoint_tasks
     */
    select?: checkpoint_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkpoint_tasks
     */
    omit?: checkpoint_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkpoint_tasksInclude<ExtArgs> | null
    /**
     * Filter, which checkpoint_tasks to fetch.
     */
    where?: checkpoint_tasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of checkpoint_tasks to fetch.
     */
    orderBy?: checkpoint_tasksOrderByWithRelationInput | checkpoint_tasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing checkpoint_tasks.
     */
    cursor?: checkpoint_tasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` checkpoint_tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` checkpoint_tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of checkpoint_tasks.
     */
    distinct?: Checkpoint_tasksScalarFieldEnum | Checkpoint_tasksScalarFieldEnum[]
  }

  /**
   * checkpoint_tasks create
   */
  export type checkpoint_tasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkpoint_tasks
     */
    select?: checkpoint_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkpoint_tasks
     */
    omit?: checkpoint_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkpoint_tasksInclude<ExtArgs> | null
    /**
     * The data needed to create a checkpoint_tasks.
     */
    data: XOR<checkpoint_tasksCreateInput, checkpoint_tasksUncheckedCreateInput>
  }

  /**
   * checkpoint_tasks createMany
   */
  export type checkpoint_tasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many checkpoint_tasks.
     */
    data: checkpoint_tasksCreateManyInput | checkpoint_tasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * checkpoint_tasks createManyAndReturn
   */
  export type checkpoint_tasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkpoint_tasks
     */
    select?: checkpoint_tasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the checkpoint_tasks
     */
    omit?: checkpoint_tasksOmit<ExtArgs> | null
    /**
     * The data used to create many checkpoint_tasks.
     */
    data: checkpoint_tasksCreateManyInput | checkpoint_tasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkpoint_tasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * checkpoint_tasks update
   */
  export type checkpoint_tasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkpoint_tasks
     */
    select?: checkpoint_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkpoint_tasks
     */
    omit?: checkpoint_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkpoint_tasksInclude<ExtArgs> | null
    /**
     * The data needed to update a checkpoint_tasks.
     */
    data: XOR<checkpoint_tasksUpdateInput, checkpoint_tasksUncheckedUpdateInput>
    /**
     * Choose, which checkpoint_tasks to update.
     */
    where: checkpoint_tasksWhereUniqueInput
  }

  /**
   * checkpoint_tasks updateMany
   */
  export type checkpoint_tasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update checkpoint_tasks.
     */
    data: XOR<checkpoint_tasksUpdateManyMutationInput, checkpoint_tasksUncheckedUpdateManyInput>
    /**
     * Filter which checkpoint_tasks to update
     */
    where?: checkpoint_tasksWhereInput
    /**
     * Limit how many checkpoint_tasks to update.
     */
    limit?: number
  }

  /**
   * checkpoint_tasks updateManyAndReturn
   */
  export type checkpoint_tasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkpoint_tasks
     */
    select?: checkpoint_tasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the checkpoint_tasks
     */
    omit?: checkpoint_tasksOmit<ExtArgs> | null
    /**
     * The data used to update checkpoint_tasks.
     */
    data: XOR<checkpoint_tasksUpdateManyMutationInput, checkpoint_tasksUncheckedUpdateManyInput>
    /**
     * Filter which checkpoint_tasks to update
     */
    where?: checkpoint_tasksWhereInput
    /**
     * Limit how many checkpoint_tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkpoint_tasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * checkpoint_tasks upsert
   */
  export type checkpoint_tasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkpoint_tasks
     */
    select?: checkpoint_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkpoint_tasks
     */
    omit?: checkpoint_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkpoint_tasksInclude<ExtArgs> | null
    /**
     * The filter to search for the checkpoint_tasks to update in case it exists.
     */
    where: checkpoint_tasksWhereUniqueInput
    /**
     * In case the checkpoint_tasks found by the `where` argument doesn't exist, create a new checkpoint_tasks with this data.
     */
    create: XOR<checkpoint_tasksCreateInput, checkpoint_tasksUncheckedCreateInput>
    /**
     * In case the checkpoint_tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<checkpoint_tasksUpdateInput, checkpoint_tasksUncheckedUpdateInput>
  }

  /**
   * checkpoint_tasks delete
   */
  export type checkpoint_tasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkpoint_tasks
     */
    select?: checkpoint_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkpoint_tasks
     */
    omit?: checkpoint_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkpoint_tasksInclude<ExtArgs> | null
    /**
     * Filter which checkpoint_tasks to delete.
     */
    where: checkpoint_tasksWhereUniqueInput
  }

  /**
   * checkpoint_tasks deleteMany
   */
  export type checkpoint_tasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which checkpoint_tasks to delete
     */
    where?: checkpoint_tasksWhereInput
    /**
     * Limit how many checkpoint_tasks to delete.
     */
    limit?: number
  }

  /**
   * checkpoint_tasks.session_answers
   */
  export type checkpoint_tasks$session_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
    where?: session_answersWhereInput
    orderBy?: session_answersOrderByWithRelationInput | session_answersOrderByWithRelationInput[]
    cursor?: session_answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Session_answersScalarFieldEnum | Session_answersScalarFieldEnum[]
  }

  /**
   * checkpoint_tasks.task_choice_options
   */
  export type checkpoint_tasks$task_choice_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsInclude<ExtArgs> | null
    where?: task_choice_optionsWhereInput
    orderBy?: task_choice_optionsOrderByWithRelationInput | task_choice_optionsOrderByWithRelationInput[]
    cursor?: task_choice_optionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Task_choice_optionsScalarFieldEnum | Task_choice_optionsScalarFieldEnum[]
  }

  /**
   * checkpoint_tasks without action
   */
  export type checkpoint_tasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the checkpoint_tasks
     */
    select?: checkpoint_tasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the checkpoint_tasks
     */
    omit?: checkpoint_tasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: checkpoint_tasksInclude<ExtArgs> | null
  }


  /**
   * Model task_choice_options
   */

  export type AggregateTask_choice_options = {
    _count: Task_choice_optionsCountAggregateOutputType | null
    _avg: Task_choice_optionsAvgAggregateOutputType | null
    _sum: Task_choice_optionsSumAggregateOutputType | null
    _min: Task_choice_optionsMinAggregateOutputType | null
    _max: Task_choice_optionsMaxAggregateOutputType | null
  }

  export type Task_choice_optionsAvgAggregateOutputType = {
    id: number | null
    task_id: number | null
  }

  export type Task_choice_optionsSumAggregateOutputType = {
    id: number | null
    task_id: number | null
  }

  export type Task_choice_optionsMinAggregateOutputType = {
    id: number | null
    task_id: number | null
    option_text: string | null
  }

  export type Task_choice_optionsMaxAggregateOutputType = {
    id: number | null
    task_id: number | null
    option_text: string | null
  }

  export type Task_choice_optionsCountAggregateOutputType = {
    id: number
    task_id: number
    option_text: number
    _all: number
  }


  export type Task_choice_optionsAvgAggregateInputType = {
    id?: true
    task_id?: true
  }

  export type Task_choice_optionsSumAggregateInputType = {
    id?: true
    task_id?: true
  }

  export type Task_choice_optionsMinAggregateInputType = {
    id?: true
    task_id?: true
    option_text?: true
  }

  export type Task_choice_optionsMaxAggregateInputType = {
    id?: true
    task_id?: true
    option_text?: true
  }

  export type Task_choice_optionsCountAggregateInputType = {
    id?: true
    task_id?: true
    option_text?: true
    _all?: true
  }

  export type Task_choice_optionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_choice_options to aggregate.
     */
    where?: task_choice_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_choice_options to fetch.
     */
    orderBy?: task_choice_optionsOrderByWithRelationInput | task_choice_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: task_choice_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_choice_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_choice_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned task_choice_options
    **/
    _count?: true | Task_choice_optionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Task_choice_optionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Task_choice_optionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Task_choice_optionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Task_choice_optionsMaxAggregateInputType
  }

  export type GetTask_choice_optionsAggregateType<T extends Task_choice_optionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTask_choice_options]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask_choice_options[P]>
      : GetScalarType<T[P], AggregateTask_choice_options[P]>
  }




  export type task_choice_optionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: task_choice_optionsWhereInput
    orderBy?: task_choice_optionsOrderByWithAggregationInput | task_choice_optionsOrderByWithAggregationInput[]
    by: Task_choice_optionsScalarFieldEnum[] | Task_choice_optionsScalarFieldEnum
    having?: task_choice_optionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Task_choice_optionsCountAggregateInputType | true
    _avg?: Task_choice_optionsAvgAggregateInputType
    _sum?: Task_choice_optionsSumAggregateInputType
    _min?: Task_choice_optionsMinAggregateInputType
    _max?: Task_choice_optionsMaxAggregateInputType
  }

  export type Task_choice_optionsGroupByOutputType = {
    id: number
    task_id: number
    option_text: string
    _count: Task_choice_optionsCountAggregateOutputType | null
    _avg: Task_choice_optionsAvgAggregateOutputType | null
    _sum: Task_choice_optionsSumAggregateOutputType | null
    _min: Task_choice_optionsMinAggregateOutputType | null
    _max: Task_choice_optionsMaxAggregateOutputType | null
  }

  type GetTask_choice_optionsGroupByPayload<T extends task_choice_optionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Task_choice_optionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Task_choice_optionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Task_choice_optionsGroupByOutputType[P]>
            : GetScalarType<T[P], Task_choice_optionsGroupByOutputType[P]>
        }
      >
    >


  export type task_choice_optionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    option_text?: boolean
    session_answers?: boolean | task_choice_options$session_answersArgs<ExtArgs>
    checkpoint_tasks?: boolean | checkpoint_tasksDefaultArgs<ExtArgs>
    _count?: boolean | Task_choice_optionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_choice_options"]>

  export type task_choice_optionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    option_text?: boolean
    checkpoint_tasks?: boolean | checkpoint_tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_choice_options"]>

  export type task_choice_optionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    task_id?: boolean
    option_text?: boolean
    checkpoint_tasks?: boolean | checkpoint_tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task_choice_options"]>

  export type task_choice_optionsSelectScalar = {
    id?: boolean
    task_id?: boolean
    option_text?: boolean
  }

  export type task_choice_optionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "task_id" | "option_text", ExtArgs["result"]["task_choice_options"]>
  export type task_choice_optionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session_answers?: boolean | task_choice_options$session_answersArgs<ExtArgs>
    checkpoint_tasks?: boolean | checkpoint_tasksDefaultArgs<ExtArgs>
    _count?: boolean | Task_choice_optionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type task_choice_optionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkpoint_tasks?: boolean | checkpoint_tasksDefaultArgs<ExtArgs>
  }
  export type task_choice_optionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checkpoint_tasks?: boolean | checkpoint_tasksDefaultArgs<ExtArgs>
  }

  export type $task_choice_optionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "task_choice_options"
    objects: {
      session_answers: Prisma.$session_answersPayload<ExtArgs>[]
      checkpoint_tasks: Prisma.$checkpoint_tasksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      task_id: number
      option_text: string
    }, ExtArgs["result"]["task_choice_options"]>
    composites: {}
  }

  type task_choice_optionsGetPayload<S extends boolean | null | undefined | task_choice_optionsDefaultArgs> = $Result.GetResult<Prisma.$task_choice_optionsPayload, S>

  type task_choice_optionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<task_choice_optionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Task_choice_optionsCountAggregateInputType | true
    }

  export interface task_choice_optionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task_choice_options'], meta: { name: 'task_choice_options' } }
    /**
     * Find zero or one Task_choice_options that matches the filter.
     * @param {task_choice_optionsFindUniqueArgs} args - Arguments to find a Task_choice_options
     * @example
     * // Get one Task_choice_options
     * const task_choice_options = await prisma.task_choice_options.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends task_choice_optionsFindUniqueArgs>(args: SelectSubset<T, task_choice_optionsFindUniqueArgs<ExtArgs>>): Prisma__task_choice_optionsClient<$Result.GetResult<Prisma.$task_choice_optionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task_choice_options that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {task_choice_optionsFindUniqueOrThrowArgs} args - Arguments to find a Task_choice_options
     * @example
     * // Get one Task_choice_options
     * const task_choice_options = await prisma.task_choice_options.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends task_choice_optionsFindUniqueOrThrowArgs>(args: SelectSubset<T, task_choice_optionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__task_choice_optionsClient<$Result.GetResult<Prisma.$task_choice_optionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_choice_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_choice_optionsFindFirstArgs} args - Arguments to find a Task_choice_options
     * @example
     * // Get one Task_choice_options
     * const task_choice_options = await prisma.task_choice_options.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends task_choice_optionsFindFirstArgs>(args?: SelectSubset<T, task_choice_optionsFindFirstArgs<ExtArgs>>): Prisma__task_choice_optionsClient<$Result.GetResult<Prisma.$task_choice_optionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task_choice_options that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_choice_optionsFindFirstOrThrowArgs} args - Arguments to find a Task_choice_options
     * @example
     * // Get one Task_choice_options
     * const task_choice_options = await prisma.task_choice_options.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends task_choice_optionsFindFirstOrThrowArgs>(args?: SelectSubset<T, task_choice_optionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__task_choice_optionsClient<$Result.GetResult<Prisma.$task_choice_optionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Task_choice_options that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_choice_optionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Task_choice_options
     * const task_choice_options = await prisma.task_choice_options.findMany()
     * 
     * // Get first 10 Task_choice_options
     * const task_choice_options = await prisma.task_choice_options.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const task_choice_optionsWithIdOnly = await prisma.task_choice_options.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends task_choice_optionsFindManyArgs>(args?: SelectSubset<T, task_choice_optionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_choice_optionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task_choice_options.
     * @param {task_choice_optionsCreateArgs} args - Arguments to create a Task_choice_options.
     * @example
     * // Create one Task_choice_options
     * const Task_choice_options = await prisma.task_choice_options.create({
     *   data: {
     *     // ... data to create a Task_choice_options
     *   }
     * })
     * 
     */
    create<T extends task_choice_optionsCreateArgs>(args: SelectSubset<T, task_choice_optionsCreateArgs<ExtArgs>>): Prisma__task_choice_optionsClient<$Result.GetResult<Prisma.$task_choice_optionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Task_choice_options.
     * @param {task_choice_optionsCreateManyArgs} args - Arguments to create many Task_choice_options.
     * @example
     * // Create many Task_choice_options
     * const task_choice_options = await prisma.task_choice_options.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends task_choice_optionsCreateManyArgs>(args?: SelectSubset<T, task_choice_optionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Task_choice_options and returns the data saved in the database.
     * @param {task_choice_optionsCreateManyAndReturnArgs} args - Arguments to create many Task_choice_options.
     * @example
     * // Create many Task_choice_options
     * const task_choice_options = await prisma.task_choice_options.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Task_choice_options and only return the `id`
     * const task_choice_optionsWithIdOnly = await prisma.task_choice_options.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends task_choice_optionsCreateManyAndReturnArgs>(args?: SelectSubset<T, task_choice_optionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_choice_optionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task_choice_options.
     * @param {task_choice_optionsDeleteArgs} args - Arguments to delete one Task_choice_options.
     * @example
     * // Delete one Task_choice_options
     * const Task_choice_options = await prisma.task_choice_options.delete({
     *   where: {
     *     // ... filter to delete one Task_choice_options
     *   }
     * })
     * 
     */
    delete<T extends task_choice_optionsDeleteArgs>(args: SelectSubset<T, task_choice_optionsDeleteArgs<ExtArgs>>): Prisma__task_choice_optionsClient<$Result.GetResult<Prisma.$task_choice_optionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task_choice_options.
     * @param {task_choice_optionsUpdateArgs} args - Arguments to update one Task_choice_options.
     * @example
     * // Update one Task_choice_options
     * const task_choice_options = await prisma.task_choice_options.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends task_choice_optionsUpdateArgs>(args: SelectSubset<T, task_choice_optionsUpdateArgs<ExtArgs>>): Prisma__task_choice_optionsClient<$Result.GetResult<Prisma.$task_choice_optionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Task_choice_options.
     * @param {task_choice_optionsDeleteManyArgs} args - Arguments to filter Task_choice_options to delete.
     * @example
     * // Delete a few Task_choice_options
     * const { count } = await prisma.task_choice_options.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends task_choice_optionsDeleteManyArgs>(args?: SelectSubset<T, task_choice_optionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_choice_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_choice_optionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Task_choice_options
     * const task_choice_options = await prisma.task_choice_options.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends task_choice_optionsUpdateManyArgs>(args: SelectSubset<T, task_choice_optionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Task_choice_options and returns the data updated in the database.
     * @param {task_choice_optionsUpdateManyAndReturnArgs} args - Arguments to update many Task_choice_options.
     * @example
     * // Update many Task_choice_options
     * const task_choice_options = await prisma.task_choice_options.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Task_choice_options and only return the `id`
     * const task_choice_optionsWithIdOnly = await prisma.task_choice_options.updateManyAndReturn({
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
    updateManyAndReturn<T extends task_choice_optionsUpdateManyAndReturnArgs>(args: SelectSubset<T, task_choice_optionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$task_choice_optionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task_choice_options.
     * @param {task_choice_optionsUpsertArgs} args - Arguments to update or create a Task_choice_options.
     * @example
     * // Update or create a Task_choice_options
     * const task_choice_options = await prisma.task_choice_options.upsert({
     *   create: {
     *     // ... data to create a Task_choice_options
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task_choice_options we want to update
     *   }
     * })
     */
    upsert<T extends task_choice_optionsUpsertArgs>(args: SelectSubset<T, task_choice_optionsUpsertArgs<ExtArgs>>): Prisma__task_choice_optionsClient<$Result.GetResult<Prisma.$task_choice_optionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Task_choice_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_choice_optionsCountArgs} args - Arguments to filter Task_choice_options to count.
     * @example
     * // Count the number of Task_choice_options
     * const count = await prisma.task_choice_options.count({
     *   where: {
     *     // ... the filter for the Task_choice_options we want to count
     *   }
     * })
    **/
    count<T extends task_choice_optionsCountArgs>(
      args?: Subset<T, task_choice_optionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Task_choice_optionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task_choice_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Task_choice_optionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Task_choice_optionsAggregateArgs>(args: Subset<T, Task_choice_optionsAggregateArgs>): Prisma.PrismaPromise<GetTask_choice_optionsAggregateType<T>>

    /**
     * Group by Task_choice_options.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {task_choice_optionsGroupByArgs} args - Group by arguments.
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
      T extends task_choice_optionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: task_choice_optionsGroupByArgs['orderBy'] }
        : { orderBy?: task_choice_optionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, task_choice_optionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTask_choice_optionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the task_choice_options model
   */
  readonly fields: task_choice_optionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task_choice_options.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__task_choice_optionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session_answers<T extends task_choice_options$session_answersArgs<ExtArgs> = {}>(args?: Subset<T, task_choice_options$session_answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checkpoint_tasks<T extends checkpoint_tasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, checkpoint_tasksDefaultArgs<ExtArgs>>): Prisma__checkpoint_tasksClient<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the task_choice_options model
   */
  interface task_choice_optionsFieldRefs {
    readonly id: FieldRef<"task_choice_options", 'Int'>
    readonly task_id: FieldRef<"task_choice_options", 'Int'>
    readonly option_text: FieldRef<"task_choice_options", 'String'>
  }
    

  // Custom InputTypes
  /**
   * task_choice_options findUnique
   */
  export type task_choice_optionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsInclude<ExtArgs> | null
    /**
     * Filter, which task_choice_options to fetch.
     */
    where: task_choice_optionsWhereUniqueInput
  }

  /**
   * task_choice_options findUniqueOrThrow
   */
  export type task_choice_optionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsInclude<ExtArgs> | null
    /**
     * Filter, which task_choice_options to fetch.
     */
    where: task_choice_optionsWhereUniqueInput
  }

  /**
   * task_choice_options findFirst
   */
  export type task_choice_optionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsInclude<ExtArgs> | null
    /**
     * Filter, which task_choice_options to fetch.
     */
    where?: task_choice_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_choice_options to fetch.
     */
    orderBy?: task_choice_optionsOrderByWithRelationInput | task_choice_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_choice_options.
     */
    cursor?: task_choice_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_choice_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_choice_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_choice_options.
     */
    distinct?: Task_choice_optionsScalarFieldEnum | Task_choice_optionsScalarFieldEnum[]
  }

  /**
   * task_choice_options findFirstOrThrow
   */
  export type task_choice_optionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsInclude<ExtArgs> | null
    /**
     * Filter, which task_choice_options to fetch.
     */
    where?: task_choice_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_choice_options to fetch.
     */
    orderBy?: task_choice_optionsOrderByWithRelationInput | task_choice_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for task_choice_options.
     */
    cursor?: task_choice_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_choice_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_choice_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_choice_options.
     */
    distinct?: Task_choice_optionsScalarFieldEnum | Task_choice_optionsScalarFieldEnum[]
  }

  /**
   * task_choice_options findMany
   */
  export type task_choice_optionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsInclude<ExtArgs> | null
    /**
     * Filter, which task_choice_options to fetch.
     */
    where?: task_choice_optionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of task_choice_options to fetch.
     */
    orderBy?: task_choice_optionsOrderByWithRelationInput | task_choice_optionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing task_choice_options.
     */
    cursor?: task_choice_optionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` task_choice_options from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` task_choice_options.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of task_choice_options.
     */
    distinct?: Task_choice_optionsScalarFieldEnum | Task_choice_optionsScalarFieldEnum[]
  }

  /**
   * task_choice_options create
   */
  export type task_choice_optionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsInclude<ExtArgs> | null
    /**
     * The data needed to create a task_choice_options.
     */
    data: XOR<task_choice_optionsCreateInput, task_choice_optionsUncheckedCreateInput>
  }

  /**
   * task_choice_options createMany
   */
  export type task_choice_optionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many task_choice_options.
     */
    data: task_choice_optionsCreateManyInput | task_choice_optionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * task_choice_options createManyAndReturn
   */
  export type task_choice_optionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * The data used to create many task_choice_options.
     */
    data: task_choice_optionsCreateManyInput | task_choice_optionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * task_choice_options update
   */
  export type task_choice_optionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsInclude<ExtArgs> | null
    /**
     * The data needed to update a task_choice_options.
     */
    data: XOR<task_choice_optionsUpdateInput, task_choice_optionsUncheckedUpdateInput>
    /**
     * Choose, which task_choice_options to update.
     */
    where: task_choice_optionsWhereUniqueInput
  }

  /**
   * task_choice_options updateMany
   */
  export type task_choice_optionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update task_choice_options.
     */
    data: XOR<task_choice_optionsUpdateManyMutationInput, task_choice_optionsUncheckedUpdateManyInput>
    /**
     * Filter which task_choice_options to update
     */
    where?: task_choice_optionsWhereInput
    /**
     * Limit how many task_choice_options to update.
     */
    limit?: number
  }

  /**
   * task_choice_options updateManyAndReturn
   */
  export type task_choice_optionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * The data used to update task_choice_options.
     */
    data: XOR<task_choice_optionsUpdateManyMutationInput, task_choice_optionsUncheckedUpdateManyInput>
    /**
     * Filter which task_choice_options to update
     */
    where?: task_choice_optionsWhereInput
    /**
     * Limit how many task_choice_options to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * task_choice_options upsert
   */
  export type task_choice_optionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsInclude<ExtArgs> | null
    /**
     * The filter to search for the task_choice_options to update in case it exists.
     */
    where: task_choice_optionsWhereUniqueInput
    /**
     * In case the task_choice_options found by the `where` argument doesn't exist, create a new task_choice_options with this data.
     */
    create: XOR<task_choice_optionsCreateInput, task_choice_optionsUncheckedCreateInput>
    /**
     * In case the task_choice_options was found with the provided `where` argument, update it with this data.
     */
    update: XOR<task_choice_optionsUpdateInput, task_choice_optionsUncheckedUpdateInput>
  }

  /**
   * task_choice_options delete
   */
  export type task_choice_optionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsInclude<ExtArgs> | null
    /**
     * Filter which task_choice_options to delete.
     */
    where: task_choice_optionsWhereUniqueInput
  }

  /**
   * task_choice_options deleteMany
   */
  export type task_choice_optionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task_choice_options to delete
     */
    where?: task_choice_optionsWhereInput
    /**
     * Limit how many task_choice_options to delete.
     */
    limit?: number
  }

  /**
   * task_choice_options.session_answers
   */
  export type task_choice_options$session_answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
    where?: session_answersWhereInput
    orderBy?: session_answersOrderByWithRelationInput | session_answersOrderByWithRelationInput[]
    cursor?: session_answersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Session_answersScalarFieldEnum | Session_answersScalarFieldEnum[]
  }

  /**
   * task_choice_options without action
   */
  export type task_choice_optionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsInclude<ExtArgs> | null
  }


  /**
   * Model session_answers
   */

  export type AggregateSession_answers = {
    _count: Session_answersCountAggregateOutputType | null
    _avg: Session_answersAvgAggregateOutputType | null
    _sum: Session_answersSumAggregateOutputType | null
    _min: Session_answersMinAggregateOutputType | null
    _max: Session_answersMaxAggregateOutputType | null
  }

  export type Session_answersAvgAggregateOutputType = {
    id: number | null
    session_id: number | null
    checkpoint_id: number | null
    task_id: number | null
    chosen_option_id: number | null
  }

  export type Session_answersSumAggregateOutputType = {
    id: number | null
    session_id: number | null
    checkpoint_id: number | null
    task_id: number | null
    chosen_option_id: number | null
  }

  export type Session_answersMinAggregateOutputType = {
    id: number | null
    session_id: number | null
    checkpoint_id: number | null
    task_id: number | null
    answer_text: string | null
    chosen_option_id: number | null
    is_correct: boolean | null
    answered_at: Date | null
  }

  export type Session_answersMaxAggregateOutputType = {
    id: number | null
    session_id: number | null
    checkpoint_id: number | null
    task_id: number | null
    answer_text: string | null
    chosen_option_id: number | null
    is_correct: boolean | null
    answered_at: Date | null
  }

  export type Session_answersCountAggregateOutputType = {
    id: number
    session_id: number
    checkpoint_id: number
    task_id: number
    answer_text: number
    chosen_option_id: number
    is_correct: number
    answered_at: number
    _all: number
  }


  export type Session_answersAvgAggregateInputType = {
    id?: true
    session_id?: true
    checkpoint_id?: true
    task_id?: true
    chosen_option_id?: true
  }

  export type Session_answersSumAggregateInputType = {
    id?: true
    session_id?: true
    checkpoint_id?: true
    task_id?: true
    chosen_option_id?: true
  }

  export type Session_answersMinAggregateInputType = {
    id?: true
    session_id?: true
    checkpoint_id?: true
    task_id?: true
    answer_text?: true
    chosen_option_id?: true
    is_correct?: true
    answered_at?: true
  }

  export type Session_answersMaxAggregateInputType = {
    id?: true
    session_id?: true
    checkpoint_id?: true
    task_id?: true
    answer_text?: true
    chosen_option_id?: true
    is_correct?: true
    answered_at?: true
  }

  export type Session_answersCountAggregateInputType = {
    id?: true
    session_id?: true
    checkpoint_id?: true
    task_id?: true
    answer_text?: true
    chosen_option_id?: true
    is_correct?: true
    answered_at?: true
    _all?: true
  }

  export type Session_answersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which session_answers to aggregate.
     */
    where?: session_answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of session_answers to fetch.
     */
    orderBy?: session_answersOrderByWithRelationInput | session_answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: session_answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` session_answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` session_answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned session_answers
    **/
    _count?: true | Session_answersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Session_answersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Session_answersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Session_answersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Session_answersMaxAggregateInputType
  }

  export type GetSession_answersAggregateType<T extends Session_answersAggregateArgs> = {
        [P in keyof T & keyof AggregateSession_answers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession_answers[P]>
      : GetScalarType<T[P], AggregateSession_answers[P]>
  }




  export type session_answersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: session_answersWhereInput
    orderBy?: session_answersOrderByWithAggregationInput | session_answersOrderByWithAggregationInput[]
    by: Session_answersScalarFieldEnum[] | Session_answersScalarFieldEnum
    having?: session_answersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Session_answersCountAggregateInputType | true
    _avg?: Session_answersAvgAggregateInputType
    _sum?: Session_answersSumAggregateInputType
    _min?: Session_answersMinAggregateInputType
    _max?: Session_answersMaxAggregateInputType
  }

  export type Session_answersGroupByOutputType = {
    id: number
    session_id: number
    checkpoint_id: number
    task_id: number
    answer_text: string | null
    chosen_option_id: number | null
    is_correct: boolean
    answered_at: Date
    _count: Session_answersCountAggregateOutputType | null
    _avg: Session_answersAvgAggregateOutputType | null
    _sum: Session_answersSumAggregateOutputType | null
    _min: Session_answersMinAggregateOutputType | null
    _max: Session_answersMaxAggregateOutputType | null
  }

  type GetSession_answersGroupByPayload<T extends session_answersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Session_answersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Session_answersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Session_answersGroupByOutputType[P]>
            : GetScalarType<T[P], Session_answersGroupByOutputType[P]>
        }
      >
    >


  export type session_answersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    checkpoint_id?: boolean
    task_id?: boolean
    answer_text?: boolean
    chosen_option_id?: boolean
    is_correct?: boolean
    answered_at?: boolean
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    task_choice_options?: boolean | session_answers$task_choice_optionsArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
    checkpoint_tasks?: boolean | checkpoint_tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session_answers"]>

  export type session_answersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    checkpoint_id?: boolean
    task_id?: boolean
    answer_text?: boolean
    chosen_option_id?: boolean
    is_correct?: boolean
    answered_at?: boolean
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    task_choice_options?: boolean | session_answers$task_choice_optionsArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
    checkpoint_tasks?: boolean | checkpoint_tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session_answers"]>

  export type session_answersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    checkpoint_id?: boolean
    task_id?: boolean
    answer_text?: boolean
    chosen_option_id?: boolean
    is_correct?: boolean
    answered_at?: boolean
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    task_choice_options?: boolean | session_answers$task_choice_optionsArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
    checkpoint_tasks?: boolean | checkpoint_tasksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session_answers"]>

  export type session_answersSelectScalar = {
    id?: boolean
    session_id?: boolean
    checkpoint_id?: boolean
    task_id?: boolean
    answer_text?: boolean
    chosen_option_id?: boolean
    is_correct?: boolean
    answered_at?: boolean
  }

  export type session_answersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session_id" | "checkpoint_id" | "task_id" | "answer_text" | "chosen_option_id" | "is_correct" | "answered_at", ExtArgs["result"]["session_answers"]>
  export type session_answersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    task_choice_options?: boolean | session_answers$task_choice_optionsArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
    checkpoint_tasks?: boolean | checkpoint_tasksDefaultArgs<ExtArgs>
  }
  export type session_answersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    task_choice_options?: boolean | session_answers$task_choice_optionsArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
    checkpoint_tasks?: boolean | checkpoint_tasksDefaultArgs<ExtArgs>
  }
  export type session_answersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    task_choice_options?: boolean | session_answers$task_choice_optionsArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
    checkpoint_tasks?: boolean | checkpoint_tasksDefaultArgs<ExtArgs>
  }

  export type $session_answersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "session_answers"
    objects: {
      quest_checkpoints: Prisma.$quest_checkpointsPayload<ExtArgs>
      task_choice_options: Prisma.$task_choice_optionsPayload<ExtArgs> | null
      sessions: Prisma.$sessionsPayload<ExtArgs>
      checkpoint_tasks: Prisma.$checkpoint_tasksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      session_id: number
      checkpoint_id: number
      task_id: number
      answer_text: string | null
      chosen_option_id: number | null
      is_correct: boolean
      answered_at: Date
    }, ExtArgs["result"]["session_answers"]>
    composites: {}
  }

  type session_answersGetPayload<S extends boolean | null | undefined | session_answersDefaultArgs> = $Result.GetResult<Prisma.$session_answersPayload, S>

  type session_answersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<session_answersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Session_answersCountAggregateInputType | true
    }

  export interface session_answersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['session_answers'], meta: { name: 'session_answers' } }
    /**
     * Find zero or one Session_answers that matches the filter.
     * @param {session_answersFindUniqueArgs} args - Arguments to find a Session_answers
     * @example
     * // Get one Session_answers
     * const session_answers = await prisma.session_answers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends session_answersFindUniqueArgs>(args: SelectSubset<T, session_answersFindUniqueArgs<ExtArgs>>): Prisma__session_answersClient<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session_answers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {session_answersFindUniqueOrThrowArgs} args - Arguments to find a Session_answers
     * @example
     * // Get one Session_answers
     * const session_answers = await prisma.session_answers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends session_answersFindUniqueOrThrowArgs>(args: SelectSubset<T, session_answersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__session_answersClient<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session_answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_answersFindFirstArgs} args - Arguments to find a Session_answers
     * @example
     * // Get one Session_answers
     * const session_answers = await prisma.session_answers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends session_answersFindFirstArgs>(args?: SelectSubset<T, session_answersFindFirstArgs<ExtArgs>>): Prisma__session_answersClient<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session_answers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_answersFindFirstOrThrowArgs} args - Arguments to find a Session_answers
     * @example
     * // Get one Session_answers
     * const session_answers = await prisma.session_answers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends session_answersFindFirstOrThrowArgs>(args?: SelectSubset<T, session_answersFindFirstOrThrowArgs<ExtArgs>>): Prisma__session_answersClient<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Session_answers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_answersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Session_answers
     * const session_answers = await prisma.session_answers.findMany()
     * 
     * // Get first 10 Session_answers
     * const session_answers = await prisma.session_answers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const session_answersWithIdOnly = await prisma.session_answers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends session_answersFindManyArgs>(args?: SelectSubset<T, session_answersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session_answers.
     * @param {session_answersCreateArgs} args - Arguments to create a Session_answers.
     * @example
     * // Create one Session_answers
     * const Session_answers = await prisma.session_answers.create({
     *   data: {
     *     // ... data to create a Session_answers
     *   }
     * })
     * 
     */
    create<T extends session_answersCreateArgs>(args: SelectSubset<T, session_answersCreateArgs<ExtArgs>>): Prisma__session_answersClient<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Session_answers.
     * @param {session_answersCreateManyArgs} args - Arguments to create many Session_answers.
     * @example
     * // Create many Session_answers
     * const session_answers = await prisma.session_answers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends session_answersCreateManyArgs>(args?: SelectSubset<T, session_answersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Session_answers and returns the data saved in the database.
     * @param {session_answersCreateManyAndReturnArgs} args - Arguments to create many Session_answers.
     * @example
     * // Create many Session_answers
     * const session_answers = await prisma.session_answers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Session_answers and only return the `id`
     * const session_answersWithIdOnly = await prisma.session_answers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends session_answersCreateManyAndReturnArgs>(args?: SelectSubset<T, session_answersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session_answers.
     * @param {session_answersDeleteArgs} args - Arguments to delete one Session_answers.
     * @example
     * // Delete one Session_answers
     * const Session_answers = await prisma.session_answers.delete({
     *   where: {
     *     // ... filter to delete one Session_answers
     *   }
     * })
     * 
     */
    delete<T extends session_answersDeleteArgs>(args: SelectSubset<T, session_answersDeleteArgs<ExtArgs>>): Prisma__session_answersClient<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session_answers.
     * @param {session_answersUpdateArgs} args - Arguments to update one Session_answers.
     * @example
     * // Update one Session_answers
     * const session_answers = await prisma.session_answers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends session_answersUpdateArgs>(args: SelectSubset<T, session_answersUpdateArgs<ExtArgs>>): Prisma__session_answersClient<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Session_answers.
     * @param {session_answersDeleteManyArgs} args - Arguments to filter Session_answers to delete.
     * @example
     * // Delete a few Session_answers
     * const { count } = await prisma.session_answers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends session_answersDeleteManyArgs>(args?: SelectSubset<T, session_answersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Session_answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_answersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Session_answers
     * const session_answers = await prisma.session_answers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends session_answersUpdateManyArgs>(args: SelectSubset<T, session_answersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Session_answers and returns the data updated in the database.
     * @param {session_answersUpdateManyAndReturnArgs} args - Arguments to update many Session_answers.
     * @example
     * // Update many Session_answers
     * const session_answers = await prisma.session_answers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Session_answers and only return the `id`
     * const session_answersWithIdOnly = await prisma.session_answers.updateManyAndReturn({
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
    updateManyAndReturn<T extends session_answersUpdateManyAndReturnArgs>(args: SelectSubset<T, session_answersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session_answers.
     * @param {session_answersUpsertArgs} args - Arguments to update or create a Session_answers.
     * @example
     * // Update or create a Session_answers
     * const session_answers = await prisma.session_answers.upsert({
     *   create: {
     *     // ... data to create a Session_answers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session_answers we want to update
     *   }
     * })
     */
    upsert<T extends session_answersUpsertArgs>(args: SelectSubset<T, session_answersUpsertArgs<ExtArgs>>): Prisma__session_answersClient<$Result.GetResult<Prisma.$session_answersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Session_answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_answersCountArgs} args - Arguments to filter Session_answers to count.
     * @example
     * // Count the number of Session_answers
     * const count = await prisma.session_answers.count({
     *   where: {
     *     // ... the filter for the Session_answers we want to count
     *   }
     * })
    **/
    count<T extends session_answersCountArgs>(
      args?: Subset<T, session_answersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Session_answersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session_answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Session_answersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Session_answersAggregateArgs>(args: Subset<T, Session_answersAggregateArgs>): Prisma.PrismaPromise<GetSession_answersAggregateType<T>>

    /**
     * Group by Session_answers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_answersGroupByArgs} args - Group by arguments.
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
      T extends session_answersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: session_answersGroupByArgs['orderBy'] }
        : { orderBy?: session_answersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, session_answersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSession_answersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the session_answers model
   */
  readonly fields: session_answersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for session_answers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__session_answersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quest_checkpoints<T extends quest_checkpointsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, quest_checkpointsDefaultArgs<ExtArgs>>): Prisma__quest_checkpointsClient<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task_choice_options<T extends session_answers$task_choice_optionsArgs<ExtArgs> = {}>(args?: Subset<T, session_answers$task_choice_optionsArgs<ExtArgs>>): Prisma__task_choice_optionsClient<$Result.GetResult<Prisma.$task_choice_optionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends sessionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sessionsDefaultArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checkpoint_tasks<T extends checkpoint_tasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, checkpoint_tasksDefaultArgs<ExtArgs>>): Prisma__checkpoint_tasksClient<$Result.GetResult<Prisma.$checkpoint_tasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the session_answers model
   */
  interface session_answersFieldRefs {
    readonly id: FieldRef<"session_answers", 'Int'>
    readonly session_id: FieldRef<"session_answers", 'Int'>
    readonly checkpoint_id: FieldRef<"session_answers", 'Int'>
    readonly task_id: FieldRef<"session_answers", 'Int'>
    readonly answer_text: FieldRef<"session_answers", 'String'>
    readonly chosen_option_id: FieldRef<"session_answers", 'Int'>
    readonly is_correct: FieldRef<"session_answers", 'Boolean'>
    readonly answered_at: FieldRef<"session_answers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * session_answers findUnique
   */
  export type session_answersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
    /**
     * Filter, which session_answers to fetch.
     */
    where: session_answersWhereUniqueInput
  }

  /**
   * session_answers findUniqueOrThrow
   */
  export type session_answersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
    /**
     * Filter, which session_answers to fetch.
     */
    where: session_answersWhereUniqueInput
  }

  /**
   * session_answers findFirst
   */
  export type session_answersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
    /**
     * Filter, which session_answers to fetch.
     */
    where?: session_answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of session_answers to fetch.
     */
    orderBy?: session_answersOrderByWithRelationInput | session_answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for session_answers.
     */
    cursor?: session_answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` session_answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` session_answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of session_answers.
     */
    distinct?: Session_answersScalarFieldEnum | Session_answersScalarFieldEnum[]
  }

  /**
   * session_answers findFirstOrThrow
   */
  export type session_answersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
    /**
     * Filter, which session_answers to fetch.
     */
    where?: session_answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of session_answers to fetch.
     */
    orderBy?: session_answersOrderByWithRelationInput | session_answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for session_answers.
     */
    cursor?: session_answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` session_answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` session_answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of session_answers.
     */
    distinct?: Session_answersScalarFieldEnum | Session_answersScalarFieldEnum[]
  }

  /**
   * session_answers findMany
   */
  export type session_answersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
    /**
     * Filter, which session_answers to fetch.
     */
    where?: session_answersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of session_answers to fetch.
     */
    orderBy?: session_answersOrderByWithRelationInput | session_answersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing session_answers.
     */
    cursor?: session_answersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` session_answers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` session_answers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of session_answers.
     */
    distinct?: Session_answersScalarFieldEnum | Session_answersScalarFieldEnum[]
  }

  /**
   * session_answers create
   */
  export type session_answersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
    /**
     * The data needed to create a session_answers.
     */
    data: XOR<session_answersCreateInput, session_answersUncheckedCreateInput>
  }

  /**
   * session_answers createMany
   */
  export type session_answersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many session_answers.
     */
    data: session_answersCreateManyInput | session_answersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * session_answers createManyAndReturn
   */
  export type session_answersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * The data used to create many session_answers.
     */
    data: session_answersCreateManyInput | session_answersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * session_answers update
   */
  export type session_answersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
    /**
     * The data needed to update a session_answers.
     */
    data: XOR<session_answersUpdateInput, session_answersUncheckedUpdateInput>
    /**
     * Choose, which session_answers to update.
     */
    where: session_answersWhereUniqueInput
  }

  /**
   * session_answers updateMany
   */
  export type session_answersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update session_answers.
     */
    data: XOR<session_answersUpdateManyMutationInput, session_answersUncheckedUpdateManyInput>
    /**
     * Filter which session_answers to update
     */
    where?: session_answersWhereInput
    /**
     * Limit how many session_answers to update.
     */
    limit?: number
  }

  /**
   * session_answers updateManyAndReturn
   */
  export type session_answersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * The data used to update session_answers.
     */
    data: XOR<session_answersUpdateManyMutationInput, session_answersUncheckedUpdateManyInput>
    /**
     * Filter which session_answers to update
     */
    where?: session_answersWhereInput
    /**
     * Limit how many session_answers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * session_answers upsert
   */
  export type session_answersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
    /**
     * The filter to search for the session_answers to update in case it exists.
     */
    where: session_answersWhereUniqueInput
    /**
     * In case the session_answers found by the `where` argument doesn't exist, create a new session_answers with this data.
     */
    create: XOR<session_answersCreateInput, session_answersUncheckedCreateInput>
    /**
     * In case the session_answers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<session_answersUpdateInput, session_answersUncheckedUpdateInput>
  }

  /**
   * session_answers delete
   */
  export type session_answersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
    /**
     * Filter which session_answers to delete.
     */
    where: session_answersWhereUniqueInput
  }

  /**
   * session_answers deleteMany
   */
  export type session_answersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which session_answers to delete
     */
    where?: session_answersWhereInput
    /**
     * Limit how many session_answers to delete.
     */
    limit?: number
  }

  /**
   * session_answers.task_choice_options
   */
  export type session_answers$task_choice_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task_choice_options
     */
    select?: task_choice_optionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the task_choice_options
     */
    omit?: task_choice_optionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: task_choice_optionsInclude<ExtArgs> | null
    where?: task_choice_optionsWhereInput
  }

  /**
   * session_answers without action
   */
  export type session_answersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_answers
     */
    select?: session_answersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_answers
     */
    omit?: session_answersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_answersInclude<ExtArgs> | null
  }


  /**
   * Model session_checkpoints
   */

  export type AggregateSession_checkpoints = {
    _count: Session_checkpointsCountAggregateOutputType | null
    _avg: Session_checkpointsAvgAggregateOutputType | null
    _sum: Session_checkpointsSumAggregateOutputType | null
    _min: Session_checkpointsMinAggregateOutputType | null
    _max: Session_checkpointsMaxAggregateOutputType | null
  }

  export type Session_checkpointsAvgAggregateOutputType = {
    id: number | null
    session_id: number | null
    checkpoint_id: number | null
  }

  export type Session_checkpointsSumAggregateOutputType = {
    id: number | null
    session_id: number | null
    checkpoint_id: number | null
  }

  export type Session_checkpointsMinAggregateOutputType = {
    id: number | null
    session_id: number | null
    checkpoint_id: number | null
    status: string | null
    completed_at: Date | null
  }

  export type Session_checkpointsMaxAggregateOutputType = {
    id: number | null
    session_id: number | null
    checkpoint_id: number | null
    status: string | null
    completed_at: Date | null
  }

  export type Session_checkpointsCountAggregateOutputType = {
    id: number
    session_id: number
    checkpoint_id: number
    status: number
    completed_at: number
    _all: number
  }


  export type Session_checkpointsAvgAggregateInputType = {
    id?: true
    session_id?: true
    checkpoint_id?: true
  }

  export type Session_checkpointsSumAggregateInputType = {
    id?: true
    session_id?: true
    checkpoint_id?: true
  }

  export type Session_checkpointsMinAggregateInputType = {
    id?: true
    session_id?: true
    checkpoint_id?: true
    status?: true
    completed_at?: true
  }

  export type Session_checkpointsMaxAggregateInputType = {
    id?: true
    session_id?: true
    checkpoint_id?: true
    status?: true
    completed_at?: true
  }

  export type Session_checkpointsCountAggregateInputType = {
    id?: true
    session_id?: true
    checkpoint_id?: true
    status?: true
    completed_at?: true
    _all?: true
  }

  export type Session_checkpointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which session_checkpoints to aggregate.
     */
    where?: session_checkpointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of session_checkpoints to fetch.
     */
    orderBy?: session_checkpointsOrderByWithRelationInput | session_checkpointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: session_checkpointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` session_checkpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` session_checkpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned session_checkpoints
    **/
    _count?: true | Session_checkpointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Session_checkpointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Session_checkpointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Session_checkpointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Session_checkpointsMaxAggregateInputType
  }

  export type GetSession_checkpointsAggregateType<T extends Session_checkpointsAggregateArgs> = {
        [P in keyof T & keyof AggregateSession_checkpoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession_checkpoints[P]>
      : GetScalarType<T[P], AggregateSession_checkpoints[P]>
  }




  export type session_checkpointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: session_checkpointsWhereInput
    orderBy?: session_checkpointsOrderByWithAggregationInput | session_checkpointsOrderByWithAggregationInput[]
    by: Session_checkpointsScalarFieldEnum[] | Session_checkpointsScalarFieldEnum
    having?: session_checkpointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Session_checkpointsCountAggregateInputType | true
    _avg?: Session_checkpointsAvgAggregateInputType
    _sum?: Session_checkpointsSumAggregateInputType
    _min?: Session_checkpointsMinAggregateInputType
    _max?: Session_checkpointsMaxAggregateInputType
  }

  export type Session_checkpointsGroupByOutputType = {
    id: number
    session_id: number
    checkpoint_id: number
    status: string
    completed_at: Date | null
    _count: Session_checkpointsCountAggregateOutputType | null
    _avg: Session_checkpointsAvgAggregateOutputType | null
    _sum: Session_checkpointsSumAggregateOutputType | null
    _min: Session_checkpointsMinAggregateOutputType | null
    _max: Session_checkpointsMaxAggregateOutputType | null
  }

  type GetSession_checkpointsGroupByPayload<T extends session_checkpointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Session_checkpointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Session_checkpointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Session_checkpointsGroupByOutputType[P]>
            : GetScalarType<T[P], Session_checkpointsGroupByOutputType[P]>
        }
      >
    >


  export type session_checkpointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    checkpoint_id?: boolean
    status?: boolean
    completed_at?: boolean
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session_checkpoints"]>

  export type session_checkpointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    checkpoint_id?: boolean
    status?: boolean
    completed_at?: boolean
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session_checkpoints"]>

  export type session_checkpointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    session_id?: boolean
    checkpoint_id?: boolean
    status?: boolean
    completed_at?: boolean
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session_checkpoints"]>

  export type session_checkpointsSelectScalar = {
    id?: boolean
    session_id?: boolean
    checkpoint_id?: boolean
    status?: boolean
    completed_at?: boolean
  }

  export type session_checkpointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "session_id" | "checkpoint_id" | "status" | "completed_at", ExtArgs["result"]["session_checkpoints"]>
  export type session_checkpointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
  }
  export type session_checkpointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
  }
  export type session_checkpointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    quest_checkpoints?: boolean | quest_checkpointsDefaultArgs<ExtArgs>
    sessions?: boolean | sessionsDefaultArgs<ExtArgs>
  }

  export type $session_checkpointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "session_checkpoints"
    objects: {
      quest_checkpoints: Prisma.$quest_checkpointsPayload<ExtArgs>
      sessions: Prisma.$sessionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      session_id: number
      checkpoint_id: number
      status: string
      completed_at: Date | null
    }, ExtArgs["result"]["session_checkpoints"]>
    composites: {}
  }

  type session_checkpointsGetPayload<S extends boolean | null | undefined | session_checkpointsDefaultArgs> = $Result.GetResult<Prisma.$session_checkpointsPayload, S>

  type session_checkpointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<session_checkpointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Session_checkpointsCountAggregateInputType | true
    }

  export interface session_checkpointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['session_checkpoints'], meta: { name: 'session_checkpoints' } }
    /**
     * Find zero or one Session_checkpoints that matches the filter.
     * @param {session_checkpointsFindUniqueArgs} args - Arguments to find a Session_checkpoints
     * @example
     * // Get one Session_checkpoints
     * const session_checkpoints = await prisma.session_checkpoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends session_checkpointsFindUniqueArgs>(args: SelectSubset<T, session_checkpointsFindUniqueArgs<ExtArgs>>): Prisma__session_checkpointsClient<$Result.GetResult<Prisma.$session_checkpointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session_checkpoints that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {session_checkpointsFindUniqueOrThrowArgs} args - Arguments to find a Session_checkpoints
     * @example
     * // Get one Session_checkpoints
     * const session_checkpoints = await prisma.session_checkpoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends session_checkpointsFindUniqueOrThrowArgs>(args: SelectSubset<T, session_checkpointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__session_checkpointsClient<$Result.GetResult<Prisma.$session_checkpointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session_checkpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_checkpointsFindFirstArgs} args - Arguments to find a Session_checkpoints
     * @example
     * // Get one Session_checkpoints
     * const session_checkpoints = await prisma.session_checkpoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends session_checkpointsFindFirstArgs>(args?: SelectSubset<T, session_checkpointsFindFirstArgs<ExtArgs>>): Prisma__session_checkpointsClient<$Result.GetResult<Prisma.$session_checkpointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session_checkpoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_checkpointsFindFirstOrThrowArgs} args - Arguments to find a Session_checkpoints
     * @example
     * // Get one Session_checkpoints
     * const session_checkpoints = await prisma.session_checkpoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends session_checkpointsFindFirstOrThrowArgs>(args?: SelectSubset<T, session_checkpointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__session_checkpointsClient<$Result.GetResult<Prisma.$session_checkpointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Session_checkpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_checkpointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Session_checkpoints
     * const session_checkpoints = await prisma.session_checkpoints.findMany()
     * 
     * // Get first 10 Session_checkpoints
     * const session_checkpoints = await prisma.session_checkpoints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const session_checkpointsWithIdOnly = await prisma.session_checkpoints.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends session_checkpointsFindManyArgs>(args?: SelectSubset<T, session_checkpointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_checkpointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session_checkpoints.
     * @param {session_checkpointsCreateArgs} args - Arguments to create a Session_checkpoints.
     * @example
     * // Create one Session_checkpoints
     * const Session_checkpoints = await prisma.session_checkpoints.create({
     *   data: {
     *     // ... data to create a Session_checkpoints
     *   }
     * })
     * 
     */
    create<T extends session_checkpointsCreateArgs>(args: SelectSubset<T, session_checkpointsCreateArgs<ExtArgs>>): Prisma__session_checkpointsClient<$Result.GetResult<Prisma.$session_checkpointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Session_checkpoints.
     * @param {session_checkpointsCreateManyArgs} args - Arguments to create many Session_checkpoints.
     * @example
     * // Create many Session_checkpoints
     * const session_checkpoints = await prisma.session_checkpoints.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends session_checkpointsCreateManyArgs>(args?: SelectSubset<T, session_checkpointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Session_checkpoints and returns the data saved in the database.
     * @param {session_checkpointsCreateManyAndReturnArgs} args - Arguments to create many Session_checkpoints.
     * @example
     * // Create many Session_checkpoints
     * const session_checkpoints = await prisma.session_checkpoints.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Session_checkpoints and only return the `id`
     * const session_checkpointsWithIdOnly = await prisma.session_checkpoints.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends session_checkpointsCreateManyAndReturnArgs>(args?: SelectSubset<T, session_checkpointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_checkpointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session_checkpoints.
     * @param {session_checkpointsDeleteArgs} args - Arguments to delete one Session_checkpoints.
     * @example
     * // Delete one Session_checkpoints
     * const Session_checkpoints = await prisma.session_checkpoints.delete({
     *   where: {
     *     // ... filter to delete one Session_checkpoints
     *   }
     * })
     * 
     */
    delete<T extends session_checkpointsDeleteArgs>(args: SelectSubset<T, session_checkpointsDeleteArgs<ExtArgs>>): Prisma__session_checkpointsClient<$Result.GetResult<Prisma.$session_checkpointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session_checkpoints.
     * @param {session_checkpointsUpdateArgs} args - Arguments to update one Session_checkpoints.
     * @example
     * // Update one Session_checkpoints
     * const session_checkpoints = await prisma.session_checkpoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends session_checkpointsUpdateArgs>(args: SelectSubset<T, session_checkpointsUpdateArgs<ExtArgs>>): Prisma__session_checkpointsClient<$Result.GetResult<Prisma.$session_checkpointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Session_checkpoints.
     * @param {session_checkpointsDeleteManyArgs} args - Arguments to filter Session_checkpoints to delete.
     * @example
     * // Delete a few Session_checkpoints
     * const { count } = await prisma.session_checkpoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends session_checkpointsDeleteManyArgs>(args?: SelectSubset<T, session_checkpointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Session_checkpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_checkpointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Session_checkpoints
     * const session_checkpoints = await prisma.session_checkpoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends session_checkpointsUpdateManyArgs>(args: SelectSubset<T, session_checkpointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Session_checkpoints and returns the data updated in the database.
     * @param {session_checkpointsUpdateManyAndReturnArgs} args - Arguments to update many Session_checkpoints.
     * @example
     * // Update many Session_checkpoints
     * const session_checkpoints = await prisma.session_checkpoints.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Session_checkpoints and only return the `id`
     * const session_checkpointsWithIdOnly = await prisma.session_checkpoints.updateManyAndReturn({
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
    updateManyAndReturn<T extends session_checkpointsUpdateManyAndReturnArgs>(args: SelectSubset<T, session_checkpointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$session_checkpointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session_checkpoints.
     * @param {session_checkpointsUpsertArgs} args - Arguments to update or create a Session_checkpoints.
     * @example
     * // Update or create a Session_checkpoints
     * const session_checkpoints = await prisma.session_checkpoints.upsert({
     *   create: {
     *     // ... data to create a Session_checkpoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session_checkpoints we want to update
     *   }
     * })
     */
    upsert<T extends session_checkpointsUpsertArgs>(args: SelectSubset<T, session_checkpointsUpsertArgs<ExtArgs>>): Prisma__session_checkpointsClient<$Result.GetResult<Prisma.$session_checkpointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Session_checkpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_checkpointsCountArgs} args - Arguments to filter Session_checkpoints to count.
     * @example
     * // Count the number of Session_checkpoints
     * const count = await prisma.session_checkpoints.count({
     *   where: {
     *     // ... the filter for the Session_checkpoints we want to count
     *   }
     * })
    **/
    count<T extends session_checkpointsCountArgs>(
      args?: Subset<T, session_checkpointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Session_checkpointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session_checkpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Session_checkpointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Session_checkpointsAggregateArgs>(args: Subset<T, Session_checkpointsAggregateArgs>): Prisma.PrismaPromise<GetSession_checkpointsAggregateType<T>>

    /**
     * Group by Session_checkpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {session_checkpointsGroupByArgs} args - Group by arguments.
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
      T extends session_checkpointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: session_checkpointsGroupByArgs['orderBy'] }
        : { orderBy?: session_checkpointsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, session_checkpointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSession_checkpointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the session_checkpoints model
   */
  readonly fields: session_checkpointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for session_checkpoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__session_checkpointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    quest_checkpoints<T extends quest_checkpointsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, quest_checkpointsDefaultArgs<ExtArgs>>): Prisma__quest_checkpointsClient<$Result.GetResult<Prisma.$quest_checkpointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends sessionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sessionsDefaultArgs<ExtArgs>>): Prisma__sessionsClient<$Result.GetResult<Prisma.$sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the session_checkpoints model
   */
  interface session_checkpointsFieldRefs {
    readonly id: FieldRef<"session_checkpoints", 'Int'>
    readonly session_id: FieldRef<"session_checkpoints", 'Int'>
    readonly checkpoint_id: FieldRef<"session_checkpoints", 'Int'>
    readonly status: FieldRef<"session_checkpoints", 'String'>
    readonly completed_at: FieldRef<"session_checkpoints", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * session_checkpoints findUnique
   */
  export type session_checkpointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsInclude<ExtArgs> | null
    /**
     * Filter, which session_checkpoints to fetch.
     */
    where: session_checkpointsWhereUniqueInput
  }

  /**
   * session_checkpoints findUniqueOrThrow
   */
  export type session_checkpointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsInclude<ExtArgs> | null
    /**
     * Filter, which session_checkpoints to fetch.
     */
    where: session_checkpointsWhereUniqueInput
  }

  /**
   * session_checkpoints findFirst
   */
  export type session_checkpointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsInclude<ExtArgs> | null
    /**
     * Filter, which session_checkpoints to fetch.
     */
    where?: session_checkpointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of session_checkpoints to fetch.
     */
    orderBy?: session_checkpointsOrderByWithRelationInput | session_checkpointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for session_checkpoints.
     */
    cursor?: session_checkpointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` session_checkpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` session_checkpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of session_checkpoints.
     */
    distinct?: Session_checkpointsScalarFieldEnum | Session_checkpointsScalarFieldEnum[]
  }

  /**
   * session_checkpoints findFirstOrThrow
   */
  export type session_checkpointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsInclude<ExtArgs> | null
    /**
     * Filter, which session_checkpoints to fetch.
     */
    where?: session_checkpointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of session_checkpoints to fetch.
     */
    orderBy?: session_checkpointsOrderByWithRelationInput | session_checkpointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for session_checkpoints.
     */
    cursor?: session_checkpointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` session_checkpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` session_checkpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of session_checkpoints.
     */
    distinct?: Session_checkpointsScalarFieldEnum | Session_checkpointsScalarFieldEnum[]
  }

  /**
   * session_checkpoints findMany
   */
  export type session_checkpointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsInclude<ExtArgs> | null
    /**
     * Filter, which session_checkpoints to fetch.
     */
    where?: session_checkpointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of session_checkpoints to fetch.
     */
    orderBy?: session_checkpointsOrderByWithRelationInput | session_checkpointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing session_checkpoints.
     */
    cursor?: session_checkpointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` session_checkpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` session_checkpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of session_checkpoints.
     */
    distinct?: Session_checkpointsScalarFieldEnum | Session_checkpointsScalarFieldEnum[]
  }

  /**
   * session_checkpoints create
   */
  export type session_checkpointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsInclude<ExtArgs> | null
    /**
     * The data needed to create a session_checkpoints.
     */
    data: XOR<session_checkpointsCreateInput, session_checkpointsUncheckedCreateInput>
  }

  /**
   * session_checkpoints createMany
   */
  export type session_checkpointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many session_checkpoints.
     */
    data: session_checkpointsCreateManyInput | session_checkpointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * session_checkpoints createManyAndReturn
   */
  export type session_checkpointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * The data used to create many session_checkpoints.
     */
    data: session_checkpointsCreateManyInput | session_checkpointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * session_checkpoints update
   */
  export type session_checkpointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsInclude<ExtArgs> | null
    /**
     * The data needed to update a session_checkpoints.
     */
    data: XOR<session_checkpointsUpdateInput, session_checkpointsUncheckedUpdateInput>
    /**
     * Choose, which session_checkpoints to update.
     */
    where: session_checkpointsWhereUniqueInput
  }

  /**
   * session_checkpoints updateMany
   */
  export type session_checkpointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update session_checkpoints.
     */
    data: XOR<session_checkpointsUpdateManyMutationInput, session_checkpointsUncheckedUpdateManyInput>
    /**
     * Filter which session_checkpoints to update
     */
    where?: session_checkpointsWhereInput
    /**
     * Limit how many session_checkpoints to update.
     */
    limit?: number
  }

  /**
   * session_checkpoints updateManyAndReturn
   */
  export type session_checkpointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * The data used to update session_checkpoints.
     */
    data: XOR<session_checkpointsUpdateManyMutationInput, session_checkpointsUncheckedUpdateManyInput>
    /**
     * Filter which session_checkpoints to update
     */
    where?: session_checkpointsWhereInput
    /**
     * Limit how many session_checkpoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * session_checkpoints upsert
   */
  export type session_checkpointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsInclude<ExtArgs> | null
    /**
     * The filter to search for the session_checkpoints to update in case it exists.
     */
    where: session_checkpointsWhereUniqueInput
    /**
     * In case the session_checkpoints found by the `where` argument doesn't exist, create a new session_checkpoints with this data.
     */
    create: XOR<session_checkpointsCreateInput, session_checkpointsUncheckedCreateInput>
    /**
     * In case the session_checkpoints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<session_checkpointsUpdateInput, session_checkpointsUncheckedUpdateInput>
  }

  /**
   * session_checkpoints delete
   */
  export type session_checkpointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsInclude<ExtArgs> | null
    /**
     * Filter which session_checkpoints to delete.
     */
    where: session_checkpointsWhereUniqueInput
  }

  /**
   * session_checkpoints deleteMany
   */
  export type session_checkpointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which session_checkpoints to delete
     */
    where?: session_checkpointsWhereInput
    /**
     * Limit how many session_checkpoints to delete.
     */
    limit?: number
  }

  /**
   * session_checkpoints without action
   */
  export type session_checkpointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the session_checkpoints
     */
    select?: session_checkpointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the session_checkpoints
     */
    omit?: session_checkpointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: session_checkpointsInclude<ExtArgs> | null
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


  export const QuestsScalarFieldEnum: {
    id: 'id',
    creator_id: 'creator_id',
    title: 'title',
    description: 'description',
    location_text: 'location_text',
    image: 'image',
    difficulty: 'difficulty',
    duration_minutes: 'duration_minutes',
    rules: 'rules',
    status: 'status',
    is_hidden: 'is_hidden',
    created_at: 'created_at',
    updated_at: 'updated_at',
    rejection_reason: 'rejection_reason'
  };

  export type QuestsScalarFieldEnum = (typeof QuestsScalarFieldEnum)[keyof typeof QuestsScalarFieldEnum]


  export const Quest_checkpointsScalarFieldEnum: {
    id: 'id',
    quest_id: 'quest_id',
    order_index: 'order_index',
    title: 'title',
    task_description: 'task_description',
    code_word: 'code_word',
    latitude: 'latitude',
    longitude: 'longitude',
    hint: 'hint',
    point_rules: 'point_rules',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Quest_checkpointsScalarFieldEnum = (typeof Quest_checkpointsScalarFieldEnum)[keyof typeof Quest_checkpointsScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    id: 'id',
    quest_id: 'quest_id',
    user_id: 'user_id',
    team_id: 'team_id',
    status: 'status',
    transport_mode: 'transport_mode',
    started_at: 'started_at',
    finished_at: 'finished_at',
    current_checkpoint_order: 'current_checkpoint_order'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const Checkpoint_tasksScalarFieldEnum: {
    id: 'id',
    checkpoint_id: 'checkpoint_id',
    task_type: 'task_type',
    question_text: 'question_text',
    correct_answer: 'correct_answer',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Checkpoint_tasksScalarFieldEnum = (typeof Checkpoint_tasksScalarFieldEnum)[keyof typeof Checkpoint_tasksScalarFieldEnum]


  export const Task_choice_optionsScalarFieldEnum: {
    id: 'id',
    task_id: 'task_id',
    option_text: 'option_text'
  };

  export type Task_choice_optionsScalarFieldEnum = (typeof Task_choice_optionsScalarFieldEnum)[keyof typeof Task_choice_optionsScalarFieldEnum]


  export const Session_answersScalarFieldEnum: {
    id: 'id',
    session_id: 'session_id',
    checkpoint_id: 'checkpoint_id',
    task_id: 'task_id',
    answer_text: 'answer_text',
    chosen_option_id: 'chosen_option_id',
    is_correct: 'is_correct',
    answered_at: 'answered_at'
  };

  export type Session_answersScalarFieldEnum = (typeof Session_answersScalarFieldEnum)[keyof typeof Session_answersScalarFieldEnum]


  export const Session_checkpointsScalarFieldEnum: {
    id: 'id',
    session_id: 'session_id',
    checkpoint_id: 'checkpoint_id',
    status: 'status',
    completed_at: 'completed_at'
  };

  export type Session_checkpointsScalarFieldEnum = (typeof Session_checkpointsScalarFieldEnum)[keyof typeof Session_checkpointsScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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
    quests?: QuestsListRelationFilter
    sessions?: SessionsListRelationFilter
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
    quests?: questsOrderByRelationAggregateInput
    sessions?: sessionsOrderByRelationAggregateInput
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
    quests?: QuestsListRelationFilter
    sessions?: SessionsListRelationFilter
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
    sessions?: SessionsListRelationFilter
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
    sessions?: sessionsOrderByRelationAggregateInput
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
    sessions?: SessionsListRelationFilter
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

  export type questsWhereInput = {
    AND?: questsWhereInput | questsWhereInput[]
    OR?: questsWhereInput[]
    NOT?: questsWhereInput | questsWhereInput[]
    id?: IntFilter<"quests"> | number
    creator_id?: IntFilter<"quests"> | number
    title?: StringFilter<"quests"> | string
    description?: StringFilter<"quests"> | string
    location_text?: StringFilter<"quests"> | string
    image?: StringFilter<"quests"> | string
    difficulty?: IntFilter<"quests"> | number
    duration_minutes?: IntFilter<"quests"> | number
    rules?: StringNullableFilter<"quests"> | string | null
    status?: StringFilter<"quests"> | string
    is_hidden?: BoolNullableFilter<"quests"> | boolean | null
    created_at?: DateTimeFilter<"quests"> | Date | string
    updated_at?: DateTimeFilter<"quests"> | Date | string
    rejection_reason?: StringNullableFilter<"quests"> | string | null
    quest_checkpoints?: Quest_checkpointsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    sessions?: SessionsListRelationFilter
  }

  export type questsOrderByWithRelationInput = {
    id?: SortOrder
    creator_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location_text?: SortOrder
    image?: SortOrder
    difficulty?: SortOrder
    duration_minutes?: SortOrder
    rules?: SortOrderInput | SortOrder
    status?: SortOrder
    is_hidden?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    rejection_reason?: SortOrderInput | SortOrder
    quest_checkpoints?: quest_checkpointsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
    sessions?: sessionsOrderByRelationAggregateInput
  }

  export type questsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: questsWhereInput | questsWhereInput[]
    OR?: questsWhereInput[]
    NOT?: questsWhereInput | questsWhereInput[]
    creator_id?: IntFilter<"quests"> | number
    title?: StringFilter<"quests"> | string
    description?: StringFilter<"quests"> | string
    location_text?: StringFilter<"quests"> | string
    image?: StringFilter<"quests"> | string
    difficulty?: IntFilter<"quests"> | number
    duration_minutes?: IntFilter<"quests"> | number
    rules?: StringNullableFilter<"quests"> | string | null
    status?: StringFilter<"quests"> | string
    is_hidden?: BoolNullableFilter<"quests"> | boolean | null
    created_at?: DateTimeFilter<"quests"> | Date | string
    updated_at?: DateTimeFilter<"quests"> | Date | string
    rejection_reason?: StringNullableFilter<"quests"> | string | null
    quest_checkpoints?: Quest_checkpointsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
    sessions?: SessionsListRelationFilter
  }, "id">

  export type questsOrderByWithAggregationInput = {
    id?: SortOrder
    creator_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location_text?: SortOrder
    image?: SortOrder
    difficulty?: SortOrder
    duration_minutes?: SortOrder
    rules?: SortOrderInput | SortOrder
    status?: SortOrder
    is_hidden?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    rejection_reason?: SortOrderInput | SortOrder
    _count?: questsCountOrderByAggregateInput
    _avg?: questsAvgOrderByAggregateInput
    _max?: questsMaxOrderByAggregateInput
    _min?: questsMinOrderByAggregateInput
    _sum?: questsSumOrderByAggregateInput
  }

  export type questsScalarWhereWithAggregatesInput = {
    AND?: questsScalarWhereWithAggregatesInput | questsScalarWhereWithAggregatesInput[]
    OR?: questsScalarWhereWithAggregatesInput[]
    NOT?: questsScalarWhereWithAggregatesInput | questsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"quests"> | number
    creator_id?: IntWithAggregatesFilter<"quests"> | number
    title?: StringWithAggregatesFilter<"quests"> | string
    description?: StringWithAggregatesFilter<"quests"> | string
    location_text?: StringWithAggregatesFilter<"quests"> | string
    image?: StringWithAggregatesFilter<"quests"> | string
    difficulty?: IntWithAggregatesFilter<"quests"> | number
    duration_minutes?: IntWithAggregatesFilter<"quests"> | number
    rules?: StringNullableWithAggregatesFilter<"quests"> | string | null
    status?: StringWithAggregatesFilter<"quests"> | string
    is_hidden?: BoolNullableWithAggregatesFilter<"quests"> | boolean | null
    created_at?: DateTimeWithAggregatesFilter<"quests"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"quests"> | Date | string
    rejection_reason?: StringNullableWithAggregatesFilter<"quests"> | string | null
  }

  export type quest_checkpointsWhereInput = {
    AND?: quest_checkpointsWhereInput | quest_checkpointsWhereInput[]
    OR?: quest_checkpointsWhereInput[]
    NOT?: quest_checkpointsWhereInput | quest_checkpointsWhereInput[]
    id?: IntFilter<"quest_checkpoints"> | number
    quest_id?: IntFilter<"quest_checkpoints"> | number
    order_index?: IntFilter<"quest_checkpoints"> | number
    title?: StringFilter<"quest_checkpoints"> | string
    task_description?: StringFilter<"quest_checkpoints"> | string
    code_word?: StringFilter<"quest_checkpoints"> | string
    latitude?: DecimalFilter<"quest_checkpoints"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"quest_checkpoints"> | Decimal | DecimalJsLike | number | string
    hint?: StringNullableFilter<"quest_checkpoints"> | string | null
    point_rules?: StringNullableFilter<"quest_checkpoints"> | string | null
    created_at?: DateTimeFilter<"quest_checkpoints"> | Date | string
    updated_at?: DateTimeFilter<"quest_checkpoints"> | Date | string
    checkpoint_tasks?: Checkpoint_tasksListRelationFilter
    quests?: XOR<QuestsScalarRelationFilter, questsWhereInput>
    session_answers?: Session_answersListRelationFilter
    session_checkpoints?: Session_checkpointsListRelationFilter
  }

  export type quest_checkpointsOrderByWithRelationInput = {
    id?: SortOrder
    quest_id?: SortOrder
    order_index?: SortOrder
    title?: SortOrder
    task_description?: SortOrder
    code_word?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    hint?: SortOrderInput | SortOrder
    point_rules?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    checkpoint_tasks?: checkpoint_tasksOrderByRelationAggregateInput
    quests?: questsOrderByWithRelationInput
    session_answers?: session_answersOrderByRelationAggregateInput
    session_checkpoints?: session_checkpointsOrderByRelationAggregateInput
  }

  export type quest_checkpointsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    quest_id_order_index?: quest_checkpointsQuest_idOrder_indexCompoundUniqueInput
    AND?: quest_checkpointsWhereInput | quest_checkpointsWhereInput[]
    OR?: quest_checkpointsWhereInput[]
    NOT?: quest_checkpointsWhereInput | quest_checkpointsWhereInput[]
    quest_id?: IntFilter<"quest_checkpoints"> | number
    order_index?: IntFilter<"quest_checkpoints"> | number
    title?: StringFilter<"quest_checkpoints"> | string
    task_description?: StringFilter<"quest_checkpoints"> | string
    code_word?: StringFilter<"quest_checkpoints"> | string
    latitude?: DecimalFilter<"quest_checkpoints"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"quest_checkpoints"> | Decimal | DecimalJsLike | number | string
    hint?: StringNullableFilter<"quest_checkpoints"> | string | null
    point_rules?: StringNullableFilter<"quest_checkpoints"> | string | null
    created_at?: DateTimeFilter<"quest_checkpoints"> | Date | string
    updated_at?: DateTimeFilter<"quest_checkpoints"> | Date | string
    checkpoint_tasks?: Checkpoint_tasksListRelationFilter
    quests?: XOR<QuestsScalarRelationFilter, questsWhereInput>
    session_answers?: Session_answersListRelationFilter
    session_checkpoints?: Session_checkpointsListRelationFilter
  }, "id" | "quest_id_order_index">

  export type quest_checkpointsOrderByWithAggregationInput = {
    id?: SortOrder
    quest_id?: SortOrder
    order_index?: SortOrder
    title?: SortOrder
    task_description?: SortOrder
    code_word?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    hint?: SortOrderInput | SortOrder
    point_rules?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: quest_checkpointsCountOrderByAggregateInput
    _avg?: quest_checkpointsAvgOrderByAggregateInput
    _max?: quest_checkpointsMaxOrderByAggregateInput
    _min?: quest_checkpointsMinOrderByAggregateInput
    _sum?: quest_checkpointsSumOrderByAggregateInput
  }

  export type quest_checkpointsScalarWhereWithAggregatesInput = {
    AND?: quest_checkpointsScalarWhereWithAggregatesInput | quest_checkpointsScalarWhereWithAggregatesInput[]
    OR?: quest_checkpointsScalarWhereWithAggregatesInput[]
    NOT?: quest_checkpointsScalarWhereWithAggregatesInput | quest_checkpointsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"quest_checkpoints"> | number
    quest_id?: IntWithAggregatesFilter<"quest_checkpoints"> | number
    order_index?: IntWithAggregatesFilter<"quest_checkpoints"> | number
    title?: StringWithAggregatesFilter<"quest_checkpoints"> | string
    task_description?: StringWithAggregatesFilter<"quest_checkpoints"> | string
    code_word?: StringWithAggregatesFilter<"quest_checkpoints"> | string
    latitude?: DecimalWithAggregatesFilter<"quest_checkpoints"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalWithAggregatesFilter<"quest_checkpoints"> | Decimal | DecimalJsLike | number | string
    hint?: StringNullableWithAggregatesFilter<"quest_checkpoints"> | string | null
    point_rules?: StringNullableWithAggregatesFilter<"quest_checkpoints"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"quest_checkpoints"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"quest_checkpoints"> | Date | string
  }

  export type sessionsWhereInput = {
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    id?: IntFilter<"sessions"> | number
    quest_id?: IntFilter<"sessions"> | number
    user_id?: IntNullableFilter<"sessions"> | number | null
    team_id?: IntNullableFilter<"sessions"> | number | null
    status?: StringFilter<"sessions"> | string
    transport_mode?: StringNullableFilter<"sessions"> | string | null
    started_at?: DateTimeFilter<"sessions"> | Date | string
    finished_at?: DateTimeNullableFilter<"sessions"> | Date | string | null
    current_checkpoint_order?: IntNullableFilter<"sessions"> | number | null
    session_answers?: Session_answersListRelationFilter
    session_checkpoints?: Session_checkpointsListRelationFilter
    quests?: XOR<QuestsScalarRelationFilter, questsWhereInput>
    teams?: XOR<TeamsNullableScalarRelationFilter, teamsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type sessionsOrderByWithRelationInput = {
    id?: SortOrder
    quest_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    team_id?: SortOrderInput | SortOrder
    status?: SortOrder
    transport_mode?: SortOrderInput | SortOrder
    started_at?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    current_checkpoint_order?: SortOrderInput | SortOrder
    session_answers?: session_answersOrderByRelationAggregateInput
    session_checkpoints?: session_checkpointsOrderByRelationAggregateInput
    quests?: questsOrderByWithRelationInput
    teams?: teamsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sessionsWhereInput | sessionsWhereInput[]
    OR?: sessionsWhereInput[]
    NOT?: sessionsWhereInput | sessionsWhereInput[]
    quest_id?: IntFilter<"sessions"> | number
    user_id?: IntNullableFilter<"sessions"> | number | null
    team_id?: IntNullableFilter<"sessions"> | number | null
    status?: StringFilter<"sessions"> | string
    transport_mode?: StringNullableFilter<"sessions"> | string | null
    started_at?: DateTimeFilter<"sessions"> | Date | string
    finished_at?: DateTimeNullableFilter<"sessions"> | Date | string | null
    current_checkpoint_order?: IntNullableFilter<"sessions"> | number | null
    session_answers?: Session_answersListRelationFilter
    session_checkpoints?: Session_checkpointsListRelationFilter
    quests?: XOR<QuestsScalarRelationFilter, questsWhereInput>
    teams?: XOR<TeamsNullableScalarRelationFilter, teamsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    quest_id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    team_id?: SortOrderInput | SortOrder
    status?: SortOrder
    transport_mode?: SortOrderInput | SortOrder
    started_at?: SortOrder
    finished_at?: SortOrderInput | SortOrder
    current_checkpoint_order?: SortOrderInput | SortOrder
    _count?: sessionsCountOrderByAggregateInput
    _avg?: sessionsAvgOrderByAggregateInput
    _max?: sessionsMaxOrderByAggregateInput
    _min?: sessionsMinOrderByAggregateInput
    _sum?: sessionsSumOrderByAggregateInput
  }

  export type sessionsScalarWhereWithAggregatesInput = {
    AND?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    OR?: sessionsScalarWhereWithAggregatesInput[]
    NOT?: sessionsScalarWhereWithAggregatesInput | sessionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sessions"> | number
    quest_id?: IntWithAggregatesFilter<"sessions"> | number
    user_id?: IntNullableWithAggregatesFilter<"sessions"> | number | null
    team_id?: IntNullableWithAggregatesFilter<"sessions"> | number | null
    status?: StringWithAggregatesFilter<"sessions"> | string
    transport_mode?: StringNullableWithAggregatesFilter<"sessions"> | string | null
    started_at?: DateTimeWithAggregatesFilter<"sessions"> | Date | string
    finished_at?: DateTimeNullableWithAggregatesFilter<"sessions"> | Date | string | null
    current_checkpoint_order?: IntNullableWithAggregatesFilter<"sessions"> | number | null
  }

  export type checkpoint_tasksWhereInput = {
    AND?: checkpoint_tasksWhereInput | checkpoint_tasksWhereInput[]
    OR?: checkpoint_tasksWhereInput[]
    NOT?: checkpoint_tasksWhereInput | checkpoint_tasksWhereInput[]
    id?: IntFilter<"checkpoint_tasks"> | number
    checkpoint_id?: IntFilter<"checkpoint_tasks"> | number
    task_type?: StringFilter<"checkpoint_tasks"> | string
    question_text?: StringNullableFilter<"checkpoint_tasks"> | string | null
    correct_answer?: StringFilter<"checkpoint_tasks"> | string
    created_at?: DateTimeFilter<"checkpoint_tasks"> | Date | string
    updated_at?: DateTimeFilter<"checkpoint_tasks"> | Date | string
    quest_checkpoints?: XOR<Quest_checkpointsScalarRelationFilter, quest_checkpointsWhereInput>
    session_answers?: Session_answersListRelationFilter
    task_choice_options?: Task_choice_optionsListRelationFilter
  }

  export type checkpoint_tasksOrderByWithRelationInput = {
    id?: SortOrder
    checkpoint_id?: SortOrder
    task_type?: SortOrder
    question_text?: SortOrderInput | SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    quest_checkpoints?: quest_checkpointsOrderByWithRelationInput
    session_answers?: session_answersOrderByRelationAggregateInput
    task_choice_options?: task_choice_optionsOrderByRelationAggregateInput
  }

  export type checkpoint_tasksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    checkpoint_id_task_type?: checkpoint_tasksCheckpoint_idTask_typeCompoundUniqueInput
    AND?: checkpoint_tasksWhereInput | checkpoint_tasksWhereInput[]
    OR?: checkpoint_tasksWhereInput[]
    NOT?: checkpoint_tasksWhereInput | checkpoint_tasksWhereInput[]
    checkpoint_id?: IntFilter<"checkpoint_tasks"> | number
    task_type?: StringFilter<"checkpoint_tasks"> | string
    question_text?: StringNullableFilter<"checkpoint_tasks"> | string | null
    correct_answer?: StringFilter<"checkpoint_tasks"> | string
    created_at?: DateTimeFilter<"checkpoint_tasks"> | Date | string
    updated_at?: DateTimeFilter<"checkpoint_tasks"> | Date | string
    quest_checkpoints?: XOR<Quest_checkpointsScalarRelationFilter, quest_checkpointsWhereInput>
    session_answers?: Session_answersListRelationFilter
    task_choice_options?: Task_choice_optionsListRelationFilter
  }, "id" | "checkpoint_id_task_type">

  export type checkpoint_tasksOrderByWithAggregationInput = {
    id?: SortOrder
    checkpoint_id?: SortOrder
    task_type?: SortOrder
    question_text?: SortOrderInput | SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: checkpoint_tasksCountOrderByAggregateInput
    _avg?: checkpoint_tasksAvgOrderByAggregateInput
    _max?: checkpoint_tasksMaxOrderByAggregateInput
    _min?: checkpoint_tasksMinOrderByAggregateInput
    _sum?: checkpoint_tasksSumOrderByAggregateInput
  }

  export type checkpoint_tasksScalarWhereWithAggregatesInput = {
    AND?: checkpoint_tasksScalarWhereWithAggregatesInput | checkpoint_tasksScalarWhereWithAggregatesInput[]
    OR?: checkpoint_tasksScalarWhereWithAggregatesInput[]
    NOT?: checkpoint_tasksScalarWhereWithAggregatesInput | checkpoint_tasksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"checkpoint_tasks"> | number
    checkpoint_id?: IntWithAggregatesFilter<"checkpoint_tasks"> | number
    task_type?: StringWithAggregatesFilter<"checkpoint_tasks"> | string
    question_text?: StringNullableWithAggregatesFilter<"checkpoint_tasks"> | string | null
    correct_answer?: StringWithAggregatesFilter<"checkpoint_tasks"> | string
    created_at?: DateTimeWithAggregatesFilter<"checkpoint_tasks"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"checkpoint_tasks"> | Date | string
  }

  export type task_choice_optionsWhereInput = {
    AND?: task_choice_optionsWhereInput | task_choice_optionsWhereInput[]
    OR?: task_choice_optionsWhereInput[]
    NOT?: task_choice_optionsWhereInput | task_choice_optionsWhereInput[]
    id?: IntFilter<"task_choice_options"> | number
    task_id?: IntFilter<"task_choice_options"> | number
    option_text?: StringFilter<"task_choice_options"> | string
    session_answers?: Session_answersListRelationFilter
    checkpoint_tasks?: XOR<Checkpoint_tasksScalarRelationFilter, checkpoint_tasksWhereInput>
  }

  export type task_choice_optionsOrderByWithRelationInput = {
    id?: SortOrder
    task_id?: SortOrder
    option_text?: SortOrder
    session_answers?: session_answersOrderByRelationAggregateInput
    checkpoint_tasks?: checkpoint_tasksOrderByWithRelationInput
  }

  export type task_choice_optionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    task_id_option_text?: task_choice_optionsTask_idOption_textCompoundUniqueInput
    AND?: task_choice_optionsWhereInput | task_choice_optionsWhereInput[]
    OR?: task_choice_optionsWhereInput[]
    NOT?: task_choice_optionsWhereInput | task_choice_optionsWhereInput[]
    task_id?: IntFilter<"task_choice_options"> | number
    option_text?: StringFilter<"task_choice_options"> | string
    session_answers?: Session_answersListRelationFilter
    checkpoint_tasks?: XOR<Checkpoint_tasksScalarRelationFilter, checkpoint_tasksWhereInput>
  }, "id" | "task_id_option_text">

  export type task_choice_optionsOrderByWithAggregationInput = {
    id?: SortOrder
    task_id?: SortOrder
    option_text?: SortOrder
    _count?: task_choice_optionsCountOrderByAggregateInput
    _avg?: task_choice_optionsAvgOrderByAggregateInput
    _max?: task_choice_optionsMaxOrderByAggregateInput
    _min?: task_choice_optionsMinOrderByAggregateInput
    _sum?: task_choice_optionsSumOrderByAggregateInput
  }

  export type task_choice_optionsScalarWhereWithAggregatesInput = {
    AND?: task_choice_optionsScalarWhereWithAggregatesInput | task_choice_optionsScalarWhereWithAggregatesInput[]
    OR?: task_choice_optionsScalarWhereWithAggregatesInput[]
    NOT?: task_choice_optionsScalarWhereWithAggregatesInput | task_choice_optionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"task_choice_options"> | number
    task_id?: IntWithAggregatesFilter<"task_choice_options"> | number
    option_text?: StringWithAggregatesFilter<"task_choice_options"> | string
  }

  export type session_answersWhereInput = {
    AND?: session_answersWhereInput | session_answersWhereInput[]
    OR?: session_answersWhereInput[]
    NOT?: session_answersWhereInput | session_answersWhereInput[]
    id?: IntFilter<"session_answers"> | number
    session_id?: IntFilter<"session_answers"> | number
    checkpoint_id?: IntFilter<"session_answers"> | number
    task_id?: IntFilter<"session_answers"> | number
    answer_text?: StringNullableFilter<"session_answers"> | string | null
    chosen_option_id?: IntNullableFilter<"session_answers"> | number | null
    is_correct?: BoolFilter<"session_answers"> | boolean
    answered_at?: DateTimeFilter<"session_answers"> | Date | string
    quest_checkpoints?: XOR<Quest_checkpointsScalarRelationFilter, quest_checkpointsWhereInput>
    task_choice_options?: XOR<Task_choice_optionsNullableScalarRelationFilter, task_choice_optionsWhereInput> | null
    sessions?: XOR<SessionsScalarRelationFilter, sessionsWhereInput>
    checkpoint_tasks?: XOR<Checkpoint_tasksScalarRelationFilter, checkpoint_tasksWhereInput>
  }

  export type session_answersOrderByWithRelationInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
    task_id?: SortOrder
    answer_text?: SortOrderInput | SortOrder
    chosen_option_id?: SortOrderInput | SortOrder
    is_correct?: SortOrder
    answered_at?: SortOrder
    quest_checkpoints?: quest_checkpointsOrderByWithRelationInput
    task_choice_options?: task_choice_optionsOrderByWithRelationInput
    sessions?: sessionsOrderByWithRelationInput
    checkpoint_tasks?: checkpoint_tasksOrderByWithRelationInput
  }

  export type session_answersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    session_id_checkpoint_id_task_id?: session_answersSession_idCheckpoint_idTask_idCompoundUniqueInput
    AND?: session_answersWhereInput | session_answersWhereInput[]
    OR?: session_answersWhereInput[]
    NOT?: session_answersWhereInput | session_answersWhereInput[]
    session_id?: IntFilter<"session_answers"> | number
    checkpoint_id?: IntFilter<"session_answers"> | number
    task_id?: IntFilter<"session_answers"> | number
    answer_text?: StringNullableFilter<"session_answers"> | string | null
    chosen_option_id?: IntNullableFilter<"session_answers"> | number | null
    is_correct?: BoolFilter<"session_answers"> | boolean
    answered_at?: DateTimeFilter<"session_answers"> | Date | string
    quest_checkpoints?: XOR<Quest_checkpointsScalarRelationFilter, quest_checkpointsWhereInput>
    task_choice_options?: XOR<Task_choice_optionsNullableScalarRelationFilter, task_choice_optionsWhereInput> | null
    sessions?: XOR<SessionsScalarRelationFilter, sessionsWhereInput>
    checkpoint_tasks?: XOR<Checkpoint_tasksScalarRelationFilter, checkpoint_tasksWhereInput>
  }, "id" | "session_id_checkpoint_id_task_id">

  export type session_answersOrderByWithAggregationInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
    task_id?: SortOrder
    answer_text?: SortOrderInput | SortOrder
    chosen_option_id?: SortOrderInput | SortOrder
    is_correct?: SortOrder
    answered_at?: SortOrder
    _count?: session_answersCountOrderByAggregateInput
    _avg?: session_answersAvgOrderByAggregateInput
    _max?: session_answersMaxOrderByAggregateInput
    _min?: session_answersMinOrderByAggregateInput
    _sum?: session_answersSumOrderByAggregateInput
  }

  export type session_answersScalarWhereWithAggregatesInput = {
    AND?: session_answersScalarWhereWithAggregatesInput | session_answersScalarWhereWithAggregatesInput[]
    OR?: session_answersScalarWhereWithAggregatesInput[]
    NOT?: session_answersScalarWhereWithAggregatesInput | session_answersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"session_answers"> | number
    session_id?: IntWithAggregatesFilter<"session_answers"> | number
    checkpoint_id?: IntWithAggregatesFilter<"session_answers"> | number
    task_id?: IntWithAggregatesFilter<"session_answers"> | number
    answer_text?: StringNullableWithAggregatesFilter<"session_answers"> | string | null
    chosen_option_id?: IntNullableWithAggregatesFilter<"session_answers"> | number | null
    is_correct?: BoolWithAggregatesFilter<"session_answers"> | boolean
    answered_at?: DateTimeWithAggregatesFilter<"session_answers"> | Date | string
  }

  export type session_checkpointsWhereInput = {
    AND?: session_checkpointsWhereInput | session_checkpointsWhereInput[]
    OR?: session_checkpointsWhereInput[]
    NOT?: session_checkpointsWhereInput | session_checkpointsWhereInput[]
    id?: IntFilter<"session_checkpoints"> | number
    session_id?: IntFilter<"session_checkpoints"> | number
    checkpoint_id?: IntFilter<"session_checkpoints"> | number
    status?: StringFilter<"session_checkpoints"> | string
    completed_at?: DateTimeNullableFilter<"session_checkpoints"> | Date | string | null
    quest_checkpoints?: XOR<Quest_checkpointsScalarRelationFilter, quest_checkpointsWhereInput>
    sessions?: XOR<SessionsScalarRelationFilter, sessionsWhereInput>
  }

  export type session_checkpointsOrderByWithRelationInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
    status?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    quest_checkpoints?: quest_checkpointsOrderByWithRelationInput
    sessions?: sessionsOrderByWithRelationInput
  }

  export type session_checkpointsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    session_id_checkpoint_id?: session_checkpointsSession_idCheckpoint_idCompoundUniqueInput
    AND?: session_checkpointsWhereInput | session_checkpointsWhereInput[]
    OR?: session_checkpointsWhereInput[]
    NOT?: session_checkpointsWhereInput | session_checkpointsWhereInput[]
    session_id?: IntFilter<"session_checkpoints"> | number
    checkpoint_id?: IntFilter<"session_checkpoints"> | number
    status?: StringFilter<"session_checkpoints"> | string
    completed_at?: DateTimeNullableFilter<"session_checkpoints"> | Date | string | null
    quest_checkpoints?: XOR<Quest_checkpointsScalarRelationFilter, quest_checkpointsWhereInput>
    sessions?: XOR<SessionsScalarRelationFilter, sessionsWhereInput>
  }, "id" | "session_id_checkpoint_id">

  export type session_checkpointsOrderByWithAggregationInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
    status?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    _count?: session_checkpointsCountOrderByAggregateInput
    _avg?: session_checkpointsAvgOrderByAggregateInput
    _max?: session_checkpointsMaxOrderByAggregateInput
    _min?: session_checkpointsMinOrderByAggregateInput
    _sum?: session_checkpointsSumOrderByAggregateInput
  }

  export type session_checkpointsScalarWhereWithAggregatesInput = {
    AND?: session_checkpointsScalarWhereWithAggregatesInput | session_checkpointsScalarWhereWithAggregatesInput[]
    OR?: session_checkpointsScalarWhereWithAggregatesInput[]
    NOT?: session_checkpointsScalarWhereWithAggregatesInput | session_checkpointsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"session_checkpoints"> | number
    session_id?: IntWithAggregatesFilter<"session_checkpoints"> | number
    checkpoint_id?: IntWithAggregatesFilter<"session_checkpoints"> | number
    status?: StringWithAggregatesFilter<"session_checkpoints"> | string
    completed_at?: DateTimeNullableWithAggregatesFilter<"session_checkpoints"> | Date | string | null
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
    quests?: questsCreateNestedManyWithoutUsersInput
    sessions?: sessionsCreateNestedManyWithoutUsersInput
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
    quests?: questsUncheckedCreateNestedManyWithoutUsersInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutUsersInput
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
    quests?: questsUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUpdateManyWithoutUsersNestedInput
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
    quests?: questsUncheckedUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutUsersNestedInput
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
    sessions?: sessionsCreateNestedManyWithoutTeamsInput
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
    sessions?: sessionsUncheckedCreateNestedManyWithoutTeamsInput
    team_members?: team_membersUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: sessionsUpdateManyWithoutTeamsNestedInput
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
    sessions?: sessionsUncheckedUpdateManyWithoutTeamsNestedInput
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

  export type questsCreateInput = {
    title: string
    description: string
    location_text: string
    image: string
    difficulty: number
    duration_minutes: number
    rules?: string | null
    status: string
    is_hidden?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    rejection_reason?: string | null
    quest_checkpoints?: quest_checkpointsCreateNestedManyWithoutQuestsInput
    users: usersCreateNestedOneWithoutQuestsInput
    sessions?: sessionsCreateNestedManyWithoutQuestsInput
  }

  export type questsUncheckedCreateInput = {
    id?: number
    creator_id: number
    title: string
    description: string
    location_text: string
    image: string
    difficulty: number
    duration_minutes: number
    rules?: string | null
    status: string
    is_hidden?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    rejection_reason?: string | null
    quest_checkpoints?: quest_checkpointsUncheckedCreateNestedManyWithoutQuestsInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutQuestsInput
  }

  export type questsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location_text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_hidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    quest_checkpoints?: quest_checkpointsUpdateManyWithoutQuestsNestedInput
    users?: usersUpdateOneRequiredWithoutQuestsNestedInput
    sessions?: sessionsUpdateManyWithoutQuestsNestedInput
  }

  export type questsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    creator_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location_text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_hidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    quest_checkpoints?: quest_checkpointsUncheckedUpdateManyWithoutQuestsNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutQuestsNestedInput
  }

  export type questsCreateManyInput = {
    id?: number
    creator_id: number
    title: string
    description: string
    location_text: string
    image: string
    difficulty: number
    duration_minutes: number
    rules?: string | null
    status: string
    is_hidden?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    rejection_reason?: string | null
  }

  export type questsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location_text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_hidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type questsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    creator_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location_text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_hidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type quest_checkpointsCreateInput = {
    order_index: number
    title: string
    task_description: string
    code_word: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    hint?: string | null
    point_rules?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    checkpoint_tasks?: checkpoint_tasksCreateNestedManyWithoutQuest_checkpointsInput
    quests: questsCreateNestedOneWithoutQuest_checkpointsInput
    session_answers?: session_answersCreateNestedManyWithoutQuest_checkpointsInput
    session_checkpoints?: session_checkpointsCreateNestedManyWithoutQuest_checkpointsInput
  }

  export type quest_checkpointsUncheckedCreateInput = {
    id?: number
    quest_id: number
    order_index: number
    title: string
    task_description: string
    code_word: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    hint?: string | null
    point_rules?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    checkpoint_tasks?: checkpoint_tasksUncheckedCreateNestedManyWithoutQuest_checkpointsInput
    session_answers?: session_answersUncheckedCreateNestedManyWithoutQuest_checkpointsInput
    session_checkpoints?: session_checkpointsUncheckedCreateNestedManyWithoutQuest_checkpointsInput
  }

  export type quest_checkpointsUpdateInput = {
    order_index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    code_word?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    point_rules?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoint_tasks?: checkpoint_tasksUpdateManyWithoutQuest_checkpointsNestedInput
    quests?: questsUpdateOneRequiredWithoutQuest_checkpointsNestedInput
    session_answers?: session_answersUpdateManyWithoutQuest_checkpointsNestedInput
    session_checkpoints?: session_checkpointsUpdateManyWithoutQuest_checkpointsNestedInput
  }

  export type quest_checkpointsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    code_word?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    point_rules?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoint_tasks?: checkpoint_tasksUncheckedUpdateManyWithoutQuest_checkpointsNestedInput
    session_answers?: session_answersUncheckedUpdateManyWithoutQuest_checkpointsNestedInput
    session_checkpoints?: session_checkpointsUncheckedUpdateManyWithoutQuest_checkpointsNestedInput
  }

  export type quest_checkpointsCreateManyInput = {
    id?: number
    quest_id: number
    order_index: number
    title: string
    task_description: string
    code_word: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    hint?: string | null
    point_rules?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type quest_checkpointsUpdateManyMutationInput = {
    order_index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    code_word?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    point_rules?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type quest_checkpointsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    code_word?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    point_rules?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsCreateInput = {
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
    session_answers?: session_answersCreateNestedManyWithoutSessionsInput
    session_checkpoints?: session_checkpointsCreateNestedManyWithoutSessionsInput
    quests: questsCreateNestedOneWithoutSessionsInput
    teams?: teamsCreateNestedOneWithoutSessionsInput
    users?: usersCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateInput = {
    id?: number
    quest_id: number
    user_id?: number | null
    team_id?: number | null
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
    session_answers?: session_answersUncheckedCreateNestedManyWithoutSessionsInput
    session_checkpoints?: session_checkpointsUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type sessionsUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
    session_answers?: session_answersUpdateManyWithoutSessionsNestedInput
    session_checkpoints?: session_checkpointsUpdateManyWithoutSessionsNestedInput
    quests?: questsUpdateOneRequiredWithoutSessionsNestedInput
    teams?: teamsUpdateOneWithoutSessionsNestedInput
    users?: usersUpdateOneWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
    session_answers?: session_answersUncheckedUpdateManyWithoutSessionsNestedInput
    session_checkpoints?: session_checkpointsUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type sessionsCreateManyInput = {
    id?: number
    quest_id: number
    user_id?: number | null
    team_id?: number | null
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
  }

  export type sessionsUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type sessionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type checkpoint_tasksCreateInput = {
    task_type: string
    question_text?: string | null
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    quest_checkpoints: quest_checkpointsCreateNestedOneWithoutCheckpoint_tasksInput
    session_answers?: session_answersCreateNestedManyWithoutCheckpoint_tasksInput
    task_choice_options?: task_choice_optionsCreateNestedManyWithoutCheckpoint_tasksInput
  }

  export type checkpoint_tasksUncheckedCreateInput = {
    id?: number
    checkpoint_id: number
    task_type: string
    question_text?: string | null
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    session_answers?: session_answersUncheckedCreateNestedManyWithoutCheckpoint_tasksInput
    task_choice_options?: task_choice_optionsUncheckedCreateNestedManyWithoutCheckpoint_tasksInput
  }

  export type checkpoint_tasksUpdateInput = {
    task_type?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quest_checkpoints?: quest_checkpointsUpdateOneRequiredWithoutCheckpoint_tasksNestedInput
    session_answers?: session_answersUpdateManyWithoutCheckpoint_tasksNestedInput
    task_choice_options?: task_choice_optionsUpdateManyWithoutCheckpoint_tasksNestedInput
  }

  export type checkpoint_tasksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    task_type?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_answers?: session_answersUncheckedUpdateManyWithoutCheckpoint_tasksNestedInput
    task_choice_options?: task_choice_optionsUncheckedUpdateManyWithoutCheckpoint_tasksNestedInput
  }

  export type checkpoint_tasksCreateManyInput = {
    id?: number
    checkpoint_id: number
    task_type: string
    question_text?: string | null
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type checkpoint_tasksUpdateManyMutationInput = {
    task_type?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type checkpoint_tasksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    task_type?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type task_choice_optionsCreateInput = {
    option_text: string
    session_answers?: session_answersCreateNestedManyWithoutTask_choice_optionsInput
    checkpoint_tasks: checkpoint_tasksCreateNestedOneWithoutTask_choice_optionsInput
  }

  export type task_choice_optionsUncheckedCreateInput = {
    id?: number
    task_id: number
    option_text: string
    session_answers?: session_answersUncheckedCreateNestedManyWithoutTask_choice_optionsInput
  }

  export type task_choice_optionsUpdateInput = {
    option_text?: StringFieldUpdateOperationsInput | string
    session_answers?: session_answersUpdateManyWithoutTask_choice_optionsNestedInput
    checkpoint_tasks?: checkpoint_tasksUpdateOneRequiredWithoutTask_choice_optionsNestedInput
  }

  export type task_choice_optionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    option_text?: StringFieldUpdateOperationsInput | string
    session_answers?: session_answersUncheckedUpdateManyWithoutTask_choice_optionsNestedInput
  }

  export type task_choice_optionsCreateManyInput = {
    id?: number
    task_id: number
    option_text: string
  }

  export type task_choice_optionsUpdateManyMutationInput = {
    option_text?: StringFieldUpdateOperationsInput | string
  }

  export type task_choice_optionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    option_text?: StringFieldUpdateOperationsInput | string
  }

  export type session_answersCreateInput = {
    answer_text?: string | null
    is_correct: boolean
    answered_at?: Date | string
    quest_checkpoints: quest_checkpointsCreateNestedOneWithoutSession_answersInput
    task_choice_options?: task_choice_optionsCreateNestedOneWithoutSession_answersInput
    sessions: sessionsCreateNestedOneWithoutSession_answersInput
    checkpoint_tasks: checkpoint_tasksCreateNestedOneWithoutSession_answersInput
  }

  export type session_answersUncheckedCreateInput = {
    id?: number
    session_id: number
    checkpoint_id: number
    task_id: number
    answer_text?: string | null
    chosen_option_id?: number | null
    is_correct: boolean
    answered_at?: Date | string
  }

  export type session_answersUpdateInput = {
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quest_checkpoints?: quest_checkpointsUpdateOneRequiredWithoutSession_answersNestedInput
    task_choice_options?: task_choice_optionsUpdateOneWithoutSession_answersNestedInput
    sessions?: sessionsUpdateOneRequiredWithoutSession_answersNestedInput
    checkpoint_tasks?: checkpoint_tasksUpdateOneRequiredWithoutSession_answersNestedInput
  }

  export type session_answersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    chosen_option_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type session_answersCreateManyInput = {
    id?: number
    session_id: number
    checkpoint_id: number
    task_id: number
    answer_text?: string | null
    chosen_option_id?: number | null
    is_correct: boolean
    answered_at?: Date | string
  }

  export type session_answersUpdateManyMutationInput = {
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type session_answersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    chosen_option_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type session_checkpointsCreateInput = {
    status: string
    completed_at?: Date | string | null
    quest_checkpoints: quest_checkpointsCreateNestedOneWithoutSession_checkpointsInput
    sessions: sessionsCreateNestedOneWithoutSession_checkpointsInput
  }

  export type session_checkpointsUncheckedCreateInput = {
    id?: number
    session_id: number
    checkpoint_id: number
    status: string
    completed_at?: Date | string | null
  }

  export type session_checkpointsUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quest_checkpoints?: quest_checkpointsUpdateOneRequiredWithoutSession_checkpointsNestedInput
    sessions?: sessionsUpdateOneRequiredWithoutSession_checkpointsNestedInput
  }

  export type session_checkpointsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type session_checkpointsCreateManyInput = {
    id?: number
    session_id: number
    checkpoint_id: number
    status: string
    completed_at?: Date | string | null
  }

  export type session_checkpointsUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type session_checkpointsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type QuestsListRelationFilter = {
    every?: questsWhereInput
    some?: questsWhereInput
    none?: questsWhereInput
  }

  export type SessionsListRelationFilter = {
    every?: sessionsWhereInput
    some?: sessionsWhereInput
    none?: sessionsWhereInput
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

  export type questsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type Quest_checkpointsListRelationFilter = {
    every?: quest_checkpointsWhereInput
    some?: quest_checkpointsWhereInput
    none?: quest_checkpointsWhereInput
  }

  export type quest_checkpointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type questsCountOrderByAggregateInput = {
    id?: SortOrder
    creator_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location_text?: SortOrder
    image?: SortOrder
    difficulty?: SortOrder
    duration_minutes?: SortOrder
    rules?: SortOrder
    status?: SortOrder
    is_hidden?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    rejection_reason?: SortOrder
  }

  export type questsAvgOrderByAggregateInput = {
    id?: SortOrder
    creator_id?: SortOrder
    difficulty?: SortOrder
    duration_minutes?: SortOrder
  }

  export type questsMaxOrderByAggregateInput = {
    id?: SortOrder
    creator_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location_text?: SortOrder
    image?: SortOrder
    difficulty?: SortOrder
    duration_minutes?: SortOrder
    rules?: SortOrder
    status?: SortOrder
    is_hidden?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    rejection_reason?: SortOrder
  }

  export type questsMinOrderByAggregateInput = {
    id?: SortOrder
    creator_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location_text?: SortOrder
    image?: SortOrder
    difficulty?: SortOrder
    duration_minutes?: SortOrder
    rules?: SortOrder
    status?: SortOrder
    is_hidden?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    rejection_reason?: SortOrder
  }

  export type questsSumOrderByAggregateInput = {
    id?: SortOrder
    creator_id?: SortOrder
    difficulty?: SortOrder
    duration_minutes?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Checkpoint_tasksListRelationFilter = {
    every?: checkpoint_tasksWhereInput
    some?: checkpoint_tasksWhereInput
    none?: checkpoint_tasksWhereInput
  }

  export type QuestsScalarRelationFilter = {
    is?: questsWhereInput
    isNot?: questsWhereInput
  }

  export type Session_answersListRelationFilter = {
    every?: session_answersWhereInput
    some?: session_answersWhereInput
    none?: session_answersWhereInput
  }

  export type Session_checkpointsListRelationFilter = {
    every?: session_checkpointsWhereInput
    some?: session_checkpointsWhereInput
    none?: session_checkpointsWhereInput
  }

  export type checkpoint_tasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type session_answersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type session_checkpointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type quest_checkpointsQuest_idOrder_indexCompoundUniqueInput = {
    quest_id: number
    order_index: number
  }

  export type quest_checkpointsCountOrderByAggregateInput = {
    id?: SortOrder
    quest_id?: SortOrder
    order_index?: SortOrder
    title?: SortOrder
    task_description?: SortOrder
    code_word?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    hint?: SortOrder
    point_rules?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quest_checkpointsAvgOrderByAggregateInput = {
    id?: SortOrder
    quest_id?: SortOrder
    order_index?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type quest_checkpointsMaxOrderByAggregateInput = {
    id?: SortOrder
    quest_id?: SortOrder
    order_index?: SortOrder
    title?: SortOrder
    task_description?: SortOrder
    code_word?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    hint?: SortOrder
    point_rules?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quest_checkpointsMinOrderByAggregateInput = {
    id?: SortOrder
    quest_id?: SortOrder
    order_index?: SortOrder
    title?: SortOrder
    task_description?: SortOrder
    code_word?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    hint?: SortOrder
    point_rules?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type quest_checkpointsSumOrderByAggregateInput = {
    id?: SortOrder
    quest_id?: SortOrder
    order_index?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TeamsNullableScalarRelationFilter = {
    is?: teamsWhereInput | null
    isNot?: teamsWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    quest_id?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    status?: SortOrder
    transport_mode?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrder
    current_checkpoint_order?: SortOrder
  }

  export type sessionsAvgOrderByAggregateInput = {
    id?: SortOrder
    quest_id?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    current_checkpoint_order?: SortOrder
  }

  export type sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    quest_id?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    status?: SortOrder
    transport_mode?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrder
    current_checkpoint_order?: SortOrder
  }

  export type sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    quest_id?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    status?: SortOrder
    transport_mode?: SortOrder
    started_at?: SortOrder
    finished_at?: SortOrder
    current_checkpoint_order?: SortOrder
  }

  export type sessionsSumOrderByAggregateInput = {
    id?: SortOrder
    quest_id?: SortOrder
    user_id?: SortOrder
    team_id?: SortOrder
    current_checkpoint_order?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Quest_checkpointsScalarRelationFilter = {
    is?: quest_checkpointsWhereInput
    isNot?: quest_checkpointsWhereInput
  }

  export type Task_choice_optionsListRelationFilter = {
    every?: task_choice_optionsWhereInput
    some?: task_choice_optionsWhereInput
    none?: task_choice_optionsWhereInput
  }

  export type task_choice_optionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type checkpoint_tasksCheckpoint_idTask_typeCompoundUniqueInput = {
    checkpoint_id: number
    task_type: string
  }

  export type checkpoint_tasksCountOrderByAggregateInput = {
    id?: SortOrder
    checkpoint_id?: SortOrder
    task_type?: SortOrder
    question_text?: SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type checkpoint_tasksAvgOrderByAggregateInput = {
    id?: SortOrder
    checkpoint_id?: SortOrder
  }

  export type checkpoint_tasksMaxOrderByAggregateInput = {
    id?: SortOrder
    checkpoint_id?: SortOrder
    task_type?: SortOrder
    question_text?: SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type checkpoint_tasksMinOrderByAggregateInput = {
    id?: SortOrder
    checkpoint_id?: SortOrder
    task_type?: SortOrder
    question_text?: SortOrder
    correct_answer?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type checkpoint_tasksSumOrderByAggregateInput = {
    id?: SortOrder
    checkpoint_id?: SortOrder
  }

  export type Checkpoint_tasksScalarRelationFilter = {
    is?: checkpoint_tasksWhereInput
    isNot?: checkpoint_tasksWhereInput
  }

  export type task_choice_optionsTask_idOption_textCompoundUniqueInput = {
    task_id: number
    option_text: string
  }

  export type task_choice_optionsCountOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    option_text?: SortOrder
  }

  export type task_choice_optionsAvgOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
  }

  export type task_choice_optionsMaxOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    option_text?: SortOrder
  }

  export type task_choice_optionsMinOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
    option_text?: SortOrder
  }

  export type task_choice_optionsSumOrderByAggregateInput = {
    id?: SortOrder
    task_id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Task_choice_optionsNullableScalarRelationFilter = {
    is?: task_choice_optionsWhereInput | null
    isNot?: task_choice_optionsWhereInput | null
  }

  export type SessionsScalarRelationFilter = {
    is?: sessionsWhereInput
    isNot?: sessionsWhereInput
  }

  export type session_answersSession_idCheckpoint_idTask_idCompoundUniqueInput = {
    session_id: number
    checkpoint_id: number
    task_id: number
  }

  export type session_answersCountOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
    task_id?: SortOrder
    answer_text?: SortOrder
    chosen_option_id?: SortOrder
    is_correct?: SortOrder
    answered_at?: SortOrder
  }

  export type session_answersAvgOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
    task_id?: SortOrder
    chosen_option_id?: SortOrder
  }

  export type session_answersMaxOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
    task_id?: SortOrder
    answer_text?: SortOrder
    chosen_option_id?: SortOrder
    is_correct?: SortOrder
    answered_at?: SortOrder
  }

  export type session_answersMinOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
    task_id?: SortOrder
    answer_text?: SortOrder
    chosen_option_id?: SortOrder
    is_correct?: SortOrder
    answered_at?: SortOrder
  }

  export type session_answersSumOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
    task_id?: SortOrder
    chosen_option_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type session_checkpointsSession_idCheckpoint_idCompoundUniqueInput = {
    session_id: number
    checkpoint_id: number
  }

  export type session_checkpointsCountOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
    status?: SortOrder
    completed_at?: SortOrder
  }

  export type session_checkpointsAvgOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
  }

  export type session_checkpointsMaxOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
    status?: SortOrder
    completed_at?: SortOrder
  }

  export type session_checkpointsMinOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
    status?: SortOrder
    completed_at?: SortOrder
  }

  export type session_checkpointsSumOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
    checkpoint_id?: SortOrder
  }

  export type questsCreateNestedManyWithoutUsersInput = {
    create?: XOR<questsCreateWithoutUsersInput, questsUncheckedCreateWithoutUsersInput> | questsCreateWithoutUsersInput[] | questsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: questsCreateOrConnectWithoutUsersInput | questsCreateOrConnectWithoutUsersInput[]
    createMany?: questsCreateManyUsersInputEnvelope
    connect?: questsWhereUniqueInput | questsWhereUniqueInput[]
  }

  export type sessionsCreateNestedManyWithoutUsersInput = {
    create?: XOR<sessionsCreateWithoutUsersInput, sessionsUncheckedCreateWithoutUsersInput> | sessionsCreateWithoutUsersInput[] | sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutUsersInput | sessionsCreateOrConnectWithoutUsersInput[]
    createMany?: sessionsCreateManyUsersInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
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

  export type questsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<questsCreateWithoutUsersInput, questsUncheckedCreateWithoutUsersInput> | questsCreateWithoutUsersInput[] | questsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: questsCreateOrConnectWithoutUsersInput | questsCreateOrConnectWithoutUsersInput[]
    createMany?: questsCreateManyUsersInputEnvelope
    connect?: questsWhereUniqueInput | questsWhereUniqueInput[]
  }

  export type sessionsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<sessionsCreateWithoutUsersInput, sessionsUncheckedCreateWithoutUsersInput> | sessionsCreateWithoutUsersInput[] | sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutUsersInput | sessionsCreateOrConnectWithoutUsersInput[]
    createMany?: sessionsCreateManyUsersInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
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

  export type questsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<questsCreateWithoutUsersInput, questsUncheckedCreateWithoutUsersInput> | questsCreateWithoutUsersInput[] | questsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: questsCreateOrConnectWithoutUsersInput | questsCreateOrConnectWithoutUsersInput[]
    upsert?: questsUpsertWithWhereUniqueWithoutUsersInput | questsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: questsCreateManyUsersInputEnvelope
    set?: questsWhereUniqueInput | questsWhereUniqueInput[]
    disconnect?: questsWhereUniqueInput | questsWhereUniqueInput[]
    delete?: questsWhereUniqueInput | questsWhereUniqueInput[]
    connect?: questsWhereUniqueInput | questsWhereUniqueInput[]
    update?: questsUpdateWithWhereUniqueWithoutUsersInput | questsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: questsUpdateManyWithWhereWithoutUsersInput | questsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: questsScalarWhereInput | questsScalarWhereInput[]
  }

  export type sessionsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<sessionsCreateWithoutUsersInput, sessionsUncheckedCreateWithoutUsersInput> | sessionsCreateWithoutUsersInput[] | sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutUsersInput | sessionsCreateOrConnectWithoutUsersInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutUsersInput | sessionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: sessionsCreateManyUsersInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutUsersInput | sessionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutUsersInput | sessionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
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

  export type questsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<questsCreateWithoutUsersInput, questsUncheckedCreateWithoutUsersInput> | questsCreateWithoutUsersInput[] | questsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: questsCreateOrConnectWithoutUsersInput | questsCreateOrConnectWithoutUsersInput[]
    upsert?: questsUpsertWithWhereUniqueWithoutUsersInput | questsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: questsCreateManyUsersInputEnvelope
    set?: questsWhereUniqueInput | questsWhereUniqueInput[]
    disconnect?: questsWhereUniqueInput | questsWhereUniqueInput[]
    delete?: questsWhereUniqueInput | questsWhereUniqueInput[]
    connect?: questsWhereUniqueInput | questsWhereUniqueInput[]
    update?: questsUpdateWithWhereUniqueWithoutUsersInput | questsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: questsUpdateManyWithWhereWithoutUsersInput | questsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: questsScalarWhereInput | questsScalarWhereInput[]
  }

  export type sessionsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<sessionsCreateWithoutUsersInput, sessionsUncheckedCreateWithoutUsersInput> | sessionsCreateWithoutUsersInput[] | sessionsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutUsersInput | sessionsCreateOrConnectWithoutUsersInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutUsersInput | sessionsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: sessionsCreateManyUsersInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutUsersInput | sessionsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutUsersInput | sessionsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
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

  export type sessionsCreateNestedManyWithoutTeamsInput = {
    create?: XOR<sessionsCreateWithoutTeamsInput, sessionsUncheckedCreateWithoutTeamsInput> | sessionsCreateWithoutTeamsInput[] | sessionsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutTeamsInput | sessionsCreateOrConnectWithoutTeamsInput[]
    createMany?: sessionsCreateManyTeamsInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
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

  export type sessionsUncheckedCreateNestedManyWithoutTeamsInput = {
    create?: XOR<sessionsCreateWithoutTeamsInput, sessionsUncheckedCreateWithoutTeamsInput> | sessionsCreateWithoutTeamsInput[] | sessionsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutTeamsInput | sessionsCreateOrConnectWithoutTeamsInput[]
    createMany?: sessionsCreateManyTeamsInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
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

  export type sessionsUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<sessionsCreateWithoutTeamsInput, sessionsUncheckedCreateWithoutTeamsInput> | sessionsCreateWithoutTeamsInput[] | sessionsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutTeamsInput | sessionsCreateOrConnectWithoutTeamsInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutTeamsInput | sessionsUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: sessionsCreateManyTeamsInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutTeamsInput | sessionsUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutTeamsInput | sessionsUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
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

  export type sessionsUncheckedUpdateManyWithoutTeamsNestedInput = {
    create?: XOR<sessionsCreateWithoutTeamsInput, sessionsUncheckedCreateWithoutTeamsInput> | sessionsCreateWithoutTeamsInput[] | sessionsUncheckedCreateWithoutTeamsInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutTeamsInput | sessionsCreateOrConnectWithoutTeamsInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutTeamsInput | sessionsUpsertWithWhereUniqueWithoutTeamsInput[]
    createMany?: sessionsCreateManyTeamsInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutTeamsInput | sessionsUpdateWithWhereUniqueWithoutTeamsInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutTeamsInput | sessionsUpdateManyWithWhereWithoutTeamsInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
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

  export type quest_checkpointsCreateNestedManyWithoutQuestsInput = {
    create?: XOR<quest_checkpointsCreateWithoutQuestsInput, quest_checkpointsUncheckedCreateWithoutQuestsInput> | quest_checkpointsCreateWithoutQuestsInput[] | quest_checkpointsUncheckedCreateWithoutQuestsInput[]
    connectOrCreate?: quest_checkpointsCreateOrConnectWithoutQuestsInput | quest_checkpointsCreateOrConnectWithoutQuestsInput[]
    createMany?: quest_checkpointsCreateManyQuestsInputEnvelope
    connect?: quest_checkpointsWhereUniqueInput | quest_checkpointsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutQuestsInput = {
    create?: XOR<usersCreateWithoutQuestsInput, usersUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: usersCreateOrConnectWithoutQuestsInput
    connect?: usersWhereUniqueInput
  }

  export type sessionsCreateNestedManyWithoutQuestsInput = {
    create?: XOR<sessionsCreateWithoutQuestsInput, sessionsUncheckedCreateWithoutQuestsInput> | sessionsCreateWithoutQuestsInput[] | sessionsUncheckedCreateWithoutQuestsInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutQuestsInput | sessionsCreateOrConnectWithoutQuestsInput[]
    createMany?: sessionsCreateManyQuestsInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type quest_checkpointsUncheckedCreateNestedManyWithoutQuestsInput = {
    create?: XOR<quest_checkpointsCreateWithoutQuestsInput, quest_checkpointsUncheckedCreateWithoutQuestsInput> | quest_checkpointsCreateWithoutQuestsInput[] | quest_checkpointsUncheckedCreateWithoutQuestsInput[]
    connectOrCreate?: quest_checkpointsCreateOrConnectWithoutQuestsInput | quest_checkpointsCreateOrConnectWithoutQuestsInput[]
    createMany?: quest_checkpointsCreateManyQuestsInputEnvelope
    connect?: quest_checkpointsWhereUniqueInput | quest_checkpointsWhereUniqueInput[]
  }

  export type sessionsUncheckedCreateNestedManyWithoutQuestsInput = {
    create?: XOR<sessionsCreateWithoutQuestsInput, sessionsUncheckedCreateWithoutQuestsInput> | sessionsCreateWithoutQuestsInput[] | sessionsUncheckedCreateWithoutQuestsInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutQuestsInput | sessionsCreateOrConnectWithoutQuestsInput[]
    createMany?: sessionsCreateManyQuestsInputEnvelope
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type quest_checkpointsUpdateManyWithoutQuestsNestedInput = {
    create?: XOR<quest_checkpointsCreateWithoutQuestsInput, quest_checkpointsUncheckedCreateWithoutQuestsInput> | quest_checkpointsCreateWithoutQuestsInput[] | quest_checkpointsUncheckedCreateWithoutQuestsInput[]
    connectOrCreate?: quest_checkpointsCreateOrConnectWithoutQuestsInput | quest_checkpointsCreateOrConnectWithoutQuestsInput[]
    upsert?: quest_checkpointsUpsertWithWhereUniqueWithoutQuestsInput | quest_checkpointsUpsertWithWhereUniqueWithoutQuestsInput[]
    createMany?: quest_checkpointsCreateManyQuestsInputEnvelope
    set?: quest_checkpointsWhereUniqueInput | quest_checkpointsWhereUniqueInput[]
    disconnect?: quest_checkpointsWhereUniqueInput | quest_checkpointsWhereUniqueInput[]
    delete?: quest_checkpointsWhereUniqueInput | quest_checkpointsWhereUniqueInput[]
    connect?: quest_checkpointsWhereUniqueInput | quest_checkpointsWhereUniqueInput[]
    update?: quest_checkpointsUpdateWithWhereUniqueWithoutQuestsInput | quest_checkpointsUpdateWithWhereUniqueWithoutQuestsInput[]
    updateMany?: quest_checkpointsUpdateManyWithWhereWithoutQuestsInput | quest_checkpointsUpdateManyWithWhereWithoutQuestsInput[]
    deleteMany?: quest_checkpointsScalarWhereInput | quest_checkpointsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutQuestsNestedInput = {
    create?: XOR<usersCreateWithoutQuestsInput, usersUncheckedCreateWithoutQuestsInput>
    connectOrCreate?: usersCreateOrConnectWithoutQuestsInput
    upsert?: usersUpsertWithoutQuestsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutQuestsInput, usersUpdateWithoutQuestsInput>, usersUncheckedUpdateWithoutQuestsInput>
  }

  export type sessionsUpdateManyWithoutQuestsNestedInput = {
    create?: XOR<sessionsCreateWithoutQuestsInput, sessionsUncheckedCreateWithoutQuestsInput> | sessionsCreateWithoutQuestsInput[] | sessionsUncheckedCreateWithoutQuestsInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutQuestsInput | sessionsCreateOrConnectWithoutQuestsInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutQuestsInput | sessionsUpsertWithWhereUniqueWithoutQuestsInput[]
    createMany?: sessionsCreateManyQuestsInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutQuestsInput | sessionsUpdateWithWhereUniqueWithoutQuestsInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutQuestsInput | sessionsUpdateManyWithWhereWithoutQuestsInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type quest_checkpointsUncheckedUpdateManyWithoutQuestsNestedInput = {
    create?: XOR<quest_checkpointsCreateWithoutQuestsInput, quest_checkpointsUncheckedCreateWithoutQuestsInput> | quest_checkpointsCreateWithoutQuestsInput[] | quest_checkpointsUncheckedCreateWithoutQuestsInput[]
    connectOrCreate?: quest_checkpointsCreateOrConnectWithoutQuestsInput | quest_checkpointsCreateOrConnectWithoutQuestsInput[]
    upsert?: quest_checkpointsUpsertWithWhereUniqueWithoutQuestsInput | quest_checkpointsUpsertWithWhereUniqueWithoutQuestsInput[]
    createMany?: quest_checkpointsCreateManyQuestsInputEnvelope
    set?: quest_checkpointsWhereUniqueInput | quest_checkpointsWhereUniqueInput[]
    disconnect?: quest_checkpointsWhereUniqueInput | quest_checkpointsWhereUniqueInput[]
    delete?: quest_checkpointsWhereUniqueInput | quest_checkpointsWhereUniqueInput[]
    connect?: quest_checkpointsWhereUniqueInput | quest_checkpointsWhereUniqueInput[]
    update?: quest_checkpointsUpdateWithWhereUniqueWithoutQuestsInput | quest_checkpointsUpdateWithWhereUniqueWithoutQuestsInput[]
    updateMany?: quest_checkpointsUpdateManyWithWhereWithoutQuestsInput | quest_checkpointsUpdateManyWithWhereWithoutQuestsInput[]
    deleteMany?: quest_checkpointsScalarWhereInput | quest_checkpointsScalarWhereInput[]
  }

  export type sessionsUncheckedUpdateManyWithoutQuestsNestedInput = {
    create?: XOR<sessionsCreateWithoutQuestsInput, sessionsUncheckedCreateWithoutQuestsInput> | sessionsCreateWithoutQuestsInput[] | sessionsUncheckedCreateWithoutQuestsInput[]
    connectOrCreate?: sessionsCreateOrConnectWithoutQuestsInput | sessionsCreateOrConnectWithoutQuestsInput[]
    upsert?: sessionsUpsertWithWhereUniqueWithoutQuestsInput | sessionsUpsertWithWhereUniqueWithoutQuestsInput[]
    createMany?: sessionsCreateManyQuestsInputEnvelope
    set?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    disconnect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    delete?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    connect?: sessionsWhereUniqueInput | sessionsWhereUniqueInput[]
    update?: sessionsUpdateWithWhereUniqueWithoutQuestsInput | sessionsUpdateWithWhereUniqueWithoutQuestsInput[]
    updateMany?: sessionsUpdateManyWithWhereWithoutQuestsInput | sessionsUpdateManyWithWhereWithoutQuestsInput[]
    deleteMany?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
  }

  export type checkpoint_tasksCreateNestedManyWithoutQuest_checkpointsInput = {
    create?: XOR<checkpoint_tasksCreateWithoutQuest_checkpointsInput, checkpoint_tasksUncheckedCreateWithoutQuest_checkpointsInput> | checkpoint_tasksCreateWithoutQuest_checkpointsInput[] | checkpoint_tasksUncheckedCreateWithoutQuest_checkpointsInput[]
    connectOrCreate?: checkpoint_tasksCreateOrConnectWithoutQuest_checkpointsInput | checkpoint_tasksCreateOrConnectWithoutQuest_checkpointsInput[]
    createMany?: checkpoint_tasksCreateManyQuest_checkpointsInputEnvelope
    connect?: checkpoint_tasksWhereUniqueInput | checkpoint_tasksWhereUniqueInput[]
  }

  export type questsCreateNestedOneWithoutQuest_checkpointsInput = {
    create?: XOR<questsCreateWithoutQuest_checkpointsInput, questsUncheckedCreateWithoutQuest_checkpointsInput>
    connectOrCreate?: questsCreateOrConnectWithoutQuest_checkpointsInput
    connect?: questsWhereUniqueInput
  }

  export type session_answersCreateNestedManyWithoutQuest_checkpointsInput = {
    create?: XOR<session_answersCreateWithoutQuest_checkpointsInput, session_answersUncheckedCreateWithoutQuest_checkpointsInput> | session_answersCreateWithoutQuest_checkpointsInput[] | session_answersUncheckedCreateWithoutQuest_checkpointsInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutQuest_checkpointsInput | session_answersCreateOrConnectWithoutQuest_checkpointsInput[]
    createMany?: session_answersCreateManyQuest_checkpointsInputEnvelope
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
  }

  export type session_checkpointsCreateNestedManyWithoutQuest_checkpointsInput = {
    create?: XOR<session_checkpointsCreateWithoutQuest_checkpointsInput, session_checkpointsUncheckedCreateWithoutQuest_checkpointsInput> | session_checkpointsCreateWithoutQuest_checkpointsInput[] | session_checkpointsUncheckedCreateWithoutQuest_checkpointsInput[]
    connectOrCreate?: session_checkpointsCreateOrConnectWithoutQuest_checkpointsInput | session_checkpointsCreateOrConnectWithoutQuest_checkpointsInput[]
    createMany?: session_checkpointsCreateManyQuest_checkpointsInputEnvelope
    connect?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
  }

  export type checkpoint_tasksUncheckedCreateNestedManyWithoutQuest_checkpointsInput = {
    create?: XOR<checkpoint_tasksCreateWithoutQuest_checkpointsInput, checkpoint_tasksUncheckedCreateWithoutQuest_checkpointsInput> | checkpoint_tasksCreateWithoutQuest_checkpointsInput[] | checkpoint_tasksUncheckedCreateWithoutQuest_checkpointsInput[]
    connectOrCreate?: checkpoint_tasksCreateOrConnectWithoutQuest_checkpointsInput | checkpoint_tasksCreateOrConnectWithoutQuest_checkpointsInput[]
    createMany?: checkpoint_tasksCreateManyQuest_checkpointsInputEnvelope
    connect?: checkpoint_tasksWhereUniqueInput | checkpoint_tasksWhereUniqueInput[]
  }

  export type session_answersUncheckedCreateNestedManyWithoutQuest_checkpointsInput = {
    create?: XOR<session_answersCreateWithoutQuest_checkpointsInput, session_answersUncheckedCreateWithoutQuest_checkpointsInput> | session_answersCreateWithoutQuest_checkpointsInput[] | session_answersUncheckedCreateWithoutQuest_checkpointsInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutQuest_checkpointsInput | session_answersCreateOrConnectWithoutQuest_checkpointsInput[]
    createMany?: session_answersCreateManyQuest_checkpointsInputEnvelope
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
  }

  export type session_checkpointsUncheckedCreateNestedManyWithoutQuest_checkpointsInput = {
    create?: XOR<session_checkpointsCreateWithoutQuest_checkpointsInput, session_checkpointsUncheckedCreateWithoutQuest_checkpointsInput> | session_checkpointsCreateWithoutQuest_checkpointsInput[] | session_checkpointsUncheckedCreateWithoutQuest_checkpointsInput[]
    connectOrCreate?: session_checkpointsCreateOrConnectWithoutQuest_checkpointsInput | session_checkpointsCreateOrConnectWithoutQuest_checkpointsInput[]
    createMany?: session_checkpointsCreateManyQuest_checkpointsInputEnvelope
    connect?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type checkpoint_tasksUpdateManyWithoutQuest_checkpointsNestedInput = {
    create?: XOR<checkpoint_tasksCreateWithoutQuest_checkpointsInput, checkpoint_tasksUncheckedCreateWithoutQuest_checkpointsInput> | checkpoint_tasksCreateWithoutQuest_checkpointsInput[] | checkpoint_tasksUncheckedCreateWithoutQuest_checkpointsInput[]
    connectOrCreate?: checkpoint_tasksCreateOrConnectWithoutQuest_checkpointsInput | checkpoint_tasksCreateOrConnectWithoutQuest_checkpointsInput[]
    upsert?: checkpoint_tasksUpsertWithWhereUniqueWithoutQuest_checkpointsInput | checkpoint_tasksUpsertWithWhereUniqueWithoutQuest_checkpointsInput[]
    createMany?: checkpoint_tasksCreateManyQuest_checkpointsInputEnvelope
    set?: checkpoint_tasksWhereUniqueInput | checkpoint_tasksWhereUniqueInput[]
    disconnect?: checkpoint_tasksWhereUniqueInput | checkpoint_tasksWhereUniqueInput[]
    delete?: checkpoint_tasksWhereUniqueInput | checkpoint_tasksWhereUniqueInput[]
    connect?: checkpoint_tasksWhereUniqueInput | checkpoint_tasksWhereUniqueInput[]
    update?: checkpoint_tasksUpdateWithWhereUniqueWithoutQuest_checkpointsInput | checkpoint_tasksUpdateWithWhereUniqueWithoutQuest_checkpointsInput[]
    updateMany?: checkpoint_tasksUpdateManyWithWhereWithoutQuest_checkpointsInput | checkpoint_tasksUpdateManyWithWhereWithoutQuest_checkpointsInput[]
    deleteMany?: checkpoint_tasksScalarWhereInput | checkpoint_tasksScalarWhereInput[]
  }

  export type questsUpdateOneRequiredWithoutQuest_checkpointsNestedInput = {
    create?: XOR<questsCreateWithoutQuest_checkpointsInput, questsUncheckedCreateWithoutQuest_checkpointsInput>
    connectOrCreate?: questsCreateOrConnectWithoutQuest_checkpointsInput
    upsert?: questsUpsertWithoutQuest_checkpointsInput
    connect?: questsWhereUniqueInput
    update?: XOR<XOR<questsUpdateToOneWithWhereWithoutQuest_checkpointsInput, questsUpdateWithoutQuest_checkpointsInput>, questsUncheckedUpdateWithoutQuest_checkpointsInput>
  }

  export type session_answersUpdateManyWithoutQuest_checkpointsNestedInput = {
    create?: XOR<session_answersCreateWithoutQuest_checkpointsInput, session_answersUncheckedCreateWithoutQuest_checkpointsInput> | session_answersCreateWithoutQuest_checkpointsInput[] | session_answersUncheckedCreateWithoutQuest_checkpointsInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutQuest_checkpointsInput | session_answersCreateOrConnectWithoutQuest_checkpointsInput[]
    upsert?: session_answersUpsertWithWhereUniqueWithoutQuest_checkpointsInput | session_answersUpsertWithWhereUniqueWithoutQuest_checkpointsInput[]
    createMany?: session_answersCreateManyQuest_checkpointsInputEnvelope
    set?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    disconnect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    delete?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    update?: session_answersUpdateWithWhereUniqueWithoutQuest_checkpointsInput | session_answersUpdateWithWhereUniqueWithoutQuest_checkpointsInput[]
    updateMany?: session_answersUpdateManyWithWhereWithoutQuest_checkpointsInput | session_answersUpdateManyWithWhereWithoutQuest_checkpointsInput[]
    deleteMany?: session_answersScalarWhereInput | session_answersScalarWhereInput[]
  }

  export type session_checkpointsUpdateManyWithoutQuest_checkpointsNestedInput = {
    create?: XOR<session_checkpointsCreateWithoutQuest_checkpointsInput, session_checkpointsUncheckedCreateWithoutQuest_checkpointsInput> | session_checkpointsCreateWithoutQuest_checkpointsInput[] | session_checkpointsUncheckedCreateWithoutQuest_checkpointsInput[]
    connectOrCreate?: session_checkpointsCreateOrConnectWithoutQuest_checkpointsInput | session_checkpointsCreateOrConnectWithoutQuest_checkpointsInput[]
    upsert?: session_checkpointsUpsertWithWhereUniqueWithoutQuest_checkpointsInput | session_checkpointsUpsertWithWhereUniqueWithoutQuest_checkpointsInput[]
    createMany?: session_checkpointsCreateManyQuest_checkpointsInputEnvelope
    set?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    disconnect?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    delete?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    connect?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    update?: session_checkpointsUpdateWithWhereUniqueWithoutQuest_checkpointsInput | session_checkpointsUpdateWithWhereUniqueWithoutQuest_checkpointsInput[]
    updateMany?: session_checkpointsUpdateManyWithWhereWithoutQuest_checkpointsInput | session_checkpointsUpdateManyWithWhereWithoutQuest_checkpointsInput[]
    deleteMany?: session_checkpointsScalarWhereInput | session_checkpointsScalarWhereInput[]
  }

  export type checkpoint_tasksUncheckedUpdateManyWithoutQuest_checkpointsNestedInput = {
    create?: XOR<checkpoint_tasksCreateWithoutQuest_checkpointsInput, checkpoint_tasksUncheckedCreateWithoutQuest_checkpointsInput> | checkpoint_tasksCreateWithoutQuest_checkpointsInput[] | checkpoint_tasksUncheckedCreateWithoutQuest_checkpointsInput[]
    connectOrCreate?: checkpoint_tasksCreateOrConnectWithoutQuest_checkpointsInput | checkpoint_tasksCreateOrConnectWithoutQuest_checkpointsInput[]
    upsert?: checkpoint_tasksUpsertWithWhereUniqueWithoutQuest_checkpointsInput | checkpoint_tasksUpsertWithWhereUniqueWithoutQuest_checkpointsInput[]
    createMany?: checkpoint_tasksCreateManyQuest_checkpointsInputEnvelope
    set?: checkpoint_tasksWhereUniqueInput | checkpoint_tasksWhereUniqueInput[]
    disconnect?: checkpoint_tasksWhereUniqueInput | checkpoint_tasksWhereUniqueInput[]
    delete?: checkpoint_tasksWhereUniqueInput | checkpoint_tasksWhereUniqueInput[]
    connect?: checkpoint_tasksWhereUniqueInput | checkpoint_tasksWhereUniqueInput[]
    update?: checkpoint_tasksUpdateWithWhereUniqueWithoutQuest_checkpointsInput | checkpoint_tasksUpdateWithWhereUniqueWithoutQuest_checkpointsInput[]
    updateMany?: checkpoint_tasksUpdateManyWithWhereWithoutQuest_checkpointsInput | checkpoint_tasksUpdateManyWithWhereWithoutQuest_checkpointsInput[]
    deleteMany?: checkpoint_tasksScalarWhereInput | checkpoint_tasksScalarWhereInput[]
  }

  export type session_answersUncheckedUpdateManyWithoutQuest_checkpointsNestedInput = {
    create?: XOR<session_answersCreateWithoutQuest_checkpointsInput, session_answersUncheckedCreateWithoutQuest_checkpointsInput> | session_answersCreateWithoutQuest_checkpointsInput[] | session_answersUncheckedCreateWithoutQuest_checkpointsInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutQuest_checkpointsInput | session_answersCreateOrConnectWithoutQuest_checkpointsInput[]
    upsert?: session_answersUpsertWithWhereUniqueWithoutQuest_checkpointsInput | session_answersUpsertWithWhereUniqueWithoutQuest_checkpointsInput[]
    createMany?: session_answersCreateManyQuest_checkpointsInputEnvelope
    set?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    disconnect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    delete?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    update?: session_answersUpdateWithWhereUniqueWithoutQuest_checkpointsInput | session_answersUpdateWithWhereUniqueWithoutQuest_checkpointsInput[]
    updateMany?: session_answersUpdateManyWithWhereWithoutQuest_checkpointsInput | session_answersUpdateManyWithWhereWithoutQuest_checkpointsInput[]
    deleteMany?: session_answersScalarWhereInput | session_answersScalarWhereInput[]
  }

  export type session_checkpointsUncheckedUpdateManyWithoutQuest_checkpointsNestedInput = {
    create?: XOR<session_checkpointsCreateWithoutQuest_checkpointsInput, session_checkpointsUncheckedCreateWithoutQuest_checkpointsInput> | session_checkpointsCreateWithoutQuest_checkpointsInput[] | session_checkpointsUncheckedCreateWithoutQuest_checkpointsInput[]
    connectOrCreate?: session_checkpointsCreateOrConnectWithoutQuest_checkpointsInput | session_checkpointsCreateOrConnectWithoutQuest_checkpointsInput[]
    upsert?: session_checkpointsUpsertWithWhereUniqueWithoutQuest_checkpointsInput | session_checkpointsUpsertWithWhereUniqueWithoutQuest_checkpointsInput[]
    createMany?: session_checkpointsCreateManyQuest_checkpointsInputEnvelope
    set?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    disconnect?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    delete?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    connect?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    update?: session_checkpointsUpdateWithWhereUniqueWithoutQuest_checkpointsInput | session_checkpointsUpdateWithWhereUniqueWithoutQuest_checkpointsInput[]
    updateMany?: session_checkpointsUpdateManyWithWhereWithoutQuest_checkpointsInput | session_checkpointsUpdateManyWithWhereWithoutQuest_checkpointsInput[]
    deleteMany?: session_checkpointsScalarWhereInput | session_checkpointsScalarWhereInput[]
  }

  export type session_answersCreateNestedManyWithoutSessionsInput = {
    create?: XOR<session_answersCreateWithoutSessionsInput, session_answersUncheckedCreateWithoutSessionsInput> | session_answersCreateWithoutSessionsInput[] | session_answersUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutSessionsInput | session_answersCreateOrConnectWithoutSessionsInput[]
    createMany?: session_answersCreateManySessionsInputEnvelope
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
  }

  export type session_checkpointsCreateNestedManyWithoutSessionsInput = {
    create?: XOR<session_checkpointsCreateWithoutSessionsInput, session_checkpointsUncheckedCreateWithoutSessionsInput> | session_checkpointsCreateWithoutSessionsInput[] | session_checkpointsUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: session_checkpointsCreateOrConnectWithoutSessionsInput | session_checkpointsCreateOrConnectWithoutSessionsInput[]
    createMany?: session_checkpointsCreateManySessionsInputEnvelope
    connect?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
  }

  export type questsCreateNestedOneWithoutSessionsInput = {
    create?: XOR<questsCreateWithoutSessionsInput, questsUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: questsCreateOrConnectWithoutSessionsInput
    connect?: questsWhereUniqueInput
  }

  export type teamsCreateNestedOneWithoutSessionsInput = {
    create?: XOR<teamsCreateWithoutSessionsInput, teamsUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: teamsCreateOrConnectWithoutSessionsInput
    connect?: teamsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutSessionsInput = {
    create?: XOR<usersCreateWithoutSessionsInput, usersUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSessionsInput
    connect?: usersWhereUniqueInput
  }

  export type session_answersUncheckedCreateNestedManyWithoutSessionsInput = {
    create?: XOR<session_answersCreateWithoutSessionsInput, session_answersUncheckedCreateWithoutSessionsInput> | session_answersCreateWithoutSessionsInput[] | session_answersUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutSessionsInput | session_answersCreateOrConnectWithoutSessionsInput[]
    createMany?: session_answersCreateManySessionsInputEnvelope
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
  }

  export type session_checkpointsUncheckedCreateNestedManyWithoutSessionsInput = {
    create?: XOR<session_checkpointsCreateWithoutSessionsInput, session_checkpointsUncheckedCreateWithoutSessionsInput> | session_checkpointsCreateWithoutSessionsInput[] | session_checkpointsUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: session_checkpointsCreateOrConnectWithoutSessionsInput | session_checkpointsCreateOrConnectWithoutSessionsInput[]
    createMany?: session_checkpointsCreateManySessionsInputEnvelope
    connect?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type session_answersUpdateManyWithoutSessionsNestedInput = {
    create?: XOR<session_answersCreateWithoutSessionsInput, session_answersUncheckedCreateWithoutSessionsInput> | session_answersCreateWithoutSessionsInput[] | session_answersUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutSessionsInput | session_answersCreateOrConnectWithoutSessionsInput[]
    upsert?: session_answersUpsertWithWhereUniqueWithoutSessionsInput | session_answersUpsertWithWhereUniqueWithoutSessionsInput[]
    createMany?: session_answersCreateManySessionsInputEnvelope
    set?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    disconnect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    delete?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    update?: session_answersUpdateWithWhereUniqueWithoutSessionsInput | session_answersUpdateWithWhereUniqueWithoutSessionsInput[]
    updateMany?: session_answersUpdateManyWithWhereWithoutSessionsInput | session_answersUpdateManyWithWhereWithoutSessionsInput[]
    deleteMany?: session_answersScalarWhereInput | session_answersScalarWhereInput[]
  }

  export type session_checkpointsUpdateManyWithoutSessionsNestedInput = {
    create?: XOR<session_checkpointsCreateWithoutSessionsInput, session_checkpointsUncheckedCreateWithoutSessionsInput> | session_checkpointsCreateWithoutSessionsInput[] | session_checkpointsUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: session_checkpointsCreateOrConnectWithoutSessionsInput | session_checkpointsCreateOrConnectWithoutSessionsInput[]
    upsert?: session_checkpointsUpsertWithWhereUniqueWithoutSessionsInput | session_checkpointsUpsertWithWhereUniqueWithoutSessionsInput[]
    createMany?: session_checkpointsCreateManySessionsInputEnvelope
    set?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    disconnect?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    delete?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    connect?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    update?: session_checkpointsUpdateWithWhereUniqueWithoutSessionsInput | session_checkpointsUpdateWithWhereUniqueWithoutSessionsInput[]
    updateMany?: session_checkpointsUpdateManyWithWhereWithoutSessionsInput | session_checkpointsUpdateManyWithWhereWithoutSessionsInput[]
    deleteMany?: session_checkpointsScalarWhereInput | session_checkpointsScalarWhereInput[]
  }

  export type questsUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<questsCreateWithoutSessionsInput, questsUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: questsCreateOrConnectWithoutSessionsInput
    upsert?: questsUpsertWithoutSessionsInput
    connect?: questsWhereUniqueInput
    update?: XOR<XOR<questsUpdateToOneWithWhereWithoutSessionsInput, questsUpdateWithoutSessionsInput>, questsUncheckedUpdateWithoutSessionsInput>
  }

  export type teamsUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<teamsCreateWithoutSessionsInput, teamsUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: teamsCreateOrConnectWithoutSessionsInput
    upsert?: teamsUpsertWithoutSessionsInput
    disconnect?: teamsWhereInput | boolean
    delete?: teamsWhereInput | boolean
    connect?: teamsWhereUniqueInput
    update?: XOR<XOR<teamsUpdateToOneWithWhereWithoutSessionsInput, teamsUpdateWithoutSessionsInput>, teamsUncheckedUpdateWithoutSessionsInput>
  }

  export type usersUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<usersCreateWithoutSessionsInput, usersUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: usersCreateOrConnectWithoutSessionsInput
    upsert?: usersUpsertWithoutSessionsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSessionsInput, usersUpdateWithoutSessionsInput>, usersUncheckedUpdateWithoutSessionsInput>
  }

  export type session_answersUncheckedUpdateManyWithoutSessionsNestedInput = {
    create?: XOR<session_answersCreateWithoutSessionsInput, session_answersUncheckedCreateWithoutSessionsInput> | session_answersCreateWithoutSessionsInput[] | session_answersUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutSessionsInput | session_answersCreateOrConnectWithoutSessionsInput[]
    upsert?: session_answersUpsertWithWhereUniqueWithoutSessionsInput | session_answersUpsertWithWhereUniqueWithoutSessionsInput[]
    createMany?: session_answersCreateManySessionsInputEnvelope
    set?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    disconnect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    delete?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    update?: session_answersUpdateWithWhereUniqueWithoutSessionsInput | session_answersUpdateWithWhereUniqueWithoutSessionsInput[]
    updateMany?: session_answersUpdateManyWithWhereWithoutSessionsInput | session_answersUpdateManyWithWhereWithoutSessionsInput[]
    deleteMany?: session_answersScalarWhereInput | session_answersScalarWhereInput[]
  }

  export type session_checkpointsUncheckedUpdateManyWithoutSessionsNestedInput = {
    create?: XOR<session_checkpointsCreateWithoutSessionsInput, session_checkpointsUncheckedCreateWithoutSessionsInput> | session_checkpointsCreateWithoutSessionsInput[] | session_checkpointsUncheckedCreateWithoutSessionsInput[]
    connectOrCreate?: session_checkpointsCreateOrConnectWithoutSessionsInput | session_checkpointsCreateOrConnectWithoutSessionsInput[]
    upsert?: session_checkpointsUpsertWithWhereUniqueWithoutSessionsInput | session_checkpointsUpsertWithWhereUniqueWithoutSessionsInput[]
    createMany?: session_checkpointsCreateManySessionsInputEnvelope
    set?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    disconnect?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    delete?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    connect?: session_checkpointsWhereUniqueInput | session_checkpointsWhereUniqueInput[]
    update?: session_checkpointsUpdateWithWhereUniqueWithoutSessionsInput | session_checkpointsUpdateWithWhereUniqueWithoutSessionsInput[]
    updateMany?: session_checkpointsUpdateManyWithWhereWithoutSessionsInput | session_checkpointsUpdateManyWithWhereWithoutSessionsInput[]
    deleteMany?: session_checkpointsScalarWhereInput | session_checkpointsScalarWhereInput[]
  }

  export type quest_checkpointsCreateNestedOneWithoutCheckpoint_tasksInput = {
    create?: XOR<quest_checkpointsCreateWithoutCheckpoint_tasksInput, quest_checkpointsUncheckedCreateWithoutCheckpoint_tasksInput>
    connectOrCreate?: quest_checkpointsCreateOrConnectWithoutCheckpoint_tasksInput
    connect?: quest_checkpointsWhereUniqueInput
  }

  export type session_answersCreateNestedManyWithoutCheckpoint_tasksInput = {
    create?: XOR<session_answersCreateWithoutCheckpoint_tasksInput, session_answersUncheckedCreateWithoutCheckpoint_tasksInput> | session_answersCreateWithoutCheckpoint_tasksInput[] | session_answersUncheckedCreateWithoutCheckpoint_tasksInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutCheckpoint_tasksInput | session_answersCreateOrConnectWithoutCheckpoint_tasksInput[]
    createMany?: session_answersCreateManyCheckpoint_tasksInputEnvelope
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
  }

  export type task_choice_optionsCreateNestedManyWithoutCheckpoint_tasksInput = {
    create?: XOR<task_choice_optionsCreateWithoutCheckpoint_tasksInput, task_choice_optionsUncheckedCreateWithoutCheckpoint_tasksInput> | task_choice_optionsCreateWithoutCheckpoint_tasksInput[] | task_choice_optionsUncheckedCreateWithoutCheckpoint_tasksInput[]
    connectOrCreate?: task_choice_optionsCreateOrConnectWithoutCheckpoint_tasksInput | task_choice_optionsCreateOrConnectWithoutCheckpoint_tasksInput[]
    createMany?: task_choice_optionsCreateManyCheckpoint_tasksInputEnvelope
    connect?: task_choice_optionsWhereUniqueInput | task_choice_optionsWhereUniqueInput[]
  }

  export type session_answersUncheckedCreateNestedManyWithoutCheckpoint_tasksInput = {
    create?: XOR<session_answersCreateWithoutCheckpoint_tasksInput, session_answersUncheckedCreateWithoutCheckpoint_tasksInput> | session_answersCreateWithoutCheckpoint_tasksInput[] | session_answersUncheckedCreateWithoutCheckpoint_tasksInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutCheckpoint_tasksInput | session_answersCreateOrConnectWithoutCheckpoint_tasksInput[]
    createMany?: session_answersCreateManyCheckpoint_tasksInputEnvelope
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
  }

  export type task_choice_optionsUncheckedCreateNestedManyWithoutCheckpoint_tasksInput = {
    create?: XOR<task_choice_optionsCreateWithoutCheckpoint_tasksInput, task_choice_optionsUncheckedCreateWithoutCheckpoint_tasksInput> | task_choice_optionsCreateWithoutCheckpoint_tasksInput[] | task_choice_optionsUncheckedCreateWithoutCheckpoint_tasksInput[]
    connectOrCreate?: task_choice_optionsCreateOrConnectWithoutCheckpoint_tasksInput | task_choice_optionsCreateOrConnectWithoutCheckpoint_tasksInput[]
    createMany?: task_choice_optionsCreateManyCheckpoint_tasksInputEnvelope
    connect?: task_choice_optionsWhereUniqueInput | task_choice_optionsWhereUniqueInput[]
  }

  export type quest_checkpointsUpdateOneRequiredWithoutCheckpoint_tasksNestedInput = {
    create?: XOR<quest_checkpointsCreateWithoutCheckpoint_tasksInput, quest_checkpointsUncheckedCreateWithoutCheckpoint_tasksInput>
    connectOrCreate?: quest_checkpointsCreateOrConnectWithoutCheckpoint_tasksInput
    upsert?: quest_checkpointsUpsertWithoutCheckpoint_tasksInput
    connect?: quest_checkpointsWhereUniqueInput
    update?: XOR<XOR<quest_checkpointsUpdateToOneWithWhereWithoutCheckpoint_tasksInput, quest_checkpointsUpdateWithoutCheckpoint_tasksInput>, quest_checkpointsUncheckedUpdateWithoutCheckpoint_tasksInput>
  }

  export type session_answersUpdateManyWithoutCheckpoint_tasksNestedInput = {
    create?: XOR<session_answersCreateWithoutCheckpoint_tasksInput, session_answersUncheckedCreateWithoutCheckpoint_tasksInput> | session_answersCreateWithoutCheckpoint_tasksInput[] | session_answersUncheckedCreateWithoutCheckpoint_tasksInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutCheckpoint_tasksInput | session_answersCreateOrConnectWithoutCheckpoint_tasksInput[]
    upsert?: session_answersUpsertWithWhereUniqueWithoutCheckpoint_tasksInput | session_answersUpsertWithWhereUniqueWithoutCheckpoint_tasksInput[]
    createMany?: session_answersCreateManyCheckpoint_tasksInputEnvelope
    set?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    disconnect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    delete?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    update?: session_answersUpdateWithWhereUniqueWithoutCheckpoint_tasksInput | session_answersUpdateWithWhereUniqueWithoutCheckpoint_tasksInput[]
    updateMany?: session_answersUpdateManyWithWhereWithoutCheckpoint_tasksInput | session_answersUpdateManyWithWhereWithoutCheckpoint_tasksInput[]
    deleteMany?: session_answersScalarWhereInput | session_answersScalarWhereInput[]
  }

  export type task_choice_optionsUpdateManyWithoutCheckpoint_tasksNestedInput = {
    create?: XOR<task_choice_optionsCreateWithoutCheckpoint_tasksInput, task_choice_optionsUncheckedCreateWithoutCheckpoint_tasksInput> | task_choice_optionsCreateWithoutCheckpoint_tasksInput[] | task_choice_optionsUncheckedCreateWithoutCheckpoint_tasksInput[]
    connectOrCreate?: task_choice_optionsCreateOrConnectWithoutCheckpoint_tasksInput | task_choice_optionsCreateOrConnectWithoutCheckpoint_tasksInput[]
    upsert?: task_choice_optionsUpsertWithWhereUniqueWithoutCheckpoint_tasksInput | task_choice_optionsUpsertWithWhereUniqueWithoutCheckpoint_tasksInput[]
    createMany?: task_choice_optionsCreateManyCheckpoint_tasksInputEnvelope
    set?: task_choice_optionsWhereUniqueInput | task_choice_optionsWhereUniqueInput[]
    disconnect?: task_choice_optionsWhereUniqueInput | task_choice_optionsWhereUniqueInput[]
    delete?: task_choice_optionsWhereUniqueInput | task_choice_optionsWhereUniqueInput[]
    connect?: task_choice_optionsWhereUniqueInput | task_choice_optionsWhereUniqueInput[]
    update?: task_choice_optionsUpdateWithWhereUniqueWithoutCheckpoint_tasksInput | task_choice_optionsUpdateWithWhereUniqueWithoutCheckpoint_tasksInput[]
    updateMany?: task_choice_optionsUpdateManyWithWhereWithoutCheckpoint_tasksInput | task_choice_optionsUpdateManyWithWhereWithoutCheckpoint_tasksInput[]
    deleteMany?: task_choice_optionsScalarWhereInput | task_choice_optionsScalarWhereInput[]
  }

  export type session_answersUncheckedUpdateManyWithoutCheckpoint_tasksNestedInput = {
    create?: XOR<session_answersCreateWithoutCheckpoint_tasksInput, session_answersUncheckedCreateWithoutCheckpoint_tasksInput> | session_answersCreateWithoutCheckpoint_tasksInput[] | session_answersUncheckedCreateWithoutCheckpoint_tasksInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutCheckpoint_tasksInput | session_answersCreateOrConnectWithoutCheckpoint_tasksInput[]
    upsert?: session_answersUpsertWithWhereUniqueWithoutCheckpoint_tasksInput | session_answersUpsertWithWhereUniqueWithoutCheckpoint_tasksInput[]
    createMany?: session_answersCreateManyCheckpoint_tasksInputEnvelope
    set?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    disconnect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    delete?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    update?: session_answersUpdateWithWhereUniqueWithoutCheckpoint_tasksInput | session_answersUpdateWithWhereUniqueWithoutCheckpoint_tasksInput[]
    updateMany?: session_answersUpdateManyWithWhereWithoutCheckpoint_tasksInput | session_answersUpdateManyWithWhereWithoutCheckpoint_tasksInput[]
    deleteMany?: session_answersScalarWhereInput | session_answersScalarWhereInput[]
  }

  export type task_choice_optionsUncheckedUpdateManyWithoutCheckpoint_tasksNestedInput = {
    create?: XOR<task_choice_optionsCreateWithoutCheckpoint_tasksInput, task_choice_optionsUncheckedCreateWithoutCheckpoint_tasksInput> | task_choice_optionsCreateWithoutCheckpoint_tasksInput[] | task_choice_optionsUncheckedCreateWithoutCheckpoint_tasksInput[]
    connectOrCreate?: task_choice_optionsCreateOrConnectWithoutCheckpoint_tasksInput | task_choice_optionsCreateOrConnectWithoutCheckpoint_tasksInput[]
    upsert?: task_choice_optionsUpsertWithWhereUniqueWithoutCheckpoint_tasksInput | task_choice_optionsUpsertWithWhereUniqueWithoutCheckpoint_tasksInput[]
    createMany?: task_choice_optionsCreateManyCheckpoint_tasksInputEnvelope
    set?: task_choice_optionsWhereUniqueInput | task_choice_optionsWhereUniqueInput[]
    disconnect?: task_choice_optionsWhereUniqueInput | task_choice_optionsWhereUniqueInput[]
    delete?: task_choice_optionsWhereUniqueInput | task_choice_optionsWhereUniqueInput[]
    connect?: task_choice_optionsWhereUniqueInput | task_choice_optionsWhereUniqueInput[]
    update?: task_choice_optionsUpdateWithWhereUniqueWithoutCheckpoint_tasksInput | task_choice_optionsUpdateWithWhereUniqueWithoutCheckpoint_tasksInput[]
    updateMany?: task_choice_optionsUpdateManyWithWhereWithoutCheckpoint_tasksInput | task_choice_optionsUpdateManyWithWhereWithoutCheckpoint_tasksInput[]
    deleteMany?: task_choice_optionsScalarWhereInput | task_choice_optionsScalarWhereInput[]
  }

  export type session_answersCreateNestedManyWithoutTask_choice_optionsInput = {
    create?: XOR<session_answersCreateWithoutTask_choice_optionsInput, session_answersUncheckedCreateWithoutTask_choice_optionsInput> | session_answersCreateWithoutTask_choice_optionsInput[] | session_answersUncheckedCreateWithoutTask_choice_optionsInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutTask_choice_optionsInput | session_answersCreateOrConnectWithoutTask_choice_optionsInput[]
    createMany?: session_answersCreateManyTask_choice_optionsInputEnvelope
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
  }

  export type checkpoint_tasksCreateNestedOneWithoutTask_choice_optionsInput = {
    create?: XOR<checkpoint_tasksCreateWithoutTask_choice_optionsInput, checkpoint_tasksUncheckedCreateWithoutTask_choice_optionsInput>
    connectOrCreate?: checkpoint_tasksCreateOrConnectWithoutTask_choice_optionsInput
    connect?: checkpoint_tasksWhereUniqueInput
  }

  export type session_answersUncheckedCreateNestedManyWithoutTask_choice_optionsInput = {
    create?: XOR<session_answersCreateWithoutTask_choice_optionsInput, session_answersUncheckedCreateWithoutTask_choice_optionsInput> | session_answersCreateWithoutTask_choice_optionsInput[] | session_answersUncheckedCreateWithoutTask_choice_optionsInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutTask_choice_optionsInput | session_answersCreateOrConnectWithoutTask_choice_optionsInput[]
    createMany?: session_answersCreateManyTask_choice_optionsInputEnvelope
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
  }

  export type session_answersUpdateManyWithoutTask_choice_optionsNestedInput = {
    create?: XOR<session_answersCreateWithoutTask_choice_optionsInput, session_answersUncheckedCreateWithoutTask_choice_optionsInput> | session_answersCreateWithoutTask_choice_optionsInput[] | session_answersUncheckedCreateWithoutTask_choice_optionsInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutTask_choice_optionsInput | session_answersCreateOrConnectWithoutTask_choice_optionsInput[]
    upsert?: session_answersUpsertWithWhereUniqueWithoutTask_choice_optionsInput | session_answersUpsertWithWhereUniqueWithoutTask_choice_optionsInput[]
    createMany?: session_answersCreateManyTask_choice_optionsInputEnvelope
    set?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    disconnect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    delete?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    update?: session_answersUpdateWithWhereUniqueWithoutTask_choice_optionsInput | session_answersUpdateWithWhereUniqueWithoutTask_choice_optionsInput[]
    updateMany?: session_answersUpdateManyWithWhereWithoutTask_choice_optionsInput | session_answersUpdateManyWithWhereWithoutTask_choice_optionsInput[]
    deleteMany?: session_answersScalarWhereInput | session_answersScalarWhereInput[]
  }

  export type checkpoint_tasksUpdateOneRequiredWithoutTask_choice_optionsNestedInput = {
    create?: XOR<checkpoint_tasksCreateWithoutTask_choice_optionsInput, checkpoint_tasksUncheckedCreateWithoutTask_choice_optionsInput>
    connectOrCreate?: checkpoint_tasksCreateOrConnectWithoutTask_choice_optionsInput
    upsert?: checkpoint_tasksUpsertWithoutTask_choice_optionsInput
    connect?: checkpoint_tasksWhereUniqueInput
    update?: XOR<XOR<checkpoint_tasksUpdateToOneWithWhereWithoutTask_choice_optionsInput, checkpoint_tasksUpdateWithoutTask_choice_optionsInput>, checkpoint_tasksUncheckedUpdateWithoutTask_choice_optionsInput>
  }

  export type session_answersUncheckedUpdateManyWithoutTask_choice_optionsNestedInput = {
    create?: XOR<session_answersCreateWithoutTask_choice_optionsInput, session_answersUncheckedCreateWithoutTask_choice_optionsInput> | session_answersCreateWithoutTask_choice_optionsInput[] | session_answersUncheckedCreateWithoutTask_choice_optionsInput[]
    connectOrCreate?: session_answersCreateOrConnectWithoutTask_choice_optionsInput | session_answersCreateOrConnectWithoutTask_choice_optionsInput[]
    upsert?: session_answersUpsertWithWhereUniqueWithoutTask_choice_optionsInput | session_answersUpsertWithWhereUniqueWithoutTask_choice_optionsInput[]
    createMany?: session_answersCreateManyTask_choice_optionsInputEnvelope
    set?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    disconnect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    delete?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    connect?: session_answersWhereUniqueInput | session_answersWhereUniqueInput[]
    update?: session_answersUpdateWithWhereUniqueWithoutTask_choice_optionsInput | session_answersUpdateWithWhereUniqueWithoutTask_choice_optionsInput[]
    updateMany?: session_answersUpdateManyWithWhereWithoutTask_choice_optionsInput | session_answersUpdateManyWithWhereWithoutTask_choice_optionsInput[]
    deleteMany?: session_answersScalarWhereInput | session_answersScalarWhereInput[]
  }

  export type quest_checkpointsCreateNestedOneWithoutSession_answersInput = {
    create?: XOR<quest_checkpointsCreateWithoutSession_answersInput, quest_checkpointsUncheckedCreateWithoutSession_answersInput>
    connectOrCreate?: quest_checkpointsCreateOrConnectWithoutSession_answersInput
    connect?: quest_checkpointsWhereUniqueInput
  }

  export type task_choice_optionsCreateNestedOneWithoutSession_answersInput = {
    create?: XOR<task_choice_optionsCreateWithoutSession_answersInput, task_choice_optionsUncheckedCreateWithoutSession_answersInput>
    connectOrCreate?: task_choice_optionsCreateOrConnectWithoutSession_answersInput
    connect?: task_choice_optionsWhereUniqueInput
  }

  export type sessionsCreateNestedOneWithoutSession_answersInput = {
    create?: XOR<sessionsCreateWithoutSession_answersInput, sessionsUncheckedCreateWithoutSession_answersInput>
    connectOrCreate?: sessionsCreateOrConnectWithoutSession_answersInput
    connect?: sessionsWhereUniqueInput
  }

  export type checkpoint_tasksCreateNestedOneWithoutSession_answersInput = {
    create?: XOR<checkpoint_tasksCreateWithoutSession_answersInput, checkpoint_tasksUncheckedCreateWithoutSession_answersInput>
    connectOrCreate?: checkpoint_tasksCreateOrConnectWithoutSession_answersInput
    connect?: checkpoint_tasksWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type quest_checkpointsUpdateOneRequiredWithoutSession_answersNestedInput = {
    create?: XOR<quest_checkpointsCreateWithoutSession_answersInput, quest_checkpointsUncheckedCreateWithoutSession_answersInput>
    connectOrCreate?: quest_checkpointsCreateOrConnectWithoutSession_answersInput
    upsert?: quest_checkpointsUpsertWithoutSession_answersInput
    connect?: quest_checkpointsWhereUniqueInput
    update?: XOR<XOR<quest_checkpointsUpdateToOneWithWhereWithoutSession_answersInput, quest_checkpointsUpdateWithoutSession_answersInput>, quest_checkpointsUncheckedUpdateWithoutSession_answersInput>
  }

  export type task_choice_optionsUpdateOneWithoutSession_answersNestedInput = {
    create?: XOR<task_choice_optionsCreateWithoutSession_answersInput, task_choice_optionsUncheckedCreateWithoutSession_answersInput>
    connectOrCreate?: task_choice_optionsCreateOrConnectWithoutSession_answersInput
    upsert?: task_choice_optionsUpsertWithoutSession_answersInput
    disconnect?: task_choice_optionsWhereInput | boolean
    delete?: task_choice_optionsWhereInput | boolean
    connect?: task_choice_optionsWhereUniqueInput
    update?: XOR<XOR<task_choice_optionsUpdateToOneWithWhereWithoutSession_answersInput, task_choice_optionsUpdateWithoutSession_answersInput>, task_choice_optionsUncheckedUpdateWithoutSession_answersInput>
  }

  export type sessionsUpdateOneRequiredWithoutSession_answersNestedInput = {
    create?: XOR<sessionsCreateWithoutSession_answersInput, sessionsUncheckedCreateWithoutSession_answersInput>
    connectOrCreate?: sessionsCreateOrConnectWithoutSession_answersInput
    upsert?: sessionsUpsertWithoutSession_answersInput
    connect?: sessionsWhereUniqueInput
    update?: XOR<XOR<sessionsUpdateToOneWithWhereWithoutSession_answersInput, sessionsUpdateWithoutSession_answersInput>, sessionsUncheckedUpdateWithoutSession_answersInput>
  }

  export type checkpoint_tasksUpdateOneRequiredWithoutSession_answersNestedInput = {
    create?: XOR<checkpoint_tasksCreateWithoutSession_answersInput, checkpoint_tasksUncheckedCreateWithoutSession_answersInput>
    connectOrCreate?: checkpoint_tasksCreateOrConnectWithoutSession_answersInput
    upsert?: checkpoint_tasksUpsertWithoutSession_answersInput
    connect?: checkpoint_tasksWhereUniqueInput
    update?: XOR<XOR<checkpoint_tasksUpdateToOneWithWhereWithoutSession_answersInput, checkpoint_tasksUpdateWithoutSession_answersInput>, checkpoint_tasksUncheckedUpdateWithoutSession_answersInput>
  }

  export type quest_checkpointsCreateNestedOneWithoutSession_checkpointsInput = {
    create?: XOR<quest_checkpointsCreateWithoutSession_checkpointsInput, quest_checkpointsUncheckedCreateWithoutSession_checkpointsInput>
    connectOrCreate?: quest_checkpointsCreateOrConnectWithoutSession_checkpointsInput
    connect?: quest_checkpointsWhereUniqueInput
  }

  export type sessionsCreateNestedOneWithoutSession_checkpointsInput = {
    create?: XOR<sessionsCreateWithoutSession_checkpointsInput, sessionsUncheckedCreateWithoutSession_checkpointsInput>
    connectOrCreate?: sessionsCreateOrConnectWithoutSession_checkpointsInput
    connect?: sessionsWhereUniqueInput
  }

  export type quest_checkpointsUpdateOneRequiredWithoutSession_checkpointsNestedInput = {
    create?: XOR<quest_checkpointsCreateWithoutSession_checkpointsInput, quest_checkpointsUncheckedCreateWithoutSession_checkpointsInput>
    connectOrCreate?: quest_checkpointsCreateOrConnectWithoutSession_checkpointsInput
    upsert?: quest_checkpointsUpsertWithoutSession_checkpointsInput
    connect?: quest_checkpointsWhereUniqueInput
    update?: XOR<XOR<quest_checkpointsUpdateToOneWithWhereWithoutSession_checkpointsInput, quest_checkpointsUpdateWithoutSession_checkpointsInput>, quest_checkpointsUncheckedUpdateWithoutSession_checkpointsInput>
  }

  export type sessionsUpdateOneRequiredWithoutSession_checkpointsNestedInput = {
    create?: XOR<sessionsCreateWithoutSession_checkpointsInput, sessionsUncheckedCreateWithoutSession_checkpointsInput>
    connectOrCreate?: sessionsCreateOrConnectWithoutSession_checkpointsInput
    upsert?: sessionsUpsertWithoutSession_checkpointsInput
    connect?: sessionsWhereUniqueInput
    update?: XOR<XOR<sessionsUpdateToOneWithWhereWithoutSession_checkpointsInput, sessionsUpdateWithoutSession_checkpointsInput>, sessionsUncheckedUpdateWithoutSession_checkpointsInput>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type questsCreateWithoutUsersInput = {
    title: string
    description: string
    location_text: string
    image: string
    difficulty: number
    duration_minutes: number
    rules?: string | null
    status: string
    is_hidden?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    rejection_reason?: string | null
    quest_checkpoints?: quest_checkpointsCreateNestedManyWithoutQuestsInput
    sessions?: sessionsCreateNestedManyWithoutQuestsInput
  }

  export type questsUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    description: string
    location_text: string
    image: string
    difficulty: number
    duration_minutes: number
    rules?: string | null
    status: string
    is_hidden?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    rejection_reason?: string | null
    quest_checkpoints?: quest_checkpointsUncheckedCreateNestedManyWithoutQuestsInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutQuestsInput
  }

  export type questsCreateOrConnectWithoutUsersInput = {
    where: questsWhereUniqueInput
    create: XOR<questsCreateWithoutUsersInput, questsUncheckedCreateWithoutUsersInput>
  }

  export type questsCreateManyUsersInputEnvelope = {
    data: questsCreateManyUsersInput | questsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type sessionsCreateWithoutUsersInput = {
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
    session_answers?: session_answersCreateNestedManyWithoutSessionsInput
    session_checkpoints?: session_checkpointsCreateNestedManyWithoutSessionsInput
    quests: questsCreateNestedOneWithoutSessionsInput
    teams?: teamsCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateWithoutUsersInput = {
    id?: number
    quest_id: number
    team_id?: number | null
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
    session_answers?: session_answersUncheckedCreateNestedManyWithoutSessionsInput
    session_checkpoints?: session_checkpointsUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type sessionsCreateOrConnectWithoutUsersInput = {
    where: sessionsWhereUniqueInput
    create: XOR<sessionsCreateWithoutUsersInput, sessionsUncheckedCreateWithoutUsersInput>
  }

  export type sessionsCreateManyUsersInputEnvelope = {
    data: sessionsCreateManyUsersInput | sessionsCreateManyUsersInput[]
    skipDuplicates?: boolean
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
    sessions?: sessionsCreateNestedManyWithoutTeamsInput
    team_members?: team_membersCreateNestedManyWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    invite_code: string
    created_at?: Date | string
    sessions?: sessionsUncheckedCreateNestedManyWithoutTeamsInput
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

  export type questsUpsertWithWhereUniqueWithoutUsersInput = {
    where: questsWhereUniqueInput
    update: XOR<questsUpdateWithoutUsersInput, questsUncheckedUpdateWithoutUsersInput>
    create: XOR<questsCreateWithoutUsersInput, questsUncheckedCreateWithoutUsersInput>
  }

  export type questsUpdateWithWhereUniqueWithoutUsersInput = {
    where: questsWhereUniqueInput
    data: XOR<questsUpdateWithoutUsersInput, questsUncheckedUpdateWithoutUsersInput>
  }

  export type questsUpdateManyWithWhereWithoutUsersInput = {
    where: questsScalarWhereInput
    data: XOR<questsUpdateManyMutationInput, questsUncheckedUpdateManyWithoutUsersInput>
  }

  export type questsScalarWhereInput = {
    AND?: questsScalarWhereInput | questsScalarWhereInput[]
    OR?: questsScalarWhereInput[]
    NOT?: questsScalarWhereInput | questsScalarWhereInput[]
    id?: IntFilter<"quests"> | number
    creator_id?: IntFilter<"quests"> | number
    title?: StringFilter<"quests"> | string
    description?: StringFilter<"quests"> | string
    location_text?: StringFilter<"quests"> | string
    image?: StringFilter<"quests"> | string
    difficulty?: IntFilter<"quests"> | number
    duration_minutes?: IntFilter<"quests"> | number
    rules?: StringNullableFilter<"quests"> | string | null
    status?: StringFilter<"quests"> | string
    is_hidden?: BoolNullableFilter<"quests"> | boolean | null
    created_at?: DateTimeFilter<"quests"> | Date | string
    updated_at?: DateTimeFilter<"quests"> | Date | string
    rejection_reason?: StringNullableFilter<"quests"> | string | null
  }

  export type sessionsUpsertWithWhereUniqueWithoutUsersInput = {
    where: sessionsWhereUniqueInput
    update: XOR<sessionsUpdateWithoutUsersInput, sessionsUncheckedUpdateWithoutUsersInput>
    create: XOR<sessionsCreateWithoutUsersInput, sessionsUncheckedCreateWithoutUsersInput>
  }

  export type sessionsUpdateWithWhereUniqueWithoutUsersInput = {
    where: sessionsWhereUniqueInput
    data: XOR<sessionsUpdateWithoutUsersInput, sessionsUncheckedUpdateWithoutUsersInput>
  }

  export type sessionsUpdateManyWithWhereWithoutUsersInput = {
    where: sessionsScalarWhereInput
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyWithoutUsersInput>
  }

  export type sessionsScalarWhereInput = {
    AND?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    OR?: sessionsScalarWhereInput[]
    NOT?: sessionsScalarWhereInput | sessionsScalarWhereInput[]
    id?: IntFilter<"sessions"> | number
    quest_id?: IntFilter<"sessions"> | number
    user_id?: IntNullableFilter<"sessions"> | number | null
    team_id?: IntNullableFilter<"sessions"> | number | null
    status?: StringFilter<"sessions"> | string
    transport_mode?: StringNullableFilter<"sessions"> | string | null
    started_at?: DateTimeFilter<"sessions"> | Date | string
    finished_at?: DateTimeNullableFilter<"sessions"> | Date | string | null
    current_checkpoint_order?: IntNullableFilter<"sessions"> | number | null
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
    sessions?: sessionsCreateNestedManyWithoutTeamsInput
    users: usersCreateNestedOneWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutTeam_membersInput = {
    id?: number
    name: string
    description?: string | null
    creator_id: number
    invite_code: string
    created_at?: Date | string
    sessions?: sessionsUncheckedCreateNestedManyWithoutTeamsInput
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
    quests?: questsCreateNestedManyWithoutUsersInput
    sessions?: sessionsCreateNestedManyWithoutUsersInput
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
    quests?: questsUncheckedCreateNestedManyWithoutUsersInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutUsersInput
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
    sessions?: sessionsUpdateManyWithoutTeamsNestedInput
    users?: usersUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutTeam_membersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creator_id?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: sessionsUncheckedUpdateManyWithoutTeamsNestedInput
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
    quests?: questsUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUpdateManyWithoutUsersNestedInput
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
    quests?: questsUncheckedUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutUsersNestedInput
    teams?: teamsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type sessionsCreateWithoutTeamsInput = {
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
    session_answers?: session_answersCreateNestedManyWithoutSessionsInput
    session_checkpoints?: session_checkpointsCreateNestedManyWithoutSessionsInput
    quests: questsCreateNestedOneWithoutSessionsInput
    users?: usersCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateWithoutTeamsInput = {
    id?: number
    quest_id: number
    user_id?: number | null
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
    session_answers?: session_answersUncheckedCreateNestedManyWithoutSessionsInput
    session_checkpoints?: session_checkpointsUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type sessionsCreateOrConnectWithoutTeamsInput = {
    where: sessionsWhereUniqueInput
    create: XOR<sessionsCreateWithoutTeamsInput, sessionsUncheckedCreateWithoutTeamsInput>
  }

  export type sessionsCreateManyTeamsInputEnvelope = {
    data: sessionsCreateManyTeamsInput | sessionsCreateManyTeamsInput[]
    skipDuplicates?: boolean
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
    quests?: questsCreateNestedManyWithoutUsersInput
    sessions?: sessionsCreateNestedManyWithoutUsersInput
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
    quests?: questsUncheckedCreateNestedManyWithoutUsersInput
    sessions?: sessionsUncheckedCreateNestedManyWithoutUsersInput
    team_members?: team_membersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutTeamsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutTeamsInput, usersUncheckedCreateWithoutTeamsInput>
  }

  export type sessionsUpsertWithWhereUniqueWithoutTeamsInput = {
    where: sessionsWhereUniqueInput
    update: XOR<sessionsUpdateWithoutTeamsInput, sessionsUncheckedUpdateWithoutTeamsInput>
    create: XOR<sessionsCreateWithoutTeamsInput, sessionsUncheckedCreateWithoutTeamsInput>
  }

  export type sessionsUpdateWithWhereUniqueWithoutTeamsInput = {
    where: sessionsWhereUniqueInput
    data: XOR<sessionsUpdateWithoutTeamsInput, sessionsUncheckedUpdateWithoutTeamsInput>
  }

  export type sessionsUpdateManyWithWhereWithoutTeamsInput = {
    where: sessionsScalarWhereInput
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyWithoutTeamsInput>
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
    quests?: questsUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUpdateManyWithoutUsersNestedInput
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
    quests?: questsUncheckedUpdateManyWithoutUsersNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutUsersNestedInput
    team_members?: team_membersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type quest_checkpointsCreateWithoutQuestsInput = {
    order_index: number
    title: string
    task_description: string
    code_word: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    hint?: string | null
    point_rules?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    checkpoint_tasks?: checkpoint_tasksCreateNestedManyWithoutQuest_checkpointsInput
    session_answers?: session_answersCreateNestedManyWithoutQuest_checkpointsInput
    session_checkpoints?: session_checkpointsCreateNestedManyWithoutQuest_checkpointsInput
  }

  export type quest_checkpointsUncheckedCreateWithoutQuestsInput = {
    id?: number
    order_index: number
    title: string
    task_description: string
    code_word: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    hint?: string | null
    point_rules?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    checkpoint_tasks?: checkpoint_tasksUncheckedCreateNestedManyWithoutQuest_checkpointsInput
    session_answers?: session_answersUncheckedCreateNestedManyWithoutQuest_checkpointsInput
    session_checkpoints?: session_checkpointsUncheckedCreateNestedManyWithoutQuest_checkpointsInput
  }

  export type quest_checkpointsCreateOrConnectWithoutQuestsInput = {
    where: quest_checkpointsWhereUniqueInput
    create: XOR<quest_checkpointsCreateWithoutQuestsInput, quest_checkpointsUncheckedCreateWithoutQuestsInput>
  }

  export type quest_checkpointsCreateManyQuestsInputEnvelope = {
    data: quest_checkpointsCreateManyQuestsInput | quest_checkpointsCreateManyQuestsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutQuestsInput = {
    email: string
    password: string
    nickname: string
    age_group: string
    role: string
    avatar: string
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: sessionsCreateNestedManyWithoutUsersInput
    team_members?: team_membersCreateNestedManyWithoutUsersInput
    teams?: teamsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutQuestsInput = {
    id?: number
    email: string
    password: string
    nickname: string
    age_group: string
    role: string
    avatar: string
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: sessionsUncheckedCreateNestedManyWithoutUsersInput
    team_members?: team_membersUncheckedCreateNestedManyWithoutUsersInput
    teams?: teamsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutQuestsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutQuestsInput, usersUncheckedCreateWithoutQuestsInput>
  }

  export type sessionsCreateWithoutQuestsInput = {
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
    session_answers?: session_answersCreateNestedManyWithoutSessionsInput
    session_checkpoints?: session_checkpointsCreateNestedManyWithoutSessionsInput
    teams?: teamsCreateNestedOneWithoutSessionsInput
    users?: usersCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateWithoutQuestsInput = {
    id?: number
    user_id?: number | null
    team_id?: number | null
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
    session_answers?: session_answersUncheckedCreateNestedManyWithoutSessionsInput
    session_checkpoints?: session_checkpointsUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type sessionsCreateOrConnectWithoutQuestsInput = {
    where: sessionsWhereUniqueInput
    create: XOR<sessionsCreateWithoutQuestsInput, sessionsUncheckedCreateWithoutQuestsInput>
  }

  export type sessionsCreateManyQuestsInputEnvelope = {
    data: sessionsCreateManyQuestsInput | sessionsCreateManyQuestsInput[]
    skipDuplicates?: boolean
  }

  export type quest_checkpointsUpsertWithWhereUniqueWithoutQuestsInput = {
    where: quest_checkpointsWhereUniqueInput
    update: XOR<quest_checkpointsUpdateWithoutQuestsInput, quest_checkpointsUncheckedUpdateWithoutQuestsInput>
    create: XOR<quest_checkpointsCreateWithoutQuestsInput, quest_checkpointsUncheckedCreateWithoutQuestsInput>
  }

  export type quest_checkpointsUpdateWithWhereUniqueWithoutQuestsInput = {
    where: quest_checkpointsWhereUniqueInput
    data: XOR<quest_checkpointsUpdateWithoutQuestsInput, quest_checkpointsUncheckedUpdateWithoutQuestsInput>
  }

  export type quest_checkpointsUpdateManyWithWhereWithoutQuestsInput = {
    where: quest_checkpointsScalarWhereInput
    data: XOR<quest_checkpointsUpdateManyMutationInput, quest_checkpointsUncheckedUpdateManyWithoutQuestsInput>
  }

  export type quest_checkpointsScalarWhereInput = {
    AND?: quest_checkpointsScalarWhereInput | quest_checkpointsScalarWhereInput[]
    OR?: quest_checkpointsScalarWhereInput[]
    NOT?: quest_checkpointsScalarWhereInput | quest_checkpointsScalarWhereInput[]
    id?: IntFilter<"quest_checkpoints"> | number
    quest_id?: IntFilter<"quest_checkpoints"> | number
    order_index?: IntFilter<"quest_checkpoints"> | number
    title?: StringFilter<"quest_checkpoints"> | string
    task_description?: StringFilter<"quest_checkpoints"> | string
    code_word?: StringFilter<"quest_checkpoints"> | string
    latitude?: DecimalFilter<"quest_checkpoints"> | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFilter<"quest_checkpoints"> | Decimal | DecimalJsLike | number | string
    hint?: StringNullableFilter<"quest_checkpoints"> | string | null
    point_rules?: StringNullableFilter<"quest_checkpoints"> | string | null
    created_at?: DateTimeFilter<"quest_checkpoints"> | Date | string
    updated_at?: DateTimeFilter<"quest_checkpoints"> | Date | string
  }

  export type usersUpsertWithoutQuestsInput = {
    update: XOR<usersUpdateWithoutQuestsInput, usersUncheckedUpdateWithoutQuestsInput>
    create: XOR<usersCreateWithoutQuestsInput, usersUncheckedCreateWithoutQuestsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutQuestsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutQuestsInput, usersUncheckedUpdateWithoutQuestsInput>
  }

  export type usersUpdateWithoutQuestsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    age_group?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: sessionsUpdateManyWithoutUsersNestedInput
    team_members?: team_membersUpdateManyWithoutUsersNestedInput
    teams?: teamsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutQuestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    age_group?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: sessionsUncheckedUpdateManyWithoutUsersNestedInput
    team_members?: team_membersUncheckedUpdateManyWithoutUsersNestedInput
    teams?: teamsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type sessionsUpsertWithWhereUniqueWithoutQuestsInput = {
    where: sessionsWhereUniqueInput
    update: XOR<sessionsUpdateWithoutQuestsInput, sessionsUncheckedUpdateWithoutQuestsInput>
    create: XOR<sessionsCreateWithoutQuestsInput, sessionsUncheckedCreateWithoutQuestsInput>
  }

  export type sessionsUpdateWithWhereUniqueWithoutQuestsInput = {
    where: sessionsWhereUniqueInput
    data: XOR<sessionsUpdateWithoutQuestsInput, sessionsUncheckedUpdateWithoutQuestsInput>
  }

  export type sessionsUpdateManyWithWhereWithoutQuestsInput = {
    where: sessionsScalarWhereInput
    data: XOR<sessionsUpdateManyMutationInput, sessionsUncheckedUpdateManyWithoutQuestsInput>
  }

  export type checkpoint_tasksCreateWithoutQuest_checkpointsInput = {
    task_type: string
    question_text?: string | null
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    session_answers?: session_answersCreateNestedManyWithoutCheckpoint_tasksInput
    task_choice_options?: task_choice_optionsCreateNestedManyWithoutCheckpoint_tasksInput
  }

  export type checkpoint_tasksUncheckedCreateWithoutQuest_checkpointsInput = {
    id?: number
    task_type: string
    question_text?: string | null
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    session_answers?: session_answersUncheckedCreateNestedManyWithoutCheckpoint_tasksInput
    task_choice_options?: task_choice_optionsUncheckedCreateNestedManyWithoutCheckpoint_tasksInput
  }

  export type checkpoint_tasksCreateOrConnectWithoutQuest_checkpointsInput = {
    where: checkpoint_tasksWhereUniqueInput
    create: XOR<checkpoint_tasksCreateWithoutQuest_checkpointsInput, checkpoint_tasksUncheckedCreateWithoutQuest_checkpointsInput>
  }

  export type checkpoint_tasksCreateManyQuest_checkpointsInputEnvelope = {
    data: checkpoint_tasksCreateManyQuest_checkpointsInput | checkpoint_tasksCreateManyQuest_checkpointsInput[]
    skipDuplicates?: boolean
  }

  export type questsCreateWithoutQuest_checkpointsInput = {
    title: string
    description: string
    location_text: string
    image: string
    difficulty: number
    duration_minutes: number
    rules?: string | null
    status: string
    is_hidden?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    rejection_reason?: string | null
    users: usersCreateNestedOneWithoutQuestsInput
    sessions?: sessionsCreateNestedManyWithoutQuestsInput
  }

  export type questsUncheckedCreateWithoutQuest_checkpointsInput = {
    id?: number
    creator_id: number
    title: string
    description: string
    location_text: string
    image: string
    difficulty: number
    duration_minutes: number
    rules?: string | null
    status: string
    is_hidden?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    rejection_reason?: string | null
    sessions?: sessionsUncheckedCreateNestedManyWithoutQuestsInput
  }

  export type questsCreateOrConnectWithoutQuest_checkpointsInput = {
    where: questsWhereUniqueInput
    create: XOR<questsCreateWithoutQuest_checkpointsInput, questsUncheckedCreateWithoutQuest_checkpointsInput>
  }

  export type session_answersCreateWithoutQuest_checkpointsInput = {
    answer_text?: string | null
    is_correct: boolean
    answered_at?: Date | string
    task_choice_options?: task_choice_optionsCreateNestedOneWithoutSession_answersInput
    sessions: sessionsCreateNestedOneWithoutSession_answersInput
    checkpoint_tasks: checkpoint_tasksCreateNestedOneWithoutSession_answersInput
  }

  export type session_answersUncheckedCreateWithoutQuest_checkpointsInput = {
    id?: number
    session_id: number
    task_id: number
    answer_text?: string | null
    chosen_option_id?: number | null
    is_correct: boolean
    answered_at?: Date | string
  }

  export type session_answersCreateOrConnectWithoutQuest_checkpointsInput = {
    where: session_answersWhereUniqueInput
    create: XOR<session_answersCreateWithoutQuest_checkpointsInput, session_answersUncheckedCreateWithoutQuest_checkpointsInput>
  }

  export type session_answersCreateManyQuest_checkpointsInputEnvelope = {
    data: session_answersCreateManyQuest_checkpointsInput | session_answersCreateManyQuest_checkpointsInput[]
    skipDuplicates?: boolean
  }

  export type session_checkpointsCreateWithoutQuest_checkpointsInput = {
    status: string
    completed_at?: Date | string | null
    sessions: sessionsCreateNestedOneWithoutSession_checkpointsInput
  }

  export type session_checkpointsUncheckedCreateWithoutQuest_checkpointsInput = {
    id?: number
    session_id: number
    status: string
    completed_at?: Date | string | null
  }

  export type session_checkpointsCreateOrConnectWithoutQuest_checkpointsInput = {
    where: session_checkpointsWhereUniqueInput
    create: XOR<session_checkpointsCreateWithoutQuest_checkpointsInput, session_checkpointsUncheckedCreateWithoutQuest_checkpointsInput>
  }

  export type session_checkpointsCreateManyQuest_checkpointsInputEnvelope = {
    data: session_checkpointsCreateManyQuest_checkpointsInput | session_checkpointsCreateManyQuest_checkpointsInput[]
    skipDuplicates?: boolean
  }

  export type checkpoint_tasksUpsertWithWhereUniqueWithoutQuest_checkpointsInput = {
    where: checkpoint_tasksWhereUniqueInput
    update: XOR<checkpoint_tasksUpdateWithoutQuest_checkpointsInput, checkpoint_tasksUncheckedUpdateWithoutQuest_checkpointsInput>
    create: XOR<checkpoint_tasksCreateWithoutQuest_checkpointsInput, checkpoint_tasksUncheckedCreateWithoutQuest_checkpointsInput>
  }

  export type checkpoint_tasksUpdateWithWhereUniqueWithoutQuest_checkpointsInput = {
    where: checkpoint_tasksWhereUniqueInput
    data: XOR<checkpoint_tasksUpdateWithoutQuest_checkpointsInput, checkpoint_tasksUncheckedUpdateWithoutQuest_checkpointsInput>
  }

  export type checkpoint_tasksUpdateManyWithWhereWithoutQuest_checkpointsInput = {
    where: checkpoint_tasksScalarWhereInput
    data: XOR<checkpoint_tasksUpdateManyMutationInput, checkpoint_tasksUncheckedUpdateManyWithoutQuest_checkpointsInput>
  }

  export type checkpoint_tasksScalarWhereInput = {
    AND?: checkpoint_tasksScalarWhereInput | checkpoint_tasksScalarWhereInput[]
    OR?: checkpoint_tasksScalarWhereInput[]
    NOT?: checkpoint_tasksScalarWhereInput | checkpoint_tasksScalarWhereInput[]
    id?: IntFilter<"checkpoint_tasks"> | number
    checkpoint_id?: IntFilter<"checkpoint_tasks"> | number
    task_type?: StringFilter<"checkpoint_tasks"> | string
    question_text?: StringNullableFilter<"checkpoint_tasks"> | string | null
    correct_answer?: StringFilter<"checkpoint_tasks"> | string
    created_at?: DateTimeFilter<"checkpoint_tasks"> | Date | string
    updated_at?: DateTimeFilter<"checkpoint_tasks"> | Date | string
  }

  export type questsUpsertWithoutQuest_checkpointsInput = {
    update: XOR<questsUpdateWithoutQuest_checkpointsInput, questsUncheckedUpdateWithoutQuest_checkpointsInput>
    create: XOR<questsCreateWithoutQuest_checkpointsInput, questsUncheckedCreateWithoutQuest_checkpointsInput>
    where?: questsWhereInput
  }

  export type questsUpdateToOneWithWhereWithoutQuest_checkpointsInput = {
    where?: questsWhereInput
    data: XOR<questsUpdateWithoutQuest_checkpointsInput, questsUncheckedUpdateWithoutQuest_checkpointsInput>
  }

  export type questsUpdateWithoutQuest_checkpointsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location_text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_hidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutQuestsNestedInput
    sessions?: sessionsUpdateManyWithoutQuestsNestedInput
  }

  export type questsUncheckedUpdateWithoutQuest_checkpointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    creator_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location_text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_hidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: sessionsUncheckedUpdateManyWithoutQuestsNestedInput
  }

  export type session_answersUpsertWithWhereUniqueWithoutQuest_checkpointsInput = {
    where: session_answersWhereUniqueInput
    update: XOR<session_answersUpdateWithoutQuest_checkpointsInput, session_answersUncheckedUpdateWithoutQuest_checkpointsInput>
    create: XOR<session_answersCreateWithoutQuest_checkpointsInput, session_answersUncheckedCreateWithoutQuest_checkpointsInput>
  }

  export type session_answersUpdateWithWhereUniqueWithoutQuest_checkpointsInput = {
    where: session_answersWhereUniqueInput
    data: XOR<session_answersUpdateWithoutQuest_checkpointsInput, session_answersUncheckedUpdateWithoutQuest_checkpointsInput>
  }

  export type session_answersUpdateManyWithWhereWithoutQuest_checkpointsInput = {
    where: session_answersScalarWhereInput
    data: XOR<session_answersUpdateManyMutationInput, session_answersUncheckedUpdateManyWithoutQuest_checkpointsInput>
  }

  export type session_answersScalarWhereInput = {
    AND?: session_answersScalarWhereInput | session_answersScalarWhereInput[]
    OR?: session_answersScalarWhereInput[]
    NOT?: session_answersScalarWhereInput | session_answersScalarWhereInput[]
    id?: IntFilter<"session_answers"> | number
    session_id?: IntFilter<"session_answers"> | number
    checkpoint_id?: IntFilter<"session_answers"> | number
    task_id?: IntFilter<"session_answers"> | number
    answer_text?: StringNullableFilter<"session_answers"> | string | null
    chosen_option_id?: IntNullableFilter<"session_answers"> | number | null
    is_correct?: BoolFilter<"session_answers"> | boolean
    answered_at?: DateTimeFilter<"session_answers"> | Date | string
  }

  export type session_checkpointsUpsertWithWhereUniqueWithoutQuest_checkpointsInput = {
    where: session_checkpointsWhereUniqueInput
    update: XOR<session_checkpointsUpdateWithoutQuest_checkpointsInput, session_checkpointsUncheckedUpdateWithoutQuest_checkpointsInput>
    create: XOR<session_checkpointsCreateWithoutQuest_checkpointsInput, session_checkpointsUncheckedCreateWithoutQuest_checkpointsInput>
  }

  export type session_checkpointsUpdateWithWhereUniqueWithoutQuest_checkpointsInput = {
    where: session_checkpointsWhereUniqueInput
    data: XOR<session_checkpointsUpdateWithoutQuest_checkpointsInput, session_checkpointsUncheckedUpdateWithoutQuest_checkpointsInput>
  }

  export type session_checkpointsUpdateManyWithWhereWithoutQuest_checkpointsInput = {
    where: session_checkpointsScalarWhereInput
    data: XOR<session_checkpointsUpdateManyMutationInput, session_checkpointsUncheckedUpdateManyWithoutQuest_checkpointsInput>
  }

  export type session_checkpointsScalarWhereInput = {
    AND?: session_checkpointsScalarWhereInput | session_checkpointsScalarWhereInput[]
    OR?: session_checkpointsScalarWhereInput[]
    NOT?: session_checkpointsScalarWhereInput | session_checkpointsScalarWhereInput[]
    id?: IntFilter<"session_checkpoints"> | number
    session_id?: IntFilter<"session_checkpoints"> | number
    checkpoint_id?: IntFilter<"session_checkpoints"> | number
    status?: StringFilter<"session_checkpoints"> | string
    completed_at?: DateTimeNullableFilter<"session_checkpoints"> | Date | string | null
  }

  export type session_answersCreateWithoutSessionsInput = {
    answer_text?: string | null
    is_correct: boolean
    answered_at?: Date | string
    quest_checkpoints: quest_checkpointsCreateNestedOneWithoutSession_answersInput
    task_choice_options?: task_choice_optionsCreateNestedOneWithoutSession_answersInput
    checkpoint_tasks: checkpoint_tasksCreateNestedOneWithoutSession_answersInput
  }

  export type session_answersUncheckedCreateWithoutSessionsInput = {
    id?: number
    checkpoint_id: number
    task_id: number
    answer_text?: string | null
    chosen_option_id?: number | null
    is_correct: boolean
    answered_at?: Date | string
  }

  export type session_answersCreateOrConnectWithoutSessionsInput = {
    where: session_answersWhereUniqueInput
    create: XOR<session_answersCreateWithoutSessionsInput, session_answersUncheckedCreateWithoutSessionsInput>
  }

  export type session_answersCreateManySessionsInputEnvelope = {
    data: session_answersCreateManySessionsInput | session_answersCreateManySessionsInput[]
    skipDuplicates?: boolean
  }

  export type session_checkpointsCreateWithoutSessionsInput = {
    status: string
    completed_at?: Date | string | null
    quest_checkpoints: quest_checkpointsCreateNestedOneWithoutSession_checkpointsInput
  }

  export type session_checkpointsUncheckedCreateWithoutSessionsInput = {
    id?: number
    checkpoint_id: number
    status: string
    completed_at?: Date | string | null
  }

  export type session_checkpointsCreateOrConnectWithoutSessionsInput = {
    where: session_checkpointsWhereUniqueInput
    create: XOR<session_checkpointsCreateWithoutSessionsInput, session_checkpointsUncheckedCreateWithoutSessionsInput>
  }

  export type session_checkpointsCreateManySessionsInputEnvelope = {
    data: session_checkpointsCreateManySessionsInput | session_checkpointsCreateManySessionsInput[]
    skipDuplicates?: boolean
  }

  export type questsCreateWithoutSessionsInput = {
    title: string
    description: string
    location_text: string
    image: string
    difficulty: number
    duration_minutes: number
    rules?: string | null
    status: string
    is_hidden?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    rejection_reason?: string | null
    quest_checkpoints?: quest_checkpointsCreateNestedManyWithoutQuestsInput
    users: usersCreateNestedOneWithoutQuestsInput
  }

  export type questsUncheckedCreateWithoutSessionsInput = {
    id?: number
    creator_id: number
    title: string
    description: string
    location_text: string
    image: string
    difficulty: number
    duration_minutes: number
    rules?: string | null
    status: string
    is_hidden?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    rejection_reason?: string | null
    quest_checkpoints?: quest_checkpointsUncheckedCreateNestedManyWithoutQuestsInput
  }

  export type questsCreateOrConnectWithoutSessionsInput = {
    where: questsWhereUniqueInput
    create: XOR<questsCreateWithoutSessionsInput, questsUncheckedCreateWithoutSessionsInput>
  }

  export type teamsCreateWithoutSessionsInput = {
    name: string
    description?: string | null
    invite_code: string
    created_at?: Date | string
    team_members?: team_membersCreateNestedManyWithoutTeamsInput
    users: usersCreateNestedOneWithoutTeamsInput
  }

  export type teamsUncheckedCreateWithoutSessionsInput = {
    id?: number
    name: string
    description?: string | null
    creator_id: number
    invite_code: string
    created_at?: Date | string
    team_members?: team_membersUncheckedCreateNestedManyWithoutTeamsInput
  }

  export type teamsCreateOrConnectWithoutSessionsInput = {
    where: teamsWhereUniqueInput
    create: XOR<teamsCreateWithoutSessionsInput, teamsUncheckedCreateWithoutSessionsInput>
  }

  export type usersCreateWithoutSessionsInput = {
    email: string
    password: string
    nickname: string
    age_group: string
    role: string
    avatar: string
    created_at?: Date | string
    updated_at?: Date | string
    quests?: questsCreateNestedManyWithoutUsersInput
    team_members?: team_membersCreateNestedManyWithoutUsersInput
    teams?: teamsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutSessionsInput = {
    id?: number
    email: string
    password: string
    nickname: string
    age_group: string
    role: string
    avatar: string
    created_at?: Date | string
    updated_at?: Date | string
    quests?: questsUncheckedCreateNestedManyWithoutUsersInput
    team_members?: team_membersUncheckedCreateNestedManyWithoutUsersInput
    teams?: teamsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutSessionsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSessionsInput, usersUncheckedCreateWithoutSessionsInput>
  }

  export type session_answersUpsertWithWhereUniqueWithoutSessionsInput = {
    where: session_answersWhereUniqueInput
    update: XOR<session_answersUpdateWithoutSessionsInput, session_answersUncheckedUpdateWithoutSessionsInput>
    create: XOR<session_answersCreateWithoutSessionsInput, session_answersUncheckedCreateWithoutSessionsInput>
  }

  export type session_answersUpdateWithWhereUniqueWithoutSessionsInput = {
    where: session_answersWhereUniqueInput
    data: XOR<session_answersUpdateWithoutSessionsInput, session_answersUncheckedUpdateWithoutSessionsInput>
  }

  export type session_answersUpdateManyWithWhereWithoutSessionsInput = {
    where: session_answersScalarWhereInput
    data: XOR<session_answersUpdateManyMutationInput, session_answersUncheckedUpdateManyWithoutSessionsInput>
  }

  export type session_checkpointsUpsertWithWhereUniqueWithoutSessionsInput = {
    where: session_checkpointsWhereUniqueInput
    update: XOR<session_checkpointsUpdateWithoutSessionsInput, session_checkpointsUncheckedUpdateWithoutSessionsInput>
    create: XOR<session_checkpointsCreateWithoutSessionsInput, session_checkpointsUncheckedCreateWithoutSessionsInput>
  }

  export type session_checkpointsUpdateWithWhereUniqueWithoutSessionsInput = {
    where: session_checkpointsWhereUniqueInput
    data: XOR<session_checkpointsUpdateWithoutSessionsInput, session_checkpointsUncheckedUpdateWithoutSessionsInput>
  }

  export type session_checkpointsUpdateManyWithWhereWithoutSessionsInput = {
    where: session_checkpointsScalarWhereInput
    data: XOR<session_checkpointsUpdateManyMutationInput, session_checkpointsUncheckedUpdateManyWithoutSessionsInput>
  }

  export type questsUpsertWithoutSessionsInput = {
    update: XOR<questsUpdateWithoutSessionsInput, questsUncheckedUpdateWithoutSessionsInput>
    create: XOR<questsCreateWithoutSessionsInput, questsUncheckedCreateWithoutSessionsInput>
    where?: questsWhereInput
  }

  export type questsUpdateToOneWithWhereWithoutSessionsInput = {
    where?: questsWhereInput
    data: XOR<questsUpdateWithoutSessionsInput, questsUncheckedUpdateWithoutSessionsInput>
  }

  export type questsUpdateWithoutSessionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location_text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_hidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    quest_checkpoints?: quest_checkpointsUpdateManyWithoutQuestsNestedInput
    users?: usersUpdateOneRequiredWithoutQuestsNestedInput
  }

  export type questsUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    creator_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location_text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_hidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    quest_checkpoints?: quest_checkpointsUncheckedUpdateManyWithoutQuestsNestedInput
  }

  export type teamsUpsertWithoutSessionsInput = {
    update: XOR<teamsUpdateWithoutSessionsInput, teamsUncheckedUpdateWithoutSessionsInput>
    create: XOR<teamsCreateWithoutSessionsInput, teamsUncheckedCreateWithoutSessionsInput>
    where?: teamsWhereInput
  }

  export type teamsUpdateToOneWithWhereWithoutSessionsInput = {
    where?: teamsWhereInput
    data: XOR<teamsUpdateWithoutSessionsInput, teamsUncheckedUpdateWithoutSessionsInput>
  }

  export type teamsUpdateWithoutSessionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUpdateManyWithoutTeamsNestedInput
    users?: usersUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creator_id?: IntFieldUpdateOperationsInput | number
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team_members?: team_membersUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type usersUpsertWithoutSessionsInput = {
    update: XOR<usersUpdateWithoutSessionsInput, usersUncheckedUpdateWithoutSessionsInput>
    create: XOR<usersCreateWithoutSessionsInput, usersUncheckedCreateWithoutSessionsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSessionsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSessionsInput, usersUncheckedUpdateWithoutSessionsInput>
  }

  export type usersUpdateWithoutSessionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    age_group?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: questsUpdateManyWithoutUsersNestedInput
    team_members?: team_membersUpdateManyWithoutUsersNestedInput
    teams?: teamsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    nickname?: StringFieldUpdateOperationsInput | string
    age_group?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: questsUncheckedUpdateManyWithoutUsersNestedInput
    team_members?: team_membersUncheckedUpdateManyWithoutUsersNestedInput
    teams?: teamsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type quest_checkpointsCreateWithoutCheckpoint_tasksInput = {
    order_index: number
    title: string
    task_description: string
    code_word: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    hint?: string | null
    point_rules?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    quests: questsCreateNestedOneWithoutQuest_checkpointsInput
    session_answers?: session_answersCreateNestedManyWithoutQuest_checkpointsInput
    session_checkpoints?: session_checkpointsCreateNestedManyWithoutQuest_checkpointsInput
  }

  export type quest_checkpointsUncheckedCreateWithoutCheckpoint_tasksInput = {
    id?: number
    quest_id: number
    order_index: number
    title: string
    task_description: string
    code_word: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    hint?: string | null
    point_rules?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    session_answers?: session_answersUncheckedCreateNestedManyWithoutQuest_checkpointsInput
    session_checkpoints?: session_checkpointsUncheckedCreateNestedManyWithoutQuest_checkpointsInput
  }

  export type quest_checkpointsCreateOrConnectWithoutCheckpoint_tasksInput = {
    where: quest_checkpointsWhereUniqueInput
    create: XOR<quest_checkpointsCreateWithoutCheckpoint_tasksInput, quest_checkpointsUncheckedCreateWithoutCheckpoint_tasksInput>
  }

  export type session_answersCreateWithoutCheckpoint_tasksInput = {
    answer_text?: string | null
    is_correct: boolean
    answered_at?: Date | string
    quest_checkpoints: quest_checkpointsCreateNestedOneWithoutSession_answersInput
    task_choice_options?: task_choice_optionsCreateNestedOneWithoutSession_answersInput
    sessions: sessionsCreateNestedOneWithoutSession_answersInput
  }

  export type session_answersUncheckedCreateWithoutCheckpoint_tasksInput = {
    id?: number
    session_id: number
    checkpoint_id: number
    answer_text?: string | null
    chosen_option_id?: number | null
    is_correct: boolean
    answered_at?: Date | string
  }

  export type session_answersCreateOrConnectWithoutCheckpoint_tasksInput = {
    where: session_answersWhereUniqueInput
    create: XOR<session_answersCreateWithoutCheckpoint_tasksInput, session_answersUncheckedCreateWithoutCheckpoint_tasksInput>
  }

  export type session_answersCreateManyCheckpoint_tasksInputEnvelope = {
    data: session_answersCreateManyCheckpoint_tasksInput | session_answersCreateManyCheckpoint_tasksInput[]
    skipDuplicates?: boolean
  }

  export type task_choice_optionsCreateWithoutCheckpoint_tasksInput = {
    option_text: string
    session_answers?: session_answersCreateNestedManyWithoutTask_choice_optionsInput
  }

  export type task_choice_optionsUncheckedCreateWithoutCheckpoint_tasksInput = {
    id?: number
    option_text: string
    session_answers?: session_answersUncheckedCreateNestedManyWithoutTask_choice_optionsInput
  }

  export type task_choice_optionsCreateOrConnectWithoutCheckpoint_tasksInput = {
    where: task_choice_optionsWhereUniqueInput
    create: XOR<task_choice_optionsCreateWithoutCheckpoint_tasksInput, task_choice_optionsUncheckedCreateWithoutCheckpoint_tasksInput>
  }

  export type task_choice_optionsCreateManyCheckpoint_tasksInputEnvelope = {
    data: task_choice_optionsCreateManyCheckpoint_tasksInput | task_choice_optionsCreateManyCheckpoint_tasksInput[]
    skipDuplicates?: boolean
  }

  export type quest_checkpointsUpsertWithoutCheckpoint_tasksInput = {
    update: XOR<quest_checkpointsUpdateWithoutCheckpoint_tasksInput, quest_checkpointsUncheckedUpdateWithoutCheckpoint_tasksInput>
    create: XOR<quest_checkpointsCreateWithoutCheckpoint_tasksInput, quest_checkpointsUncheckedCreateWithoutCheckpoint_tasksInput>
    where?: quest_checkpointsWhereInput
  }

  export type quest_checkpointsUpdateToOneWithWhereWithoutCheckpoint_tasksInput = {
    where?: quest_checkpointsWhereInput
    data: XOR<quest_checkpointsUpdateWithoutCheckpoint_tasksInput, quest_checkpointsUncheckedUpdateWithoutCheckpoint_tasksInput>
  }

  export type quest_checkpointsUpdateWithoutCheckpoint_tasksInput = {
    order_index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    code_word?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    point_rules?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quests?: questsUpdateOneRequiredWithoutQuest_checkpointsNestedInput
    session_answers?: session_answersUpdateManyWithoutQuest_checkpointsNestedInput
    session_checkpoints?: session_checkpointsUpdateManyWithoutQuest_checkpointsNestedInput
  }

  export type quest_checkpointsUncheckedUpdateWithoutCheckpoint_tasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    code_word?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    point_rules?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_answers?: session_answersUncheckedUpdateManyWithoutQuest_checkpointsNestedInput
    session_checkpoints?: session_checkpointsUncheckedUpdateManyWithoutQuest_checkpointsNestedInput
  }

  export type session_answersUpsertWithWhereUniqueWithoutCheckpoint_tasksInput = {
    where: session_answersWhereUniqueInput
    update: XOR<session_answersUpdateWithoutCheckpoint_tasksInput, session_answersUncheckedUpdateWithoutCheckpoint_tasksInput>
    create: XOR<session_answersCreateWithoutCheckpoint_tasksInput, session_answersUncheckedCreateWithoutCheckpoint_tasksInput>
  }

  export type session_answersUpdateWithWhereUniqueWithoutCheckpoint_tasksInput = {
    where: session_answersWhereUniqueInput
    data: XOR<session_answersUpdateWithoutCheckpoint_tasksInput, session_answersUncheckedUpdateWithoutCheckpoint_tasksInput>
  }

  export type session_answersUpdateManyWithWhereWithoutCheckpoint_tasksInput = {
    where: session_answersScalarWhereInput
    data: XOR<session_answersUpdateManyMutationInput, session_answersUncheckedUpdateManyWithoutCheckpoint_tasksInput>
  }

  export type task_choice_optionsUpsertWithWhereUniqueWithoutCheckpoint_tasksInput = {
    where: task_choice_optionsWhereUniqueInput
    update: XOR<task_choice_optionsUpdateWithoutCheckpoint_tasksInput, task_choice_optionsUncheckedUpdateWithoutCheckpoint_tasksInput>
    create: XOR<task_choice_optionsCreateWithoutCheckpoint_tasksInput, task_choice_optionsUncheckedCreateWithoutCheckpoint_tasksInput>
  }

  export type task_choice_optionsUpdateWithWhereUniqueWithoutCheckpoint_tasksInput = {
    where: task_choice_optionsWhereUniqueInput
    data: XOR<task_choice_optionsUpdateWithoutCheckpoint_tasksInput, task_choice_optionsUncheckedUpdateWithoutCheckpoint_tasksInput>
  }

  export type task_choice_optionsUpdateManyWithWhereWithoutCheckpoint_tasksInput = {
    where: task_choice_optionsScalarWhereInput
    data: XOR<task_choice_optionsUpdateManyMutationInput, task_choice_optionsUncheckedUpdateManyWithoutCheckpoint_tasksInput>
  }

  export type task_choice_optionsScalarWhereInput = {
    AND?: task_choice_optionsScalarWhereInput | task_choice_optionsScalarWhereInput[]
    OR?: task_choice_optionsScalarWhereInput[]
    NOT?: task_choice_optionsScalarWhereInput | task_choice_optionsScalarWhereInput[]
    id?: IntFilter<"task_choice_options"> | number
    task_id?: IntFilter<"task_choice_options"> | number
    option_text?: StringFilter<"task_choice_options"> | string
  }

  export type session_answersCreateWithoutTask_choice_optionsInput = {
    answer_text?: string | null
    is_correct: boolean
    answered_at?: Date | string
    quest_checkpoints: quest_checkpointsCreateNestedOneWithoutSession_answersInput
    sessions: sessionsCreateNestedOneWithoutSession_answersInput
    checkpoint_tasks: checkpoint_tasksCreateNestedOneWithoutSession_answersInput
  }

  export type session_answersUncheckedCreateWithoutTask_choice_optionsInput = {
    id?: number
    session_id: number
    checkpoint_id: number
    task_id: number
    answer_text?: string | null
    is_correct: boolean
    answered_at?: Date | string
  }

  export type session_answersCreateOrConnectWithoutTask_choice_optionsInput = {
    where: session_answersWhereUniqueInput
    create: XOR<session_answersCreateWithoutTask_choice_optionsInput, session_answersUncheckedCreateWithoutTask_choice_optionsInput>
  }

  export type session_answersCreateManyTask_choice_optionsInputEnvelope = {
    data: session_answersCreateManyTask_choice_optionsInput | session_answersCreateManyTask_choice_optionsInput[]
    skipDuplicates?: boolean
  }

  export type checkpoint_tasksCreateWithoutTask_choice_optionsInput = {
    task_type: string
    question_text?: string | null
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    quest_checkpoints: quest_checkpointsCreateNestedOneWithoutCheckpoint_tasksInput
    session_answers?: session_answersCreateNestedManyWithoutCheckpoint_tasksInput
  }

  export type checkpoint_tasksUncheckedCreateWithoutTask_choice_optionsInput = {
    id?: number
    checkpoint_id: number
    task_type: string
    question_text?: string | null
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    session_answers?: session_answersUncheckedCreateNestedManyWithoutCheckpoint_tasksInput
  }

  export type checkpoint_tasksCreateOrConnectWithoutTask_choice_optionsInput = {
    where: checkpoint_tasksWhereUniqueInput
    create: XOR<checkpoint_tasksCreateWithoutTask_choice_optionsInput, checkpoint_tasksUncheckedCreateWithoutTask_choice_optionsInput>
  }

  export type session_answersUpsertWithWhereUniqueWithoutTask_choice_optionsInput = {
    where: session_answersWhereUniqueInput
    update: XOR<session_answersUpdateWithoutTask_choice_optionsInput, session_answersUncheckedUpdateWithoutTask_choice_optionsInput>
    create: XOR<session_answersCreateWithoutTask_choice_optionsInput, session_answersUncheckedCreateWithoutTask_choice_optionsInput>
  }

  export type session_answersUpdateWithWhereUniqueWithoutTask_choice_optionsInput = {
    where: session_answersWhereUniqueInput
    data: XOR<session_answersUpdateWithoutTask_choice_optionsInput, session_answersUncheckedUpdateWithoutTask_choice_optionsInput>
  }

  export type session_answersUpdateManyWithWhereWithoutTask_choice_optionsInput = {
    where: session_answersScalarWhereInput
    data: XOR<session_answersUpdateManyMutationInput, session_answersUncheckedUpdateManyWithoutTask_choice_optionsInput>
  }

  export type checkpoint_tasksUpsertWithoutTask_choice_optionsInput = {
    update: XOR<checkpoint_tasksUpdateWithoutTask_choice_optionsInput, checkpoint_tasksUncheckedUpdateWithoutTask_choice_optionsInput>
    create: XOR<checkpoint_tasksCreateWithoutTask_choice_optionsInput, checkpoint_tasksUncheckedCreateWithoutTask_choice_optionsInput>
    where?: checkpoint_tasksWhereInput
  }

  export type checkpoint_tasksUpdateToOneWithWhereWithoutTask_choice_optionsInput = {
    where?: checkpoint_tasksWhereInput
    data: XOR<checkpoint_tasksUpdateWithoutTask_choice_optionsInput, checkpoint_tasksUncheckedUpdateWithoutTask_choice_optionsInput>
  }

  export type checkpoint_tasksUpdateWithoutTask_choice_optionsInput = {
    task_type?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quest_checkpoints?: quest_checkpointsUpdateOneRequiredWithoutCheckpoint_tasksNestedInput
    session_answers?: session_answersUpdateManyWithoutCheckpoint_tasksNestedInput
  }

  export type checkpoint_tasksUncheckedUpdateWithoutTask_choice_optionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    task_type?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_answers?: session_answersUncheckedUpdateManyWithoutCheckpoint_tasksNestedInput
  }

  export type quest_checkpointsCreateWithoutSession_answersInput = {
    order_index: number
    title: string
    task_description: string
    code_word: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    hint?: string | null
    point_rules?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    checkpoint_tasks?: checkpoint_tasksCreateNestedManyWithoutQuest_checkpointsInput
    quests: questsCreateNestedOneWithoutQuest_checkpointsInput
    session_checkpoints?: session_checkpointsCreateNestedManyWithoutQuest_checkpointsInput
  }

  export type quest_checkpointsUncheckedCreateWithoutSession_answersInput = {
    id?: number
    quest_id: number
    order_index: number
    title: string
    task_description: string
    code_word: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    hint?: string | null
    point_rules?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    checkpoint_tasks?: checkpoint_tasksUncheckedCreateNestedManyWithoutQuest_checkpointsInput
    session_checkpoints?: session_checkpointsUncheckedCreateNestedManyWithoutQuest_checkpointsInput
  }

  export type quest_checkpointsCreateOrConnectWithoutSession_answersInput = {
    where: quest_checkpointsWhereUniqueInput
    create: XOR<quest_checkpointsCreateWithoutSession_answersInput, quest_checkpointsUncheckedCreateWithoutSession_answersInput>
  }

  export type task_choice_optionsCreateWithoutSession_answersInput = {
    option_text: string
    checkpoint_tasks: checkpoint_tasksCreateNestedOneWithoutTask_choice_optionsInput
  }

  export type task_choice_optionsUncheckedCreateWithoutSession_answersInput = {
    id?: number
    task_id: number
    option_text: string
  }

  export type task_choice_optionsCreateOrConnectWithoutSession_answersInput = {
    where: task_choice_optionsWhereUniqueInput
    create: XOR<task_choice_optionsCreateWithoutSession_answersInput, task_choice_optionsUncheckedCreateWithoutSession_answersInput>
  }

  export type sessionsCreateWithoutSession_answersInput = {
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
    session_checkpoints?: session_checkpointsCreateNestedManyWithoutSessionsInput
    quests: questsCreateNestedOneWithoutSessionsInput
    teams?: teamsCreateNestedOneWithoutSessionsInput
    users?: usersCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateWithoutSession_answersInput = {
    id?: number
    quest_id: number
    user_id?: number | null
    team_id?: number | null
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
    session_checkpoints?: session_checkpointsUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type sessionsCreateOrConnectWithoutSession_answersInput = {
    where: sessionsWhereUniqueInput
    create: XOR<sessionsCreateWithoutSession_answersInput, sessionsUncheckedCreateWithoutSession_answersInput>
  }

  export type checkpoint_tasksCreateWithoutSession_answersInput = {
    task_type: string
    question_text?: string | null
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    quest_checkpoints: quest_checkpointsCreateNestedOneWithoutCheckpoint_tasksInput
    task_choice_options?: task_choice_optionsCreateNestedManyWithoutCheckpoint_tasksInput
  }

  export type checkpoint_tasksUncheckedCreateWithoutSession_answersInput = {
    id?: number
    checkpoint_id: number
    task_type: string
    question_text?: string | null
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
    task_choice_options?: task_choice_optionsUncheckedCreateNestedManyWithoutCheckpoint_tasksInput
  }

  export type checkpoint_tasksCreateOrConnectWithoutSession_answersInput = {
    where: checkpoint_tasksWhereUniqueInput
    create: XOR<checkpoint_tasksCreateWithoutSession_answersInput, checkpoint_tasksUncheckedCreateWithoutSession_answersInput>
  }

  export type quest_checkpointsUpsertWithoutSession_answersInput = {
    update: XOR<quest_checkpointsUpdateWithoutSession_answersInput, quest_checkpointsUncheckedUpdateWithoutSession_answersInput>
    create: XOR<quest_checkpointsCreateWithoutSession_answersInput, quest_checkpointsUncheckedCreateWithoutSession_answersInput>
    where?: quest_checkpointsWhereInput
  }

  export type quest_checkpointsUpdateToOneWithWhereWithoutSession_answersInput = {
    where?: quest_checkpointsWhereInput
    data: XOR<quest_checkpointsUpdateWithoutSession_answersInput, quest_checkpointsUncheckedUpdateWithoutSession_answersInput>
  }

  export type quest_checkpointsUpdateWithoutSession_answersInput = {
    order_index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    code_word?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    point_rules?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoint_tasks?: checkpoint_tasksUpdateManyWithoutQuest_checkpointsNestedInput
    quests?: questsUpdateOneRequiredWithoutQuest_checkpointsNestedInput
    session_checkpoints?: session_checkpointsUpdateManyWithoutQuest_checkpointsNestedInput
  }

  export type quest_checkpointsUncheckedUpdateWithoutSession_answersInput = {
    id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    code_word?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    point_rules?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoint_tasks?: checkpoint_tasksUncheckedUpdateManyWithoutQuest_checkpointsNestedInput
    session_checkpoints?: session_checkpointsUncheckedUpdateManyWithoutQuest_checkpointsNestedInput
  }

  export type task_choice_optionsUpsertWithoutSession_answersInput = {
    update: XOR<task_choice_optionsUpdateWithoutSession_answersInput, task_choice_optionsUncheckedUpdateWithoutSession_answersInput>
    create: XOR<task_choice_optionsCreateWithoutSession_answersInput, task_choice_optionsUncheckedCreateWithoutSession_answersInput>
    where?: task_choice_optionsWhereInput
  }

  export type task_choice_optionsUpdateToOneWithWhereWithoutSession_answersInput = {
    where?: task_choice_optionsWhereInput
    data: XOR<task_choice_optionsUpdateWithoutSession_answersInput, task_choice_optionsUncheckedUpdateWithoutSession_answersInput>
  }

  export type task_choice_optionsUpdateWithoutSession_answersInput = {
    option_text?: StringFieldUpdateOperationsInput | string
    checkpoint_tasks?: checkpoint_tasksUpdateOneRequiredWithoutTask_choice_optionsNestedInput
  }

  export type task_choice_optionsUncheckedUpdateWithoutSession_answersInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    option_text?: StringFieldUpdateOperationsInput | string
  }

  export type sessionsUpsertWithoutSession_answersInput = {
    update: XOR<sessionsUpdateWithoutSession_answersInput, sessionsUncheckedUpdateWithoutSession_answersInput>
    create: XOR<sessionsCreateWithoutSession_answersInput, sessionsUncheckedCreateWithoutSession_answersInput>
    where?: sessionsWhereInput
  }

  export type sessionsUpdateToOneWithWhereWithoutSession_answersInput = {
    where?: sessionsWhereInput
    data: XOR<sessionsUpdateWithoutSession_answersInput, sessionsUncheckedUpdateWithoutSession_answersInput>
  }

  export type sessionsUpdateWithoutSession_answersInput = {
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
    session_checkpoints?: session_checkpointsUpdateManyWithoutSessionsNestedInput
    quests?: questsUpdateOneRequiredWithoutSessionsNestedInput
    teams?: teamsUpdateOneWithoutSessionsNestedInput
    users?: usersUpdateOneWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateWithoutSession_answersInput = {
    id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
    session_checkpoints?: session_checkpointsUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type checkpoint_tasksUpsertWithoutSession_answersInput = {
    update: XOR<checkpoint_tasksUpdateWithoutSession_answersInput, checkpoint_tasksUncheckedUpdateWithoutSession_answersInput>
    create: XOR<checkpoint_tasksCreateWithoutSession_answersInput, checkpoint_tasksUncheckedCreateWithoutSession_answersInput>
    where?: checkpoint_tasksWhereInput
  }

  export type checkpoint_tasksUpdateToOneWithWhereWithoutSession_answersInput = {
    where?: checkpoint_tasksWhereInput
    data: XOR<checkpoint_tasksUpdateWithoutSession_answersInput, checkpoint_tasksUncheckedUpdateWithoutSession_answersInput>
  }

  export type checkpoint_tasksUpdateWithoutSession_answersInput = {
    task_type?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quest_checkpoints?: quest_checkpointsUpdateOneRequiredWithoutCheckpoint_tasksNestedInput
    task_choice_options?: task_choice_optionsUpdateManyWithoutCheckpoint_tasksNestedInput
  }

  export type checkpoint_tasksUncheckedUpdateWithoutSession_answersInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    task_type?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_choice_options?: task_choice_optionsUncheckedUpdateManyWithoutCheckpoint_tasksNestedInput
  }

  export type quest_checkpointsCreateWithoutSession_checkpointsInput = {
    order_index: number
    title: string
    task_description: string
    code_word: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    hint?: string | null
    point_rules?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    checkpoint_tasks?: checkpoint_tasksCreateNestedManyWithoutQuest_checkpointsInput
    quests: questsCreateNestedOneWithoutQuest_checkpointsInput
    session_answers?: session_answersCreateNestedManyWithoutQuest_checkpointsInput
  }

  export type quest_checkpointsUncheckedCreateWithoutSession_checkpointsInput = {
    id?: number
    quest_id: number
    order_index: number
    title: string
    task_description: string
    code_word: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    hint?: string | null
    point_rules?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    checkpoint_tasks?: checkpoint_tasksUncheckedCreateNestedManyWithoutQuest_checkpointsInput
    session_answers?: session_answersUncheckedCreateNestedManyWithoutQuest_checkpointsInput
  }

  export type quest_checkpointsCreateOrConnectWithoutSession_checkpointsInput = {
    where: quest_checkpointsWhereUniqueInput
    create: XOR<quest_checkpointsCreateWithoutSession_checkpointsInput, quest_checkpointsUncheckedCreateWithoutSession_checkpointsInput>
  }

  export type sessionsCreateWithoutSession_checkpointsInput = {
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
    session_answers?: session_answersCreateNestedManyWithoutSessionsInput
    quests: questsCreateNestedOneWithoutSessionsInput
    teams?: teamsCreateNestedOneWithoutSessionsInput
    users?: usersCreateNestedOneWithoutSessionsInput
  }

  export type sessionsUncheckedCreateWithoutSession_checkpointsInput = {
    id?: number
    quest_id: number
    user_id?: number | null
    team_id?: number | null
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
    session_answers?: session_answersUncheckedCreateNestedManyWithoutSessionsInput
  }

  export type sessionsCreateOrConnectWithoutSession_checkpointsInput = {
    where: sessionsWhereUniqueInput
    create: XOR<sessionsCreateWithoutSession_checkpointsInput, sessionsUncheckedCreateWithoutSession_checkpointsInput>
  }

  export type quest_checkpointsUpsertWithoutSession_checkpointsInput = {
    update: XOR<quest_checkpointsUpdateWithoutSession_checkpointsInput, quest_checkpointsUncheckedUpdateWithoutSession_checkpointsInput>
    create: XOR<quest_checkpointsCreateWithoutSession_checkpointsInput, quest_checkpointsUncheckedCreateWithoutSession_checkpointsInput>
    where?: quest_checkpointsWhereInput
  }

  export type quest_checkpointsUpdateToOneWithWhereWithoutSession_checkpointsInput = {
    where?: quest_checkpointsWhereInput
    data: XOR<quest_checkpointsUpdateWithoutSession_checkpointsInput, quest_checkpointsUncheckedUpdateWithoutSession_checkpointsInput>
  }

  export type quest_checkpointsUpdateWithoutSession_checkpointsInput = {
    order_index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    code_word?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    point_rules?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoint_tasks?: checkpoint_tasksUpdateManyWithoutQuest_checkpointsNestedInput
    quests?: questsUpdateOneRequiredWithoutQuest_checkpointsNestedInput
    session_answers?: session_answersUpdateManyWithoutQuest_checkpointsNestedInput
  }

  export type quest_checkpointsUncheckedUpdateWithoutSession_checkpointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    code_word?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    point_rules?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoint_tasks?: checkpoint_tasksUncheckedUpdateManyWithoutQuest_checkpointsNestedInput
    session_answers?: session_answersUncheckedUpdateManyWithoutQuest_checkpointsNestedInput
  }

  export type sessionsUpsertWithoutSession_checkpointsInput = {
    update: XOR<sessionsUpdateWithoutSession_checkpointsInput, sessionsUncheckedUpdateWithoutSession_checkpointsInput>
    create: XOR<sessionsCreateWithoutSession_checkpointsInput, sessionsUncheckedCreateWithoutSession_checkpointsInput>
    where?: sessionsWhereInput
  }

  export type sessionsUpdateToOneWithWhereWithoutSession_checkpointsInput = {
    where?: sessionsWhereInput
    data: XOR<sessionsUpdateWithoutSession_checkpointsInput, sessionsUncheckedUpdateWithoutSession_checkpointsInput>
  }

  export type sessionsUpdateWithoutSession_checkpointsInput = {
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
    session_answers?: session_answersUpdateManyWithoutSessionsNestedInput
    quests?: questsUpdateOneRequiredWithoutSessionsNestedInput
    teams?: teamsUpdateOneWithoutSessionsNestedInput
    users?: usersUpdateOneWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateWithoutSession_checkpointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
    session_answers?: session_answersUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type questsCreateManyUsersInput = {
    id?: number
    title: string
    description: string
    location_text: string
    image: string
    difficulty: number
    duration_minutes: number
    rules?: string | null
    status: string
    is_hidden?: boolean | null
    created_at?: Date | string
    updated_at?: Date | string
    rejection_reason?: string | null
  }

  export type sessionsCreateManyUsersInput = {
    id?: number
    quest_id: number
    team_id?: number | null
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
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

  export type questsUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location_text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_hidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    quest_checkpoints?: quest_checkpointsUpdateManyWithoutQuestsNestedInput
    sessions?: sessionsUpdateManyWithoutQuestsNestedInput
  }

  export type questsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location_text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_hidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
    quest_checkpoints?: quest_checkpointsUncheckedUpdateManyWithoutQuestsNestedInput
    sessions?: sessionsUncheckedUpdateManyWithoutQuestsNestedInput
  }

  export type questsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location_text?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    duration_minutes?: IntFieldUpdateOperationsInput | number
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    is_hidden?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rejection_reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type sessionsUpdateWithoutUsersInput = {
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
    session_answers?: session_answersUpdateManyWithoutSessionsNestedInput
    session_checkpoints?: session_checkpointsUpdateManyWithoutSessionsNestedInput
    quests?: questsUpdateOneRequiredWithoutSessionsNestedInput
    teams?: teamsUpdateOneWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
    session_answers?: session_answersUncheckedUpdateManyWithoutSessionsNestedInput
    session_checkpoints?: session_checkpointsUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
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
    sessions?: sessionsUpdateManyWithoutTeamsNestedInput
    team_members?: team_membersUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: sessionsUncheckedUpdateManyWithoutTeamsNestedInput
    team_members?: team_membersUncheckedUpdateManyWithoutTeamsNestedInput
  }

  export type teamsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    invite_code?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsCreateManyTeamsInput = {
    id?: number
    quest_id: number
    user_id?: number | null
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
  }

  export type team_membersCreateManyTeamsInput = {
    id?: number
    user_id: number
    joined_at?: Date | string
  }

  export type sessionsUpdateWithoutTeamsInput = {
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
    session_answers?: session_answersUpdateManyWithoutSessionsNestedInput
    session_checkpoints?: session_checkpointsUpdateManyWithoutSessionsNestedInput
    quests?: questsUpdateOneRequiredWithoutSessionsNestedInput
    users?: usersUpdateOneWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
    session_answers?: session_answersUncheckedUpdateManyWithoutSessionsNestedInput
    session_checkpoints?: session_checkpointsUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateManyWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    quest_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type quest_checkpointsCreateManyQuestsInput = {
    id?: number
    order_index: number
    title: string
    task_description: string
    code_word: string
    latitude: Decimal | DecimalJsLike | number | string
    longitude: Decimal | DecimalJsLike | number | string
    hint?: string | null
    point_rules?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type sessionsCreateManyQuestsInput = {
    id?: number
    user_id?: number | null
    team_id?: number | null
    status?: string
    transport_mode?: string | null
    started_at?: Date | string
    finished_at?: Date | string | null
    current_checkpoint_order?: number | null
  }

  export type quest_checkpointsUpdateWithoutQuestsInput = {
    order_index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    code_word?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    point_rules?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoint_tasks?: checkpoint_tasksUpdateManyWithoutQuest_checkpointsNestedInput
    session_answers?: session_answersUpdateManyWithoutQuest_checkpointsNestedInput
    session_checkpoints?: session_checkpointsUpdateManyWithoutQuest_checkpointsNestedInput
  }

  export type quest_checkpointsUncheckedUpdateWithoutQuestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    code_word?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    point_rules?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    checkpoint_tasks?: checkpoint_tasksUncheckedUpdateManyWithoutQuest_checkpointsNestedInput
    session_answers?: session_answersUncheckedUpdateManyWithoutQuest_checkpointsNestedInput
    session_checkpoints?: session_checkpointsUncheckedUpdateManyWithoutQuest_checkpointsNestedInput
  }

  export type quest_checkpointsUncheckedUpdateManyWithoutQuestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_index?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    task_description?: StringFieldUpdateOperationsInput | string
    code_word?: StringFieldUpdateOperationsInput | string
    latitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    longitude?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    hint?: NullableStringFieldUpdateOperationsInput | string | null
    point_rules?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sessionsUpdateWithoutQuestsInput = {
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
    session_answers?: session_answersUpdateManyWithoutSessionsNestedInput
    session_checkpoints?: session_checkpointsUpdateManyWithoutSessionsNestedInput
    teams?: teamsUpdateOneWithoutSessionsNestedInput
    users?: usersUpdateOneWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateWithoutQuestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
    session_answers?: session_answersUncheckedUpdateManyWithoutSessionsNestedInput
    session_checkpoints?: session_checkpointsUncheckedUpdateManyWithoutSessionsNestedInput
  }

  export type sessionsUncheckedUpdateManyWithoutQuestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    team_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    transport_mode?: NullableStringFieldUpdateOperationsInput | string | null
    started_at?: DateTimeFieldUpdateOperationsInput | Date | string
    finished_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    current_checkpoint_order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type checkpoint_tasksCreateManyQuest_checkpointsInput = {
    id?: number
    task_type: string
    question_text?: string | null
    correct_answer: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type session_answersCreateManyQuest_checkpointsInput = {
    id?: number
    session_id: number
    task_id: number
    answer_text?: string | null
    chosen_option_id?: number | null
    is_correct: boolean
    answered_at?: Date | string
  }

  export type session_checkpointsCreateManyQuest_checkpointsInput = {
    id?: number
    session_id: number
    status: string
    completed_at?: Date | string | null
  }

  export type checkpoint_tasksUpdateWithoutQuest_checkpointsInput = {
    task_type?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_answers?: session_answersUpdateManyWithoutCheckpoint_tasksNestedInput
    task_choice_options?: task_choice_optionsUpdateManyWithoutCheckpoint_tasksNestedInput
  }

  export type checkpoint_tasksUncheckedUpdateWithoutQuest_checkpointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_type?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session_answers?: session_answersUncheckedUpdateManyWithoutCheckpoint_tasksNestedInput
    task_choice_options?: task_choice_optionsUncheckedUpdateManyWithoutCheckpoint_tasksNestedInput
  }

  export type checkpoint_tasksUncheckedUpdateManyWithoutQuest_checkpointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    task_type?: StringFieldUpdateOperationsInput | string
    question_text?: NullableStringFieldUpdateOperationsInput | string | null
    correct_answer?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type session_answersUpdateWithoutQuest_checkpointsInput = {
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    task_choice_options?: task_choice_optionsUpdateOneWithoutSession_answersNestedInput
    sessions?: sessionsUpdateOneRequiredWithoutSession_answersNestedInput
    checkpoint_tasks?: checkpoint_tasksUpdateOneRequiredWithoutSession_answersNestedInput
  }

  export type session_answersUncheckedUpdateWithoutQuest_checkpointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    chosen_option_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type session_answersUncheckedUpdateManyWithoutQuest_checkpointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    chosen_option_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type session_checkpointsUpdateWithoutQuest_checkpointsInput = {
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sessions?: sessionsUpdateOneRequiredWithoutSession_checkpointsNestedInput
  }

  export type session_checkpointsUncheckedUpdateWithoutQuest_checkpointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type session_checkpointsUncheckedUpdateManyWithoutQuest_checkpointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type session_answersCreateManySessionsInput = {
    id?: number
    checkpoint_id: number
    task_id: number
    answer_text?: string | null
    chosen_option_id?: number | null
    is_correct: boolean
    answered_at?: Date | string
  }

  export type session_checkpointsCreateManySessionsInput = {
    id?: number
    checkpoint_id: number
    status: string
    completed_at?: Date | string | null
  }

  export type session_answersUpdateWithoutSessionsInput = {
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quest_checkpoints?: quest_checkpointsUpdateOneRequiredWithoutSession_answersNestedInput
    task_choice_options?: task_choice_optionsUpdateOneWithoutSession_answersNestedInput
    checkpoint_tasks?: checkpoint_tasksUpdateOneRequiredWithoutSession_answersNestedInput
  }

  export type session_answersUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    chosen_option_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type session_answersUncheckedUpdateManyWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    chosen_option_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type session_checkpointsUpdateWithoutSessionsInput = {
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quest_checkpoints?: quest_checkpointsUpdateOneRequiredWithoutSession_checkpointsNestedInput
  }

  export type session_checkpointsUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type session_checkpointsUncheckedUpdateManyWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type session_answersCreateManyCheckpoint_tasksInput = {
    id?: number
    session_id: number
    checkpoint_id: number
    answer_text?: string | null
    chosen_option_id?: number | null
    is_correct: boolean
    answered_at?: Date | string
  }

  export type task_choice_optionsCreateManyCheckpoint_tasksInput = {
    id?: number
    option_text: string
  }

  export type session_answersUpdateWithoutCheckpoint_tasksInput = {
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quest_checkpoints?: quest_checkpointsUpdateOneRequiredWithoutSession_answersNestedInput
    task_choice_options?: task_choice_optionsUpdateOneWithoutSession_answersNestedInput
    sessions?: sessionsUpdateOneRequiredWithoutSession_answersNestedInput
  }

  export type session_answersUncheckedUpdateWithoutCheckpoint_tasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    chosen_option_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type session_answersUncheckedUpdateManyWithoutCheckpoint_tasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    chosen_option_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type task_choice_optionsUpdateWithoutCheckpoint_tasksInput = {
    option_text?: StringFieldUpdateOperationsInput | string
    session_answers?: session_answersUpdateManyWithoutTask_choice_optionsNestedInput
  }

  export type task_choice_optionsUncheckedUpdateWithoutCheckpoint_tasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    option_text?: StringFieldUpdateOperationsInput | string
    session_answers?: session_answersUncheckedUpdateManyWithoutTask_choice_optionsNestedInput
  }

  export type task_choice_optionsUncheckedUpdateManyWithoutCheckpoint_tasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    option_text?: StringFieldUpdateOperationsInput | string
  }

  export type session_answersCreateManyTask_choice_optionsInput = {
    id?: number
    session_id: number
    checkpoint_id: number
    task_id: number
    answer_text?: string | null
    is_correct: boolean
    answered_at?: Date | string
  }

  export type session_answersUpdateWithoutTask_choice_optionsInput = {
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    quest_checkpoints?: quest_checkpointsUpdateOneRequiredWithoutSession_answersNestedInput
    sessions?: sessionsUpdateOneRequiredWithoutSession_answersNestedInput
    checkpoint_tasks?: checkpoint_tasksUpdateOneRequiredWithoutSession_answersNestedInput
  }

  export type session_answersUncheckedUpdateWithoutTask_choice_optionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type session_answersUncheckedUpdateManyWithoutTask_choice_optionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: IntFieldUpdateOperationsInput | number
    checkpoint_id?: IntFieldUpdateOperationsInput | number
    task_id?: IntFieldUpdateOperationsInput | number
    answer_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_correct?: BoolFieldUpdateOperationsInput | boolean
    answered_at?: DateTimeFieldUpdateOperationsInput | Date | string
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