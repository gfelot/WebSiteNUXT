<template lang="html">
  <nav class="navbar has-shadow">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <img :src="require('@/static/Logo.png')" alt="Golf Watcher Logo" width="110" height="28">
      </nuxt-link>

      <a class="navbar-item is-hidden-desktop" href="" target="_blank">
        <span class="icon" style="color: #3B5998;">
          <i class="fa fa-lg fa-facebook-official"></i>
        </span>
      </a>

      <a class="navbar-item is-hidden-desktop" href="" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-lg fa-twitter"></i>
        </span>
      </a>

      <div class="navbar-burger burger" data-target="navMenuTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="navbar-menu">

      <div class="navbar-end">
        <a class="navbar-item is-hidden-desktop-only" href="" target="_blank">
          <span class="icon" style="color: #3B5998;">
            <i class="fa fa-lg fa-facebook-official"></i>
          </span>
        </a>
        <a class="navbar-item is-hidden-desktop-only" href="" target="_blank">
          <span class="icon" style="color: #55acee;">
            <i class="fa fa-lg fa-twitter"></i>
          </span>
        </a>

        <div class="navbar-item">
          <div class="field is-grouped">

            <p class="control">
              <nuxt-link to="/login" class="button">
                <span class="icon">
                  <i class="fa fa-sign-in"></i>
                </span>
                <span>Connexion</span>
              </nuxt-link>
            </p>

            <p>
              <nuxt-link to="/register" class="button is-primary">
                <span class="icon">
                  <i class="fa fa-user-plus"></i>
                </span>
                <span>Inscription</span>
              </nuxt-link>
            </p>

          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

</style>
