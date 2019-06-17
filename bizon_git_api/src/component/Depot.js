import React,{Component} from 'react';
import Info from './Info.js';
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
			let tab=[];
			for (var prop in this.props.data) {
				//les licences et les propriétaires ont besoin d'un traitement pour etre affiché
				if(prop==='license'){
					if(this.props.data[prop]!=null){
						tab.push(<Info key={i} name={prop} value={this.props.data[prop]['name']} />);
					}else{
						tab.push(<Info key={i} name={prop} value={'null'} />);
					}
				}else if(prop==='owner'){
					if(this.props.data[prop]!=null){
						tab.push(<Info key={i} name={prop} value={this.props.data[prop]['login']} />);
					}else{
						tab.push(<Info key={i} name={prop} value={'null'} />);
					}
				}else{
					tab.push(<Info key={i} name={prop} value={this.props.data[prop]} />);
				}
				i++;
			}
			let tbody=[];
			tbody.push(<tbody key={this.props.data['id']}>{tab}</tbody>);
			info.push(<table key={this.props.data['id']}>{tbody}</table>);
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