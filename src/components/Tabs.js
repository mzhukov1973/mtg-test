/*React*/
import React from 'react'
import PropTypes from 'prop-types'



class Tabs extends React.Component {
  static displayName  = 'Tabs'
  static propTypes = {
    tabs: PropTypes.array.isRequired,
    activeTabIndex: PropTypes.number.isRequired,
    setActTab: PropTypes.func.isRequired
  }
  static defaultProps = {
    tabs: [
      {hdr:'Defaut tab', bdy:'Default tab body'}
    ],
    activeTabIndex: 0,
    setActTab: () => {}
  }

  handleHdrClick = ev => this.props.setActTab(parseInt(ev.target.id))

  render = () => {
    return (
      <div className='tabs'>
      <div className='tabHdrs'>
        {
          this.props.tabs.map(
            (tab,idx) => (
              <div key={'idx'+idx} id={idx} className={'tabHdr'+(idx===this.props.activeTabIndex?' actTabHdr':'')} onClick={this.handleHdrClick}>
               {tab.hdr}
              </div>
            )
          )
        }
      </div>
      <div className='tabBdy'>
       {this.props.tabs[this.props.activeTabIndex].bdy}
      </div>
      <style jsx>{`
        .tabs {
          margin: 0;
          padding: 0;
        }
        .tabHdrs {
          margin: 0;
          padding: 0;
        }
        .tabHdr {
          border: 1px solid black;
          border-bottom: none;
          border-top-right-radius: 1rem;
          border-top-left-radius: 1rem;
          margin: 0;
          padding: 1rem;
          display: inline-block;
        }
        .tabBdy {
          border: 1px solid black;
          margin: 0;
          padding: 1rem;
          background-color: #cccccc;
        }
        .actTabHdr {
          background-color: #cccccc;
          font-weight: 700;
        }
      `}</style>
      </div>
    )
  }
}

export default Tabs
