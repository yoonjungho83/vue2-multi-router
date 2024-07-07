<template>
  <div id="pdfDiv" >
    <h2>RealGrid Vue Sample</h2>
    <CustomRealgrid :domName="dom1"/>
    <!-- <CustomRealgrid :domName="dom2"/> -->
     <button class="mb-5 float-right" @click="exportToPDF">PDF 다운로드</button>
  </div>
</template>
  
  <script>
import CustomRealgrid from './CustomRealgrid.vue';

import html2pdf from 'html2pdf.js';

  export default {
    name: 'App1',
  components: {
    CustomRealgrid,
  },
  data() {
    return {
      dom1: "realgrid1",
      dom2: "realgrid2"
    }
  },
  methods: {
    exportToPDF(){
      console.log("pdf down");
      var element = document.getElementById('pdfDiv');
      console.log("pdf down",element);
      var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
    // html2pdf(element);
    html2pdf().from(element).set(opt).save();
    }
  },
  };
  </script>



<style scoped>
#pdf-div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
  