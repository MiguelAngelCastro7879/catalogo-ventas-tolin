import Datatable from 'src/components/Datatable/Datatable';
import LoadingDiv from 'src/components/LoadingDiv/LoadingDiv';
import {useState, useEffect} from 'react';
import request from "src/utils";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';

export default function Categories() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [action, setAction] = useState("create");
  const [categories, setCategories] = useState();
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    id: "",
    name: "",
    description: ""
  });


  const getCategories = async () => {
    const response = await request("ViewCategory", "GET", {});
    const data = await response.data;
    setCategories(data);
  };

  // const validateForm = () => {
  //   let isValid = true;
  //   const newErrors = {};

  //   if (data.asunto_descripcion.trim() === "") {
  //     newErrors.asunto_descripcion = "El asunto es requerido";
  //     isValid = false;
  //   }
  //   setErrors(newErrors);
  //   return isValid;
  // };

  const submit = async (e) => {
    e.preventDefault();
    // if (!validateForm()) return;
    const ruta =
      action === "create" ? "ViewCategory" : `ViewCategory/${data.id}`;
    const method = action === "create" ? "POST" : "PUT";
    // await request(ruta, method, data).then(() => {
    //   getSubjects();
    //   setOpen(!open);
    // });
  };

  useEffect(() => {
    if (!categories) {
      getCategories();
    } else {
      setLoading(false);
    }
  }, [categories]);

  const handleCloseModal = () => {
    setOpen(false);
    setErrors({});
  };
  
  return (
    <>
      {loading && <LoadingDiv/>}
      {categories && !loading && (
        <>
          <Datatable
            add={() => {
              setAction("create");
              setData({
                name: "",
                description: ""
              });
              setOpen(!open);
            }}
            data={categories}
            columns={[
              { header: "Nombre", accessor: "name" },
              { header: "Descripción", accessor: "description" },

              {
                header: "Acciones",
                cell: (eprops) => (
                  <>
                    <button
                      className="material-icons"
                      onClick={() => {
                        setAction("edit");
                        setData({ ...eprops.item });
                        setOpen(!open);
                      }}
                    >
                    <EditIcon></EditIcon>
                    </button>
                  </>
                )
              }
            ]}
          />
        </>
      )}
      <Dialog
        open={open}
        onClose={() => setOpen(!open)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {action === "create" ? "Crear categoria" : "Editar categoria"}
        </DialogTitle>
        <DialogContent >
          <form className={'pt-5'}>
            <div>
              <TextField
                id="name-input"
                label="Nombre"
                type="text"
                fullWidth={true}
                value={data.name}
                onChange={(e) => {
                  setData({
                    ...data,
                    name: e.target.value
                  });
                }}
                autoComplete="current-name"
                focused
              />
            </div>
            <div className={'mt-5'}>
              <TextField
                id="description-input"
                label="Descripción"
                type="text"
                className='mt-3'
                fullWidth={true}
                value={data.description}
                onChange={(e) => {
                  setData({
                    ...data,
                    description: e.target.value
                  });
                }}
                autoComplete="current-description"
                focused
              />

            </div>
          </form>
        </DialogContent>
        <DialogActions className={"mt-4"}>
          <Button
            color="error"
            onClick={() => {
              handleCloseModal();
              setOpen(false);
            }}
          >
            Cancelar
          </Button>
          <Button
            color={action === "create" ? "success" : "warning"}
            onClick={submit}
          >
            {action === "create" ? "Crear" : "Actualizar"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
