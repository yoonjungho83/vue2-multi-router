<template>
    <div>
        <button @click="pdfDown">pdf down</button>
        <div :id="pdfId">
            <h2>gojs tree sample</h2>
            <CustomGojsTree  />
        </div>
    </div>
    
  </template>
  
  <script>
import CustomGojsTree from './CustomGojsTree.vue';
import { pdfDown } from './pdfDown';


  export default {

    components: { CustomGojsTree },
    data(){
      return {
        treeNm : "gojsTree",
        pdfId : "pdfArea"
      }
    },
    methods : {
        pdfDown (){
            pdfDown.exportToPDF(this.pdfId , "test");
        }
    }


  };
  </script>
  
