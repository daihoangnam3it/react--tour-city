import React, { Component } from 'react';
import './tour.scss';
export default class Tour extends Component {
  state={
    showInfo:false
  }
  handleShow=id=>{
    this.setState({
      showInfo:!this.state.showInfo
    })
  }
  render() {
    console.log(this.props)
    const { id, city, img, name, info } = this.props.data;
    const {handleDelete}=this.props;
    return (
      <article className='tour'>
        <div className='img-container'>
          <img src={img} alt='' />
          <span onClick={()=>handleDelete(id)}>
            <i className='fa fa-times' aria-hidden='true'></i>
          </span>
        </div>
        <div className='info-container'>
          <h2 className='city-name'>{city}</h2>
          <h3>{name}</h3>
          <h5>
            Info{' '}
            <span onClick={()=>this.handleShow(id)}>
              <i className='fa fa-angle-down' aria-hidden='true'></i>
            </span>
            {this.state.showInfo?<p>{info}</p>:null}
          </h5>
        </div>
      </article>
    );
  }
}
