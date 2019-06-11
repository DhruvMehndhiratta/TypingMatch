import React, { Component } from 'react';
import moment from 'moment';
import { Container } from 'react-bootstrap';
import { getType, getFileName, isValid } from '../utils';
import { connect  } from 'react-redux'
import actions from '../actions'
import renderHTML from 'react-render-html';


class Main extends Component {
  state={
    apiData: '',
    dataToMatch:''
  }

  componentDidMount(){
    this.props.dispatch(actions.generateText()).then(res => {
      this.setState({
        apiData:this.cleanText(res.text_out)
      })
    })
  }

  cleanText = (str) => {
    let cleanT = '';
    return cleanT = str.replace(/<\/?[^>]+(>|$)/g, "");
  }

  onChangeValue = (e) => {
    const { name , value } =e.target;
    this.setState({
      [name]:value
    })
  }

  checkStringMatching(str1, str2) {
    let i = 0;
    for(i=0; i<str2.length; ++i) {
      if(str1.charAt(i) == str2.charAt(i)) {
        continue;
      }
      break;
    }
    return i;
  }

  render() {
    const { apiData='' , dataToMatch='' } =this.state
    const matchedIndex = this.checkStringMatching(apiData, dataToMatch)

    return (
      <Container fluid>
        <h5 style={{textAlign: 'center', margin: '10px 0'}}>You need to follow the below paragraph to see typing speed: </h5>
        <p><span style={{ color: 'green' }}>{apiData && apiData.substring(0, matchedIndex)}</span><span style={{ background: 'red' }}>{apiData && apiData.substring(matchedIndex, dataToMatch.length)}</span><span>{apiData && apiData.substring(dataToMatch.length, apiData.length)}</span></p>
        <p>Type your matching skills here </p>
        <input value={dataToMatch} name='dataToMatch' onChange={this.onChangeValue}/>
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  randomText: state.randomText,
  
});
export default connect(mapStateToProps)(Main)