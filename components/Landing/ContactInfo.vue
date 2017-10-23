<template lang="html">
  <section>
    <div class="container contactInfo">
      <hr />
      <div class="columns">
        <div class="column is-4 is-offset-1">
          <h1 class="subtitle is-3 has-text-centered has-text-weight-light">
            Company Info
          </h1>
          <p>
            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
          </p>
        </div>
        <div class="column is-4 is-offset-1">
          <h1 class="subtitle is-3 has-text-centered has-text-weight-light">
            Contact Us
          </h1>
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
        {id: 1, icon: 'fa fa-phone fa-2x', text: '+336 12 34 56 78'},
        {id: 2, icon: 'fa fa-globe fa-2x', text: 'Empuriabrava, Spain'},
        {id: 3, icon: 'fa fa-thumbs-up fa-2x', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
      ]
    }
  }
}
</script>

<style lang="scss">
  .contactInfo {
    margin-bottom: 2rem;
  }
</style>
