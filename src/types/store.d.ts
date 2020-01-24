interface TodoItem {
  userId: string,
  id: string,
  title: string,
  completed: boolean,
}

interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: {
    lat: string,
    lng: string,
  },
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string,
}

interface User {
  id: string,
  name: string,
  username: string,
  email: string,
  phone: string,
  website: string,
  address: Address,
  company: Company,
}

interface RootState {
  todoItems: TodoItem[],
}

interface UserState {
  users: User[],
}


// https://github.com/vuejs/vue/blob/dev/types/vue.d.ts
// https://github.com/vuejs/vue-router/blob/dev/types/router.d.ts
// https://github.com/vuejs/vuex/blob/dev/types/index.d.ts

// https://scotch.io/tutorials/using-jsx-with-vue-and-why-you-should-care#toc-how-to-make-jsx-work-with-typescript
// https://alligator.io/vuejs/typescript-class-components/
