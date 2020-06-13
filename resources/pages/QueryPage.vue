<template>
	<v-container>
		<v-card>
			<v-card-text>
				<v-row cols="12">
					<v-col
					cols="12"
					class="d-flex justify-center"
					>       
					<v-tooltip color="black" left>
						<template v-slot:activator="{ on }">
							<v-btn 
							v-on="on"
							@click="showCreate=!showCreate"
							:disabled="pendingCount >= 3"
							color="primary">
							Consultar
						</v-btn>
					</template>
					<span class="caption">Has una consulta</span>
				</v-tooltip>
			</v-col>
			<v-col
			v-if="QueriesData.length > 0"
			xs12
			class="d-flex justify-center"
			>
			<v-data-table
			:headers="queryTable.headers"
			:items="queryTable.items"
			:page.sync="queryTable.pagination.page"
			:items-per-page.sync="queryTable.pagination.itemsPerPage"
			:sort-by.sync="queryTable.pagination.sortBy"
			:sort-desc.sync="queryTable.pagination.sortDesc"
			fixed-header
			item-key="id"
			hide-default-footer
			>
			<template v-if="queryTable.items.length" v-slot:body="{ items }">
				<tbody>
					<tr v-for="(item, i) in items" :key="item.id">
						<td 
						@click="open(item.id)" 
						class="cursor-pointer text-no-wrap text-center">
						{{ `000-${i+1}` }}
					</td>
					<td 
					@click="open(item.id)" 
					class="cursor-pointer text-no-wrap">{{ item.name }}</td>
					<td 
					@click="open(item.id)" 
					class="cursor-pointer text-no-wrap">{{ item.email }}</td>
					<td 
					@click="open(item.id)" 
					class="cursor-pointer text-no-wrap">{{ item.address }}</td>
					<td 
					@click="open(item.id)" 
					class="cursor-pointer text-no-wrap">{{ item.phone1 }}</td>
					<td 
					@click="open(item.id)" 
					class="cursor-pointer text-no-wrap text-center">
					{{ item.state }}
				</td>
			</tr>
		</tbody>
	</template>
	<template v-slot:footer>
		<CustomPagination :pagination="queryTable.pagination"/>
	</template>
</v-data-table>
</v-col>
</v-row>
</v-card-text>
</v-card>
<make-query 
:dialog="showCreate"
@updateTable="getQueries()"
@close="showCreate = false"
/>
<update-query 
:dialog="openQuerySelectedDetail"
@updateTable="getQueries()"
@close="close()"
/>
</v-container>
</template>

<script>
	import { mapState, mapActions, mapMutations } from 'vuex'
	import makeQuery from '../components/home/querys/create'
	import updateQuery from '../components/home/querys/edit'
	import CustomPagination from '../components/custom/CustomPagination'

	export default {
		name:'query',
		mounted()
		{
			this.setParallax(false)
			this.getQueries()
		},
		data()
		{
			return {
				showCreate: false,
				pendingCount: 0,
				queryTable: {
					items: [],
					search: '',
					pagination: {
						page: 1,
						itemsLength: 0,
						itemsPerPage: 5,
						itemsPerPageOptions: [
						{ value: 5, text: 5 },
						{ value: 10, text: 10 },
						{ value: 15, text: 15 },
						{ value: -1, text: 'TODO' }
						],
						itemsPerPageText: 'Registros por página',
						sortBy: 'results',
						sortDesc: true
					},
					headers: [
					{
						text: 'NRO',
						sortable: true,
						value: 'id',
						align: 'center',
						width: '',
						class: 'blue--text text--darken-4'
					},
					{
						text: 'NOMBRE',
						sortable: true,
						align: 'start',
						width: '',
						value: 'name',
						class: 'text-no-wrap blue--text text--darken-4',
					},
					{
						text: 'CORREO ELECTRONICO',
						sortable: true,
						align: 'start',
						width: '',
						value: 'email',
						class: 'text-no-wrap blue--text text--darken-4',
					},
					{
						text: 'DIRECCIÓN',
						sortable: true,
						align: 'start',
						width: '',
						value: 'address',
						class: 'text-no-wrap blue--text text--darken-4',
					},
					{
						text: 'TELEFONO PRINCIPAL',
						sortable: true,
						align: 'start',
						width: '',
						value: 'phone1',
						class: 'text-no-wrap blue--text text--darken-4',
					},
					{
						text: 'ESTATUS DE CONSULTA',
						sortable: true,
						align: 'center',
						width: '',
						value: 'state',
						class: 'text-no-wrap blue--text text--darken-4',
					}
					],
				}
			}
		},
		methods:{
			...mapMutations({
				setParallax: 'setParallax',
				openQueryDetails: 'openQueryDetails'
			}),
			...mapActions({
				getAllQueries: 'getAllQueries',
				getQuerySelected: 'getQuerySelected',
			}),
			async getQueries() {
				await this.getAllQueries()
				this.queryTable.items = this.QueriesData
				this.queryTable.pagination.itemsLength = this.QueriesData.length
				if (this.currentUser.rol !== 'admin') {
					this.pendingCount = this.QueriesData.filter(item => {
						return item.state === 'pending'
					}).length
				}
			},
			async open(id){
				await this.getQuerySelected(id)
			},
			async close(){
				await this.openQueryDetails({ query: {}, status: false })
			}
		},
		components:{
			makeQuery,
			updateQuery,
			CustomPagination
		},
		computed:{
			...mapState({
				isLoggedIn: ({ auth: { isLoggedIn } }) => isLoggedIn,
				currentUser: ({ auth: { currentUser } }) => currentUser,
				QueriesData: ({ query: { QueriesData } }) => QueriesData,
				openQuerySelectedDetail: ({ query: { openQuerySelectedDetail } }) => openQuerySelectedDetail
			})
		},
	}

</script>

<style>
.cursor-pointer {
	cursor: pointer !important;
}
</style>