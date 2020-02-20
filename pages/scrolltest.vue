<template>
  <div>
    <ul role="tablist" ref="choices" :class="[{'isFixed':isScrolled},'nav','nav-tabs','nav-justified']">
      <!---->
      <li class="nav-item">
        <a  class="nav-link active" @click="setColor(1)" href="#" v-scroll-to="{
     el: '#toMee',
     container: 'body',
     duration: 1500,
     easing: 'ease-in-out',
     offset: -200,
     onStart: onStart,
     onDone: onDone,
     onCancel: onCancel,
     x: false,
     y: true
 }"><img src="~/assets/PrepBudget.jpeg" width="175" height="175"> <br>
          Préparer un budget
        </a></li>
      <li class="nav-item"><a href="javascript:" @click="setColor(2)" class="nav-link active"><img src="~/assets/Acheter.jpeg" width="175" height="175"> <br>
          Acheter un bien ou un service
        </a></li>
      <li class="nav-item"><a href="javascript:" class="nav-link active"><img src="~/assets/PayerFacture.jpeg" width="175" height="175"> <br>
          Payer une facture
        </a></li>
      <li class="nav-item"><a href="#" class="nav-link active"><img src="~/assets/SuivreBudget.jpeg" width="175" height="175"> <br>
          Suivre un budget
        </a></li>
      <li class="nav-item"><a href="#" class="nav-link active"><img src="~/assets/FermerAnnee.jpeg" width="175" height="175"> <br>
          Fermer une année financière
        </a></li>
      <!---->
    </ul>
    <div class="emptyscreen"></div>
    <div id="toMee" class="showonscreen" :style="'background-color:'+$parent.$parent.rgbcolor"></div>
    <div class="emptyscreen"></div>
  </div>
</template>
<style type="text/css" scoped>
.emptyscreen {
  display: block;
  position: relative;
  height: 100vh;
}

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
  height: 90vh;
  width: 100vw;
}

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
