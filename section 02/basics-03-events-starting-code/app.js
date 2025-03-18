const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    submitForm() {
      alert('Submitted!');
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    confirm() {
      this.confirmedName = this.name
    },
    increment(num) {
      this.counter += num;
    },
    decrement(num) {
      this.counter -= num;
    }
  }
});

app.mount('#events');
