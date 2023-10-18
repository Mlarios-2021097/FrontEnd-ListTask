import React from "react";
import { Task } from "./Task/components/Taks";
import { NewTask } from "./Task/components/NewTask";


export const App = () => {

  
  return (
    <>
      <div>
        <br />
        <h1>BIENVENIDO BY @LARIOS</h1>
        <br />
        <button type="button" className="btn btn-success">OBTENER NOMBRE</button>
        <br />
        <Task />
        <br />
        <NewTask />
      </div>
    </>
  )
}