import React, {Component} from 'react';

class SimpleCrud extends Component {
  constructor(props){
    super(props)
    this.state = {
      act: 0,
      index:"",
      datas: []

    }
  }

  componentDidMount(){
    this.refs.name.focus();
  }

  Submit = (e) => {
    e.preventDefault();

    let datas = this.state.datas;
    let name = this.refs.name.value;
    let address = this.refs.address.value;

    if(this.state.act === 0){
      let data = {
        name, address
      }
      datas.push(data);
    }else{
      let index = this.state.index;
      datas[index].name = name;
      datas[index].address = address;
    }

    this.setState({
      datas: datas,
      act: 0
    })

    this.refs.myForm.reset();
    this.refs.name.focus();
      }

  Remove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    })

    this.refs.myForm.reset();
    this.refs.name.focus();
  }

  Edit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
      act: 1,
      index: 1
    })

    this.refs.name.focus();
  }

  render(){
    let datas = this.state.datas;
    return(
      <div>
        <h2>Simple CRUD</h2>
        <form ref="myForm">
          <input type="text" placeholder="Your Name" ref="name"/>
          <input type="text" placeholder="address" ref="address" />
          <button onClick={(e)=>this.Submit(e)}>Submit</button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i}>
              {i+1}.{data.name}, {data.address}
              <button onClick={()=>this.Remove(i)}>Remove</button>
              <button onClick={()=>this.Edit(i)}>Edit</button>
            </li>

            )}
        </pre>

      </div>
      )
  }
}

export default SimpleCrud
