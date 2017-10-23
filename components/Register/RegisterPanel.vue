<template lang="html">
  <div class="container panel-container">
    <div class="columns">
      <div class="column is-6 is-offset-3 ">
        <div class="box">

          <div class="columns">
            <div class="column">
              <h1 class="title is-4 has-text-centered">
                INSCRIPTION
              </h1>
            </div>
          </div>

          <hr>

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Nom</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Dupont">
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Prénom</label>
                <div class="control">
                  <input class="input" type="email" placeholder="Jean">
                </div>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                  <input class="input" type="email" placeholder="contact@goldclub.com">
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <span class="icon is-small is-left">
                    <i class="fa fa-key"></i>
                  </span>
                  <input class="input" type="password">
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <span class="icon is-small is-left">
                    <i class="fa fa-key"></i>
                  </span>
                  <input class="input" type="password">
                </div>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="field is-grouped is-grouped-right">
                <p class="control">
                  <button class="button is-white">
                    Annuler
                  </button>
                </p>
                <p class="control">
                  <button class="button is-success">
                    S'enregistrer
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped lang="scss">
.panel-container {
  padding-top: 120px;
}
</style>
