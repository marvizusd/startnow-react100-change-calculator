import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Due: '',
      Recived: '',
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      goodShow: 'alert alert-success hidden',
      badShow: 'alert alert-danger hidden',
      cheddar: 0
    }
    this.handleDueChange = this.handleDueChange.bind(this);
    this.handleRecivedChange = this.handleRecivedChange.bind(this);
    this.totalChange = this.totalChange.bind(this);
  }

  handleDueChange(event) {
    this.setState({ Due: event.target.value })
  }

  handleRecivedChange(event) {
    this.setState({ Recived: event.target.value })
  }


  totalChange(event) {
    var cheddar = parseFloat(this.state.Recived) - parseFloat(this.state.Due);
    const twenties = Math.floor(cheddar * 100 / 2000);
    const tens = Math.floor(cheddar * 100 % 2000 / 1000);
    const fives = Math.floor(cheddar * 100 % 2000 % 1000 / 500)
    const ones = Math.floor(cheddar * 100 % 2000 % 1000 % 500 / 100);
    const quarters = Math.floor(cheddar * 100 % 2000 % 1000 % 500 % 100 / 25);
    const dimes = Math.floor(cheddar * 100 % 2000 % 1000 % 500 % 100 % 25 / 10);
    const nickels = Math.floor(cheddar * 100 % 2000 % 1000 % 500 % 100 % 25 % 10 / 5);
    const pennies = Math.floor(cheddar * 100 % 2000 % 1000 % 500 % 100 % 25 % 10 % 5);
    const goodShow = 'alert alert-success'
    const badShow = 'alert alert-danger'
    if (parseFloat(this.state.Due) > parseFloat(this.state.Recived)) {
      this.setState({
        badShow,
        goodShow: null
      })
    } else {
      this.setState({
        badShow: null,
        twenties,
        tens,
        fives,
        ones,
        quarters,
        dimes,
        nickels,
        pennies,
        goodShow,
        cheddar
      })
    }



  }

  render() {
    return (
      <div className='container'>
          <div className='page-header'>
            <h1>Change Calculator</h1>
          </div>
        <div className="row">
          <div className="col col-md-4">
            <div className='panel panel-default'>
              <div className='panel-heading'> Enter Information 
              </div>
              <div className='panel-body'>
                <p>How much is due?</p>
                <input name='amountDue' onChange={this.handleDueChange} value={this.state.Due} type='number' className='form-control' />
                <p>How much is recived?</p>
                <input name='amountReceived' onChange={this.handleRecivedChange} value={this.state.Recived} type='number' className='form-control' />
              </div>
              <div className='panel-footer'>
                <button onClick={this.totalChange} type='button' className='btn btn-primary btn-block'> Calculate </button>
              </div>
            </div>
          </div>
          <div className='panel panel-default col-md-7'>
            <div className='panel-body'>
            <div className={this.state.goodShow} style={{ display: this.state.goodShow ? 'block' : 'none' }} role='alert'> The total change due is ${this.state.cheddar} </div>
            <div className={this.state.badShow} style={{ display: this.state.badShow ? 'block' : 'none' }} role='alert'> Additional Money Owed</div>
              <div className='row'>
                <div className='col-xs-3 well well-lg'>
                  <h4 className='text-center'> <strong> Twenties</strong></h4>
                  <p className='lead text-center'>{this.state.twenties}</p>
                </div>
                <div className='col-xs-3 well well-lg'>
                  <h4 className='text-center'> <strong> Tens</strong></h4>
                  <p className='lead text-center'>{this.state.tens}</p>
                </div>
                <div className='col-xs-3 well well-lg'>
                  <h4 className='text-center'> <strong> Fives</strong></h4>
                  <p className='lead text-center'>{this.state.fives}</p>
                </div>
                <div className='col-xs-3 well well-lg'>
                  <h4 className='text-center'> <strong> Ones</strong></h4>
                  <p className='lead text-center'>{this.state.ones}</p>
                </div>
                <div className='col-xs-3 well well-lg'>
                  <h4 className='text-center'> <strong> Quarters</strong></h4>
                  <p className='lead text-center'>{this.state.quarters}</p>
                </div>
                <div className='col-xs-3 well well-lg'>
                  <h4 className='text-center'> <strong> Dimes</strong></h4>
                  <p className='lead text-center'>{this.state.dimes}</p>
                </div>
                <div className='col-xs-3 well well-lg'>
                  <h4 className='text-center'> <strong> Nickles</strong></h4>
                  <p className='lead text-center'>{this.state.nickels}</p>
                </div>
                <div className='col-xs-3 well well-lg'>
                  <h4 className='text-center'> <strong> Pennies</strong></h4>
                  <p className='lead text-center'>{this.state.pennies}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>  
      </div>
    );
  }
}


export default App;
