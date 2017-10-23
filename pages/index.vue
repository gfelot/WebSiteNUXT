<template>
  <div>
    <hero />
    <intro-home />
    <section-image />
    <section-video />
    <contact-info />
  </div>
</template>

<script>
import Hero from '~/components/Landing/Hero.vue'
import IntroHome from '~/components/Landing/IntroHome.vue'
import SectionImage from '~/components/Landing/SectionImage.vue'
import SectionVideo from '~/components/Landing/SectionVideo.vue'
import ContactInfo from '~/components/Landing/ContactInfo.vue'

export default {
  components: {
    Hero,
    IntroHome,
    SectionImage,
    SectionVideo,
    ContactInfo
  }
}
</script>

<style lang="scss">

</style>
