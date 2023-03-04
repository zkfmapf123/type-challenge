// type ExampleType = Promise<string>

// type MyAwaited<T> = T extends Promise<infer P> ? (P extends Promise<any> ? MyAwaited<P> : P) : never

// type Result = MyAwaited<ExampleType> // string
