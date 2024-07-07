<template>
    <div class="real">
      <div :id="gridName" style="width: 100%; height: 400px"></div>
      <button @click="loadData">load data~~!!</button>
    </div>
  </template>
  
  
  <script>
  import { GridView, LocalDataProvider } from 'realgrid';
  import { columns, fields, rows } from './realgrid-data';
  import { ref, reactive } from "vue";
  

  const tempArray = 
  [{
    "Name": "a",
    "FullName": "Vijendra N. Raj",
    "Email": "mus.Donec.dignissim@Praesent.edu",
    "Company": "Arcu Et Pede Incorporated",
    "Age": "17"
},
{
    "Name": "b",
    "FullName": "Hridaynath K. Ismail",
    "Email": "fringilla.euismod@elementum.edu",
    "Company": "Aliquam Tincidunt Ltd",
    "Age": "28"
},
{
    "Name": "c",
    "FullName": "Kanwalkishore C. Khan",
    "Email": "tellus.non.magna@porttitorvulputate.org",
    "Company": "Ultrices Duis Volutpat Institute",
    "Age": "38"
},
{
    "Name": "d",
    "FullName": "Dharani P. Patel",
    "Email": "ipsum@orcilobortisaugue.net",
    "Company": "Posuere Associates",
    "Age": "25"
},
{
    "Name": "e",
    "FullName": "Preeti M. Singh",
    "Email": "rutrum@orci.com",
    "Company": "Turpis Nec Inc.",
    "Age": "46"
},
  ];

  export default {
    name: 'RealGrid',
    props: ["domName" ],
    data: function () {
        return {
            gridName: this.domName,
            gridView: null,
            dataProvider: null,
        }
    },
    methods: {
        loadData: function() {
          
          // console.log("rows",this.dataProvider.get);
            // this.dataProvider.setRows(tempArray);
            this.dataProvider.addRows(tempArray);
        }
    },
    mounted() {
      console.log(this.gridName);
      
      this.dataProvider = new LocalDataProvider(false);
      this.gridView = new GridView(this.gridName);
      
      this.gridView.setDataSource(this.dataProvider);
  
      this.dataProvider.setFields(fields);
      this.gridView.setColumns(columns);
      this.dataProvider.setRows(rows);
    }
  }
  </script>
  