// /**
//  * T가 K키가 존재하면 -> never (Exclude)
//  */

// // Exclude
// type MyExclude<T, K> = T extends K ? never : T
// type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'

// // Include
// type Include<T, K> = T extends K ? T : never
// type inc = Include<'1' | '2' | '3' | '4', '3'>

// const dd: inc = '3'
