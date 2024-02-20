<script>
export default {
  data() {
    return {
      text: "Hello",
      updatesData: [
        //  будем хранить измененные данные
      ],
      /** обновленные данные должны попасть двумя элементами(type,value) в массив
       * объект:
       * id=2 + массив(street+value, number+value)
       * id=5+массив(companyName+value, city+value)
       * change при написании слова дохуя раз запушит
       * Когда нажимаю на отправить,оно должно сравнивать каждый инпут со старыми данными
       * Сравнение со старыми данными - будет dataChanges(мнохокода), список измененных данных
       * onChanges не нужен
       */
      tabHeader: {
        expandedIcon: "pi pi-chevron-circle-down",
        collapsedIcon: "pi pi-chevron-circle-up",
      },
      users: [],
      //
      data: [
        { label: "Name", value: this.user.name },
        { label: "Username", value: this.user.username },
        { label: "Email", value: this.user.email },
        { label: "Phone", value: this.user.phone },
        { label: "Website", value: this.user.website },
      ],
      //
    };
  },
  //
  props: {
    user: {
      type: Object,
      default: () => ({}),
    },
  },
  //
  methods: {
    fetchUserData() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          this.users = data;
        });
    },
    // dataChanges(type, value) {
    //   this.updatesData.push([type, value]);
    //   /**
    //    * когда мы написали уже , мы нажали на баттон
    //    * при нажатии на баттон происхоидт сравнение старого инпута с новым, если
    //    * совпадает со старым, то игнор, а измененные: данный его тайп и валью пушим в массив
    //    * и идем дальше, а потом в нижнем функции формируем список этих инпутов
    //    */
    // },
    showUpdates() {
      //   /**
      //   отображает в alert список измененных input'ов из массива updatesData
      //   через цикл фор по длине массива
      alert(
        "Надо сделать так, чтобы при нажатии на этот баттон, выводились изменения данного АккордионТаба"
      );
    },
  },
  created() {
    this.fetchUserData();
  },
};
</script>

<template>
  <div class="container">
    <header class="header">
      <h3 class="header__user">USERS</h3>
    </header>
    <div class="line"></div>
    <div class="content">
      <div class="content__types">
        <div class="empty"></div>
        <div
          v-for="key in ['Name', 'Email', 'Phone', 'Website']"
          :key="key"
          class="content-type content-split"
        >
          {{ key }}
        </div>
      </div>
      <Accordion :multiple="true">
        <!-- первый аккордион -->
        <AccordionTab
          :expanded-icon="tabHeader.expandedIcon"
          :collapsed-icon="tabHeader.collapsedIcon"
          v-for="user in users"
          :key="user.id"
        >
          <template v-slot:header>
            <div
              v-for="key in ['name', 'email', 'phone', 'website']"
              :key="key"
              class="content-split"
            >
              <div>
                {{ user[key] }}
              </div>
            </div>
          </template>
          <div class="typesSave">
            <div class="table">
              <div class="row-up">
                <!-- через тире такое задавать, внизу тоже -->
                <div class="cell">ADDRESS</div>
                <div class="cell">COMPANY</div>
                <div class="cell">BASIC INFO</div>
              </div>

              <div class="row-down">
                <div class="first-cell cell">
                  <!-- завести еще один класс:359  -->
                  <div>
                    <div class="custom-label">Street</div>
                    <input type="text" v-model="user.address.street" />
                    <!-- @input="changeINput(event)" -->
                    <!-- @change="dataChanges()" -->
                    <!-- прокинуть в тайп действующий тайп и значение -->
                  </div>
                  <div>
                    <div class="custom-label">Suite</div>
                    <input type="text" v-model="user.address.suite" />
                  </div>
                  <div>
                    <div class="custom-label">City</div>
                    <input type="text" v-model="user.address.city" />
                  </div>
                  <div>
                    <div class="custom-label">Zipcode</div>
                    <input type="text" v-model="user.address.zipcode" />
                  </div>
                </div>

                <div class="second-cell cell">
                  <div>
                    <div class="custom-label">Name</div>
                    <input type="text" v-model="user.company.name" />
                  </div>
                  <div>
                    <div class="custom-label">CatchPhrase</div>
                    <input type="text" v-model="user.company.catchPhrase" />
                  </div>
                  <div>
                    <div class="custom-label">Bs</div>
                    <input type="text" v-model="user.company.bs" />
                  </div>
                </div>

                <div class="third-cell cell">
                  <div v-for="(item, index) in data" :key="index">
                    <div class="custom-label">{{ item.label }}</div>
                    <input type="text" v-model="item.value" />
                  </div>
                </div>

                <!-- <div>
                    <div class="custom-label">Name</div>
                    <input type="text" v-model="user.name" />
                  </div>
                  <div>
                    <div class="custom-label">Username</div>
                    <input type="text" v-model="user.username" />
                  </div>
                  <div>
                    <div class="custom-label">Email</div>
                    <input type="text" v-model="user.email" />
                  </div>
                  <div>
                    <div class="custom-label">Phone</div>
                    <input type="text" v-model="user.phone" />
                  </div>
                  <div>
                    <div class="custom-label">Website</div>
                    <input type="text" v-model="user.website" />
                  </div> -->
                <!-- </div> -->
              </div>
            </div>
            <div class="button-cell">
              <i
                class="pi pi-check"
                style="color: slateblue"
                @click="showUpdates"
              ></i>
              <!-- данные сохраняются только на той форме, к которой принадлежит кнопка -->
            </div>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto";
}

