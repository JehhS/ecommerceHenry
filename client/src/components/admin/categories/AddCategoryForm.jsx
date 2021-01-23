import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios';

export default function AddCategoryForm({listCategories}) {
  const [open, setOpen] = useState(false);
    const [form, setForm] = useState({name: "", description: ""})
    const [errors, setErrors] = useState({})

    const handleInputChange = e => { setForm({...form, [e.target.name]: e.target.value}) }

    const handleOpenClose = () => { setOpen(!open); };

    const validate = (form) => {
    let errors = {};
    if (!form.name) {
        errors.name = 'Tenés que escribir un nombre.';
    } 
    if (!form.description) {
        errors.description = 'Tenés que escribir una descripción.';
    }
    return errors;
    };

    const saveProduct = () => {
        setErrors(validate(form))
        if(form.name !== '' && form.description !== ''){
            axios.post('/dashboard/category', {
                'name': form.name, 
                'description': form.description})
            .then(() => {
                handleOpenClose()
                setForm({name: "", description: ""})
                listCategories()
            })
            .catch((err) => { console.log(err); });
        }
    }

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleOpenClose}>
        Agregar Categoría
      </Button>

      <Dialog open={open} onClose={handleOpenClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Agregar una categoría</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nombre"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            type="text"
            fullWidth
          />
          <span style={{color: 'red'}}>{errors.name}</span>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Descipción"
            name="description"
            value={form.description}
            onChange={handleInputChange}
            type="text"
            fullWidth
          />
          <span style={{color: 'red'}}>{errors.description}</span>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {handleOpenClose(); setErrors({})}} color="primary">
            Cerrar
          </Button>
          <Button onClick={saveProduct} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}