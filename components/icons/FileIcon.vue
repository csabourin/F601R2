<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -15 70 70" :width="iconWidth" :height="iconWidth">
    <title>{{title}}</title>
    <path id="Path_22636" data-name="Path 22636" d="M6.83,1.5A5.33,5.33,0,0,0,1.5,6.83h0V44.17A5.33,5.33,0,0,0,6.83,49.5h48a5.32,5.32,0,0,0,5.34-5.32h0v-32a5.33,5.33,0,0,0-5.33-5.33H28.16L22.83,1.5Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" />
    <line id="Line_112" data-name="Line 112" x1="22.19" y1="28.19" x2="39.19" y2="28.19" stroke-width="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <line id="Line_113" data-name="Line 113" x1="31.33" y1="19.4" x2="31.33" y2="36.4" stroke-width="3" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" fill="none" />
  </svg>
</template>
<script type="text/javascript">
export default {
  props: {

    title: { type: String, default: "" },
    iconWidth: { type: String, default: "50" }

  }
}

</script>
<style scoped>
.cls-1 {
  fill: #e0e0e0;
}

.cls-2 {
  fill: none;
}

.cls-2,
.cls-3 {
  stroke: #666;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2px;
}

.cls-3 {
  fill: #fff;
}

</style>
