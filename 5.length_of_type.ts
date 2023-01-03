type Length<T extends readonly (string | number)[]> = T['length']

{
  const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
  const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

  let teslaLen: Length<typeof tesla> // 4
}
