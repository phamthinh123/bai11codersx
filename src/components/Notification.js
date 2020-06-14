import React,{ Component } from 'react';
import Bell from "../img/500_F_78807618_7eA16TuaTsy2Nc7lg1Z3lS7KhKNKUvHS.jpg";
import "./Notification.css"
class Notification extends Component{
	render(){
const { hasUnread }=this.props;
if(hasUnread===false){
		return(

<div className="Notification">
<img src={Bell} width="50" height="50"/>
<div className="red"/>
</div>
)
}
else{
	return(
<div className="Notification">
<img src={Bell} width="50" height="50"/>
</div>
	)
}


			
	}
}
export default Notification