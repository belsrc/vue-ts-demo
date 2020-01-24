import './styles.scss';

import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import UserDisplay from 'components/elements/user-display';

@Component
export default class TodoListItem extends Vue {
  @Prop({ default: () => ({ title: '' }) })
  todo: TodoItem;

  @Prop({ default: () => ({ username: '', email: '' }) })
  user: User;

  get isDone() {
    return this.todo.completed;
  }
  set isDone(val: boolean) {
    this.$emit('done-checked', val);
  }

  @Watch('todo')
  onTodoChange(val: TodoItem, old: TodoItem) {
    console.log('New todo item');
  }

  render() {
    return (
      <li class='todo-item'>
        <h5>{ this.todo.title }</h5>
        <input type='checkbox' v-model='isDone' />
        <UserDisplay username={ this.user.username } email={ this.user.email } />
      </li>
    );
  }
}
