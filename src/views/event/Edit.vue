<template>
  <p>Edit the event here</p>
  <button @click="edit"> Edit </button> 
</template>

<script>
export default {
  props: ['event'],
  inject: ['GStore'], //<--- Inject the Global Store
  methods: {
    edit() {
      //Assuming successful API call to register them
       this.GStore.flashMessage =
       'Updated ' + this.event.title
       setTimeout(() => {
         //After 3 seconds remove it
         this.GStore.flashMessage = ''
       }, 3000)
      //Set the flash message to appear on the next page loaded which says
      //'You are sucessfully registered for ' +this.event.title

      this.$router.push({
        name: 'EventDetails',
        params: { id: this.event.id }
      })
    }
  }
}
</script>
