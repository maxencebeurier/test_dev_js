import React,{Component} from 'react';
import Github from '../api/github.js';
import Depot from './Depot.js';
export default class Main extends Component{
	constructor(props){
		super(props);
		this.state={nomDepot:"",resultat:false};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(event) {
  	event.preventDefault();
  	if(this.state.nomDepot!==""){
  		const apiGithub=await new Github();
    	let result = await apiGithub.research(this.state.nomDepot);
    	await this.setState({resultat:result['items']});
    	console.log(this.state.resultat);
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
			<div>
				<form onSubmit={this.handleSubmit}>
				  <label>
				    Saisissez le nom du dépot :
				    <input type="text" name="nomDepot" onChange={this.handleChange}/>
				  </label>
				  <input type="submit" value="Rechercher"/>
				</form>
				{this.displayDepot()}
			</div>
		);
	}
}