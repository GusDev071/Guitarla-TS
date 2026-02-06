export type Guitar = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
}

//este esta bien pero es mejor aplicar la herencia de typescript para no repetir codigo, ya que CartItem es igual a Guitar pero con un campo mas, que es quantity, entonces se puede hacer asi:
/* export type CartItem = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
    quantity: number
} */

// con herencia de typescript seria asi:

export type CartItem = Guitar & {
    quantity: number
}

//para agregar solo los datos que quieres del componente padre puedes usar Pick, por ejemplo si solo quieres el id y el name de la guitarra para el carrito, puedes hacer asi:
/* export type CartItem = Pick<Guitar, 'id' | 'name'> & {
    quantity: number
} */

//o en caso contrario si no quieres que  unos campos puedes usar Omit, por ejemplo si no quieres el description y el image para el carrito, puedes hacer asi:
/* export type CartItem = Omit<Guitar, 'description' | 'image'> & {
    quantity: number
} */


//aqui vamos a hacer un lookup para que cambie el valor del dato del padre por herencia solo es aplicable para un campo, por ejemplo si quiero que el id del carrito sea el mismo que el id de la guitarra pero con un prefijo, puedo hacer asi:

export type GuitarID = Guitar['id']