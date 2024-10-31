<template>
  <p>New Form</p>
  <form @submit.prevent="addNewData">
    <input type="text" placeholder="name" v-model="newName" />
    <br />
    <input type="text" placeholder="phone" v-model="newPhone" />
    <br />

    <input type="text" placeholder="email" v-model="newEmail" />
    <br />
    <button>Submit</button>
  </form>
</template>

<script>
export default {
  emits: ["named-emit-event"],
  data() {
    return {
      newName: "",
      newPhone: "",
      newEmail: "",
    };
  },
  methods: {
    addNewData() {
      this.$emit(
        "named-emit-event",
        this.newName,
        this.newEmail,
        this.newPhone
      );
      // console.log(this.newName);
    },
  },
};
</script>
