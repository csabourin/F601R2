<style type="text/css" scoped>
.behindall {
  position: fixed;
  background: url(~assets/bgimage.jpg);
  display: block;
  width: calc(100vw - (100vw - 100%));
  background-size: contain;
  background-repeat: no-repeat;
  height: 150%;
  top: 0;
  left: 0;
  bottom:0;
  right:0;
  z-index: -1;
}

.bg {
    display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom:0;
  right:0;
}
>>> .group{
  filter:url(#filter872)
}

</style>
<template>
  <span>
    <span class="behindall">
    </span>
    <svg
    class="bg"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   version="1.1"
   viewBox="0 0 210 297">
  <defs
     id="defs2">
    <filter
       id="filter831"
       style="color-interpolation-filters:sRGB;">
      <feComposite
         id="feComposite817"
         result="composite1"
         k2="0.2"
         k1="0"
         operator="arithmetic"
         in2="SourceGraphic" />
      <feColorMatrix
         id="feColorMatrix819"
         result="colormatrix1"
         type="saturate"
         values="1"
         in="composite1" />
      <feFlood
         id="feFlood821"
         result="flood1"
         :flood-color="bgcolor"
         flood-opacity="1" />
      <feBlend
         id="feBlend823"
         result="blend1"
         mode="multiply"
         in2="colormatrix1"
         in="flood1" />
      <feBlend
         id="feBlend825"
         result="blend2"
         mode="lighten"
         in2="blend1" />
      <feColorMatrix
         id="feColorMatrix827"
         result="colormatrix2"
         type="saturate"
         values="1"
         in="blend2" />
      <feComposite
         id="feComposite829"
         result="composite2"
         k2="1"
         operator="in"
         in2="SourceGraphic"
         in="colormatrix2" />
    </filter>
  </defs>
    <rect
      class="group"
       y="-0.84523809"
       x="0"
       height="297.84521"
       width="210.15475"
       id="rect815"
       style="opacity:1;fill:#7f7f7f;fill-opacity:0.75;stroke-width:0;filter:url(#filter831)" />
</svg>

  </span>
</template>
<script type="text/javascript">
export default {
  data(){
    return{
      bgURL:require('~/assets/bgimage.jpg')
    }
  },

  props: {
    bgcolor: { type: String, default: 'rgb(163,188,188)' }

  }

}

</script>
