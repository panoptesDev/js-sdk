import BN from 'bn.js'

import Web3Client from './Web3Client'

import { address } from '../types/Common'
const { ChildERC20 } = require('./ChildERC20')
const { ChildERC721 } = require('./ChildERC721')

//import console from 'console'

export default class ContractsBase {
  static MATIC_CHILD_TOKEN: address = '0x0000000000000000000000000000000000001010'

  web3Client: Web3Client
  network: any

  constructor(web3Client: Web3Client, network: any) {
    this.web3Client = web3Client
    this.network = network
  }

  public encode(number: BN | string | number) {
    if (typeof number === 'number') {
      number = new BN(number)
    } else if (typeof number === 'string') {
      if (number.slice(0, 2) === '0x') return number
      number = new BN(number)
    }
    if (BN.isBN(number)) {
      return '0x' + number.toString(16)
    }
  }

  public getERC20TokenContract(token: address, parent: boolean = false) {
    const web3 = parent ? this.web3Client.parentWeb3 : this.web3Client.web3
    const abi = this.network.abi('ChildERC20')
    return new web3.eth.Contract(abi, token)
  }

  public getERC721TokenContract(token: address, parent: boolean = false) {
    const web3 = parent ? this.web3Client.parentWeb3 : this.web3Client.web3
    return new web3.eth.Contract(this.network.abi('ChildERC721'), token)
  }

  public getChildMaticContract() {
    return new this.web3Client.web3.eth.Contract(this.network.abi('MRC20'), ContractsBase.MATIC_CHILD_TOKEN)
  }

  public getPOSERC20TokenContract(token: address, parent: boolean = false) {
    const web3 = parent ? this.web3Client.parentWeb3 : this.web3Client.web3
    //const abi = this.network.abi('ChildERC20', 'pos')
    return new web3.eth.Contract(ChildERC20, token)
  }

  public getPOSERC721TokenContract(token: address, parent: boolean = false) {
    const web3 = parent ? this.web3Client.parentWeb3 : this.web3Client.web3
    //const abi = this.network.abi('ChildERC721', 'pos')
    return new web3.eth.Contract(ChildERC721, token)
  }

  public getPOSERC1155TokenContract(token: address, parent: boolean = false) {
    const web3 = parent ? this.web3Client.parentWeb3 : this.web3Client.web3
    return new web3.eth.Contract(this.network.abi('ChildERC1155', 'pos'), token)
  }
}
