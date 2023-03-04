type Includes<T extends string[], K extends string> = K extends T[number] ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`

const d: Includes<['a', 'b', 'c'], 'c'> = true
