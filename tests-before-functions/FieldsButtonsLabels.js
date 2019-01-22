var employeeManagerPage = {}

module.exports = {
    beforeEach: browser => {
        employeeManagerPage = browser.page.EmployeeManagerPageObject()
        employeeManagerPage.navigate()
            .waitForElementVisible('@titleText', 5000)
    },
    after: browser => {
        browser.end()
    },
    'QOB-55 All expected fields, labels and buttons are present': browser => {
        // https://dmutah.atlassian.net/browse/QOBB-55

        employeeManagerPage.expect.element('@titleText').text.to.equal('Employee Manager')
        employeeManagerPage.expect.element('@noEmployeeSelected').text.to.equal('No Employee Selected')
        employeeManagerPage.click('@employee1')
        employeeManagerPage.expect.element('@employee1').text.to.equal('Bernice Ortiz')
        employeeManagerPage.expect.element('@nameLabel').text.to.equal('Name')
        employeeManagerPage.expect.element('@phoneLabel').text.to.equal('Phone Number')
        employeeManagerPage.expect.element('@titleLabel').text.to.equal('Title')

        // browser.useXpath()
        // browser.verify.visible('(//*[@id="noEmployee"])[text()=" No Employee Selected "]')
    }
}