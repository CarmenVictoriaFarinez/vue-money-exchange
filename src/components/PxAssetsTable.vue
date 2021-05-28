<template>
  <table class="flex-col">
    <thead class="">
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th>
          <span class="ml-8"></span>
        </th>
        <th>
          <span>Ranking</span>
        </th>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Cap. de Mercado</th>
        <th>Variación 24hs</th>
        <td class="hidden sm:block"></td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="a in assets" :key="a.id"
      class="border-b border-gray-200 hover:bg-orange-100">
        <td>
          <img class="w-12 h-12"
          :src="`https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`" :alt="a.name">
        </td>
        <div>
          <td><b>#{{a.rank}}</b></td>
          <td>{{a.name}}</td>
          <td><b>{{ dollarFilter(a.priceUsd) }}</b></td>
          <td>{{dollarFilter(a.marketCapUsd) }}</td>
          <td :class="a.changePercent24Hr.includes('-') ? 'text-red-500' : 'text-green-500' ">
            {{percenFilter(a.changePercent24Hr)}}</td>
          <td class="hidden sm:block"></td>
        </div>
      </tr>
    </tbody>
  </table>
</template>

<script>
import numeral from 'numeral';

export default {
  name: "PxAssetsTable",

  props: {
    assets: {
      type: Array,
      //ojo, para objetos y arrays inicializar con función//
      default: () => []
    }
  },
  methods:{
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
 
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: left;
  
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 25px;
    font-size: 1rem;
  }

  th {
    padding: 20px;
  }
}
</style>
