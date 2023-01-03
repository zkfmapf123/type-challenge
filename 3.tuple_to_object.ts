type TupleToObject<T extends readonly (string | number)[]> = {
  [k in T[number]]: k
}

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type Tuples = TupleToObject<typeof tuple>

const d: Tuples = {
  'model 3': 'model 3',
  'model X': 'model X',
  'model Y': 'model Y',
  tesla: 'tesla',
}
