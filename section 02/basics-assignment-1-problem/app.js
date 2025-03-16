const app = Vue.createApp({
    data() {
        return {
            'name': 'EZ',
            'age': 99,
            'img': 'https://www.bellalunatoys.com/cdn/shop/files/hq-kites-eco-line-rainbow-patchwork-bella-luna-toys_1b05820c-6812-499a-aeed-09bb79db4cd1.jpg?v=1689607227'
        }
    },
    methods: {
        ageIn5Years() {
            return this.age + 5;
        },
        random() {
            return Math.random().toFixed(2);
        }
    }
});

app.mount('#assignment');