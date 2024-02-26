<template>
  <div>
    <Accordion :multiple="true">
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
                    @change="dataChanges(user.id, $event, 'Street')"
                  />
                </div>
                <div>
                  <div class="custom-label">Suite</div>
                  <input
                    type="text"
                    v-model="user.address.suite"
                    @change="dataChanges(user.id, $event, 'Suite')"
                  />
                </div>
                <div>
                  <div class="custom-label">City</div>
                  <input
                    type="text"
                    v-model="user.address.city"
                    @change="dataChanges(user.id, $event, 'City')"
                  />
                </div>
                <div>
                  <div class="custom-label">Zipcode</div>
                  <input
                    type="text"
                    v-model="user.address.zipcode"
                    @change="dataChanges(user.id, $event, 'Zipcode')"
                  />
                </div>
              </div>

              <div class="second-cell cell-padding cell">
                <div>
                  <div class="custom-label">Name</div>
                  <input
                    type="text"
                    v-model="user.company.name"
                    @change="dataChanges(user.id, $event, 'Company name')"
                  />
                </div>
                <div>
                  <div class="custom-label">CatchPhrase</div>
                  <input
                    type="text"
                    v-model="user.company.catchPhrase"
                    @change="dataChanges(user.id, $event, 'CatchPhrase')"
                  />
                </div>
                <div>
                  <div class="custom-label">Bs</div>
                  <input
                    type="text"
                    v-model="user.company.bs"
                    @change="dataChanges(user.id, $event, 'Bs')"
                  />
                </div>
              </div>

              <div class="third-cell cell-padding cell">
                <div>
                  <div class="custom-label">Name</div>
                  <input
                    type="text"
                    v-model="user.name"
                    @change="dataChanges(user.id, $event, 'Name')"
                  />
                </div>
                <div>
                  <div class="custom-label">Username</div>
                  <input
                    type="text"
                    v-model="user.username"
                    @change="dataChanges(user.id, $event, 'Username')"
                  />
                </div>
                <div>
                  <div class="custom-label">Email</div>
                  <input
                    type="text"
                    v-model="user.email"
                    @change="dataChanges(user.id, $event, 'Email')"
                  />
                </div>
                <div>
                  <div class="custom-label">Phone</div>
                  <input
                    type="text"
                    v-model="user.phone"
                    @change="dataChanges(user.id, $event, 'phone')"
                  />
                </div>
                <div>
                  <div class="custom-label">Website</div>
                  <input
                    type="text"
                    v-model="user.website"
                    @change="dataChanges(user.id, $event, 'website')"
                  />
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
</template>

<script>
export default {
  data() {
    return {
      updatedUsersData: [
        //  будем хранить измененные данные
      ],
    };
  },
  props: {
    tabHeader: Object,
    users: Array,
  },
  methods: {
    dataChanges(id, event, type) {
      const newValue = event.target.value;
      //поиск нужного юзера в массиве updatedUsersData
      const userIndex = this.updatedUsersData.findIndex(
        (user) => user.id === id
      );
      if (userIndex !== -1) {
        // объект с таким айди есть
        this.updatedUsersData[userIndex][type] = newValue;
      } else {
        //создаем объект
        const newUserData = {
          id: id,
        };
        newUserData[type] = newValue;
        this.updatedUsersData.push(newUserData);
      }
    },
    showUpdates(id) {
      let modalWindow = "";
      let founded = false;
      if (this.updatedUsersData.length == 0) {
        alert("Вы ничего не изменили");
        founded = true;
      }
      for (let i = 0; i < this.updatedUsersData.length; i++) {
        const userData = this.updatedUsersData[i];
        // userData - это каждый объект из нового массива, который мы проверяем
        // Проверяем, совпадает ли id объекта с id, который мы ищем
        if (userData.id === id) {
          // каждый объект прогоняем через это
          // нашли объект, через цикл осуществляется проход по его полям
          for (let key in userData) {
            if (
              userData.hasOwnProperty(key) &&
              key !== "id" &&
              (userData[key] === "" || userData[key] === " ")
            ) {
              modalWindow += `${key}: Вы очистили это поле\n`;
            } else if (userData.hasOwnProperty(key) && key !== "id") {
              modalWindow += `${key}:  ${userData[key]}\n`;
            }
          }
          alert("Новые данные: \n" + modalWindow);
          founded = true;
          break;
          // Если мы нашли объект с нужным id, выходим из цикла и даем знак, чтобы else не сработал
        }
      }
      if (founded == false) {
        // оно должно быть чисто в случае, если мы не нашли нужного юзера
        alert(
          `Вы ничего не изменили у  пользователя ${this.users[id - 1].name}  `
        );
      }
    },
  },
};
</script>

<style>
.typesSave {
  padding: 12px 32px 8px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
}
.table {
  display: table;
  width: 100%;
  border-radius: 10px;
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
}
/* избавился от .address-cell, .company-cell, .basicinfo-cell */

.row-up {
  &:first-child {
    border-top-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
  }
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
