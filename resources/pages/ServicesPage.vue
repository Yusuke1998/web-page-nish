<template>
	<v-container v-resize="getWindowSize" class="px-5 my-5">
		<v-row>
			<v-col cols="12" class="d-flex justify-space-between align-center">
				<v-btn v-if="isAdmin" @click="showCreate=!showCreate" color="primary">
					<v-icon left>add</v-icon>
					Nuevo
				</v-btn>
				<span />
				<v-btn-toggle
					v-model="viewStyle"
					mandatory
					color="primary"
					dense
					group
				>
				<v-tooltip color="black" bottom>
					<template v-slot:activator="{ on }">
						<v-btn v-on="on" class="ma-0" value="module">
							<v-icon>view_module</v-icon>
						</v-btn>
					</template>
					<span class="caption">Vista de cuadricula</span>
				</v-tooltip>
				<v-tooltip color="black" bottom>
					<template v-slot:activator="{ on }">
						<v-btn v-on="on" class="ma-0" value="list">
							<v-icon>view_stream</v-icon>
						</v-btn>
					</template>
					<span class="caption">Vista de lista</span>
				</v-tooltip>
			</v-btn-toggle>
		</v-col>
		</v-row>
		<v-row>
			<v-col
			v-for="item in paginateData"
			:key="item.id"
			:sm="viewStyle === 'module' ? 6 : 12"
			:md="viewStyle === 'module' ? 4 : 12"
			cols="12"
			>
			<v-hover>
				<v-card
				slot-scope="{ hover }"
				:raised="hover"
				height="100%"
				outlined
				>
					<v-card-title @click="open(item.id)" class="cursor-pointer">
						<v-icon
						:color="item.id !== 1 ? 1 ? 'error' : 'grey' : 'success' "
						left
						small
						>
						fiber_manual_record
						</v-icon>
						<div
						:class="1 ? 'grey--text text--lighten-1' : ''"
						class="subtitle-1 font-weight-medium text-truncate"
						>
						{{ item.title }}
						</div>
						<v-spacer />
						<v-menu bottom left v-if="isAdmin">
							<template v-slot:activator="{ on }">
								<v-btn v-on="on" @click.native.stop icon>
									<v-icon :class="1 ? 'grey--text text--lighten-1' : ''">
										more_vert
									</v-icon>
								</v-btn>
							</template>
							<v-list>
								<v-list-item @click="erase(item.id)">
									<v-list-item-title>
										Eliminar
									</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</v-card-title>
					<v-divider />
					<v-card-text>
						<v-row dense>
							<template v-if="viewStyle === 'module'">
								<v-col cols="12">
									{{ item.content }}
								</v-col>
							</template>
							<template v-else>
								<v-col cols="6" md="12">
									<div 
										:class="1 ? 'grey--text text--lighten-1' : ''"
										class="font-weight-medium"
										>
										{{ item.content }}
									</div>
								</v-col>
							</template>
						</v-row>
					</v-card-text>
				</v-card>
			</v-hover>
		</v-col>
	</v-row>
	<v-pagination
	v-if="paginateData.length > 0 && pageCount > 1"
	v-model="page"
	:length="pageCount"
	:total-visible="7"
	/>

	<Create
		:dialog="showCreate"
		@close="showCreate = false"
		@updateTable="setAllServices()"
	/>
	<Edit
		:dialog="showEdit"
		@close="showEdit = false"
		@updateTable="setAllServices()"
	/>
	</v-container>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
import Create from '../components/home/services/create'
import Edit from '../components/home/services/edit'

export default {
	mounted()
	{
		this.setParallax(false)
	},
	data(){
		return {
			showCreate: false,
			showEdit: false,
			services: [],
			windowSize: { x: 0, y: 0 },
			viewStyle: 'list',
			page: 1,
			perPage: 6,
			pages: 1,
		}
	},
	created(){
		this.getWindowSize()
		this.setAllServices()
	},
	methods:{
		...mapActions({
			getServices: 'getServices',
			getService: 'getService',
			destroyServices: 'destroyServices',
		}),
		...mapMutations({
	    	setParallax: 'setParallax' 
		}),
		async setAllServices() {
			await this.getServices()
			this.services = this.ServicesData
		},
		getWindowSize() {
			this.windowSize.x = window.innerWidth
			this.windowSize.y = window.innerHeight
		},
		async open(id) {
			this.showEdit = true
			await this.getService(id)
		},
		async erase(id) {
			await this.destroyServices(id)
			this.setAllServices()
		}
	},
	computed:{
		...mapState({
			ServicesData: ({ service: { ServicesData } }) => ServicesData
		}),
		...mapGetters({
	      isLoggedIn: 'isLoggedIn',
	      isAdmin: 'isAdmin',
	    }),
		paginateData() {
			const { page, perPage, services } = this
			const start = (page - 1) * perPage
			const end = start + perPage
			return services.slice(start, end)
		},
		pageCount() {
			const total = this.services.length
			return Math.ceil(total / this.perPage)
			return total
		}
	},
	components:{
		Create, Edit
	}
	}
</script>