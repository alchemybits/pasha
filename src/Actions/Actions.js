import { productos,database,featuredProductos } from '../Firebase';
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

export function getProductos(queryText){
	console.log("THIS IS THE QUERY",queryText);
	return dispatch => { 
		//console.log("dispatching...");
		// let queryText = "c";
		try {
			featuredProductos.orderByChild("nombre").startAt(queryText)
		.endAt(queryText+"\uf8ff").on('value', data => {
			console.log(data.val());
			if(!data.val())
			dispatch({
				type: FETCH_PRODUCTOS,
				payload: {918282918:{sorry:"No values found...",url:"#"}}
			})
			else
			dispatch({
				type: FETCH_PRODUCTOS,
				payload: data.val()
			})
		})
			
		} catch (error) {
			
			
		}
		
	}
}

export function getFeaturedProductos(){

	return dispatch => { 
		//console.log("dispatching...");
		// let queryText = "c";
		// featuredProductos.orderByChild("nombre").startAt(queryText)
		// .endAt(queryText+"\uf8ff").on('child_added', data => {
			
		featuredProductos.limitToLast(4).on('value', data => {
		// const string = JSON.stringify(data.val());
		
			dispatch({
				type: FETCH_PRODUCTOS,
				payload: data.val()
			})
		})
	}
}