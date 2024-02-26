<script>
import AccordionUsers from "@/components/AccordionUsers.vue";
export default {
  components: {
    AccordionUsers,
  },
  data() {
    return {
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
      <AccordionUsers :tabHeader="tabHeader" :users="users"> </AccordionUsers>
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
</style>
