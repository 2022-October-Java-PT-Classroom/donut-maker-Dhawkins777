import DonutMaker from './donut-maker.js';

describe('DonutMaker object', () => {

    test('Does donutMaker add one donut to count', () => {
        const underTest = new DonutMaker(1);
        underTest.donutCounter();
        expect(underTest.donutCount).toEqual(2);
    });

    test('Does donutMaker retrieve the donut count', () => {
        const underTest = new DonutMaker(1);
        underTest.donutCounter();
        underTest.getDonutCount();
        expect(underTest.donutCount).toEqual(2);
    });

    test('Does retrieve an Auto Clicker count', () => {
        const underTest = new DonutMaker(1, 100);
        // underTest.autoClickerCount();
        underTest.getAutoClickerCount();
        expect(underTest.autoClickerCount).toEqual(100);
    });

    test('Can add to the Auto Clicker count', () => {
        const underTest = new DonutMaker(1, 100)
        underTest.autoClickerCounter();
        expect(underTest.autoClickerCount).toEqual(101);
    });

    test('Subtract the Auto Clicker cost from your donut count', () => {
        const underTest = new DonutMaker(200, 100)
        underTest.getDonutCount();
        expect(underTest.autoClickerCount).toEqual(100);
    });

    test('Increase the cost of the second Auto Clicker by an additional ten percent', () => {
        const underTest = new DonutMaker(100, 0, 100);
        underTest.purchaseAutoClicker();
        underTest.newAutoClickerCost();
        expect(underTest.autoClickerCost).toEqual(110);
    });

   
});