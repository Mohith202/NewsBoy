import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,desc,img,url}=this.props
    return (
      <div>
           <div className="card my-4" style={{width: '18rem'}}>
            <img src={img} className="card-img-top" alt="IMAGE NOT AVAILABLE"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <a href={url} target="_blank"className="btn btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}
