/*React*/
import React from 'react'
import PropTypes from 'prop-types'



class TabTwo extends React.Component {
  static displayName  = 'TabTwo'
  static propTypes = {
    firstSelectOptionIdx: PropTypes.number.isRequired,
    secondSelectOptions: PropTypes.array.isRequired,
    setActFrstDrp: PropTypes.func.isRequired,
    setScndOpts: PropTypes.func.isRequired
  }
  static defaultProps = {
    firstSelectOptionIdx: 0,
    secondSelectOptions: [
      'default'
    ],
    setActFrstDrp: () => {},
    setScndOpts: () => {}
  }

  handleFrstDrpChange = ev => {
    this.props.setActFrstDrp(ev.target.value)
    switch (parseInt(ev.target.value)) {
      case 1:
       fetch('file1').then(resp=>resp.text()).then(txt=>this.props.setScndOpts(txt.split("\n")))
       break;

      case 2:
       fetch('file2').then(resp=>resp.text()).then(txt=>this.props.setScndOpts(txt.split("\n")))
       break;

      default:
       this.props.setScndOpts(['...'])
    }
  }

  render = () => {
    return (
      <div className='tabTwo'>
       <fieldset>
        <select onChange={this.handleFrstDrpChange} value={parseInt(this.props.firstSelectOptionIdx)}>
         <option value={0}>...</option>
         <option value={1}>file1</option>
         <option value={2}>file2</option>
        </select>

         <select>
         {this.props.secondSelectOptions.map(el=>(<option key={el}>{el}</option>))}
        </select>
       </fieldset>
      <style jsx>{`
        .tabTwo {
          margin: 0;
          padding: 0;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-around;
          align-items: center;
        }
      `}</style>
      </div>
    )
  }
}

export default TabTwo
