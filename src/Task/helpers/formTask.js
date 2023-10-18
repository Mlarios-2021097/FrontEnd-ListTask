import Swal from "sweetalert2";
import { createTask } from "../api/apiTask";


export const sendData = async (state, option) => {
  let resultado;
  console.log(state.task);
  switch (option) {
    case 1:
      resultado = await createTask({
        nombre: state.task.nombre,
        descripcion: state.task.descripcion,
        fecha: state.task.fecha,
        prioridad: state.task.prioridad
      });
      if (resultado) {
        Swal.fire({
          title: "Perfecto!",
          text: "La Tarea se Agrego Correctamente",
          showConfirmButton: true,
          confirmButtonText: "Ok",
        })
      }

      break;
  }
};
