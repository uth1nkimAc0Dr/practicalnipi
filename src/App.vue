<script>
export default {
  data() {
    return {
      text: "Hello",

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
      oldUsersData: [],
      users: [],
      updatedUsersData: [
        //  будем хранить измененные данные
      ],
    };
  },
  methods: {
    fetchUserData() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          this.users = data;
          this.oldUsersData = JSON.parse(JSON.stringify(data));
        });
    },
    // dataChanges(type, value) {
    dataChanges(id, event, type) {
      const newValue = event.target.value;
      // Найти индекс пользователя в массиве updatedUsersData
      const userIndex = this.updatedUsersData.findIndex(
        (user) => user.id === id
      );

      // Если пользователь с данным id уже существует в массиве, обновить его данные
      if (userIndex !== -1) {
        this.updatedUsersData[userIndex][type] = newValue;
      } else {
        // Если пользователя с данным id еще нет в массиве, добавить его
        const userData = {
          id: id,
        };
        userData[type] = newValue;
        this.updatedUsersData.push(userData);
      }
    },
    // type is user.address.suite или user.address.city
    // const newValue = event.target.value; //newValue
    // alert(
    //   "значение изменилось: type:" +
    //     type +
    //     ", value:" +
    //     newValue +
    //     ", id:" +
    //     id
    // );
    // можно добавить проверку: чтобы если там уже есть такой тайп, то оно будет заменяться новым значением
    // можно добавить проверку с oldUsers, чтобы всегда проверяло на несовпадение со старыми данными
    // а в идеале чтобы проверку делало и старое убирало сразу же
    // если newValue ===oldUsersData.type.value, то remove UpdatedUsersData.type
    // если newValue !=== oldUsersData.type.value, то add UpdatedUsersData.type
    // this.updatedUsersData.push({ id, type, newValue });
    // [
    //   {
    //     id: 1,
    //     type: "user.address.street",
    //     newValue: "Новое значение для улицы",
    //   },
    //   {
    //     id: 1,
    //     type: "user.address.suite",
    //     newValue: "Новое значение для квартиры",
    //   },
    // ];

    // надо получить user.id + тип: user.address.suite + значение
    // если данные изменились, то мы записываем их в updatesData
    /**
     * когда мы написали уже , мы нажали на баттон
     * при нажатии на баттон происхоидт сравнение старого инпута с новым, если
     * совпадает со старым, то игнор, а измененные: данный его тайп и валью пушим в массив
     * и идем дальше, а потом в нижнем функции формируем список этих инпутов
     */
    // },

    showUpdates(id) {
      console.log("вывод всего в updatedUsersData");
      for (let i = 0; i < this.updatedUsersData.length; i++) {
        console.log("Object " + i + ":");
        let obj = this.updatedUsersData[i];
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            console.log(key + ": " + obj[key]);
          }
        }
      }
      alert("Вывод данных для объекта с id " + id + ":");
      for (let i = 0; i < this.updatedUsersData.length; i++) {
        const obj = this.updatedUsersData[i];
        // Проверяем, совпадает ли id объекта с id, который мы ищем
        if (obj.id === id) {
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              alert(key + ": " + obj[key]);
            }
          }
          // Если мы нашли объект с нужным id, выходим из цикла
          break;
        }
      }
      //
      // const foundUser = this.updatedUsersData.find(
      //   (foundUser) => foundUser.id === id
      // );
      // console.log("foundUser is " + foundUser);
      // //foundUser это тот объект с тайпами, который принадлежит этому аккордианТабу
      // // console.log(this.updatedUsersData);
      // let modalWindow = "";
      // for (let key in foundUser) {
      //   if (key !== "id") {
      //     modalWindow += `${key}: ${foundUser[key]}\n`;
      //   }
      // }
      // console.log("Такие данные были изменены:\n" + modalWindow);
      //
      // alert(updatesData);
      //   /**
      //   отображает в alert список измененных input'ов из массива updatesData
      //   через цикл фор по длине массива
      // alert(
      //   "Надо сделать так, чтобы при нажатии на этот баттон, выводились изменения данного АккордионТаба"
      // );
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
                <div class="first-cell cell-padding cell">
                  <div>
                    <div class="custom-label">Street</div>
                    <input
                      type="text"
                      v-model="user.address.street"
                      @change="
                        dataChanges(user.id, $event, 'user.address.street')
                      "
                    />
                    <!-- @input="changeINput(event)" -->
                    <!-- @change="dataChanges()" -->
                    <!-- прокинуть в тайп действующий тайп и значение -->
                  </div>
                  <div>
                    <div class="custom-label">Suite</div>
                    <input
                      type="text"
                      v-model="user.address.suite"
                      @change="
                        dataChanges(user.id, $event, 'user.address.suite')
                      "
                    />
                  </div>
                  <div>
                    <div class="custom-label">City</div>
                    <input
                      type="text"
                      v-model="user.address.city"
                      @change="
                        dataChanges(user.id, $event, 'user.address.city')
                      "
                    />
                  </div>
                  <div>
                    <div class="custom-label">Zipcode</div>
                    <input type="text" v-model="user.address.zipcode" />
                  </div>
                </div>

                <div class="second-cell cell-padding cell">
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

                <div class="third-cell cell-padding cell">
                  <div>
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
                  </div>
                </div>
              </div>
            </div>
            <div class="button-cell">
              <i
                class="pi pi-check"
                style="color: slateblue"
                @click="showUpdates(user.id)"
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

.header {
  width: 100%;
  &__user {
    color: black;
    margin: 24px 0px 0px 51px;
    font-weight: 500;
    font-size: 20px;
  }
}

.container {
  margin: auto;
  width: 100%;
  max-width: 1750px;
  padding-bottom: 10px;
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

.typesSave {
  padding: 12px 32px 8px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
}

.row-up,
.row-down {
  display: table-row;
}

.row-up > * {
  display: table-cell;
  width: 501px;
  padding-top: 11px;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 10px;
  padding-left: 32px;
} //  избавился от .address-cell, .company-cell, .basicinfo-cell

.row-up {
  &:first-child {
    border-top-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
  }
}

.table {
  display: table;
  width: 100%;
  border-radius: 10px;
}

.button-cell {
  display: flex;
  justify-content: center;
  width: 42px;
  height: 40px;
  margin-left: 32px;
  padding-top: 8px;
  border-radius: 4px;
  background-color: #ffd300;
}

.p-accordion-header-link {
  height: 16px !important;
}

.p-icon {
  padding-right: 20px;
}

.pi-check:before {
  height: 25px;
  font-weight: 900;
  text-align: center;
  font-size: 25px;
  color: #5f7465;
}

.cell {
  display: table-cell;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.first-cell {
  border-bottom-left-radius: 4px;
  padding: 0px 32px 69px 32px;
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

.cell-padding {
  padding-top: 24px;
}

.custom-label {
  font-weight: 400;
  font-size: 12px;
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
</style>
