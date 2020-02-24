<template>
  <div id="scrollTester">

<h1 class="megaTitle">Accomplir mes tâches financières</h1>
<scrollactive class="my-nav" :modifyUrl="false">
    <ul ref="choices" :class="[{'isFixed':isScrolled},'nav','nav-tabs','nav-justified','mainIcons']">
      <!---->
      <li class="nav-item topImgs">
        <a  class="nav-link scrollactive-item active" @click="setColor($event,0)" href="#one" ><img src="~/assets/PrepBudget.jpeg"> <br>
          Préparer un budget
          <hr :style="'color:'+$parent.$parent.colorSets[0]">
        </a></li>
      <li class="nav-item topImgs" style="border:0px red">
        <a  href="#two" @click="setColor($event,1)" class="nav-link active scrollactive-item" >
     <img src="~/assets/Acheter.jpeg" > <br>
          Acheter un bien ou un service
          <hr :style="'color:'+$parent.$parent.colorSets[1]">
        </a></li>
      <li class="nav-item topImgs"><a href="#three" class="scrollactive-item nav-link active"><img src="~/assets/PayerFacture.jpeg" > <br>
          Payer une facture
          <hr :style="'color:'+$parent.$parent.colorSets[2]">
        </a></li>
      <li class="nav-item topImgs"><a href="#four" class="scrollactive-item nav-link active"><img src="~/assets/SuivreBudget.jpeg" > <br>
          Suivre un budget
          <hr :style="'color:'+$parent.$parent.colorSets[3]">
        </a></li>
      <li class="nav-item topImgs"><a href="#five" class="scrollactive-item nav-link active"><img src="~/assets/FermerAnnee.jpeg"> <br>
          Fermer une année financière
          <hr :style="'color:'+$parent.$parent.colorSets[4]">
        </a></li>
      <!---->
    </ul>
  </scrollactive>
    <div class="emptyscreen"></div>
    <div ref="two[0]" id="one" class="showonscreen" :style="'background-color:'+$parent.$parent.colorSets[0]">
         <microlearning path="planKey" time="2" imagePath="KeyMessP.svg" :text="$t('KeyMessages')" :completion="$store.state.currentPlaying.kmPlan" />
      <microlearning path="buildWP" time="20" imagePath="BuildWP.svg" :text="$t('BuildWorkPlan')" :completion="$store.state.currentPlaying.buildWP_player" />
      <microlearning time="20" path="createBudget" imagePath="CreateBud.svg" :text="$t('CreateBudget')" :completion="$store.state.currentPlaying.createBudget_player" />
      <microlearning time="15" path="exam1" imagePath="P-Test.svg" :text="$t('Test')" :completion="100" />
    </div>
    <div ref="two[1]" id="two" class="showonscreen" :style="'background-color:'+$parent.$parent.colorSets[1]"></div>
    <div ref="two[2]" id="three" class="showonscreen" :style="'background-color:'+$parent.$parent.colorSets[2]"></div>
    <div ref="two[3]" id="four" class="showonscreen" :style="'background-color:'+$parent.$parent.colorSets[3]"></div>
    <div ref="two[4]" id="five" class="showonscreen" :style="'background-color:'+$parent.$parent.colorSets[4]"></div>
  </div>
</template>
<style type="text/css" scoped>

.nav{display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none;}
.nav-link{display:block;padding:0.5rem 1rem;}
.nav-link:hover,.nav-link:focus{text-decoration:none;}
.nav-tabs{border-bottom:1px solid #dee2e6;}
.nav-tabs .nav-item{margin-bottom:-1px;}
.nav-tabs .nav-link{ border:1px solid transparent;border-top-left-radius:0.25rem;border-top-right-radius:0.25rem;}
.nav-tabs .nav-link p{width:156px;}
.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{border-color:#e9ecef #e9ecef #dee2e6;}
.nav-tabs .nav-link.active{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff;}
.nav-justified .nav-item{flex-basis:0;flex-grow:1;text-align:center;}
.topImgs img{width:175px;height:175px; transition: all 1s}
.topImgs img{width:175px;height:175px; transition: all 1s}
.emptyscreen {
  display: block;
  position: relative;
  height: 40vh;
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
  display: flex;
  align-items:center;
  position: relative;
  height: 100vh;
  width: calc(100vw-(100vw-100%));
  transition: all 1s;
}
.showNow{width: 100vw;}

.is-active hr:after{
  position:relative;
  display: block;
  content: "";
  width:100%;
  border-bottom:3px solid currentColor;
}

</style>
<script type="text/javascript">

  import microlearning from "~/components/microlearning"
export default {
  name:"scrollTest",
  components:{
    microlearning
  },
  data() {
    return {
      isScrolled: false,
      activeBlock: null,
      idBlocks:['one','two','three','four','five']
    }
  },
  methods: {
     onItemChanged(event, currentItem, lastActiveItem) {
    console.log(currentItem, lastActiveItem)
  },
    setColor(e,color) {
      console.log(e)
      e.target.classList.add('onfocus')
      this.$store.commit('default/setTab', color)
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
    topScroll(event) {
      let scrollHeight=this.$refs.choices.getBoundingClientRect().bottom
      if (document.body.scrollTop > scrollHeight || document.documentElement.scrollTop > scrollHeight) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    }
  },
  created() {
    window.addEventListener('scroll', this.topScroll);
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.topScroll);
    window.removeEventListener('scroll', this.handleScroll);
  }
}

</script>
