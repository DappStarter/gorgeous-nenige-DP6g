require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remember smile hover enroll sun general'; 
let testAccounts = [
"0xf1c16bd0745d364f439f223fa5ec0447fec7d62c5086b8fd62403bd128616c41",
"0xbf346e07424942b2cc5400f749a3ee3776de99d392dd31e73d4b21488f910fca",
"0x113ce58ddb54ae09bc2bba309ccd068a6b1dec20bac3fbe576e3b3682dc8b316",
"0x728d5819ebcb6868dba9cdbf396f481e288a26d9c4dcf533e40de686ec67ca92",
"0x9781d59913f4ce1252c5727f24ac29a2c2f09c4f99744f5cd2b3c26cbcdf4128",
"0xb0e773e46d6d0fa33cfc143fdda52433e4bec2bd57eac579a7a91c2691fefd15",
"0xaef4e49fc4d618a6fcfc4acbd315f8426a2c2d34c54cd9bfe5a9bcbb84bcf013",
"0x0ad0123ed0a02978cf0088efe51cb91e7bb1a8ead1dc524e8a632dd699f2a3b0",
"0x3fd946c2c511dbef793bb7a759d2cd0910005364d70c56ffda4ae722601867e2",
"0x6fb0d2e01782e55292220c3a7d3b1d0d6d5b3122518b7fe77e0a54cee988cd05"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


