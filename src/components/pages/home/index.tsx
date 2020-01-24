import './styles.scss';

import { Route } from 'vue-router';
import { Vue, Component } from 'vue-property-decorator';
import { State, Getter } from 'vuex-class';
import TodoListItem from 'components/blocks/todo-list-item';
import { GET_TODOS, GET_USERS, TODO_COUNT } from 'store/store-types';

/* eslint-disable import/no-anonymous-default-export */
@Component
export default class HomePage extends Vue {
  @State('todoItems') todos: TodoItem[];
  @State(state => state.user.users) users: User[];
  @Getter(TODO_COUNT) count: number;

  async created() {
    return await this.loadPageData();
  }

  async beforeRouteUpdate(to: Route, from: Route, next: () => void) {
    await this.loadPageData();

    return next();
  }

  async loadPageData(): Promise<void> {
    try {
      await Promise.all<void, void>([
        this.$store.dispatch(GET_TODOS),
        this.$store.dispatch(GET_USERS),
      ]);
    }
    catch(error) {
      console.error(error);
    }
  }

  getUser(item: TodoItem) {
    return this.users.find(x => x.id === item.userId);
  }

  render() {
    return (
      <main class='home'>
        <h1>Todo List ({ this.count })</h1>
        <ul>
          { this.todos.map(x => <TodoListItem todo={ x } user={ this.getUser(x) } />) }
        </ul>
      </main>
    );
  }
};
