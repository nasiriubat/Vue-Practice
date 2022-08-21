// one way----------------
  // const { createApp } = Vue
  // createApp({
  //   data() {
  //     return {
  //       message: 'Hello Nasir!'
  //     }
  //   }
  // }).mount('#app')

  // another way-----------
  const app = Vue.createApp({
    data(){
      return {
        message : "hello billo"
      }
    }

  });

  app.mount('#app')




