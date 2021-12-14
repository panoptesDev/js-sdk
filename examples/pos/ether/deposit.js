const { getPanoPOSClient, from } = require('../../utils')

const amount = '100000000000000000'

const execute = async () => {
  try {
    const tx = await getPanoPOSClient().depositEtherForUser(from, amount, {
      from,
    })
    console.log(tx.transactionHash) // eslint-disable-line
  } catch (e) {
    console.error(e) // eslint-disable-line
  }
}

execute().then(() => process.exit(0))
