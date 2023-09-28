const { faker } = require('@faker-js/faker');


//En servicios se usa  POO (programacion orientada a objetos)

class ProductsService {

  //Constructor es un método especial que se utiliza para inicializar objetos de una clase. Su principal función es asignar valores iniciales a las propiedades (variables) de un objeto cuando se crea una instancia de esa clase
  constructor() {
    this.products = []
    this.generete()
  }

  //FUNCIONES QUE GENERAN ALGUNA ACCION QUE QUERRAMOS

  generete() {
    const limit = 100
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: index,
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl()
      })
    }
  }

  create(data) {
    const newProduct = {
      id: this.products.length + 1,
      ...data
    }

    this.products.push(newProduct)
    return newProduct
  }

  find() {
    return this.products
  }

  findOne(id) {
    return this.products.find(item => item.id == id)
  }

  update(id, changes) {
    const index = this.products.findIndex(item => item.id == id)
    if(index == -1){
      throw new Error('Product not find')
    }else{
      const product = this.products[index]
      this.products[index] = {
        ...product, ...changes
      }
      return this.products[index]
    }
  }

  delete(id) {
    const index = this.products.findIndex(item => item.id == id)
    if(index == -1){
      throw new Error('Product not find')
    }else{
      this.products.slice(index, 1)
      return {message: 'Product deleted'}
    }
  }
}


module.exports = ProductsService