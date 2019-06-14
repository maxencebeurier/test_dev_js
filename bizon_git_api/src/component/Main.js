import React,{Component} from 'react';

export default class Main extends Component{
	constructor(props){
		super(props);
		this.state={nomDepot:""};
		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
	}

	handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.nomDepot);
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
			</div>
		);
	}
}