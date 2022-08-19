class Producto {
  constructor(nombre, precio, año) {
    this.nombre = nombre;
    this.precio = precio;
    this.año = año;
  }
}
class UI {
  addProducto(p) {
    const pl = document.getElementById("plist");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${p.nombre} 
                    <strong>Price</strong>: ${p.precio} 
                    <strong>Year</strong>: ${p.año}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
    pl.appendChild(element);
    //this.resetForm();

   
  }
  resetForm(){
    document.getElementById('producto-form').reset();
  }
  deleteProducto(elemento) {
    if(elemento.name === 'delete'){
      console.log(elemento.parentElement.parentElement.parentElement.remove());
      this.showMensaje('Producto eliminado!!!','danger');
    }
  }
  showMensaje(mensaje, cssClass) {
    const div= document.createElement('div');
    div.className=` alert alert-${cssClass} mt-4`;
    div.appendChild(document.createTextNode(mensaje));
    //mostrando en el dom
    const container=document.querySelector('.container');
    const app=document.querySelector('#app');
    container.insertBefore(div,app);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },4000)
  }
}
//EVENTOS DEL DOM

document
  .getElementById("producto-form")
  .addEventListener("submit", function (e) {
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const año = document.getElementById("año").value;
    console.log(nombre, precio, año);
    const p = new Producto(nombre, precio, año);
    //console.log(p);
    e.preventDefault();
    const ui = new UI();
    if(nombre===''||precio===''||año===''){
      return ui.showMensaje('Complete todos los campos','info');

    }
    ui.addProducto(p);
    ui.showMensaje('Producto agregado!!!','success');
    ui.resetForm();
});
document.getElementById('plist').addEventListener('click',function(e){
  console.log(e.target);
    const ui=new UI();
    ui.deleteProducto(e.target);
    
})
