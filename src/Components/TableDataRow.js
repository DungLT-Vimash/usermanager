import React, { Component } from 'react'

export default class TableDataRow extends Component {
  permissionShow=()=>{
    if(this.props.permission==="1"){return "Admin"}
    else if(this.props.permission==="2"){return "Moderator"}
    else return "Normal User"
  }
  editClick=()=>{
    this.props.editFunClick();
    this.props.changeEditUserStatus();
  }
  deleteButtonClick=(idUser)=>{
    this.props.deleteButtonClick(idUser);
  }
    render() {

        return (
            <tr>
        <th scope="row">{this.props.stt +1}</th>
        <td>{this.props.userName}</td>
        <td>{this.props.tel}</td>
        <td>{this.permissionShow()}</td>
        <td>
          <div className="btn-gruop">
            <div className="btn btn-warning sua" onClick={()=>this.editClick()}><i className="fas fa-edit" />Sua</div>
            <div className="btn btn-danger xoa" onClick={(idUser)=>this.deleteButtonClick(this.props.id)}><i className="fas fa-delete" />Xoa</div>
          </div>
        </td>
      </tr>
      
        )
    }
}
