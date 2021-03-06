import helper from '../utility/helper'
import data from '../fixtures/data.json'

const url = helper.getBaseUrl()
describe('Test Suite', () => {
    it('UI Test', () => {
        cy.visit(url, { failOnStatusCode: false })
        cy.get("a[data-title='View More']").should('not.be.empty')
        cy.get('#txtSearchInput').type(`${data.wallet}{enter}`)
        cy.get('p.mr-2 > a').invoke('text').then(Number).should('be.gt', 2)
    })
    it('API Test', () => {
        cy.request({
            url: 'https://api.etherscan.io/api',
            qs: {
                module: 'account',
                action: 'txlist',
                address: data.wallet,
                startblock: 0,
                endblock: 99999999,
                page: 1,
                offset: 10,
                sort: 'asc',
                apikey: data.apikey
            },
            failOnStatusCode: false
        })
        .its('body.result').invoke('every', e => e.blockNumber !== null).should('be.true')
        // another way
        // .its('body.result').each(({blockNumber}) => {
        //     expect(blockNumber).is.not.null
        // })
    })
})