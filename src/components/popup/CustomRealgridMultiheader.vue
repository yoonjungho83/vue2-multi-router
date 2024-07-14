<template>
    <div>
      <div ref="realgrid" style="width: 100%; height: 400px;"></div>
    </div>
  </template>
  
  <script>
  import { TreeView, LocalTreeDataProvider } from 'realgrid';
  
  export default {
    name: 'TreeViewComponent',
    data() {
      return {
        treeView: null,
        dataProvider: null,
      };
    },
    mounted() {
      this.createGrid();
    },
    methods: {
      createGrid() {
        this.dataProvider = new LocalTreeDataProvider();
        this.treeView = new TreeView(this.$refs.realgrid);
  
        const fields = [
          { fieldName: 'field1', dataType: 'text' },
          { fieldName: 'field2', dataType: 'text' },
          { fieldName: 'field3', dataType: 'text' },
          { fieldName: 'field4', dataType: 'text' },
          { fieldName: 'field5', dataType: 'text' },
          { fieldName: 'field6', dataType: 'text' },
        ];
  
        this.dataProvider.setFields(fields);
  
        const columns = [
          {
            fieldName: 'field1',
            header: {
              text: 'Field 1',
              groupShow: 'Group A'
            },
            width: 150,
          },
          {
            fieldName: 'field2',
            header: {
              text: 'Field 2',
              groupShow: 'Group A'
            },
            width: 150,
          },
          {
            fieldName: 'field3',
            header: {
              text: 'Field 3',
              groupShow: 'Group B'
            },
            width: 150,
          },
          {
            fieldName: 'field4',
            header: {
              text: 'Field 4',
              groupShow: 'Group B'
            },
            width: 150,
          },
          {
            fieldName: 'field5',
            header: {
              text: 'Field 5',
              groupShow: 'Group C'
            },
            width: 150,
          },
          {
            fieldName: 'field6',
            header: {
              text: 'Field 6',
              groupShow: 'Group C'
            },
            width: 150,
          }
        ];
  
        this.treeView.setColumns(columns);
  
        const columnGroups = [
          {
            name: 'Group A',
            orientation: 'horizontal',
            text: 'Group A',
          },
          {
            name: 'Group B',
            orientation: 'horizontal',
            text: 'Group B',
          },
          {
            name: 'Group C',
            orientation: 'horizontal',
            text: 'Group C',
          }
        ];
  
        this.treeView.columnGroups = columnGroups;
  
        const rows = [
          { field1: 'Data1-1', field2: 'Data1-2', field3: 'Data1-3', field4: 'Data1-4', field5: 'Data1-5', field6: 'Data1-6' },
          { field1: 'Data2-1', field2: 'Data2-2', field3: 'Data2-3', field4: 'Data2-4', field5: 'Data2-5', field6: 'Data2-6' },
        ];
  
        this.dataProvider.setRows(rows);
        this.treeView.setDataSource(this.dataProvider);
  
        this.treeView.setOptions({
          display: {
            rowHeight: 30,
          },
        });
      },
    },
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  