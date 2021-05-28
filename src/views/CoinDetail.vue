<template>
  <div class="flex-col">
    <template v-if="asset.id">
      <div class="flex flex-col items-center justify-around sm:flex-row">
        <div class="flex flex-col items-center">
          <img
            :src="
              `https://static.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`
            "
            :alt="asset.name"
            class="w-20 h-20 mr-5"
          />
          <h1 class="text-5xl">
            {{ asset.name }}
            <small class="text-gray-500 sm:mr-2">{{ asset.symbol }}</small>
          </h1>
        </div>

        <div class="flex flex-col my-10">
          <ul>
            <li class="flex justify-between">
              <b class="mr-10 text-gray-600 uppercase">Ranking</b>
              <span>#{{ asset.rank }}</span>
            </li>
            <li class="flex justify-between">
              <b class="mr-10 text-gray-600 uppercase">Precio actual</b>
              <span>{{ dollarFilter(asset.priceUsd)  }}</span>
            </li>
            <li class="flex justify-between">
              <b class="mr-10 text-gray-600 uppercase">Precio más bajo</b>
              <span>{{ min  }}</span>
            </li>
            <li class="flex justify-between">
              <b class="mr-10 text-gray-600 uppercase">Precio más alto</b>
              <span>{{ max  }}</span>
            </li>
            <li class="flex justify-between">
              <b class="mr-10 text-gray-600 uppercase">Precio Promedio</b>
              <span>{{ avg  }}</span>
            </li>
            <li class="flex justify-between">
              <b class="mr-10 text-gray-600 uppercase">Variación 24hs</b>
              <span>{{ percenFilter(asset.changePercent24Hr) }}</span>
            </li>
          </ul>
        </div>

        <div class="flex flex-col justify-center my-10 text-center sm:mt-0">
          <button
            class="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
          >Cambiar</button>

          <div class="flex flex-row my-5">
            <label class="w-full" for="convertValue">
              <input
                id="convertValue"
                type="number"
                class="block w-full px-4 py-2 leading-normal text-center bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:shadow-outline"
              />
            </label>
          </div>

          <span class="text-xl"></span>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import api from '../api'
import numeral from 'numeral';

export default {
name: 'CoinDetail',

data() {
  return {
      asset: {},
      history: []
  }
},

computed:{
  //() {},
  //max() {},
  //avg() {}
},

created (){
  this.getCoin()
},

methods: {
   getCoin() {
      const id = this.$route.params.id

      Promise.all([api.getAsset(id), api.getAssetHistory(id)]).then(
        ([asset, history]) => {
          this.asset = asset
          this.history = history
        }
      )
    },
    dollarFilter: function(value) {
    if (!value){
        return '$ 0'
    }
    return numeral(value).format('($ 0.00a)')
      },
    percenFilter: function(value){
      if(!value){
        return '0%'
      }
      return `${Number(value).toFixed(2)}%`
    }

  }

}
    

</script>