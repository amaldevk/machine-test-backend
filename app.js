const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;
app.use(cors())
const drinksData = [
    {
        category: "____DRINKS_____",
        items: [
          { name: "LYCHEETINI......................................................$14",descr:"229 Vodka ,vermouth,lychee juice,fresh lime juice" },
          { name: "HIBISCUS RITA...............................................$16", descr:"Casamigos Blanco,orange liqueur, hibiscus liqueur, dried hibiscus fresh lime juice"},
          { name: "ATLAS...............................................................$18", descr:"Herradura Anejo, strawberry, lime, agave, club soda cotton candy candy fluff"}
        ]
      },
  {
    category: "____BRUNCH COCKTAIL____",
    items: [
      { name: "CINNAMON TOAST CRUNCH..........................$16", descr:"Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon"},
      { name: "BAR 42 MARY..................................................$14", descr:"Titos, tomato juice, worcestershire, celery salt, black pepper, tabasco, fully loaded" },
      { name: "MOET SPRITZ..................................................$20", descr:"Aperol, St Germain, botanical liquor, fresh lime juice, mini brut Moet topper"}
    ]
  },
  {
    category: "___HOOKAH FLAVOUR___",
    items: [
      { name: "ORANGE MINT" },
      { name: "BLUE MIST" },
      { name: "MIGHTY FREEZE" },
      { name: "LUV 66" }
    ]
  }
];

// Route to serve drinks data
app.get('/drinks', (req, res) => {
  res.json(drinksData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
