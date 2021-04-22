import React from 'react'
import Error from "./Error";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";

const Barras = ({datos,fallo}) => {

    if (fallo) {
        return (<Error mensaje={"No se pudo graficar"}/>);
    }

    //Imprimiendo en consola los datos de el grafico
    console.log(datos);

    return ( 
        <ResponsiveContainer width="100%" height="70%" className="contenedor-grafico">
        <BarChart
          width={500}
          height={300}
          data={datos}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" /> 
          <XAxis dataKey="nombre"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="seguidores" fill="#8884d8" />
        </BarChart>
        </ResponsiveContainer>
     );
}
 
export default Barras;