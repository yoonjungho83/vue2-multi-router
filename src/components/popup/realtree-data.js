import { ValueType } from "realgrid";

export const fields = [
    // {fieldName:"area1code", dataType:"text"},
    // {fieldName:"area1name", dataType:"text"},
    // {fieldName:"area2code", dataType:"text"},
    // {fieldName:"area2name", dataType:"text"},
    // {fieldName:"area3code", dataType:"text"},
    // {fieldName:"area3name", dataType:"text"},
    {fieldName:"treeId", dataType:"text"},
    {fieldName:"treeName", dataType:"text"},
    {fieldName:"iconField", dataType:"text"}
  ];

export const columns = [
  // {
  //   name: "KorName",
  //   fieldName: "KorName",
  //   width: "100",
  //   popupMenu: "menu1",
  //   button: "popup",
  //   buttonVisibility: "always",
  //   header: {
  //     text: "이름",
  //     styleName: "orange-column"
  //   },
  // },


    {fieldName:"treeName", name:"treeName", width: 150
      // , header:{text:"지역명1"} 
      , popupMenu: "menu1"
      , button: "popup"
      , buttonVisibility: "visible"//always , focused , hovering , hidden , visible => 이기능은 마우스 오버시 컨택스트메뉴로 갈수 있는 버튼이 표시되는 속성
      ,header: { text: '<span style="color: blue;">이름</span>', align: 'left' } // 해더 정렬
    },
    {fieldName:"treeId", name:"treeId", header:{text:"TreeID"} },
    {fieldName:"iconField", name:"iconField" , visible :false}
    /** 아이콘 설정은 아이콘 배열을 생성해둔 후 해당 아이콘의 위치정보를 rows에 매핑 시킴.
     * 테스트 해야함.
     *  treeView.treeOptions.iconImagesRoot = "/images/flags/";
        treeView.treeOptions.iconImages = [
            "kr.png", "de.png", "es.png", "fr.png", "grd_treeicon_leaf.png", "hu.png", "is.png",
            "ox.png", "mx.png", "pt.png", "us.png", "ve.png"
        ]
        treeView.treeOptions.defaultIcon = 4;


        treeOptions.defaultIcon, expandedIcon, collapsedIcon을 사용하여 기본, 펼침, 닫힘 아이콘을 지정할 수 있습니다.
        treeView.treeOptions.iconImagesRoot = "/images/treeImage/";
        treeView.treeOptions.iconImages = [
            "grd_tree_open.png", "grd_tree_close.png", "grd_treeicon_leaf.png"
        ]
        treeView.treeOptions.expandedIcon = 0;
        treeView.treeOptions.collapsedIcon = 1;
        treeView.treeOptions.defaultIcon = 2;
     * 
     */
  ]

export const rows = [
  
  {
      "treeId": "11",
      "treeName": "서울특별시",
      "area1code": "11",
      "area1name": "서울특별시",
      "iconField": 0
    },
    {
      "treeId": "11.010",
      "treeName": "종로구",
      "area1code": "11",
      "area1name": "서울특별시",
      "area2code": "11010",
      "area2name": "종로구",
      "iconField": 1
    },
    {
      "area1code": "11",
      "area1name": "서울특별시",
      "area2code": "11010",
      "area2name": "종로구",
      "area3code": "1101053",
      "area3name": "사직동",
      "date1": "20160416",
      "treeId": "11.010.53",
      "treeName": "사직동",
      "iconField": 1
    },
    {
      "area1code": "11",
      "area1name": "서울특별시",
      "area2code": "11010",
      "area2name": "종로구",
      "area3code": "1101054",
      "area3name": "삼청동",
      "treeId": "11.010.54",
      "treeName": "삼청동",
      "iconField": 1
      
    },
    {
      "area1code": "11",
      "area1name": "서울특별시",
      "area2code": "11010",
      "area2name": "종로구",
      "area3code": "1101055",
      "area3name": "부암동",
      "treeId": "11.010.55",
      "treeName": "부암동",
      "iconField": 1
    },
    {
      "treeId": "12",
      "treeName": "서울특별시1",
      "area1code": "12",
      "area1name": "서울특별시1",
      "iconField": 0
    },
    {
      "treeId": "12.10",
      "treeName": "종로구",
      "area1code": "12",
      "area1name": "서울특별시",
      "area2code": "11010",
      "area2name": "종로구1",
      "iconField": 1
    },  
    {
      "treeId": "12.11",
      "treeName": "종로구22",
      "area1code": "12",
      "area1name": "서울특별시",
      "area2code": "11010",
      "area2name": "종로구1",
      "iconField": 1
    },  
  ]