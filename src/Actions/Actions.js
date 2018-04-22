import { productos,database } from '../Firebase';
export const FETCH_PRODUCTOS = 'fetch_productos';

export function getPartidos(){
	//console.log("function worked");
	
	return dispatch => { 
		//console.log("dispatching...");
		database.on('value', data => {
		//console.log("ooohhh",data.val());
			dispatch({
				type: 'fetch_partidos',
				payload: data.val()
			})
		})
	}
}

export function getProductos(){
	//console.log("get productos worked");
	
	return dispatch => { 
		//console.log("dispatching...");
		productos.on('value', data => {
		//console.log("ooohhh",data.val());
			dispatch({
				type: "fetch_productos",
				payload: data.val()
			})
		})
	}
}