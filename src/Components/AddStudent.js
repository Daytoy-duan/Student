import React, { Component } from 'react' 

class AddStudent extends Component {
    constructor(){
        super()
        this.stateHandler = this.stateHandler.bind(this)
    }
    // 定义组件中的状态
    state = {
        number: '',
        name: '',
        sex: '',
        age: '',
        college: 'java',
        hobbies: [
            {
               id: 1,
               title: '篮球',
               isChecked: false 
            },
            {
             id: 2,
             title: '足球',
             isChecked: true 
          },
          {
             id: 3,
             title: '网球',
             isChecked: false
          }
        ]
         }
    // 深拷贝
    origin = JSON.parse(JSON.stringify(this.state))
    stateHandler = (e) =>{
      const prop = e.target.name
      const value = e.target.value
      this.setState({
          [prop]:value
      },()=>{
          console.log(this.state)
      })
    }
    hobbyHandler (index,el){
      const isChecked = el.target.checked
      const hobbies = [...this.state.hobbies]
      hobbies[index].isChecked = isChecked
      this.setState({ hobbies: hobbies },()=>{
          console.log(this.state.hobbies)
      })
    }
    submit = (ev) =>{
        ev.preventDefault()
        // 提交的时候需要整合有用信息
        // 1. 过滤选择的爱好
        const hobbies = this.state.hobbies.filter(hobby => hobby.isChecked).map(hobby =>hobby.title)
        // 将整理好的数据和其他数据整合在一起
        const formValue = {
            ...this.state,
            hobbies
        }
        this.props.addList(formValue,()=>{
            this.setState(this.origin)
        })
    }
  render(){
    return (
      <div className="col-md-5">
        <form onSubmit={this.submit}>
            <div className="form-group">
                <label>学号</label>
                <input name={'number'}
                       type="number"
                       value={this.state.number}
                       className="form-control"
                       placeholder="请输入学号"
                       onChange={this.stateHandler}
                 />
            </div>
            <div className="form-group">
                <label>姓名</label>
                <input name={'name'} value={this.state.name} type="text" 
                onChange={this.stateHandler}
                className="form-control" placeholder="请输入姓名" />
            </div>
            <div className="form-group">
                <label>性别&nbsp;&nbsp;</label>
                <label className="checkbox-inline">
                    <input name= "sex"
                    value= "男"
                    checked = {this.state.sex === '男'}
                    onChange={this.stateHandler} type="radio" /> 男
                </label>
                <label className="checkbox-inline">
                <input name= "sex"
                    value= "女"
                    checked = {this.state.sex === '女'}
                    onChange={this.stateHandler} type="radio" /> 女
                </label>
            </div>
            <div className="form-group">
                <label>年龄</label>
                <input name={'age'} value = {this.state.age} 
                        onChange = {this.stateHandler}
                type="text" className="form-control" placeholder="请输入姓名" />
            </div>
            <div className="form-group">
                <label>爱好</label>
                {
                    this.state.hobbies.map((hobby,index)=>{
                      return (
                        <div className="checkbox" key={hobby.id}>
                          <label>
                              <input onChange={this.hobbyHandler.bind(this,index)}
                              checked = {hobby.isChecked}
                              type="checkbox" value={hobby.title} /> {hobby.title}
                          </label>
                        </div>
                      )
                    })
                }
            </div>
            <div className="form-group">
                <label>所属学院</label>
                <select className="form-control" name='college' 
                value={this.state.college}
                onChange={this.stateHandler}>
                    <option value="大前端">大前端</option>
                    <option value="Java">Java</option>
                    <option value="python">python</option>
                </select>
            </div>
            <button type="submit" className="btn btn-default">添加</button>
        </form>
      </div>
    )
  }
}

export default AddStudent