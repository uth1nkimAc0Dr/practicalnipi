<script>
export default {
  data() {
    return {
      text: "Hello",
      tableData: [
        // Пример данных
        {
          address: "123 Main St",
          company: "Acme Inc.",
          basicInfo: "Lorem ipsum",
        },
        // Добавьте больше объектов с данными сюда
      ],
    };
  },
};
</script>

<template>
  <div class="container">
    <header>
      <h3 class="header__user">USERS</h3>
    </header>
    <div class="line"></div>
    <div class="content">
      <!-- <div class="table"> -->
      <div class="content__types">
        <div class="content-type content-split"></div>
        <div class="content-type content-split">Name</div>
        <div class="content-type content-split">Email</div>
        <div class="content-type content-split">Phone</div>
        <div class="content-type content-split">Website</div>
      </div>
      <div class="content__data"></div>
      <div>
        <!-- :activeIndex="[0]"-->
        <Accordion :multiple="true">
          <!-- первый аккордион -->
          <AccordionTab>
            <template v-slot:header>
              <div class="content-split">NameI</div>
              <div class="content-split">EmailI</div>
              <div class="content-split">PhoneI</div>
              <div class="content-split">WebsiteI</div>
            </template>
            <!-- <table> -->
            <!-- <div class="form2"> -->
            <div class="table2">
              <div class="row">
                <div class="addressCell cell">Address</div>
                <div class="companyCell cell">Company</div>
                <div class="basicinfoCell cell">Basic Info</div>
                <div class="buttonCell cell" @click="SaveChanges">SAVE</div>
              </div>
              <!-- <div
                  class="row"
                  v-for="(item, index) in tableData"
                  :key="index"
                >
                  <div class="cell">{{ item.address }}</div>
                  <div class="cell">{{ item.company }}</div>
                  <div class="cell">{{ item.basicInfo }}</div>
                </div> -->
              <div class="row">
                <div class="firstCell cell">
                  <div>
                    <div class="street">Street</div>
                    <input type="text" />
                  </div>
                  <div>
                    <div class="suite">Suite</div>
                    <input type="text" />
                  </div>
                  <div class="city">City</div>
                  <input type="text" />
                  <div>
                    <div class="zipcode">Zipcode</div>
                    <input type="text" />
                  </div>
                </div>
                <div class="secondCell cell">
                  <div>
                    <div class="">Name</div>
                    <input type="text" />
                  </div>
                  <div>
                    <div class="">Catchphrase</div>
                    <input type="text" />
                  </div>
                  <div class="">Bs</div>
                  <input type="text" />
                </div>
                <div class="thirdCell cell">
                  <div>
                    <div class="">Name</div>
                    <input type="text" />
                  </div>
                  <div>
                    <div class="">Username</div>
                    <input type="text" />
                  </div>
                  <div class="">Email</div>
                  <input type="text" />
                  <div>
                    <div class="">Phone</div>
                    <input type="text" />
                  </div>
                  <div>
                    <div class="">Website</div>
                    <input type="text" />
                  </div>
                </div>
              </div>
              <!-- </div> -->
            </div>
            <!-- </table> -->
          </AccordionTab>

          <!-- второй аккордион -->
          <AccordionTab>
            <template v-slot:header>
              <!-- <div class="content-split"></div> -->
              <div class="content-split">NameII</div>
              <div class="content-split">EmailII</div>
              <div class="content-split">PhoneII</div>
              <div class="content-split">WebsiteII</div>
            </template>
            <table></table>
          </AccordionTab>
          <!-- третий аккордион -->
          <AccordionTab>
            <template v-slot:header>
              <div class="content-split">NameIII</div>
              <div class="content-split">EmailIII</div>
              <div class="content-split">PhoneIII</div>
              <div class="content-split">WebsiteIII</div>
            </template>
            <table></table>
          </AccordionTab>
        </Accordion>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  max-width: 1750px;
  outline: 1px solid #000;
  // просто чтобы понятно было
}

.header {
  width: 100%;

  // =.header__user
  &__user {
    color: black;
    margin-top: 24px;
    margin-left: 51px;
  }
}
// Accordion {
//   margin-bottom: 100px;
//   margin-top: 100px;
//   // также не работает
// }

.p-accordion-tab {
  margin-bottom: 11px;
  border-bottom: 1px solid yellow;
  padding-bottom: 10px;
  // не работает
}

.line {
  border-bottom: 1px solid #727270;
  margin-top: 77px;
}

.content {
  outline: 1px solid #000;
  // просто чтобы понятно было
  width: 100%;
  max-width: 1626px;
  // margin-top: 107px;
  margin-top: 30px;
  // почему-то margin-top считается от линии
  margin-left: 60px;
  margin-right: 64px;
  &__types {
    outline: 1px solid #000;
    // для удобства
    display: flex;
    flex-direction: row;
    padding: 10px 15px;
    margin-bottom: 10px;

    .content-type {
      color: black;
      size: 12px;
    }
  }

  .content-split {
    &:first-child {
      width: 3.15%;
    }
    &:nth-child(2) {
      width: 20.99%;
    }
    &:nth-child(3) {
      width: 23.79%;
    }
    &:nth-child(4) {
      width: 27%;
    }
    &:nth-child(5) {
      width: 25.055%;
    }
  }
}

.table2 {
  display: table;
  width: 100%;
  padding-right: 31.31px;
}
.row {
  display: table-row;
}
.cell {
  display: table-cell;
  // padding: 8px; /* Измените отступы по вашему вкусу */
  border: 1px solid #ccc; /* Границы для ячеек */
}
.firstCell {
  padding-left: 32.31px;
  padding-bottom: 93px;
  padding-top: 18px;
}
.street {
  padding-top: 7px;
}
.secondCell {
  padding-left: 31.27px;
  // padding-top: 50px;
  //
}
.thirdCell {
  padding-left: 31.27px;
  margin-right: 92.73px;
  //
}
.addressCell {
  display: table-cell;
  width: 501px;
  padding-left: 32.31px;
  padding-bottom: 10px;
  padding-top: 11px;
  border: 1px solid #ccc;
}
.companyCell {
  display: table-cell;
  width: 501px;
  // padding-bottom: 10px;
  padding-left: 30.23px;
  padding-top: 11px;
  border: 1px solid #ccc;
}
.basicinfoCell {
  display: table-cell;
  width: 501px;
  padding-left: 31.27px;
  padding-bottom: 10px;
  padding-top: 11px;
  border: 1px solid #ccc;
}
.buttonCell {
  display: table-cell;
  width: 61.46px;
  // или block сделать
  padding-left: 19.77px;
  // padding: 0 10px;
  // padding-left: 10px;
  // так и не смог сделать так, чтобы
  // padding-right: 0px;
  border: 1px solid blue;
  font-size: 12px;
  font-weight: bolder;
  // width: 5%;
}
.form2 {
  margin-left: 31.27px;
  margin-top: 12px;
  margin-right: 31.31px;
  // outline: 1px solid #000;
  // обводит form2
}
</style>
