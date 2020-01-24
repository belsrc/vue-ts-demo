import './styles.scss';

import Vue from 'vue';

interface Properties {
  username: string;
  email: string;
}

export default Vue.extend<Properties>({
  functional: true,

  render(h, { props }) {
    return (
      <div class='user-display'>
        { props.username } <span>{ props.email }</span>
      </div>
    );
  },
});
