import { useEffect, useState } from "react";
import {  PUT } from "../../utils/http";

const CategoryForm = ({ setShowModal, getData, data }) => {
    const [edit, setEdit] = useState(false);
    const [form, setForm] = useState({
      name: "",
      image: "",
    });
  
    useEffect(() => {
      if (data) {
        setForm({
          name: data.name,
          image: data.image,
        });
        setEdit(true);
      }
    }, []);
  
    const handleForm = (input, e) => {
      setForm({
        ...form,
        [input]: e.target.value,
      });
    };
  
    const submitForm = e => {
      e.preventDefault();
      PUT("categories", form).then(data => {
        console.log(data);
        if (data.status === 201) {
          setShowModal(false);
          getData();
        }
      });
    };
  
    const editForm = e => {
      e.preventDefault();
      PUT("categories", form, "/" + data.id).then(data => {
        console.log(data);
        if (data.status === 200) {
          setShowModal(false);
          getData();
        }
      });
    };
  
    return (
      <form>
        <input
          type="text"
          value={form.name}
          onChange={e => handleForm("name", e)}
        />
        <input
          type="text"
          value={form.image}
          onChange={e => handleForm("image", e)}
        />
  
        {edit ? (
          <button type="submit" onClick={e => editForm(e)}>
            edit
          </button>
        ) : (
          <button type="submit" onClick={e => submitForm(e)}>
            invia
          </button>
        )}
      </form>
    );
  };
  
  export default CategoryForm;