import React from "react"

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)

    this.state = {
      toggleClass: ""
    }
  }

  toggle() {
    console.log("clicked")
    let newClass = this.state.toggleClass ? "" : "toggled"
    console.log(newClass)
    this.setState({
      toggleClass: newClass
    })
  }

  render() {
    return(
      <React.Fragment>
        <p className="question">vanilla</p>
        <div className="toggle-bg" onClick={this.toggle}>
          <div className={`toggle-switch ${this.state.toggleClass}`}></div>
        </div>
        <p className="question">nexus</p>
      </React.Fragment>
    )
  }
}

export default Toggle

