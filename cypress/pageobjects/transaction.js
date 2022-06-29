class TransactionPO {
    textTransactionCount = () => cy.get('p.mr-2 > a')
}

export default new TransactionPO()