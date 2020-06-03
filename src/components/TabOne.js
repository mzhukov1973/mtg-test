/*React*/
import React from 'react'
import PropTypes from 'prop-types'



class TabOne extends React.Component {
  static displayName  = 'TabOne'
  static propTypes = {}
  static defaultProps = {}

  componentWillUnmount = () => {}

  componentDidMount = () => {}

  handlerClickOk = () => {
    alert('Closing the window')
    window.close()
  }

  handlerClickCancel = () => {
    window.close()
  }

  render = () => {
    return (
      <div className='tabOne'>
       <fieldset>
        <input type='button' value='ОК' onClick={this.handlerClickOk}/>
        <input type='button' value='Отмена' onClick={this.handlerClickCancel}/>
       </fieldset>
      <style jsx>{`
        .tabOne {
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

export default TabOne
