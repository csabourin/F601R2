<template>
  <div >
    <ul role="tablist" id="__BVID__29__BV_tab_controls_" ref="choices" :class="[{'isFixed':isScrolled},'nav','nav-tabs','nav-justified']">
      <!---->
      <li role="presentation" class="nav-item"><a href="#" v-scroll-to="{
     el: '#toMee',
     container: 'body',
     duration: 1500,
     easing: 'ease-in-out',
     offset: -100,
     force: true,
     cancelable: true,
     onStart: onStart,
     onDone: onDone,
     onCancel: onCancel,
     x: false,
     y: true
 }"><img data-v-2a183b29="" src="/_nuxt/assets/PrepBudget.jpeg" width="175" height="175"> <br data-v-2a183b29="">
          Préparer un budget
        </a></li>
      <li role="presentation" class="nav-item"><a role="tab" aria-selected="true" aria-setsize="5" aria-posinset="2" target="_self" href="#" class="nav-link active" id="__BVID__40___BV_tab_button__" aria-controls="__BVID__40"><img data-v-2a183b29="" src="/_nuxt/assets/Acheter.jpeg" width="175" height="175"> <br data-v-2a183b29="">
          Acheter un bien ou un service
        </a></li>
      <li role="presentation" class="nav-item"><a href="#" class="nav-link"><img data-v-2a183b29="" src="/_nuxt/assets/PayerFacture.jpeg" width="175" height="175"> <br data-v-2a183b29="">
          Payer une facture
        </a></li>
      <li role="presentation" class="nav-item"><a role="tab" href="#" class="nav-link"><img data-v-2a183b29="" src="/_nuxt/assets/SuivreBudget.jpeg" width="175" height="175"> <br data-v-2a183b29="">
          Suivre un budget
        </a></li>
      <li role="presentation" class="nav-item"><a role="tab" tabindex="-1" aria-selected="false" aria-setsize="5" aria-posinset="5" target="_self" href="#" class="nav-link" id="__BVID__64___BV_tab_button__" aria-controls="__BVID__64"><img data-v-2a183b29="" src="/_nuxt/assets/FermerAnnee.jpeg" width="175" height="175"> <br data-v-2a183b29="">
          Fermer une année financière
        </a></li>
      <!---->
    </ul>
    <div class="emptyscreen"></div>
    <div id="toMee" class="showonscreen"></div>
    <div class="emptyscreen"></div>
  </div>
</template>
<style type="text/css" scoped>
.emptyscreen {
  display: block;
  position: relative;
  height: 100vh;
}
.isFixed{
	position:fixed;
	left: 0; right: 0; top: 0;
	z-index: 2;
}
.showonscreen{
	display: block;
  position: relative;
  height: 100vh;
  background-color: #963;
}

</style>
<script type="text/javascript">
export default {
	data(){
		return{
			isScrolled:false
		}
	},
  methods: {
    handleScroll(event) {
        if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    this.isScrolled=true
  } else {
    this.isScrolled=false
  }
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}

</script>
