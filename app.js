Vue.component('my-btn', {
  props: {item: Object},
  //для передачи boolean в проп нужно использовать v-bind
  data: function() {
    return {
      modal: false,
      name: "чет там"
    }
  },
  template: `<div>
        <button class="my-btn"  @click="modal=true">
        <div class="my-block">
          <div class="left">
          <div class="image">
            <img v-if="item.gender == false" src="image/women.svg"/>
            <img v-else src="image/Man.svg"/>
          </div>
      <p class="name">{{item.name}}</p>
      </div>
      <div class="arrow"><img src="image/arrow-forward.svg"/></div>
      </div>
      
        </button>
      
      
      
      
      
      
      
      
          <transition name="fade">
    <div class="addModal" v-show="modal">
      
      <div class="flexForBtn">
      <button class="close text-white" aria-label="Close" @click="modal=false">
        <span aria-hidden="true">&times;</span>
      </button>
       </div>

      <div class="form-group mt-3">
      <input placeholder="Введите имя" class="form-control" v-model="item.name"/>
      </div>
      
  
      <select class="form-control mt-3 mb-3" v-model="item.gender">
        <option value="false">Женщина</option>
       <option value="true">Мужчина</option>
        </select>
      <div class="flexForBtn">
        <button class="btn btn-primary" @click="modal=false">Сохранить</button>
      </div>
      
    </div>

    </transition>

      
     </div>`
      
      
})

var study = new Vue({
  el: "#vue-app",
  data: {
    addModal: false,
    redActive: false,
    hiddenText: false,
    add:{gender: false, name: ""},
    items:[
      {gender: true, name: 'Олег'},
      {gender: true, name: 'Стас'},
      {gender: false, name: 'Алеся'},

      ],
  },
  methods: {
    addInList: function(){
      if(this.add.name != ""){
        this.addModal = false;
        this.items.push(this.add);
        setTimeout(()=>{
          this.add = {
            name: "",
            gender: false,
          };
        }, 100)
      }
      else{
         this.redActive = true;
         this.hiddenText = true;
      }
    },
    closeAddModal: function() {
      this.addModal = false;
      this.redActive = false;
      this.hiddenText = false;
      this.add = {
        name: "",
        gender: false,
      };
    },
  }
});
