<template>
  <div class="mainWindow">
    <p>&nbsp;</p>
    <h1 class="megaTitle">{{$t('topTitle')}}</h1>
    <div>
      <b-tabs v-model="mainTabs">
        <b-tab active><template v-slot:title>
          <img src="~/assets/PrepBudget.jpeg" width="175" height="175">
            <br>
            Préparer un budget
          </template>
          <p class="subModule">
            <microlearning path="planKey" time="2" imagePath="KeyMessP.svg" :text="$t('KeyMessages')" :completion="$store.state.currentPlaying.kmPlan" />
      <microlearning path="buildWP" time="20" imagePath="BuildWP.svg" :text="$t('BuildWorkPlan')" :completion="$store.state.currentPlaying.buildWP_player" />
      <microlearning time="20" path="createBudget" imagePath="CreateBud.svg" :text="$t('CreateBudget')" :completion="$store.state.currentPlaying.createBudget_player" />
      <microlearning time="15" path="exam1" imagePath="P-Test.svg" :text="$t('Test')" :completion="parseInt(planCompleted)" />
          </p>
        </b-tab>
        <b-tab><template v-slot:title>
            <img src="~/assets/Acheter.jpeg" width="175" height="175">
            <br>
            Acheter un bien ou un service
          </template>
          <p class="subModule">

      <microlearning imagePath="KeyMessR.png" path="reportKey" time="5" :text="$t('KeyMessages')" :completion="$store.state.currentPlaying.kmReport" />
      <microlearning imagePath="R-Conduct.svg" path="reportPart1" time="20" :text="$t('ConductPeriodicVarianceReporting')" :completion="$store.state.currentPlaying.reportPart1_player" />
      <microlearning imagePath="R-Contribute.svg" path="reportPart2" time="20" :text="$t('ContributeReporting')" :completion="$store.state.currentPlaying.reportPart2_player" />
      <microlearning imagePath="R-Test.svg" path="exam3" time="15" :text="$t('Test')" :completion="parseInt(reportCompleted)" />
    
          </p>
        </b-tab>
        <b-tab><template v-slot:title>
            <img src="~/assets/PayerFacture.jpeg" width="175" height="175">
            <br>
            Payer une facture
          </template>
          <p class="subModule">
            <img src="https://picsum.photos/seed/8/150/">
            <img src="https://picsum.photos/seed/9/150/">
            <img src="https://picsum.photos/seed/10/150/">
          </p>
        </b-tab>
        <b-tab><template v-slot:title>
            <img src="~/assets/SuivreBudget.jpeg" width="175" height="175">
            <br>
            Suivre un budget
          </template>
          <p class="subModule">
      <microlearning path="spendKey" time="5" imagePath="KeyMessS.png" :text="$t('KeyMessages')" :completion="$store.state.currentPlaying.kmSpend" />
      <microlearning imagePath="InitiateAuthSpending.svg" path="spendPart1" time="20" :text="$t('InitiateAuthorizeSpending')" :completion="$store.state.currentPlaying.spendPart1_player" />
      <microlearning imagePath="ExerciseFinancialAuthority.svg" path="spendPart2" time="20" :text="$t('ExerciseFinancialAuthority')" :completion="$store.state.currentPlaying.spendPart2_player" />
      <microlearning time="20" path="spendPart3" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" :completion="$store.state.currentPlaying.spendPart3_player" />
      <microlearning time="15" path="exam2" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt(spendCompleted)" />
    </p>
        </b-tab>
        <b-tab><template v-slot:title>
            <img src="~/assets/FermerAnnee.jpeg" width="175" height="175">
            <br>
            Fermer une année financière
          </template>
          <p class="subModule">
      <microlearning path="spendKey" time="5" imagePath="KeyMessS.png" :text="$t('KeyMessages')" :completion="$store.state.currentPlaying.kmSpend" />
      <microlearning imagePath="InitiateAuthSpending.svg" path="spendPart1" time="20" :text="$t('InitiateAuthorizeSpending')" :completion="$store.state.currentPlaying.spendPart1_player" />
      <microlearning imagePath="ExerciseFinancialAuthority.svg" path="spendPart2" time="20" :text="$t('ExerciseFinancialAuthority')" :completion="$store.state.currentPlaying.spendPart2_player" />
      <microlearning time="20" path="spendPart3" imagePath="MonitContFinances.svg" :text="$t('MonitorControlFinances')" :completion="$store.state.currentPlaying.spendPart3_player" />
      <microlearning time="15" path="exam2" imagePath="S-Test.svg" :text="$t('Test')" :completion="parseInt(spendCompleted)" />
    </p>
        </b-tab>
      </b-tabs>
    </div>
    <videoplayer enVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_a9sopjk0/flavorId/0_xwd6dtx5/name/a.mp4" frVideoFile="https://video.csps-efpc.gc.ca/p/101/serveFlavor/entryId/0_0olxxf6u/flavorId/0_ynuanlxw/name/a.mp4" posterFile="video_poster.PNG" ccFile="intro_captions.vtt" toResume="setHomepage" :restartAt="thatPoint" />
    <div role="tablist" class="transcriptionBox">
      <b-card no-body class="mb-1 text-left">
        <b-card-header header-tag="p" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.translationbox variant="light" class="text-left">{{$t('transcript')}}</b-button>
        </b-card-header>
        <b-collapse id="translationbox" accordion="translation-box" role="tabpanel">
          <b-card-body>
            <b-card-text><span v-html="$t('transcriptText')"></span></b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
    <p>&nbsp;</p>
  </div>
