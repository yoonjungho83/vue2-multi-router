<template>
    <div class="real">
      <div :id="gridName" style="width: 100%; height: 400px"></div>
      <button @click="loadData">load data~~!!</button>
    </div>
  </template>
  
  
  <script>
  import { TreeView, LocalTreeDataProvider } from 'realgrid';
  import { columns, fields, rows } from './realtree-data';
  
  export default {
    name: 'RealGrid',
    props: ["domName"],
    data: function () {
        return {
            gridName: this.domName,
            treeView: null,
            treeProvider: null,
        }
    },
    methods: {
        loadData: function() {
          
          console.log("tree rows",rows);
        //   this.treeProvider.addRows(rows, "treeId", false, null, "iconField");
        //   this.treeProvider.setRows(rows, "treeId", false, null, "iconField");
        }
    },
    mounted() {
      console.log(this.gridName);
      
      this.treeProvider = new LocalTreeDataProvider(false);
      this.treeView = new TreeView(this.gridName);
      
      this.treeView.setDataSource(this.treeProvider);
  
      this.treeProvider.setFields(fields);
      this.treeView.setColumns(columns);
      this.treeProvider.setRows(rows, "treeId", false, null, "iconField");
    }
  }
  </script>
  