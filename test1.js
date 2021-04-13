//=========================1 ======================================
// const assert = require("assert");
// const {Builder, By} = require ('selenium-webdriver');

// describe ("Find Element of  list", function() {
//     let driver;

//     beforeEach(async function(){
//         driver = await new Builder().forBrowser('chrome').build();
//     });

//     afterEach(async function(){
//         await driver.quit();
//     });
    
//     it('Dropdown of the list contains enabled and disabled elements', async function() {
//         await driver.get('http://the-internet.herokuapp.com/dropdown');

//     const dropdown = await driver.findElements(By.css("option"));

//     assert(await dropdown[0].isDisabled());
//     assert(await dropdown[1].isEnabled());
//  });
// });

//=========================2 ======================================
const assert = require("assert");
const {Builder, By} = require ('selenium-webdriver');

describe ("Hover the element", function() {
    let driver;

    beforeEach(async function(){
        driver = await new Builder().forBrowser('chrome').build();
    });

    afterEach(async function(){
        await driver.quit();
    });
    
    it('display text when hovering', async function() {
        await driver.get('http://the-internet.herokuapp.com/hovers');

    const image = await driver.findElement(By.className("figure"));
    await driver
    .actions({bridge:true}
    .move({origin: image})
    .perform());

    const text = await driver.findElement(By.className("figcaption"));
    assert(text.isDisplayed());
  });
});