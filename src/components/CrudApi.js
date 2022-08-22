
import React, { useState, useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { readAllAction, createAction, deleteAction, noAction, updateAction } from "../features/crudApi";
// import { createAction, deleteAction, noAction, readAllAction, updateAction } from "../actions/crudActions";

import { helpHttp } from "../herpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";
import {v4 as uuid} from "uuid";


const CrudApi = () => {

  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector(state=> state)
  const { db } = state.crudApi;

  let api = helpHttp();
  let url = "http://localhost:5000/santos/";

  useEffect(() => {
    setLoading(true);
    helpHttp()
      .get(url)
      .then((res) => {
        //   console.log(res);
        if (!res.err) {
          
         dispatch(readAllAction(res));
         setError(null);
        } else {
          dispatch(noAction());
          setError(res);
        }

        setLoading(false);
      });
  }, [url, dispatch]);

  const createData = (data) => {
    data.id = uuid();
    let options = {
      body: data,
      headers: { "Content-type": "application/json" },
    };

    api
      .post(url, options)
      .then((res) => {
        // console.log(res);
        if (!res.err) {
          dispatch(createAction(res))
          // setDb([...db, res]);
        } else {
          setError(res);
        }
      })
      .catch((err) => err);
  };

  const updateData = (data) => {
    let endpoint = `${url}${data.id}`;
    let options = {
      headers: {
        "Content-type": "application/json; charset = utf-8",
      },
      body: data,
    };

    api
      .put(endpoint, options)
      .then((res) => {
        // console.log(res);
        if (!res.err) {
          // let newData = db.map((el) => (el.id === data.id ? data : el));
          dispatch(updateAction(res))
          // setDb(newData);
        } else {
          setError(res);
        }
      })
      .catch((err) => err);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Estas seguro de eliminar el id ${id}`);

    if (isDelete) {
      let endpoint = `${url}${id}`,
        options = {
          headers: {
            "Content-type": "application/json; charset = utf-8",
          },
        };

      api
        .del(endpoint, options)
        .then((res) => {
          if (!res.err) {
            // let newData = state.db.filter((el) => el.id !== action.payload);
            dispatch(deleteAction(id))
            // setDb(newData);
          } else {
            setError(res);
          }
        })
        .catch((err) => err);
    }
  };

  return (
    <div>
      <h2>Crud API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={` Error ${error.status} ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
