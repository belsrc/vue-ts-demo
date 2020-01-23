import './styles/base.scss';

import { mapState, mapGetters } from 'vuex';

/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'TemplateApp',

  props: {},

  data() {
    return {};
  },

  computed: {
    ...mapState({}),

    ...mapGetters({}),
  },

  watch: {},

  async created() {
    return await this.loadPageData();
  },

  mounted() {},

  // When route changes and this component is already rendered, this guard is used
  async beforeRouteUpdate(to, from, next) {
    await this.loadPageData();

    return next();
  },

  methods: { async loadPageData() {} },

  render() {
    return (
      <div class='index'>
        <router-view />
      </div>
    );
  },
};
