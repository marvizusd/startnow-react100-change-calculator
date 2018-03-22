import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Due: '',
      Received: '',
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      goodShow: 'alert alert-success d-none card-header',
      badShow: 'alert alert-danger d-none card-header',
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
    this.setState({ Received: event.target.value })
  }

  totalChange(event) {
    var cheddar = parseFloat(this.state.Received) - parseFloat(this.state.Due);
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
    if (parseFloat(this.state.Due) > parseFloat(this.state.Received)) {
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
        <div className="jumbotron">
            <h1>Change Calculator</h1>
            <hr />
        </div>
        <div className="row">
          <div className="col col-md-4">
            <div className='card'>
              <div className='card-header'> Enter Information 
              </div>
              <div className='card-body'>
                <p className="card-text">How much is due?</p>
                <input className="form-control" name='' onChange={this.handleDueChange} value={this.state.Due} type='number' />
                <p>How much is received?</p>
                <input className="form-control" name='' onChange={this.handleRecivedChange} value={this.state.Received} type='number' />
              </div>
                <button onClick={this.totalChange} type='button' className='btn btn-primary'> Calculate </button>
            </div>
          </div>

          <div className='col col-md-8'>
          <div className={this.state.goodShow} style={{ display: this.state.goodShow ? 'block' : 'none' }} role='alert'> The total change due is ${this.state.cheddar} </div>
              <div className={this.state.badShow} style={{ display: this.state.badShow ? 'block' : 'none' }} role='alert'> Additional Money Owed</div>
            
            <div className="container">
               <div className="row">
                <div className='col col-xs-4 card p-2 mb-5 mr-2'>
                  <h4 className='text-center'> <strong> Twenties</strong></h4>
                  <p className='text-center'>{this.state.twenties}</p>
                </div>
                <div className='col col-xs-4 card p-2 mb-5  mr-2'>
                  <h4 className='text-center'> <strong> Tens</strong></h4>
                  <p className='text-center'>{this.state.tens}</p>
                </div>
                <div className='col col-xs-4 card p-2 mb-5  mr-2'>
                  <h4 className='text-center'> <strong> Fives</strong></h4>
                  <p className='text-center'>{this.state.fives}</p>
                </div>
                <div className='col col-xs-4 card p-2 mb-5 '>
                  <h4 className='text-center'> <strong> Ones</strong></h4>
                  <p className='text-center'>{this.state.ones}</p>
                </div>
              </div>

              <div className="row">
                <div className='col col-xs-4 card p-2 mr-2'>
                  <h4 className='text-center'> <strong> Quarters</strong></h4>
                  <p className='text-center'>{this.state.quarters}</p>
                </div>
                <div className='col card p-2 mr-2'>
                  <h4 className='text-center'> <strong> Dimes</strong></h4>
                  <p className='text-center'>{this.state.dimes}</p>
                </div>
                <div className='col card p-2 mr-2'>
                  <h4 className='text-center'> <strong> Nickles</strong></h4>
                  <p className='text-center'>{this.state.nickels}</p>
                </div>
                <div className='col card p-2'>
                  <h4 className='text-center'> <strong> Pennies</strong></h4>
                  <p className='text-center'>{this.state.pennies}</p>
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