var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "sec-section-name",
  "level": "1",
  "url": "sec-section-name.html",
  "type": "Section",
  "number": "1.1",
  "title": "Section Title",
  "body": " Section Title  Text of section.  "
},
{
  "id": "ch-Random-Variables",
  "level": "1",
  "url": "ch-Random-Variables.html",
  "type": "Chapter",
  "number": "2",
  "title": "Random Variables",
  "body": " Random Variables   Text before the first section.     "
},
{
  "id": "ch-Expected-Value",
  "level": "1",
  "url": "ch-Expected-Value.html",
  "type": "Chapter",
  "number": "3",
  "title": "Expected Value and Variance",
  "body": " Expected Value and Variance   Text before the first section.     "
},
{
  "id": "ch-Confidence-Intervals",
  "level": "1",
  "url": "ch-Confidence-Intervals.html",
  "type": "Chapter",
  "number": "4",
  "title": "Confidence Intervals",
  "body": " Confidence Intervals   Text before the first section.     "
},
{
  "id": "ch-Hypothesis-Testing",
  "level": "1",
  "url": "ch-Hypothesis-Testing.html",
  "type": "Chapter",
  "number": "5",
  "title": "Hypothesis Testing",
  "body": " Hypothesis Testing   Text before the first section.     "
},
{
  "id": "ch-Linear-Regression",
  "level": "1",
  "url": "ch-Linear-Regression.html",
  "type": "Chapter",
  "number": "6",
  "title": "Linear Regression",
  "body": " Linear Regression   Text before the first section.     "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
