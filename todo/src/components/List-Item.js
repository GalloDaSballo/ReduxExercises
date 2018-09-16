import React, { Component } from 'react';

class ListItem extends Component{
  constructor(props){
    super(props);


    this.state = {x : ''}
  }


  render(){
    let index = 0;
    let ListItems = this.props.items.map((item) => {
      let key = this.props.items.indexOf(item)
      return(
        <div className="col-md-12 input-group mb-3"
          key={key}>
          <input disabled type="text" className="disabled form-control" value={item.value} />
            <div className="input-group-append">
              <button className="btn btn-secondary"
                onClick = {event => this.onClickerino(key)}>
                X
              </button>
            </div>
        </div>
      )
    });
    // console.log("QUI ?")
    // console.log(this.ListItems)
    return(
      <ul className="col-md-12 list-group">
        {ListItems}
      </ul>
    )
  }

  onClickerino(indice){
    console.log("cliccato")
    console.log(indice)
    this.props.removerino(indice)
  }

}

export default ListItem
