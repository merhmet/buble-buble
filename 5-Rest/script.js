new Vue({
  el: '#food-menu',
  data() {
    return {
     plates: [
       {name: 'Spaghetti', price: '8.90 €'},
       {name: 'Lasagne', price: '11.90 €'},
        {name: 'Seafood paella', price: '13.90 €'},
        {name: 'Chicken rice', price: '7.90 €'},
        {name: 'Baked potates with bacon', price: '7.90 €'},
        {name: 'Fish and chips', price: '8.90 €'},
        {name: 'Poutine', price: '4.90 €'},
        {name: 'Hamburger with chips', price: '9.90 €'},

     ],
      drinks:[
      {name: 'Water 0.5l', price: '2.50 €'},
      {name: 'Small beer', price: '2.90 €'},
      {name: 'Large beer', price: '3.90 €'},
      {name: 'Mojito', price: '5.90 €'},
      {name: 'Tequilla Sunrise', price: '7.90 €'},
        ],
        deserts: [
       {name: 'Musse', price: '4.90 €'},
       {name: 'Apple cake', price: '3.90 €'},
      {name: 'Apple cake', price: '3.90 €'},
       {name: 'Carrot cake', price: '6.90 €'},
       {name: 'Tim tam cake', price: '9.90 €'},

     ],
      
    }
  },
 
})