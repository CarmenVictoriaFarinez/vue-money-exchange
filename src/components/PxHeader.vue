<template>
   <header class="w-screen shadow">
       <nav>
           <nav class="flex flex-wrap items-center justify-between p-6 bg-green-400">
               <div class="flex items-center flex-shrink-0 mr-6 text-white">
                   <Icon class="mr-2 "/>
                   <span class="text-xl font-semibold tracking-tight">PlatziExchange</span>
               </div>
               <div class="flex-grow hidden w-full sm:block blok lg:flex lg:items-center lg:wauto">
                   <div class="text-sm lg:flex-grow"></div>
               </div>
           </nav>
       </nav>
    </header> 
</template>

<script>
import Icon from './Icon'
export default {
    name: 'PxHeader',
    components: { Icon }
}
</script>