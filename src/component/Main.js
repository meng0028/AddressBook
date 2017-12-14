
import React, {Component} from "react";
import PropTypes from "prop-types";
import List from "./List"
import ItemDetail from "./ItemDetail"
import Title from "./Title"


export default class Main extends Component{
    render(){
        return (
            <div className="row">
                <Title/>
                <div>
                    <List contacts={this.props.contactList} selectContact={this.props.selectContact}></List>
                    <ItemDetail contact={this.props.contact}></ItemDetail>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    contactList: PropTypes.array.isRequired,
    selectContact:PropTypes.func.isRequired,
    contact: PropTypes.object
}
