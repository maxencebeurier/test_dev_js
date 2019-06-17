export default class Github{
	research(searchString){
		return new Promise(resolve=>{
  			fetch("https://api.github.com/search/repositories?q="+searchString, {
		    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
		  	})
		   .then(response => {
		   		if(response.status===200){
		   			return response.json();
		   		}else{
		   			return false;
		   		}
			})
		   .then(data => resolve(data));
  		});
	}
}