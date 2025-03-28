import readline from "readline";
import fs from "fs";
import yargs from "yargs/yargs";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const nombreProducto = () => {
    return new Promise((resolve) =>{
        rl.question('Cual es el nombre del producto? ', (nombre) =>{
            resolve(nombre);
        });
    });
  };

  const precioProducto = () => {
    return new Promise((resolve) =>{
        rl.question('Cual es el precio del producto? ', (precio) =>{
            resolve(parseFloat(precio));
        });
    });
  };

  const cantUnidadesProducto = () => {
    return new Promise((resolve) =>{
        rl.question('Cual es la cantidad de unidad del producto? ', (unidades) =>{
            resolve(parseInt(unidades));
        });
    });
  };

  const main = async() =>{
    const argv = yargs(process.argv.slice(2))
    .option("file", {
      alias: "f",
      description: "Nombre del archivo JSON",
      type: "string",
      default: "productos.json",
    })
    .help()
    .argv;

    const nombre = await nombreProducto();
    const precio = await precioProducto();
    const unidades = await cantUnidadesProducto();
    rl.close();

    const archivo = argv.file
    const producto = {nombre, precio, unidades}
    let productos = []

    if (fs.existsSync(archivo)) {
        const data = fs.readFileSync(archivo, "utf-8");
        productos = JSON.parse(data);
        productos.push(producto);
    
        fs.writeFileSync(archivo, JSON.stringify(productos, null, 2));
      } else {
        productos.push(producto);
    
        fs.writeFileSync(archivo, JSON.stringify(productos, null, 2));
      }

    const contenido = fs.readFileSync(archivo, "utf-8");
    console.log("Contenido del archivo actualizado:");
    console.log(contenido);

}

main();
