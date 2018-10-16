import React, { Component } from 'react'
// import { connect } from 'react-redux'
import CouponGrid from './CouponGrid';
import Nav from './Nav';
import CouponTabs from './CouponTabs';
import SendModal from './SendModal';
import SocouAbi from '../../../static/contracts/Socou.json'
import web3import from 'web3'

const SOCOU_ADDRESS = '0x64938F93D6bAFFA10b7e030c1Cf651b52C79E1FA'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }

  async componentDidMount() {
    if (!window.web3) {
      console.error('missing web3')
      return
    }
    console.log('web3 exists!')
    const web3 = new web3import(window.web3.currentProvider)
    const socouInstance = new web3.eth.Contract(SocouAbi, SOCOU_ADDRESS)
    this.socouInstance = socouInstance
    this.getCoupons()
  }

  getCoupons = async () => {
    if (!this.socouInstance) return
    const couponsLength = await this.socouInstance.methods.getCouponsLength().call();
    const couponsPromises = []
    for (let i = 0; i < couponsLength; i +=1) {
      couponsPromises.push(this.socouInstance.methods.getCoupon(i).call())
    }
    const coupons = await Promise.all(couponsPromises)
    console.log(coupons)
    return coupons
  }


  giveCoupon = async (couponId, receiverAddress) => {
    if (!this.socouInstance) return
    return this.socouInstance.methods.giveCoupon(couponId, receiverAddress).call();
  }

  useCoupon = async (couponId) => {
    if (!this.socouInstance) return
    return this.socouInstance.methods.useCoupon(couponId).call();
  }


  openModal = (isModalOpen = true) => (e) => {
    this.setState({ isModalOpen })
  }

  render() {
    const { isModalOpen } = this.state
    return (
      <div>
        <Nav />
        <CouponTabs />
        <CouponGrid openModal={this.openModal}/>
        <SendModal openModal={this.openModal} isModalOpen={isModalOpen} />
      </div>
    )
  }
}

export default App
