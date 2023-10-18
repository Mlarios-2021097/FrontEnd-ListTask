import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { DeleteTask, getTask } from '../api/apiTask'


export const Task = () => {
    const [taskList, setTaskList] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [task, setTask] = useState([]);


    const viewTask = async () => {
        const listTask = await getTask();
        setTaskList(listTask);
    };

    useEffect(() => {
        viewTask();
    }, [showModal]);


    const eliminar = async (id) => {
        const confirmacion = await Swal.fire({
            title: "¿QUIERES ELIMINAR LA TAREA?",
            text: "La Tarea se Eliminara Definitivamente.",
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        });


        if (confirmacion.isConfirmed) {
            let result = await DeleteTask(id);
            if (result) {
                setTaskList(taskList.filter((c) => c._id !== id));
                Swal.fire({
                    title: "Accion Realizada!",
                    text: "La Tarea se Elimino Correctamente!!",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "La Tarea No Fue Eliminada",
                });
            }
        }
    };


    return (
        <div>
            <br />
            <br />
            <div
                style={{
                    backgroundColor: " #BF6687",
                    textAlign: "center",
                    opacity: "100%",
                    marginBottom: "20px",
                }}
            >
                <h2 >LISTA DE TAREAS:</h2>
            </div>
            <table className="table">
                <thead style={{ backgroundColor: "#FAD7A0" }} className="text-center">
                    <tr>
                        <th>NOMBRE</th>
                        <th>DESCRIPCION</th>
                        <th>FECHA</th>
                        <th>PRIORIDAD</th>
                        <th>OPCION</th>
                    </tr>
                </thead>


                {taskList?.map((t) => {
                    return (

                        <tbody key={t._id} className="text-center">
                            <tr>
                                <td>{t.nombre}</td>
                                <td>{t.descripcion}</td>
                                <td>{t.fecha}</td>
                                <td>{t.prioridad}</td>
                                <td>
                                    <div className="d-grid gap-2">
                                        <button
                                            variant="danger"
                                            size="sm"
                                            onClick={() => {
                                                eliminar(t._id);
                                            }}
                                            style={{ backgroundColor: "#BF6687", borderRadius: '15px', border: 'none', color: 'white', padding: '5px' }} >
                                            Eliminar
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    );
                })}
            </table>

            <br />
            <br />
        </div>
    );
};
