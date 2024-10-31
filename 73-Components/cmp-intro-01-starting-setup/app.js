const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "ManuEl Lorents",
          phone: "123",
          email: "manule@gmail.com",
        },
        {
          id: "julie",
          name: "Julie Lorents",
          phone: "098655",
          email: "julie@gmail.com",
        },
      ],
    };
  },
  methods: {},
});

// components
app.component("friend-contact", {
  template: `
   <li>
        <h2>{{friend.name}}</h2>

        <button @click="toggleDetails">{{ detailsAreVisible ?'Hide': 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
          <li><strong>Phone:</strong>{{friend.phone}}</li>
          <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
      </li> 
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "ManuEl Lorents",
        phone: "123",
        email: "manule@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount("#app");
