import React,{Component} from 'react';

export default class Info extends Component {
	render(){
		return(
			<tr className="info">
				<td className="name">{this.props.name}</td>
				<td className="value">{this.props.value}</td>
			</tr>
		);
	}
}