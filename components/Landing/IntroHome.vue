<template lang="html">
  <section class="intro">
    <div class="container">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img :src="require('@/static/golferInAction.jpg')" alt="Un golf en action">
          </figure>
        </div>
        <div class="column">
          <div v-for="item in list" :key="item.id" class="listing">
            <article class="media">
              <div class="media-left">
                <span class="icon has-text-info">
                  <i :class=item.icon></i>
                </span>
              </div>
              <div class="media-content">
                <p>
                  {{ item.text }}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {id: 1, icon: 'fa fa-male fa-2x', text: 'Chaque membre informe la direction du golf sur d’éventuelles améliorations à apporter sur le parcours, en 3 clics à partir de son smartphone.'},
        {id: 2, icon: 'fa fa-id-card-o fa-2x', text: 'Grace à vous, nos parcours restent tout au long de la journée à un niveau haut niveau d’excellence.'},
        {id: 3, icon: 'fa fa-thumbs-up fa-2x', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        {id: 4, icon: 'fa fa-wheelchair-alt fa-2x', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
      ]
    }
  }
}
</script>

<style lang="scss">
  .intro {
    background-color: white;
  }
  .listing {
    margin-top: 1rem;
  }
  
</style>
