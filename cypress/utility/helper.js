class Helper {
    getBaseUrl() {
        let env = Cypress.env('env')
        switch (env) {
            case 'kovan':
                return 'https://kovan.etherscan.io/'
            case 'rinkeby':
                return 'https://rinkeby.etherscan.io/'
            case 'ropsten':
                return 'https://ropsten.etherscan.io/'
            case 'goerli':
                return 'https://goerli.etherscan.io/'
            default:
                return 'https://etherscan.io/'
        }
    }
}
export default new Helper()