
import React, {Component} from "react";
import PropTypes from "prop-types";
import ItemTemplate from "./ItemTemplate"

export default class List extends Component{

    render(){
		let allData = this.props.contacts.map((item) => (
		< ItemTemplate
					key = {item.key}
                    id = {item.id}
                    picture = {item.picture}
                    name = {item.name}
                    dob = {item.dob}
                    onClick = {this.props.selectContact}/>
		));
        return(
            <div className="column list">
                <ul> {allData}</ul>
            </div>
        );

    }
}
List.propTypes = {
    contacts: PropTypes.array,
    selectContact: PropTypes.func
};
