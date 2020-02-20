<template>
  <div>
    <ul role="tablist" ref="choices" :class="[{'isFixed':isScrolled},'nav','nav-tabs','nav-justified']">
      <!---->
      <li class="nav-item topImgs">
        <a  class="nav-link active" @click="setColor(1)" href="#" v-scroll-to="{
     el: '#toMee',
     container: 'body',
     duration: 750,
     easing: 'ease-in-out',
     offset: -200,
     onStart: onStart,
     onDone: onDoneMe,
     onCancel: onCancel,
     x: false,
     y: true
 }"><img src="~/assets/PrepBudget.jpeg" width="175" height="175"> <br>
          Préparer un budget
        </a></li>
      <li class="nav-item topImgs">
        <a href="javascript:" @click="setColor(2)" class="nav-link active" v-scroll-to="{
     el: '#toMeeToo',
     container: 'body',
     duration: 750,
     easing: 'ease-in-out',
     offset: -200,
     onStart: onStart,
     onDone: onDoneToo,
     onCancel: onCancel,
     x: false,
     y: true}">
     <img src="~/assets/Acheter.jpeg" > <br>
          Acheter un bien ou un service
        </a></li>
      <li class="nav-item topImgs"><a href="javascript:" class="nav-link active"><img src="~/assets/PayerFacture.jpeg" > <br>
          Payer une facture
        </a></li>
      <li class="nav-item topImgs"><a href="#" class="nav-link active"><img src="~/assets/SuivreBudget.jpeg" > <br>
          Suivre un budget
        </a></li>
      <li class="nav-item topImgs"><a href="#" class="nav-link active"><img src="~/assets/FermerAnnee.jpeg"> <br>
          Fermer une année financière
        </a></li>
      <!---->
    </ul>
    <div class="emptyscreen"></div>
    <div id="toMee" class="showonscreen" :style="'background-color:'+$parent.$parent.rgbcolor">
         <microlearning path="planKey" time="2" imagePath="KeyMessP.svg" :text="$t('KeyMessages')" :completion="$store.state.currentPlaying.kmPlan" />
      <microlearning path="buildWP" time="20" imagePath="BuildWP.svg" :text="$t('BuildWorkPlan')" :completion="$store.state.currentPlaying.buildWP_player" />
      <microlearning time="20" path="createBudget" imagePath="CreateBud.svg" :text="$t('CreateBudget')" :completion="$store.state.currentPlaying.createBudget_player" />
      <microlearning time="15" path="exam1" imagePath="P-Test.svg" :text="$t('Test')" :completion="parseInt(planCompleted)" />
    </div>
    <div class="emptyscreen"></div>
    <div id="toMeeToo" class="showonscreen" :style="'background-color:'+$parent.$parent.rgbcolor"></div>
  </div>
</template>
<style type="text/css" scoped>
.topImgs img{width:175px;height:175px; transition: all 1s}
.emptyscreen {
  display: block;
  position: relative;
  height: 100vh;
}

.isFixed .topImgs img{width:75px;height:75px;}
.isFixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
}

.showonscreen {
  display: block;
  position: relative;
  height: 0vh;
  width: 100vw;
  transition: all 1s;
}
.showNow{height: 100vh;}

</style>
<script type="text/javascript">
export default {
  data() {
    return {
      isScrolled: false
    }
  },
  methods: {
    setColor(e) {
      this.$store.commit('default/setTab', e)
    },
    toMeeVisible(e) {
      console.log(e.target.offset().top)
      //    var $t            = $(this),
      //       $w            = $(window),
      //       viewTop       = document.documentElement.scrollTop,
      //       viewBottom    = viewTop + $w.height(),
      //       _top          = $t.offset().top,
      //       _bottom       = _top + $t.height(),
      //       compareTop    = partial === true ? _bottom : _top,
      //       compareBottom = partial === true ? _top : _bottom;

      // return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    },
    onCancel() {},
    onDone() {},
    onDoneMe(e) {e.classList.add('showNow')},
    onDoneToo(e) {e.classList.add('showNow')},
    onStart() {},
    handleScroll(event) {
      if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
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
