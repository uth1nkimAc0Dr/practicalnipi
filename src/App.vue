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
    };
  },
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
        <!-- <div class="content-type content-split">Name</div>
        <div class="content-type content-split">Email</div>
        <div class="content-type content-split">Phone</div>
        <div class="content-type content-split">Website</div> -->
        <div
          v-for="key in ['Name', 'Email', 'Phone', 'Website']"
          :key="key"
          class="content-type content-split"
        >
          {{ key }}
        </div>
      </div>
      <!-- -->
      <Accordion :multiple="true" :activeIndex="[0]">
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
            <!-- <div class="content-split">{{ user.name }}</div> -->
            <!-- <div class="content-split">{{ user.email }}</div> -->
            <!-- <div class="content-split">{{ user.phone }}</div> -->
            <!-- <div class="content-split">{{ user.website }}</div> -->
          </template>
          <div class="typesSave">
            <div class="table">
              <!-- не могу задать для верхнего левого -->
              <div class="rowUp">
                <!-- через тире такое задавать, внизу тоже -->
                <div class="addressCell cell">ADDRESS</div>
                <div class="companyCell cell">COMPANY</div>
                <div class="basicinfoCell cell">BASIC INFO</div>
              </div>

              <div class="rowDown">
                <div class="firstCell cell">
                  <!-- завести еще один класс:359  -->
                  <div class="streetInput">
                    <div class="street">Street</div>
                    <input
                      type="text"
                      v-model="user.address.street"
                      class="input"
                    />
                    <!-- @input="changeINput(event)" -->
                    <!-- @change="dataChanges()" -->
                    <!-- прокинуть в тайп действующий тайп и значение -->
                  </div>
                  <div class="suiteInput">
                    <div class="suite">Suite</div>
                    <input
                      type="text"
                      class="input"
                      v-model="user.address.suite"
                    />
                  </div>
                  <div class="cityInput">
                    <div class="city">City</div>
                    <input
                      type="text"
                      class="input"
                      v-model="user.address.city"
                    />
                  </div>
                  <div class="zipcodeInput">
                    <div class="zipcode">Zipcode</div>
                    <input
                      type="text"
                      class="input"
                      v-model="user.address.zipcode"
                    />
                  </div>
                </div>

                <div class="secondCell cell">
                  <div class="companyNameInput">
                    <div class="companyName">Name</div>
                    <input type="text" v-model="user.company.name" />
                  </div>
                  <div class="CatchPhraseInput">
                    <div class="catchPhrase">CatchPhrase</div>
                    <input type="text" v-model="user.company.catchPhrase" />
                  </div>
                  <div class="BsInput">
                    <div class="Bs">Bs</div>
                    <input type="text" v-model="user.company.bs" />
                  </div>
                </div>

                <div class="thirdCell cell">
                  <div>
                    <div class="name">Name</div>
                    <input type="text" v-model="user.name" />
                  </div>
                  <div>
                    <div class="username">Username</div>
                    <input type="text" v-model="user.username" />
                  </div>
                  <div>
                    <div class="email">Email</div>
                    <input type="text" v-model="user.email" />
                  </div>
                  <div>
                    <div class="phone">Phone</div>
                    <input type="text" v-model="user.phone" />
                  </div>
                  <div>
                    <div class="website">Website</div>
                    <input type="text" v-model="user.website" />
                  </div>
                </div>
              </div>
            </div>
            <div class="buttonCell2">
              <!-- <div class="check"> -->
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
    margin-top: 24px;
    margin-left: 51px;
    font-weight: 500;
    font-size: 20px;
  }
}
.p-accordion-toggle-icon {
  color: #ffd300;
  width: 4%;
  height: 20px;
}

// .p-accordion-header-link {
// }

.p-accordion-tab {
  padding-bottom: 12px;
  padding-top: 12px;
  // height: 40px;
  width: 100%;
  outline: 1px solid #ffd200;
  //
  padding-bottom: 12px;
  padding-top: 12px;
  //
  margin-bottom: 10px;
  border-radius: 4px;
}
.p-highlight {
  // padding-bottom: 12px;
  // padding-top: 12px;
}
.p-accordion-header {
}

.line {
  border-bottom: 1px solid #727270;
  margin-top: 77px;
}

.content {
  // outline: 1px solid #000;
  width: 92.91%;
  // max-width: 1626px;
  margin-top: 30px;
  margin-right: 64px;
  margin-left: 60px;
  // types: name, email, phone, website - weight: 400 & size: 12px
  .empty {
    width: 4%;
  }
  // чтобы content-split сначала применился, а потом content-type
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
      // line-height:14px
    }
  }
}

.table {
  display: table;
  width: 100%;
  // padding-right: 20px;
  // margin-top: 12px;
  // padding-left: 32px;
  // margin-left: 32px;
  border-radius: 10px;
  // border: 1px solid black;
}
.typesSave {
  padding-top: 12px;
  padding-bottom: 8px;
  padding-left: 32px;
  padding-right: 32px;
  // margin: 0 auto;

  // padding-left: 32px;
  // padding-right: 32px;
  // margin-top: 12px;
  // margin-left: 32px;
  box-sizing: border-box;
  // width: 100%;
  // width: 98%;
  display: flex;
  flex-direction: row;

  // border: 1px solid;
}
.addressCell {
  border-top-left-radius: 4px;
}
.p-accordion-header-link {
  height: 16px !important;
}
.p-icon {
  padding-right: 20px;
}

.rowUp,
.rowDown {
  display: table-row;
}
.rowUp {
  // border-top-left-radius: 10px;
  // border: 1px solid black;
}
.rowDown {
}

.check {
  outline: 1px solid blue;
}
.cell {
  display: table-cell;
  border: 1px solid #ccc;
  box-sizing: border-box;
}
.firstCell {
  border-bottom-left-radius: 4px;
  padding-bottom: 69px;
  padding-left: 24px;
  padding-right: 32px;
}
.secondCell {
  padding-left: 32px;
  padding-right: 32px;
}
.thirdCell {
  padding-left: 32px;
  padding-right: 24px;
  padding-bottom: 24px;
  border-bottom-right-radius: 4px;
}

.firstCell > *,
.secondCell > *,
.thirdCell > * {
  margin-bottom: 12px;
}

.firstCell,
.secondCell,
.thirdCell {
  padding-top: 24px;
}
// создать еще один класс вместо этого

.street,
.suite,
.city,
.zipcode,
.companyName,
.catchPhrase,
.Bs,
.name,
.username,
.email,
.phone,
.website {
  font-weight: 400;
  font-size: 12px;
}
// Дополнительный класс вместо такого написания

input {
  // width: 432px;
  padding-left: 18px;
  width: 100%;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #d9dbda;
  font-weight: 400;
  font-size: 14px;
  margin-top: 7px;
}

.cell {
  &:last-child {
  }

  &:first-child {
  }
}
// для сокращенной записи
.addressCell,
.companyCell,
.basicinfoCell {
  display: table-cell;
  width: 501px;
  padding-top: 11px;
  // border: 1px solid #ccc;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 10px;
  padding-left: 32px;
}
.basicinfoCell {
  border-top-right-radius: 4px;
}

.buttonCell2 {
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
