<template>
  <div class="home">
    <Search />
    <FilterList v-if="repositories.length" :filters="filters" :items="repositories" @filters="filterRepositories" />
    <CustomTable is-loading="isLoading" :rows="filteredRepositories" />
  </div>
</template>

<script>
import Search from '@/components/Search';
import CustomTable from '@/components/CustomTable';
import FilterList from '@/components/FilterList';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Home',
  components: {
    CustomTable,
    Search,
    FilterList,
  },
  data: () => ({
    filters: [{ name: 'language', type: 'autocomplete', options: ['Vue', 'JavaScript', 'TypeScript'] }],
  }),

  computed: {
    ...mapState({
      isLoading: (state) => state.isLoading,
      repositories: (state) => state.repositories,
      filteredRepositories: (state) => state.filteredRepositories,
    }),
  },

  methods: {
    ...mapMutations({
      updateState: 'UPDATE_STATE_PROPERTY',
    }),

    filterRepositories(filter) {
      if (!filter.value) {
        this.updateState({
          property: 'filteredRepositories',
          value: this.repositories,
        });
        return;
      }

      const data = this.repositories.filter((item) => item[filter.name] === filter.value);

      this.updateState({
        property: 'filteredRepositories',
        value: data,
      });
    },
  },
};
</script>
