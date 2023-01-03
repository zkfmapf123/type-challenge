type MyReadonly<T> = {
  readonly [k in keyof T]: T[k]
}

interface Params {
  title: string
  name: string
}

type ReadonlyParams = MyReadonly<Params>
{
  const p: ReadonlyParams = {
    title: 'title',
    name: 'name',
  }
}