.container {
  margin: auto;
  width: 100%;
  max-width: 1750px;
  padding-bottom: 10px;
}

.header {
  width: 100%;
  // =.header__user
  &__user {
    color: black;
    margin: 24px 0px 0px 51px;
    font-weight: 500;
    font-size: 20px;
  }
}
.p-accordion-toggle-icon {
  color: #ffd300;
  width: 4%;
  height: 20px;
}

.p-accordion-tab {
  padding: 12px 0px;
  width: 100%;
  outline: 1px solid #ffd200;
  margin-bottom: 10px;
  border-radius: 4px;
}

.line {
  border-bottom: 1px solid #727270;
  margin-top: 77px;
}

.content {
  width: 92.91%;
  margin: 30px 64px 0px 60px;
  .empty {
    width: 4%;
  }
  .content-split {
    &:nth-child(2) {
      width: 20%;
    }
    &:nth-child(3) {
      width: 24%;
    }
    &:nth-child(4) {
      width: 28%;
    }
    &:nth-child(5) {
      width: 24%;
    }
    font-weight: 400;
    font-size: 14px;
  }

  &__types {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;

    .content-type {
      color: #696969;
      font-size: 12px;
      font-weight: 400;
    }
  }
}

.table {
  display: table;
  width: 100%;
  border-radius: 10px;
}

.typesSave {
  padding: 12px 32px 8px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
}

.p-accordion-header-link {
  height: 16px !important;
}

.p-icon {
  padding-right: 20px;
}

.row-up,
.row-down {
  display: table-row;
}

.row-up {
}

.row-down {
}

.cell {
  display: table-cell;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.first-cell {
  border-bottom-left-radius: 4px;
  padding: 0px 32px 69px 24px;
}
.second-cell {
  padding: 0px 32px;
}
.third-cell {
  padding: 0px 24px 24px 32px;
  border-bottom-right-radius: 4px;
}

.first-cell > *,
.second-cell > *,
.third-cell > * {
  margin-bottom: 12px;
}

.first-cell,
.second-cell,
.third-cell {
  padding-top: 24px;
}
// создать еще один класс вместо этого

.custom-label {
  font-weight: 400;
  font-size: 12px;
  // margin-bottom: 12px;
}

input {
  width: 100%;
  height: 36px;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid #d9dbda;
  border-radius: 4px;
  margin-top: 7px;
  padding-left: 18px;
}
.row-up > * {
  display: table-cell;
  width: 501px;
  padding-top: 11px;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 10px;
  padding-left: 32px;
}
// избавился от .address-cell, .company-cell, .basicinfo-cell
.row-up {
  &:first-child {
    border-top-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
  }
}

.button-cell {
  width: 42px;
  height: 40px;
  margin-left: 32px;
  border-radius: 4px;
  background-color: #ffd300;
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.pi-check:before {
  height: 25px;
  font-weight: 900;
  text-align: center;
  font-size: 25px;
  color: #5f7465;
}
</style>
