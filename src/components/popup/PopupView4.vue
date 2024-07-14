<template>
    <div>
        <button @click="pdfDown">pdf down</button>
        <div :id="pdfId">
            <h2>vuejs tree sample</h2>
            <CustomTreeView  />
        </div>
    </div>
    
  </template>
  
  <script>
import CustomTreeView from './CustomTreeView.vue';
import { pdfDown } from './pdfDown';


  export default {

    components: { CustomTreeView },
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
  
