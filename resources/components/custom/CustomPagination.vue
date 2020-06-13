<template>
  <div v-if="pagination.itemsLength !== 0">
    <v-divider />
    <div class="d-flex justify-space-between pa-3">
      <div>
        <v-tooltip right color="grey darken-4">
          <template v-slot:activator="{ on }">
            <div v-on="on">
              <v-menu top>
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                    small
                    color="grey lighten-2"
                    elevation="0"
                    class="text-capitalize"
                  >
                    {{ itemsPerPage.text }}
                  </v-btn>
                </template>
                <v-list dense class="py-0">
                  <v-list-item-group v-model="pagination.itemsPerPage" color="primary">
                    <v-list-item
                      v-for="item in pagination.itemsPerPageOptions"
                      :key="item.value"
                      :value="item.value"
                      @click="setItemsPerPage(item.value)"
                    >
                      <v-list-item-title class="text-right">
                        {{ item.text }}
                      </v-list-item-title>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </div>
          </template>
          <span color="black">{{ pagination.itemsPerPageText || 'Rows per page' }}</span>
        </v-tooltip>
      </div>
      <v-spacer />
      <div class="d-flex align-center justify-end">
        <v-btn @click="previousPage" :disabled="pageStart === 1" icon small color="primary">
          <v-icon>chevron_left</v-icon>
          <!--
          «««
          -->
        </v-btn>
        <div
          class="mx-1 subtitle-2 grey--text text--darken-2"
        >
          {{ pageStart }} - {{ pageStop }} / {{ pagination.itemsLength }}
        </div>
        <v-btn
          @click="nextPage"
          :disabled="pageStop === pagination.itemsLength"
          icon
          small
          color="primary"
        >
          <v-icon>chevron_right</v-icon>
          <!--
          »»»
          -->
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomPagination',
  props: {
    pagination: {
      type: Object,
      required: true,
      default: () => ({
        page: 1,
        itemsLength: 0,
        itemsPerPage: 10,
        itemsPerPageOptions: [
          { value: 5, text: 5 },
          { value: 10, text: 10 },
          { value: 15, text: 15 },
          { value: -1, text: 'All' }
        ],
        itemsPerPageText: 'Rows per page'
      })
    }
  },
  data: () => ({}),
  computed: {
    itemsPerPage() {
      return this.pagination.itemsPerPageOptions.find(
        item => item.value === this.pagination.itemsPerPage
      )
    },
    pageStart() {
      return (this.pagination.page - 1) * this.pagination.itemsPerPage + 1
    },
    pageStop() {
      if (this.pagination.itemsPerPage != -1) {
        if (
          this.pagination.page * this.pagination.itemsPerPage >
          this.pagination.itemsLength
        ) {
          return this.pagination.itemsLength
        }
        return this.pagination.page * this.pagination.itemsPerPage
      }
      return this.pagination.itemsLength
    }
  },
  methods: {
    previousPage() {
      if (this.pagination.page > 1) {
        this.pagination.page--
      }
    },
    nextPage() {
      if (
        this.pagination.page <
        Math.ceil(this.pagination.itemsLength / this.pagination.itemsPerPage)
      ) {
        this.pagination.page++
      }
    },
    setItemsPerPage(value) {
      this.pagination.itemsPerPage = value
    }
  }
}
</script>

<style lang="css" scoped>
</style>