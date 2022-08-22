 import {configureStore} from "@reduxjs/toolkit";
import contadorSlice from "../features/contador";
import shoppingSlice from "../features/shoppingCart";
import taskSlice  from "../features/tasks";
import crudApiSlice  from "../features/crudApi";



 export const store = configureStore({
    reducer:{
        contador:contadorSlice,
        shoppingCart: shoppingSlice,
        tasks: taskSlice,
        crudApi: crudApiSlice
    },
 })
