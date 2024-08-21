import axios from "axios";
import { useState, useEffect } from "react";

const getProducts = () => {

    const [products, setProducts] = useState("");
    const [error,setError] = useState("");


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://fakeapi.platzi.com/en/rest/products/');
            // Actualizar el estado con los productos obtenidos de la API
            setProductos(response.data);
          } catch (error) {
            // Manejar errores aquí
            console.error(error);
          }
        };
    
        fetchData();
      }, []);

    const handleSubmit = async (e, pokemon) =>{
        e.preventDefault();

        setData(null);
        setError("");
        setIsLoading(true);

        try {
        let selectedPokemon= pokemon.toLowerCase().trim();
        const {data} = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
            setData(data);
            console.log(data)

        } catch (error){
        setError("Pokemon no encontrado, buscá bien!")
        }
        setIsLoading(false);
  };

  return {data, isLoading,error, handleSubmit};
}



const ProductosComponent = () => {
    const [productos, setProductos] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://fakeapi.platzi.com/en/rest/products/');
          // Actualizar el estado con los productos obtenidos de la API
          setProductos(response.data);
        } catch (error) {
          // Manejar errores aquí
          console.error(error);
        }
      };
  
      fetchData();
    }, []); // El segundo argumento vacío asegura que se realice la solicitud solo una vez al montar el componente
  
    return (
      <div>
        <h1>Lista de Productos</h1>
        <ul>
          {productos.map(producto => (
            <li key={producto.id}>{producto.name} - {producto.price}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ProductosComponent;