</template>
<script type="text/javascript">
import commonMessage_en from "~/lang/en.js"
import commonMessage_fr from "~/lang/fr.js"
import microlearning from "~/components/microlearning"
import hamburger from "~/components/hamburger"
import videoplayer from "~/components/interface/videoPlayer"
export default {
  i18n: {
    sharedMessages: commonMessage_en,
  },
  data() {
    return {
      
      
      
      mainTabs: 0
    }
  },
  components: {
    microlearning,
    hamburger,
    videoplayer
  },
  computed: {
    thatPoint() {
      return parseInt(this.$store.state.currentPlaying.homepage)
    },
    planCompleted() {
      return this.$store.getters['plan/getScore']
    },
    reportCompleted() {
      return this.$store.getters['report/getScore']
    },
    spendCompleted() {
      return this.$store.getters['spend/getScore']
    },
    courseComplete() {
      if (this.planCompleted >= 80 && this.spendCompleted >= 80 && this.reportCompleted >= 80) {
        return true
      }
    }
  },
  watch: {
    mainTabs(newValue) {
      this.$store.commit('default/setTab', newValue)
    }
  }
}

</script>
<style scoped>
>>>.nav-tabs {
  border-bottom: 0px solid transparent;
}

>>>.nav-link {
  color: #fff;
}

>>>.nav-link.active {
  background-color: transparent;
  border: transparent;
  color: #fff;
  font-weight: bold;
}

>>>.nav-link:not(.active) {
  /*border-bottom: 1px solid #fff;*/
}

>>>.tab-pane.active {
  border: 1px solid #fff;
  border-top: none;
  border-radius: 0 0 5px 5px;
}

.subModule{ display: flex }
.pageTitle {
  font-size: 50px;
  margin-top: 1em;
}

.planHr {
  border-top: 3px dashed #d1dfe1;
}

.spendHr {
  border-top: 3px dashed #cac1ca;
  ;
}

.reportHr {
  border-top: 3px dashed #d6c5c1;
}

.sideTitle {
  font-size: 35px;
  font-family: 'Roboto Medium', sans-serif;
  font-weight: 800;
  clear: both;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: -1em;
  margin-left: 50px;
}

.mainWindow {
  text-align: center;
}

#introVideo {
  width: 60vw;
}

.videoContain {
  width: 60vw;
  margin: auto;
}

.courseSection {
  clear: left;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  background-position-y: 9em;
  background-position-x: 12em;
  background-repeat: no-repeat;
}

.planTitle {
  color: #587C84;
}

.spendTitle {
  color: #7d677d;
}

.reportTitle {
  color: #865F56;
}


.iconText {
  color: #fff;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.sideText:before {
  content: "“";
  color: #fff;
  float: left;
  font-size: 60px;
}


.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

details {
  text-align: left
}

</style>
