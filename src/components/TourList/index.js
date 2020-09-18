import React, { Component } from 'react';
import Tour from "../Tour";
import "./tourlist.scss";
import {tourData} from "../../tourData"
export default class index extends Component {
  state={
    tour:tourData
  }
  handleDelete=id=>{
    const stored=this.state.tour.filter(item=>item.id!==id);
    this.setState({
      tour:stored
    })
  }
  render() {
    return (
      <section className="tourlist">
        {this.state.tour.map(item=><Tour key={item.id} data={item} handleDelete={this.handleDelete}/>)}
      </section>
    )
  }
}
