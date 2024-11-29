game.splash("Let's calculate the area of a Trapezoid")
let base1 = game.askForNumber("What is base1?")
let base2 = game.askForNumber("What is base2?")
let height = game.askForNumber("What is height?")
let area = (base1 + base2) / 2 * height
game.splash("The area of your Trapezoid is" + area + "cm^2")
