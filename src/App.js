/*React*/
import React from 'react'
import Tabs from './components/Tabs'
import { connect } from 'react-redux'
import { APP_ACTIONS } from './actions'
import TabOne from './components/TabOne'
import TabTwo from './components/TabTwo'



class App extends React.Component {
  static displayName  = 'App'
  componentWillUnmount = () => {}

  componentDidMount = () => {}

  render = () => {
    const tabs = [
      {hdr:'Tab №1', bdy:<TabOne/>},
      {hdr:'Tab №2', bdy:<TabTwo firstSelectOptionIdx={parseInt(this.props.appData.firstSelectOptionIdx)} setActFrstDrp={this.props.setActFrstDrp} secondSelectOptions={this.props.appData.secondSelectOptions} setScndOpts={this.props.setScndOpts}/>}
    ]
    return (
      <div>
       <Tabs tabs={tabs} activeTabIndex={this.props.appData.activeTabIndex} setActTab={this.props.setActTab}/>
      </div>
    )
  }
}

const mapStateToProps = state => ( {appData: state.appData} )
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    setActTab: newActTabIdx => dispatch({type:APP_ACTIONS.SET_ACT_TAB, value:newActTabIdx}),
    setActFrstDrp: newFrstDrpIdx => dispatch({type:APP_ACTIONS.SET_FRST_DROP, value:newFrstDrpIdx}),
    setScndOpts: newScndOptsArr => dispatch({type:APP_ACTIONS.SET_SCND_OPTS, value:newScndOptsArr})
  }
}
const connectedApp = connect(mapStateToProps,mapDispatchToProps)(App)

export { connectedApp as App, connectedApp as default }
