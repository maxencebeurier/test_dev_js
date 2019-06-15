export default class Github{
	research(searchString){
		return new Promise(resolve=>{
  			fetch("https://api.github.com/search/repositories?q="+searchString, {
		    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'}
		  	})
		   .then(response => response.json())
		   .then(data => resolve(data));
  		});
	}
}