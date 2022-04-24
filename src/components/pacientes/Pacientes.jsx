import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Pacientes.css";
import {
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Modal,
  Button,
  TextField,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

function Pacientes() {
  const [data, setData] = useState([]);

  const getAllPatients = async () => {
    try {
      const request = await axios.get("http://localhost:8080/pacientes");
      const response = request.data;
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPatients();
  }, []);

  return (
    <div>
      <h1>Pacientes</h1>
      <div>
        <button className="button">Crear paciente</button>
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Apellido</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>DNI</TableCell>
            <TableCell>Fecha Ingreso</TableCell>
            <TableCell>Calle</TableCell>
            <TableCell>Número</TableCell>
            <TableCell>Localidad</TableCell>
            <TableCell>Provincia</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(
            ({ id, apellido, nombre, email, dni, fechaIngreso, domicilio }) => (
              <TableRow key={id}>
                <TableCell>{apellido}</TableCell>
                <TableCell>{nombre}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{dni}</TableCell>
                <TableCell>{fechaIngreso}</TableCell>
                <TableCell>{domicilio?.calle}</TableCell>
                <TableCell>{domicilio?.numero}</TableCell>
                <TableCell>{domicilio?.localidad}</TableCell>
                <TableCell>{domicilio?.provincia}</TableCell>
                <TableCell>
                  <Edit className="icons" />
                  &nbsp;&nbsp;
                  <Delete className="icons" />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default Pacientes;
