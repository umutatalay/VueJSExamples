window.addEventListener('load',()=>{

    window.vue =new Vue({
        el:'#app',
        data: {
            isLoading:true,
            cart: [],
            sepet: []
        },
        methods:{
            SepeteEkle(index){
                const sepeteeklenecek=this.cart.splice(index,1);
                this.sepet.push(sepeteeklenecek[0]);
            },
            SepettenCikart(index){
                const sepettencikartilacak=this.sepet.splice(index,1);
                this.cart.push(sepettencikartilacak[0]);
            }
        },

        created() {
            fetch('./data.json')
              .then((res) => { return res.json() })
              .then((res) => {
                this.isLoading = false;
                this.cart = res.cart;
                this.sepet = res.sepet;
                console.log("asda");
              })
        }
    })
});