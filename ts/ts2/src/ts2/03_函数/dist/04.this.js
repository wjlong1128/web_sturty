var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // 改用箭头函数
        // return function () {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            // 这里视为window  || globalThis
            // 不幸的是，this.suits[pickedSuit]的类型依旧为any。 这是因为 this来自对象字面量里的函数表达式。
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
//  现在TypeScript知道createCardPicker期望在某个Deck对象上调用。 
// 也就是说 this是Deck类型的，而非any，因此--noImplicitThis不会报错了。
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
