<template>
    <a href="javascript:" :title="$t('navMenu')" @click="ShowMenu" @key.space.prevent="ShowMenu" :class="[{'is-active':MenuShowing},'ui-hamburger-02']"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -15 70 70" width="50" height="50"><title>{{$t(navMenu)}}</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><g id="Group_12410" data-name="Group 12410"><line id="Line_1" data-name="Line 1" x1="1.5" y1="1.5" x2="45.5" y2="1.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/><path id="Path_22642" data-name="Path 22642" d="M1.5,20.5h44" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/><line id="Line_3" data-name="Line 3" x1="1.5" y1="39.5" x2="45.5" y2="39.5" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/></g></g></g></svg><span class="v-inv">{{$t('navMenu')}}</span></a>
</template>
<style type="text/css" scoped></style>
<script type="text/javascript">
export default {
  data(){
    return{
      MenuShowing:false
    }
  },
  methods:{
    ShowMenu(){
      this.MenuShowing=!this.MenuShowing
      this.$emit('menu-toggle')
    }
   

  }
}
</script>
<i18n>
  {
    "en":{
    "navMenu":"Navigation Menu"
  },
    "fr":{
    "navMenu":"Menu de navigation"
  }
  }
</i18n>