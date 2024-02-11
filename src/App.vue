<script>
export default {
  data() {
    return {
      text: "Hello",
      tableData: [
        //  пример данных
        {
          address: "123 Main St",
          company: "Acme Inc.",
          basicInfo: "Lorem ipsum",
        },
      ],
      tabHeader: {
        expandedIcon: "pi pi-chevron-circle-down",
        collapsedIcon: "pi pi-chevron-circle-up",
      },
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
      <div class="content__types">
        <div class="empty"></div>
        <div class="content-type content-split">Name</div>
        <div class="content-type content-split">Email</div>
        <div class="content-type content-split">Phone</div>
        <div class="content-type content-split">Website</div>
      </div>
      <!-- :activeIndex="[0]"-->
      <Accordion :multiple="true">
        <!-- первый аккордион -->
        <AccordionTab
          :expanded-icon="tabHeader.expandedIcon"
          :collapsed-icon="tabHeader.collapsedIcon"
        >
          <template v-slot:header>
            <div class="content-split">NameI</div>
            <div class="content-split">EmailI</div>
            <div class="content-split">PhoneI</div>
            <div class="content-split">WebsiteI</div>
          </template>
          <div class="typesSave">
            <!--внутри него addresscompanybasic + button-->
            <div class="table">
              <div class="row">
                <div class="addressCell cell">Address</div>
                <div class="companyCell cell">Company</div>
                <div class="basicinfoCell cell">Basic Info</div>
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
                  <div class="streetInput">
                    <div class="street">Street</div>
                    <input type="text" class="input" />
                  </div>
                  <div class="suiteInput">
                    <div class="suite">Suite</div>
                    <input type="text" class="input" />
                  </div>
                  <div class="cityInput">
                    <div class="city">City</div>
                    <input type="text" class="input" />
                  </div>
                  <div class="zipcodeInput">
                    <div class="zipcode">Zipcode</div>
                    <input type="text" class="input" />
                  </div>
                </div>

                <div class="secondCell cell">
                  <div class="companyNameInput">
                    <div class="">Name</div>
                    <input type="text" />
                  </div>
                  <div class="CatchPhraseInput">
                    <div class="">CatchPhrase</div>
                    <input type="text" />
                  </div>
                  <div class="BsInput">
                    <div class="">Bs</div>
                    <input type="text" />
                  </div>
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
                  <div>
                    <div class="">Email</div>
                    <input type="text" />
                  </div>
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
            </div>
            <div class="buttonCell2">
              <!-- <div class="check"> -->
              <i class="pi pi-check" style="color: slateblue"></i>
            </div>
          </div>
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
.p-accordion-toggle-icon {
  color: #ffd300;
  width: 4%;
}

.p-accordion-tab {
  width: 100%;
  outline: 1px solid #ffd200;
  padding-bottom: 12px;
  padding-top: 12px;
  margin-bottom: 10px;
  border-radius: 4px;
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
  margin-left: 60px;
  margin-right: 64px;

  &__types {
    // outline: 1px solid #000;
    display: flex;
    flex-direction: row;
    padding-bottom: 10px;
    margin-bottom: 10px;

    .content-type {
      color: black;
      size: 12px;
    }
  }

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
  }
}

.table {
  display: table;
  width: 100%;
  padding-right: 31.31px;
  padding-top: 12px;
  padding-left: 32px;
}
.typesSave {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  // border: 1px solid;
}

.row {
  display: table-row;
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

input {
  // width: 432px;
  width: 100%;
  height: 36px;
  border-radius: 4px;
  border: 1px solid #d9dbda;
}
.suiteInput {
  padding-bottom: 12px;
}
.cityInput {
  padding-bottom: 12px;
}
.zipcodeInput {
  padding-bottom: 12px;
}
.street {
  padding-top: 7px;
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

.buttonCell2 {
  border: 1px solid blue;
  width: 40px;
  height: 40px;
  margin-top: 12px;
  margin-right: 32px;
}
.form2 {
  margin-left: 31.27px;
  margin-top: 12px;
  margin-right: 31.31px;
}
</style>
