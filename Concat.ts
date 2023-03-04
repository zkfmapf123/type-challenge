// type Concat<A extends any[], B extends any[]> = [...A, ...B]

// type Result = Concat<[1], [2]> // expected to be [1, 2]

// const d: Concat<[1, 2, 3], ['11', '22', '33']> = [1, 2, 3, '11', '22', '33']
