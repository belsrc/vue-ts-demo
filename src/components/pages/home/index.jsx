import './styles.scss';

import { mapState, mapGetters } from 'vuex';

/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'HomePage',

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
      <div>
        <h1>Template</h1>
        <h2>Template</h2>
        <h3>Template</h3>
        Template Vue Application
        <span class='el-icon-alarm-clock' />
      </div>
    );
  },
};
