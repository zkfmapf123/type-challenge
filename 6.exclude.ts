/**
 * type MyExclude<T, U> = T === U ? null : T
 */

type MyExclude<T, U> = T extends U ? never : T

{
  let p: MyExclude<1 | 2 | 3, 2> // 1 3
}
