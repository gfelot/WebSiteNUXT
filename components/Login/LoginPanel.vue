<template lang="html">
  <section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Login</h3>
          <p class="subtitle has-text-grey">Please login to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="https://placehold.it/128x128">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="Your Password">
                </div>
              </div>
              <div class="field">
                <label class="checkbox">
                  <input type="checkbox">
                  Remember me
                </label>
              </div>
              <a class="button is-block is-info is-large">Login</a>
            </form>
          </div>
          <p class="has-text-grey">
            <a href="../">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- <div class="container panel-container">
    <div class="columns">
      <div class="column is-6 is-offset-3 ">
        <div class="box">
          <div class="columns">
            <div class="column">
              <h1 class="title is-4 has-text-centered">
                LOGIN
              </h1>
            </div>
          </div>
          <hr>
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
              <div class="field is-grouped is-grouped-right">
                <p class="control">
                  <button class="button is-white">
                    Annuler
                  </button>
                </p>
                <p class="control">
                  <button class="button is-success">
                    Login
                  </button>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div> -->
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
