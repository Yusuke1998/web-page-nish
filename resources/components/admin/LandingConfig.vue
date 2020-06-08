<template>
	<v-col md="12" xs="12" sm="12" lg="12" class="gray">
		<v-card>
			<v-card-title>
				<span class="text-center mx-auto">{{ title }}</span>
			</v-card-title>
			<v-card-text>
				<v-container fluid class="px-3">
          <!--________________onlyText________________-->
          <v-layout v-show="customs.type=='onlyText'" row wrap>
            <v-flex xs12>
              <trumbowyg v-model="customs.content"></trumbowyg> 
            </v-flex>
            <v-flex xs12>
              <div :style="{ color: customs.color, backgroundColor: customs.backgroundColor }" style="padding: 15px !important;" v-html="customs.content"></div>
            </v-flex>
          </v-layout>
          <!--________________leftImgText________________-->
          <v-layout v-show="customs.type=='leftImgText'" row wrap>
            <v-flex xs12>
              <trumbowyg v-model="customs.content"></trumbowyg> 
            </v-flex>
            <v-flex xs12>
              <v-file-input @change="onFilePicked"></v-file-input>
            </v-flex>
            <v-flex :class="customs.textImgLeft" :style="{ backgroundColor: customs.backgroundColor }">
              <v-row cols="12" style="padding-left:2% !important;">
                <v-col sm="12">
                  <span v-if="customs.image==null">Sin imagen</span>
                  <v-img
                    v-else
                    slot-scope="{ hover }"
                    :src="customs.image"
                    :lazy-src="customs.image"
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
            <v-flex :class="customs.textImgRight" :style="{ color: customs.color, backgroundColor: customs.backgroundColor }">
              <div style="padding: 15px !important;" v-html="customs.content"></div>
            </v-flex>
          </v-layout>
          <!--________________rightImgText________________-->
          <v-layout v-show="customs.type=='rightImgText'" row wrap>
            <v-flex xs12>
              <trumbowyg v-model="customs.content"></trumbowyg> 
            </v-flex>
            <v-flex xs12>
              <v-file-input @change="onFilePicked"></v-file-input>
            </v-flex>
            <v-flex :class="customs.textImgLeft" :style="{ color: customs.color, backgroundColor: customs.backgroundColor }">
              <div style="padding: 15px !important;" v-html="customs.content"></div>
            </v-flex>
            <v-flex :class="customs.textImgRight" :style="{ backgroundColor: customs.backgroundColor }">
              <v-row cols="12" style="padding-left:2% !important;">
                <v-col sm="12">
                  <span v-if="customs.image==null">Sin imagen</span>
                  <v-img
                    v-else
                    slot-scope="{ hover }"
                    :src="customs.image"
                    :lazy-src="customs.image"
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
      	</v-container>
			</v-card-text>
      <v-card-actions>
        <v-container fluid class="px-3">
          <v-layout row>
            <v-flex xs3 class="px-3">
              <v-select
                v-model="customs.type"
                :items="types"
                item-text="name"
                item-value="value"
                label="Tipo de Publicacion"
                @change="setType()"
              ></v-select>
            </v-flex>
            <v-flex xs3 class="px-3">
              <v-select
                v-model="textImg"
                :items="textImgSize"
                item-text="name"
                item-value="value"
                label="Proporcion"
                @change="setSize()"
              ></v-select>
            </v-flex>
            <v-flex xs2 class="px-3">
              <label 
                class="line label-form"
                dense
              >Color de Texto</label>
            </v-flex>
            <v-flex xs1 class="px-3">
              <color-picker 
                type="slider"
                v-model="customs.color"
                @change="setColor()"
              ></color-picker>
            </v-flex>
            <v-flex xs2 class="px-3">
              <label 
                class="line label-form"
                dense
              >Color de Fondo</label>
            </v-flex>
            <v-flex xs1 class="px-3">
              <color-picker 
                type="slider"
                v-model="customs.backgroundColor"
                @change="setBackground()"
              ></color-picker>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-actions>
      <v-card-actions class="float-right">
        <v-container fluid class="px-3">
          <v-layout row wrap>
            <v-flex xs12 class="px-3">
              <v-btn @click.prevent="store" dark>
                Guardar
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
			</v-card-actions>
		</v-card>
	</v-col>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { VueColorpicker } from 'vue-pop-colorpicker'

export default {
	async mounted(){
	},
	data () {
		return {
      title: 'CONFIGURACION DE PAGINA DE INICIO',
      type: 'custom',
      customs:{
        content: '',
        type: 'onlyText',
        color: '#000000',
        backgroundColor: '#FFFFFF',
        textImgLeft: 'xs6',
        textImgRight: 'xs6',
        image: null
      },
      textImg: [],
      textImgSize: [
        {
          name: '50-50',
          value: ['xs6','xs6']
        },
        {
          name: '40-80',
          value: ['xs4','xs8']
        },
        {
          name: '80-40',
          value: ['xs8','xs4']
        },
        {
          name: '20-60',
          value: ['xs2','xs10']
        },
        {
          name: '60-20',
          value: ['xs10','xs2']
        }
      ],
      types: [
        {
          name: 'Solo Texto',
          value: 'onlyText'
        },
        {
          name: 'Texto a la izquierda con imagen a la derecha',
          value: 'rightImgText'
        },
        {
          name: 'Texto a la derecha con imagen a la izquierda',
          value: 'leftImgText'
        }
      ]
		}
	},
	methods: {
    ...mapActions({
      storeLanding: 'storeLanding'
    }),
    async store(){
      this.storeLanding({
        customs: this.customs,
        type: this.type
      })
      utils.reload()
    },
    setType() {
    },
    setColor() {
    },
    setBackground() {
    },
    setSize() {
      this.customs.textImgLeft = this.textImg[0]
      this.customs.textImgRight = this.textImg[1]
    },
    onFilePicked(e) {
      const fr = new FileReader()
      fr.readAsDataURL(e)
      fr.addEventListener('load', () => {
        this.customs.image = fr.result
      })
    }
	},
  components: {
    'color-picker': VueColorpicker
  }
}
</script>