declare global {
    /*~ Here, declare things that go in the global namespace, or augment
     *~ existing declarations in the global namespace
     */
     interface Todo {
        text:string,
        id:string,
        scheduled_at:string,
        created_at:string,
        author:string
      }
}

export {}
