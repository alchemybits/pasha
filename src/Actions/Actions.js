import { productos,database,featuredProductos } from '../Firebase';
import _  from 'lodash';

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

export function getProductos(cat,subcat,queryText){
	console.log("THIS IS THE QUERY",queryText);
	return dispatch => { 
		//console.log("dispatching...");
		// let queryText = "c";
		try {
			featuredProductos.orderByChild("nombre").startAt(queryText)
		.endAt(queryText+"\uf8ff").on('value', data => {
			if(!data.val())
			dispatch({
				type: FETCH_PRODUCTOS,
				payload: {918282918:{sorry:"No values found...",url:"#"}}
			})
			else{
				let productos = Object.values(data.val());
				let obj = []; //_.filter( productos, { 'categoria': "Flats" });
				if(!cat)
					obj = productos;
				if(cat)
					obj = _.filter( productos, { 'categoria': cat });
				if(cat && subcat)
					obj = _.filter( productos, { 'categoria': cat, 'subcategoria':subcat });

				

				console.log("NEW OBJ", obj );
				dispatch({
					type: FETCH_PRODUCTOS,
					payload: obj
				})
			}
			
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