import React , {Component} from 'react';
import Header from '../header/header';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import green from 'material-ui/colors/green';
import './sendmoney.css';


const styles = theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    wrapper: {
      margin: theme.spacing.unit,
      position: 'relative',
    },
    buttonSuccess: {
      backgroundColor: green[500],
      '&:hover': {
        backgroundColor: green[700],
      },
    },
    fabProgress: {
      color: green[500],
      position: 'absolute',
      top: -6,
      left: -6,
      zIndex: 1,
    },
    buttonProgress: {
      color: green[500],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  });


export default class Sendmoney extends Component {
    state = {
        email:'',
        amount:0,
        currency:'USD',
        message:'',
        paypurpose:'',
        loading:false,
        success:false,
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    handleButtonClick = () => {
        if (!this.state.loading) {
          this.setState(
            {
              success:false,
              loading: true
            },
            () => {
              this.timer = setTimeout(() => {
                this.setState({
                  loading: false,
                  success: true,
                });
                this.props.history.push('/final');
              }, 5000);
            },
          );
        }
      };

        onchangehandler = (e) => {
            e.preventDefault();
            this.setState({
                [e.target.name]:e.target.value
            })
            console.log(this.state);
    }
    timer = undefined;


    render(){
        const { loading, success } = this.state;
        // const { classes } = this.props;
    
    
        const sign = (this.state.currency == 'USD' ? '$' : this.state.currency == 'EUR' ? 'EUR': this.state.currency == `JPY` ? 'JPY' :'') 
        return(

            <div className="row">
            <Header />
            <div className="contain">
            
                <center><form className="sendmoney">
                <input 
                    type="text"
                    value={this.state.email}
                    name = "email"
                    onChange={this.onchangehandler}
                    placeholder="Enter an Email Id"
                />
                <br/>

                <label style={{fontSize:15}}>{sign}</label>
    
                <input 
                    type="text"
                    value={this.state.amount}
                    name = "amount"
                    onChange={this.onchangehandler}
                    placeholder="Enter an Amount"
                    
                />
                
                <select name="currency" onChange={this.onchangehandler} value={this.state.currency}>
                    <option value="USD">
                        USD
                    </option>
                    <option value="EUR">
                        EUR
                    </option>
                    <option value="JPY">
                        JPY
                    </option>
                </select>

                <textarea 
                    type="text"
                    value={this.state.message}
                    name = "message"
                    onChange={this.onchangehandler}
                    placeholder="Message"
                />
                <br />
                <select name="purpose" onChange={this.onchangehandler} value={this.state.paypurpose}>
                    <option value="Sending Money to family and friends">
                        Sending Money to family and friends
                    </option>
                    <option value="I'm paying for good or services">
                        I'm paying for good or services
                    </option>
                </select>
                </form>
                {loading && <CircularProgress size={24} className={this.props.fabProgress} />}
                </center>
                
                <div>
                    <center>
                        <Link to="/" 
                            className="btn btn-back">
                        Back
                        </Link>
                        <button to="" 
                             className="btn btn-next" 
                             onClick={this.handleButtonClick}>
                                Next
                        </button>
                        </center>
                </div> 
            </div>
         </div>
        )
    }
} 




// Sendmoney.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };