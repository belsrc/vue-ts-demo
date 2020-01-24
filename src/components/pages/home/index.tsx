import './styles.scss';

import { Route } from 'vue-router';
import { Vue, Component } from 'vue-property-decorator'
import { mapState, mapGetters } from 'vuex';
import { GET_TODOS, GET_USERS, TODO_COUNT } from 'store/store-types';

/* eslint-disable import/no-anonymous-default-export */
@Component({
  computed: {
    ...mapState({ todos: 'todoItems' }),
    ...mapGetters({ count: TODO_COUNT }),
  }
})
export default class HomePage extends Vue {
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

  async test() {
    await this.loadPageData();
  }

  render() {
    return (
      <main class='home'>
        <h1>Todo List</h1>
        <ul>

        </ul>
      </main>
    );
  }
};
