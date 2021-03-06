import React, { Component } from 'react'

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state={
      id : this.props.userEditObject.id,
      name : this.props.userEditObject.name,
      tel : this.props.userEditObject.tel,
      permission : this.props.userEditObject.permission
    }
  }
  
  ischange=(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]:value})
  }
  saveButton=()=>{
    var info={};
    info.id=this.state.id;
    info.name=this.state.name;
    info.tel=this.state.tel;
    info.permission=this.state.permission;
    this.props.getUserEditInfo(info);
    this.props.changeEditUserStatus();
  }
  deleteButtonClick=(idUser)=>{
    this.deleteButtonClick(idUser)
  }
    render() {
        return (
          <div className="row">
          <div className="col-12">
        <form method="post">
      <div className="card   text-white bg-warning mb-3 mt-2">
    <div className="card-header text-center">Sửa thông tin User</div>
    <div className="card-body text-primary">
      <div className="form-gruop">
        <input defaultValue={this.props.userEditObject.name} onChange={(event)=>this.ischange(event)} type="text" name="name" className="form-control"  placeholder="Tên User" />
      </div>
      <div className="form-gruop">
        <input defaultValue={this.props.userEditObject.tel} onChange={(event)=>this.ischange(event)} type="text" name="tel" className="form-control"  placeholder="Điện Thoại" />
      </div>
      <div className="form-group">
        <select onChange={(event)=>this.ischange(event)} defaultValue={this.props.userEditObject.permission} className="custom-select" name="permission" required >
          <option value>Chọn quyền mặc định</option>
          <option value={1}>Admin</option>
          <option value={2}>Modrator</option>
          <option value={3}>Normal</option>
        </select>
      </div>
      <div className="form-group">
        <input type="button" className="btn btn-block btn-danger" onClick={()=>this.saveButton()} value="Luu"/>
      </div>
    </div>
  </div>
  </form>
  </div>
          </div>
        )
    }
}
