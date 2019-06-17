import React,{Component} from 'react';
import Github from '../api/github.js';
import Depot from './Depot.js';
import '../css/main.css';
export default class Main extends Component{
	constructor(props){
		super(props);
		this.state={nomDepot:"",user:"",resultat:false};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(event) {
  	event.preventDefault();
  	if(this.state.nomDepot!=="" || this.state.user!==""){
  		const apiGithub=await new Github();
  		let queryString;
  		if(this.state.nomDepot!=="" && this.state.user!==""){
  			queryString=this.state.nomDepot+"+user:"+this.state.user;
  		}else if(this.state.nomDepot!=="") {
  			queryString=this.state.nomDepot;
  		}else{
  			queryString="user:"+this.state.user;
  		}
  		let result = await apiGithub.research(queryString);
    	if(result!==false){
    		await this.setState({resultat:result['items']});
    	}
    //console.log(this.state.resultat);
  	}
  }

  displayDepot(){
  	let lesDepots=[];
  	if(this.state.resultat!==false){
  		this.state.resultat.forEach((ligne)=>{
  		lesDepots.push(
  			<Depot key={ligne['id']} data={ligne} />
		);
  	});
  	}
  	return lesDepots;
  }

	render(){
		return(
			<div id='conteneur'>
        <header>
          GitHub Research
        </header>
				<form onSubmit={this.handleSubmit}>
				  <label>
				    <div>Saisissez le nom du dépot :</div>
				    <input type="text" name="nomDepot" onChange={this.handleChange}/>
				  </label>
				  <label>
				    <div>Saisissez le pseudo du propriétaire du dépot:</div>
				    <input type="text" name="user" onChange={this.handleChange}/>
				  </label>
				  <input type="submit" value="Rechercher"/>
				</form>
				{this.displayDepot()}
			</div>
		);
	}
}