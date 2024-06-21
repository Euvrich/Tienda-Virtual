import React, { useEffect, useState } from "react";
// import mysql from 'mysql';
import logo from "./assets/Imagenes/Logo-LuRei.png";
import usuario from "./assets/Imagenes/usuario.png";
import carr from "./assets/Imagenes/carrito.png";
import producto1 from "./assets/Imagenes/Producto1.png";
import producto2 from "./assets/Imagenes/Producto2.png";
import producto3 from "./assets/Imagenes/Producto3.png";
import producto4 from "./assets/Imagenes/Producto4.png";
import Nike from "./assets/Imagenes/NIKE.png";

let carrito = [];
let totalCarrito = 0;

function confirmAddToCart(id, nombre, precio) {
  if (window.confirm(`¿Deseas añadir ${nombre} al carrito por s/.${precio}?`)) {
    addToCart(id, nombre, precio);
  }
}

function addToCart(id, nombre, precio) {
  const item = carrito.find((producto) => producto.id === id);
  if (item) {
    item.cantidad++;
  } else {
    carrito.push({ id, nombre, precio, cantidad: 1 });
  }
  actualizarCarrito();
}

function actualizarCarrito() {
  const carritoItems = document.getElementById("carrito-items");
  carritoItems.innerHTML = "";

  carrito.forEach((producto) => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - s/.${producto.precio} x ${producto.cantidad}`;
    carritoItems.appendChild(li);
  });

  totalCarrito = carrito.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );
  document.getElementById("total-carrito").textContent =
    totalCarrito.toFixed(2);
}

function Carousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const items = [
    <img src={Nike} width="100%" height="300px" alt="NIKE" />,
    <div>Content #2</div>,
    <div>Content #3</div>,
  ];

  useEffect(() => {
    const buttons = document.querySelectorAll(".carousel__button");
    buttons[selectedIndex].classList.add("carousel__button--selected");
  }, [selectedIndex]);

  return (
    <div className="carousel">
      <div className="carousel__item carousel__item--selected">
        {items[selectedIndex]}
      </div>
      <div className="carousel__nav">
        {items.map((_, i) => (
          <span
            key={i}
            className={`carousel__button ${
              i === selectedIndex ? "carousel__button--selected" : ""
            }`}
            onClick={() => setSelectedIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}

// CONEXION

/* const conection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'lurei'

});

conection.connect((error)=>{
  if(error) throw error ;

}); */

function AppIndex() {
  return (
    <div className="tienda">
      <header className="cabecera">
        <img className="logo" src={logo} width="60px" alt="Logo LuRei" />
        <h1>LuRei Shop</h1>
        <div>
          <label className="userl" htmlFor="log" id="regis">
            <img src={usuario} width="50px" alt="Usuario" />
          </label>
        </div>
        <div className="busqueda">
          <input className="busquedainput" type="text" placeholder="Buscar" />
          <div className="btn">
            <i className="fa fa-search"></i>
          </div>
        </div>
        <ul className="menu">
          <li>
            <a href="#">Categoria</a>
          </li>
          <li>
            <a href="#">Descuentos</a>
          </li>
          <li>
            <a href="#">Ropas</a>
          </li>
          <li>
            <a href="#">Electronica</a>
          </li>
          <li>
            <a href="#">
              <img className="fot" src={carr} width="40px" alt="Carrito" />
            </a>
          </li>
        </ul>
      </header>
      <div className="sidebar">
        <ul>
          <li>
            <a href="#" className="nav-link">
              <span className="item-icon">
                <i className="fa-solid fa-house"></i>
              </span>
              <span className="item-txt"> LuRei </span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link">
              <span className="item-icon">
                <i className="fa-solid fa-circle-info"></i>
              </span>
              <span className="item-txt"> Nosotros </span>
            </a>
          </li>
          <label htmlFor="carrito" className="carritoicon">
            <a href="#" className="nav-link">
              <span className="item-icon">
                <label className="contador">0</label>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span className="item-txt"> Carrito </span>
            </a>
          </label>
          <li>
            <a href="#" className="nav-link">
              <span className="item-icon">
                <i className="fa-regular fa-address-book"></i>
              </span>
              <span className="item-txt"> Contactanos </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="cuerpo">
        <div className="post">
          <Carousel />
        </div>

        <input type="checkbox" id="carrito" />
        <section id="carrito" className="carrito">
          <form action="#" className="carform">
            <label htmlFor="carrito" className="cerrar-carrito">
              <i className="fa-solid fa-chevron-right"></i>
            </label>

            <div className="funcionalidad-carrito">
              <i className="fa-solid fa-cart-shopping"></i>

              <ul id="carrito-items"></ul>
              <p>
                Total: s/.<span id="total-carrito">0</span>
              </p>
            </div>
          </form>
        </section>

        <input type="checkbox" id="log" />
        <div className="login">
          <form action="/verificar" method="post" className="form-log">
            <label className="cerrarlogin" htmlFor="log">
              x
            </label>

            <h2>Iniciar Sesion</h2>

            <div className="date">
              <label className="iniciarlabel" htmlFor="name">
                Nombre de usuario
              </label>
              <input
                className="iniciarinput"
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
              />

              <label className="iniciarlabel" htmlFor="pass">
                Contraseña :{" "}
              </label>
              <input
                className="iniciarinput"
                type="password"
                name="pass"
                id="pass"
                placeholder="******"
              />

              <input
                className="boton"
                type="submit"
                name="registrarse"
                id="registrarse"
                value="Ingresar"
              />

              <div className="term">
                <a href="#">Politica y privacidad</a>
                <a href="#">Terminos y condiciones</a>
                <br />
              </div>
              <label htmlFor="regin" className="resgitrarseAccion">
                {" "}
                Registrarse{" "}
              </label>
            </div>
          </form>
        </div>

        <input type="checkbox" id="regin" />
        <div className="registro">
          <form
            action="/validar"
            method="post"
            className="regi"
            name="Tienda virtual"
          >
            <label className="cerrarlogin" htmlFor="regin">
              x
            </label>

            <h2>Registrarse</h2>

            <div className="date">
              <label className="registrolabel" htmlFor="name">
                Nombre de usuario
              </label>
              <input
                className="registroinput"
                type="text"
                name="name"
                id="name"
                placeholder="Nombre"
              />

              <label className="registrolabel" htmlFor="email">
                Correo :{" "}
              </label>
              <input
                className="registroinput"
                type="email"
                name="email"
                id="email"
                placeholder="Gmail.com"
              />

              <label className="registrolabel" htmlFor="pass">
                Crea tu Contraseña :
              </label>
              <input
                className="registroinput"
                type="password"
                name="pass"
                id="pass"
                placeholder="******"
              />

              <input
                className="boton"
                type="submit"
                name="registrarse"
                id="registrarse"
                value="Registrarse"
              />

              <div className="term">
                <a href="#">Politica y privacidad</a>
                <a href="#">Terminos y condiciones</a>
              </div>
              <label htmlFor="log" className="resgitrarseAccion">
                {" "}
                Iniciar Sesion
              </label>
            </div>
          </form>
        </div>

        <section className="conteiner-related-products">
          <h2>Zapatillas para hombre</h2>

          <div className="card-list-products">
            <div className="card">
              <a href="productos.html ">
                <div className="card-img">
                  <img src={producto1} width="200px" alt="Producto 1" />
                </div>
                <div className="info-card">
                  <div className="text-product">
                    <h3>Nike-Roshe run</h3>
                    <p className="category">Footware, que sera</p>
                  </div>
                  <div className="price">s/.100.00</div>
                </div>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <button
                  className="botonCarrito"
                  onClick={() =>
                    confirmAddToCart("Producto1", "Nike-Roshe run", 100.0)
                  }
                >
                  <i className="fa-solid fa-cart-plus"></i>
                </button>
              </a>
            </div>

            <div className="card">
              <div className="card-img">
                <img src={producto2} width="200px" alt="Producto 2" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Nike-Black run</h3>
                  <p className="category">Footware, Snikers</p>
                </div>
                <div className="price">s/.85.00</div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <button
                className="botonCarrito"
                onClick={() =>
                  confirmAddToCart("Producto2", "Nike-Black run", 85.0)
                }
              >
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>

            <div className="card">
              <div className="card-img">
                <img src={producto3} width="200px" alt="Producto 3" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Nike-Retre</h3>
                  <p className="category">Footware, Nose</p>
                </div>
                <div className="price">s/.65.00</div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <button
                className="botonCarrito"
                onClick={() =>
                  confirmAddToCart("Producto3", "Nike-Retre", 65.0)
                }
              >
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>

            <div className="card">
              <div className="card-img">
                <img src={producto4} width="200px" alt="Producto 4" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Nike-xd</h3>
                  <p className="category">Footware, Cloud</p>
                </div>
                <div className="price">s/.823.00</div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <button
                className="botonCarrito"
                onClick={() => confirmAddToCart("Producto4", "Nike-xd", 823.0)}
              >
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>

          <h2>Electronica</h2>
          <div className="card-list-products">
            <div className="card">
              <div className="card-img">
                <img src={producto1} width="200px" alt="Producto 1" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Nike-Roshe run</h3>
                  <p className="category">Footware, que sera</p>
                </div>
                <div className="price">s/.100.00</div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <button
                className="botonCarrito"
                onClick={() =>
                  confirmAddToCart("Producto1", "Nike-Roshe run", 100.0)
                }
              >
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>

            <div className="card">
              <div className="card-img">
                <img src={producto2} width="200px" alt="Producto 2" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Smart Watch</h3>
                  <p className="category">Smart Watch, Blak</p>
                </div>
                <div className="price">s/.85.00</div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <button
                className="botonCarrito"
                onClick={() =>
                  confirmAddToCart("Producto2", "Smart Watch", 85.0)
                }
              >
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>

            <div className="card">
              <div className="card-img">
                <img src={producto3} width="200px" alt="Producto 3" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Nike-Retre</h3>
                  <p className="category">Footware, Nose</p>
                </div>
                <div className="price">s/.65.00</div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <button
                className="botonCarrito"
                onClick={() =>
                  confirmAddToCart("Producto3", "Nike-Retre", 65.0)
                }
              >
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>

            <div className="card">
              <div className="card-img">
                <img src={producto4} width="200px" alt="Producto 4" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Nike-xd</h3>
                  <p className="category">Footware, Cloud</p>
                </div>
                <div className="price">s/.823.00</div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <button
                className="botonCarrito"
                onClick={() => confirmAddToCart("Producto4", "Nike-xd", 823.0)}
              >
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>

          <h2>Moda</h2>
          <div className="card-list-products">
            <div className="card">
              <div className="card-img">
                <img src={producto1} width="200px" alt="Producto 1" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Nike-Roshe run</h3>
                  <p className="category">Footware, que sera</p>
                </div>
                <div className="price">s/.100.00</div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <button
                className="botonCarrito"
                onClick={() =>
                  confirmAddToCart("Producto1", "Nike-Roshe run", 100.0)
                }
              >
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>

            <div className="card">
              <div className="card-img">
                <img src={producto2} width="200px" alt="Producto 2" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Nike-Roshe une</h3>
                  <p className="category">Footware, Snikers</p>
                </div>
                <div className="price">s/.85.00</div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <button
                className="botonCarrito"
                onClick={() =>
                  confirmAddToCart("Producto2", "Nike-Roshe une", 85.0)
                }
              >
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>

            <div className="card">
              <div className="card-img">
                <img src={producto3} width="200px" alt="Producto 3" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Nike-Retre</h3>
                  <p className="category">Footware, Nose</p>
                </div>
                <div className="price">s/.65.00</div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <button
                className="botonCarrito"
                onClick={() =>
                  confirmAddToCart("Producto3", "Nike-Retre", 65.0)
                }
              >
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>

            <div className="card">
              <div className="card-img">
                <img src={producto4} width="200px" alt="Producto 4" />
              </div>
              <div className="info-card">
                <div className="text-product">
                  <h3>Lenovo M2 Pro</h3>
                  <p className="category">Lenovo</p>
                </div>
                <div className="price">s/.70.00</div>
              </div>
              <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>

              <button
                className="botonCarrito"
                onClick={() =>
                  confirmAddToCart("Producto4", "Lenovo M2 Pro", 70.0)
                }
              >
                <i className="fa-solid fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="viewmore">
        <label htmlFor="mas" className="vermas">
          Ver más
        </label>
      </div>

      <footer className="pie_pagina">
        <div className="grupo1">
          <div className="box">
            <figure>
              <a href="#">
                <img src={logo} alt="Logo de ReLui" />
              </a>
            </figure>
          </div>

          <div className="box">
            <h2>SOBRE NOSOTROS</h2>
            <p>
              Nos esforzamos por mantener estándares de calidad excepcionales en
              todos los aspectos de nuestro negocio. Trabajamos en estrecha
              colaboración con proveedores confiables y respetados para
              garantizar que cada producto que vendemos cumpla con nuestros
              rigurosos criterios de excelencia.
            </p>
          </div>

          <div className="box">
            <h2>NO TE OLVIDES DE SEGUIRNOS</h2>
            <div className="red-social">
              <a
                target="_blank"
                href="https://web.facebook.com/profile.php?id=61555956622514"
                className="fa fa-facebook"
              ></a>
              <a
                target="_blank"
                href="https://www.instagram.com/lurei_shop/"
                className="fa fa-instagram"
              ></a>

              <a
                target="_blank"
                href="https://wa.me/51929143757"
                className="fa fa-whatsapp"
              ></a>
            </div>

            <div className="ubicacion">
              <h2>UBICANOS</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d690.6285897421903!2d-76.2430354550963!3d-9.96550923559266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2995a522133%3A0xd87013b64f239fea!2sJr.%20las%20Palmas%20234%2C%20Pillco%20Marca%2010003!5e0!3m2!1ses!2spe!4v1715349828492!5m2!1ses!2spe"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                target="_blank"
                href="https://maps.app.goo.gl/vzgKjYFSoXzA3Myd9"
                className="fa-solid fa-location-dot"
              >
                <p>Jr. Las Palmas Cayhuayna Baja</p>
              </a>
            </div>
          </div>
        </div>
        <div className="grupo2">
          <small>
            &copy; 2024 <b>LuRei-Shop</b> -Todos los derechos reservados.
          </small>
        </div>
      </footer>
    </div>
  );
}

export default AppIndex;
