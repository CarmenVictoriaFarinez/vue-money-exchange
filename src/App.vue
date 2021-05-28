<template>
  <main>
    <px-header />
    <router-view class="container flex justify-center sm:py-20 sm:px-20"/>
    
  </main>
</template>

<script>
import PxHeader from './components/PxHeader'


export default {
  name: 'App',
  components: {
    PxHeader,
   
    
  }
}
</script>

