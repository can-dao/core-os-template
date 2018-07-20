const lib = {

  "openCity": [1,4,{}]
  , "menu": [5,1,{isExtId:false,isOptionalRequirement:true,reserveDate:"",sendType:-1,storeId:-1}]
  , "provinceList": ['candao.base.listProvince', { pageNow: 1, pageSize:999}]
  , "allCityList": ['candao.base.getAllCity', { pageNow: 1, pageSize: 999 }]
  , "districtListByCity": ["candao.base.listDistrict", { cityId: -1 }]

  , "nearbyStores": ['candao.storeStandard.getNearStoreList', { coordinate: [], businessType: [1, 2, 3, 4], pageNow: 1, pageSize:999}]
  /* 以上仅为举例 请不要使用,随时可删除 */
}

export default lib;