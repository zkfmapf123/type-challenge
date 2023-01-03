type First<T extends any[]> = T extends [] ? never : T[0]

type fa = First<[3, 2, 1]>
type ea = []

{
  const p1: fa = 3
}
