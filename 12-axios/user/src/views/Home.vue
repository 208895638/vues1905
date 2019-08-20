<template>
  <div class="home">
    <label for="">查询:<input type="text" v-model="searchVal"></label><button @click="search">查询</button>
    <button @click="isMaskShow = true;isAddShow = true;">添加用户</button>
    <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <th>id</th>
        <th>地址</th>
        <th>添加时间</th>
        <th>学校</th>
        <th>性别</th>
        <th>名称</th>
        <th>电话号码</th>
        <th>年龄</th>
      </tr>
      <tr v-for="item in list" :key="item.id" @click="updates(item)">
        <td>{{ item.id }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.addTime }}</td>
        <td>{{ item.school }}</td>
        <td>{{ item.sex }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.tel }}</td>
        <td>{{ item.age }}</td>
      </tr>
    </table>

    <div class="bot">
      总数:{{ total }}
      <select v-model="limit" name="" id="" @change="select">
        <option value="5">
          5
        </option>
        <option value="10">
          10
        </option>
        <option value="20">
          20
        </option>
        <option value="30">
          30
        </option>
        <option value="40">
          40
        </option>
      </select>
      <div>
        <button v-for="item in totalPage" :key="item" @click="toPage(item)">
          {{ item }}
        </button>
      </div>
    </div>
    <div class="mask" v-if="isMaskShow">
      <ul>
        <li>
          <label for="">
            请输入地址
            <input type="text"
            v-model="user.address"
          /></label>
        </li>
        <li>
          <label for="">
            请输入学校
            <input type="text"
            v-model="user.school"
          /></label>
        </li>
        <li>
          请输入性别
          <label for=""
            ><input type="radio" v-model="user.sex" value="0" name="sex" />
            男 </label
          ><label for=""
            ><input type="radio" v-model="user.sex" value="1" name="sex" />
            女
          </label>
        </li>
        <li>
          <label for="">
            请输入名称
            <input type="text"
            v-model="user.name"
          /></label>
        </li>
        <li>
          <label for="">
            请输入电话号码
            <input type="text"
            v-model="user.tel"
          /></label>
        </li>
        <li>
          <label for="">
            请输入年龄
            <input type="text"
            v-model="user.age"
          /></label>
        </li>
      </ul>
      <div v-if="isAddShow">
        <button @click="add">添加</button>
      </div>
      <div v-else>
        <button @click="update">修改</button>
        <button @click="del">删除当前用户</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      // 每一页展示的数量
      limit: 5,
      // 当前处于第几页
      start: 1,
      list: "",
      total: "",
      totalPage: "",
      isMaskShow:false,
      searchVal:"",
      isAddShow:true,
      id:"",
      user:{
        name:"",
        age:"",
        sex:"",
        tel:"",
        address:"",
        school:"",
      }
    };
  },
  methods: {
    init() {
      this.$ajax
        .get(`/ajax/user/list?limit=${this.limit}&start=${this.start}`)
        .then(val => {
          console.log(val);
          this.total = val.data.data.totalRow;
          this.list = val.data.data.list;
          this.totalPage = val.data.data.totalPage;
        });
    },
    select(val) {
      console.log(this.limit);
      this.init();
    },
    toPage(val) {
      this.start = val;
      this.init();
    },
    add(){
      this.$ajax.post("/ajax/user/save",this.user)
      .then(val =>{
        console.log(val);
        alert("添加成功!");
        this.isMaskShow = false;
        this.init();
        this.user.name = "";
        this.user.age = "";
        this.user.sex = "";
        this.user.tel = "";
        this.user.address = "";
        this.user.school = "";
      })
    },
    search(){
      this.$ajax.get("/ajax/user/detail",{
        params:{
          id:this.searchVal
        }
      })
      .then(val =>{
        this.list = [val.data.data];
        console.log(val.data.data);
      })
    },
    updates(val){
      this.isMaskShow = true;
      this.isAddShow = false;
      this.user = val;
      this.id=val.id;
    },
    update(){
      this.$ajax.post("/ajax/user/update",this.user)
      .then(val=>{
        console.log(val);
        alert("修改成功");
        this.isMaskShow = false;
        this.init();
      })
    },
    del(){
      this.$ajax.get("/ajax/user/del",{
        params:{
          id:this.id
        }
      })
      .then(val =>{
        console.log(val);
        alert("删除成功");
        this.isMaskShow = false;
        this.init();
      })
    }
  },
  created() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
table {
  th,
  td {
    padding: 10px;
  }
}
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
body,
html {
  height: 100%;
}
.mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  li{
    padding: 10px 0;
    color: #fff;
  }
}
</style>