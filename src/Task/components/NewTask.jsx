import React, { useState } from "react"
import Swal from "sweetalert2";

import { sendData } from "../helpers/formTask";
import { task } from "../models/task";

export const NewTask = () => {
    const [agregar, setAgregar] = useState(task);

    console.log(agregar)
    const handleSubmit = () => {
        sendData(agregar, 1);
    };


    return (
        <>
            <div className="container" style={{ width: "50%" }}>
                <h3 id='create-evento' style={{ textAlign: "center" }}>AGREGAR TAREA</h3>
                <br />
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="text-black">NOMBRE</label>
                        <br />
                        <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="Nombre"
                            onChange={(event) =>
                                setAgregar({
                                    task: {
                                        ...agregar.task,
                                        nombre: event.target.value
                                    }
                                })
                            }
                        />
                    </div>

                    <div className="form-group">
                        <label className="text-black">DESCRIPCION</label>
                        <br />
                        <textarea 
                            required
                            type="text"
                            className="form-control"
                            placeholder="Descripcion"
                            onChange={(event) =>
                                setAgregar({
                                    task: {
                                        ...agregar.task,
                                        descripcion: event.target.value
                                    }
                                })
                            }
                        />
                    </div>


                    <div className="form-group">
                        <label className="text-black">FECHA</label>
                        <br />
                        <input
                            required
                            type="date"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    task: {
                                        ...agregar.task,
                                        fecha: event.target.value
                                    }
                                })
                            }
                        />
                    </div>


                    <div className="form-group">
                        <label className="text-black">PRIORIDAD</label>
                        <br />
                        <input
                            required
                            type="number"
                            className="form-control"
                            onChange={(event) =>
                                setAgregar({
                                    task: {
                                        ...agregar.task,
                                        prioridad: event.target.value
                                    }
                                })
                            }
                        />
                    </div>


                    <br />
                    <div className="container text-center" >
                        <button id='btn-enviar' type="submit" className="btn btn-primary">
                            ENVIAR
                        </button>
                    </div>

                </form>
                <br />
                <br />
            </div>

        </>
    )
}