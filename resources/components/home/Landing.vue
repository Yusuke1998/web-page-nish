<template>
  <v-container mt-2>
	<div v-for="item in LandingData" :key="item.id" style="overflow-wrap: break-word;">
		<!------------ custom ------------>
		<v-layout v-if="item.type === 'custom' && jsonParse(item).type === 'onlyText'" row wrap>
		  <v-flex xs12>
			<div 
				:style="{ color: jsonParse(item).color, 
					backgroundColor: jsonParse(item).backgroundColor 
				}" 
				style="padding: 15px !important;" 
				v-html="jsonParse(item).content">
			</div>
		  </v-flex>
		</v-layout>

		<v-layout v-if="item.type === 'custom' && jsonParse(item).type === 'leftImgText'" row wrap>
			<v-flex 
				:class="jsonParse(item).textImgLeft" 
				:style="{ backgroundColor: jsonParse(item).backgroundColor }">
			<v-row cols="12" style="padding-left:2% !important;">
			  <v-col sm="12">
				<span v-if="jsonParse(item).image==null">Sin imagen</span>
				<v-img
				  v-else
				  slot-scope="{ hover }"
				  :src="jsonParse(item).image"
				  class="grey lighten-2 border-radius-1 elevation-4"
				>
				  <template v-slot:placeholder>
					<v-layout fill-height align-center justify-center ma-0>
					  <v-progress-circular indeterminate color="grey lighten-5" />
					</v-layout>
				  </template>
				</v-img>
			  </v-col>
			</v-row>                    
		  </v-flex>
		  <v-flex 
			:class="jsonParse(item).textImgRight" 
			:style="{ 
				color: jsonParse(item).color, 
				backgroundColor: jsonParse(item).backgroundColor }
			">
			<div 
				style="padding: 15px !important;" 
				v-html="jsonParse(item).content">
			</div>
		  </v-flex>
		</v-layout>

		<v-layout v-if="item.type === 'custom' && jsonParse(item).type === 'rightImgText'" row wrap>
			<v-flex 
				:class="jsonParse(item).textImgLeft" 
				:style="{ 
					color: jsonParse(item).color, 
					backgroundColor: jsonParse(item).backgroundColor }
				">
			<div 
				style="padding: 15px !important;" 
				v-html="jsonParse(item).content">
			</div>
		  </v-flex>
		  <v-flex 
			:class="jsonParse(item).textImgRight" 
			:style="{ 
				backgroundColor: jsonParse(item).backgroundColor }
			">
			<v-row cols="12" style="padding-right:2% !important;">
			  <v-col sm="12">
				<span v-if="jsonParse(item).image==null">Sin imagen</span>
				<v-img
				  v-else
				  slot-scope="{ hover }"
				  :src="jsonParse(item).image"
				  class="grey lighten-2 border-radius-1 elevation-4"
				>
				  <template v-slot:placeholder>
					<v-layout fill-height align-center justify-center ma-0>
					  <v-progress-circular indeterminate color="grey lighten-5" />
					</v-layout>
				  </template>
				</v-img>
			  </v-col>
			</v-row>                    
		  </v-flex>
		</v-layout>
			<!------------ custom ------------>

		<v-divider class="my-5"/>
	</div>
  </v-container>
</template>

<script>
export default {
	props: {
		LandingData: {
			type: Array,
			required: true
		}
	},
	methods:{
		jsonParse(item){
			if (item.type == 'custom') {
				return JSON.parse(item.customs)
			}
		}
	}
}
</script>

<style>
</style>