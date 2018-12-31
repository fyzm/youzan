import url from 'js/api.js'
import fetch from 'js/fetch.js'

class Cart {
  static add(id) {
    return fetch(url.cartAdd,{
      id,
      number: 1
    })
  }
  static reduce(id) {
    return fetch(url.cartReduce,{
      id,
      number: 1
    })
  }
}

export default Cart