import React,{Component} from 'react';

export default class Depot extends Component{
	constructor(props){
		super(props);
		this.state={display:false};
	}

	setDisplay(){
		this.setState({display:!this.state.display});
	}

	displayInfo(){
		let info=[];
		if(this.state.display===true){
			let i=0;
			for(let property in this.props.data){
				//ne fonctionne pas dans tout les cas pourquoi ?
				/*if(property==="license"){
					info.push(
						<div key={i}>{property+":"+this.props.data[property]['name']}</div>
					);
				}else if(property==="owner"){
					info.push(
						<div key={i}>{property+":"+this.props.data[property]['login']}</div>
					);
				}
				else{*/
					info.push(
					<div key={i}>{property+":"+this.props.data[property]}</div>
					);
				//}
				
				
				i++;
			}
		}
		return info;
	}

	render(){
		return(
			<div className='depot'>
				<div>{this.props.data['name']}</div>
				<button onClick={this.setDisplay.bind(this)}>Plus d'info</button>
				{this.displayInfo()}
			</div>
		);
	}
}