<template>
  <div class="palette-animation-name">
    <a href="http://animejs.com/" target="_blank">
      <svg width="252px" height="94px" viewBox="3 11 252 94" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs></defs>
        <path d="M4,80.3307481 L4,103.14209" id="Stroke-3-Copy-2" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M12,80.3307481 L12,103.14209" id="Stroke-3-Copy" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M20,80.3307481 L20,103.14209" id="Stroke-3" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M28,79.2468955 L28,103.14209" id="Stroke-4" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M36,78.1629412 L36,103.14209" id="Stroke-5" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M44,75.4792747 L44,103.14209" id="Stroke-6" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M52,72.7420239 L52,103.14209" id="Stroke-7" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M60,69.5063186 L60,103.14209" id="Stroke-8" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M68,66.251244 L68,103.14209" id="Stroke-9" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M76,61.8968703 L76,103.14209" id="Stroke-10" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M84,58.6428398 L84,103.14209" id="Stroke-11" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M92,55.3517013 L92,103.14209" id="Stroke-12" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M100,52.1459205 L100,103.14209" id="Stroke-13" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M108,49.9758708 L108,103.14209" id="Stroke-14" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M116,49.9648003 L116,103.14209" id="Stroke-15" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M124,52.0421408 L124,103.14209" id="Stroke-16" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M132,54.207588 L132,103.14209" id="Stroke-17" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M140,57.4549402 L140,103.14209" id="Stroke-18" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M148,59.7410947 L148,103.14209" id="Stroke-19" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M156,60.7705138 L156,103.14209" id="Stroke-20" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M164,59.6868773 L164,103.14209" id="Stroke-21" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M172,56.4734051 L172,103.14209" id="Stroke-22" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M180,49.799018 L180,103.14209" id="Stroke-23" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M188,42.3419581 L188,103.14209" id="Stroke-24" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M196,35.8617977 L196,103.14209" id="Stroke-25" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M204,29.3524204 L204,103.14209" id="Stroke-26" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M212,23.9352737 L212,103.14209" id="Stroke-27" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M220,19.5951742 L220,103.14209" id="Stroke-28" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M228,18.5101493 L228,103.14209" id="Stroke-29" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M236,16.3400995 L236,103.14209" id="Stroke-30" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M244,14.1700498 L244,103.14209" id="Stroke-31" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
        <path d="M252,12 L252,103.14209" id="Stroke-32" stroke="#FFFFFF" stroke-width="2" stroke-linecap="square" fill="none"></path>
      </svg>
    </a>
  </div>
</template>

<script>
import anime from 'animejs'

export default {
  name: 'palette-animation-name',
  mounted () {
    anime({
      targets: 'path',
      strokeDashoffset (el) {
        const pathLength = el.getTotalLength()
        el.setAttribute('stroke-dasharray', pathLength)
        return [-pathLength, 0]
      },
      stroke: {
        value (el, i) {
          return `rgb(200, ${i * 8}, 150)`
        },
        easing: 'linear',
        duration: 2000
      },
      strokeWidth: {
        value: 6,
        easing: 'linear',
        delay (el, i) {
          return 1200 + (i * 40)
        },
        duration: 800
      },
      delay (el, i) {
        return i * 60
      },
      duration: 1200,
      easing: 'easeOutExpo',
      loop: true,
      direction: 'alternate'
    })
  }
}
</script>

<style lang="stylus">
</style>
