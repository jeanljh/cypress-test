class HomePO {
    textMarketCap = () => cy.get("a[data-title='View More']")
    inputSearch = () => cy.get('#txtSearchInput')
}

export default new HomePO()