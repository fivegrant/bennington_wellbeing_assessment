class Survey{
  constructor(content){
    this.questions = [];
    this.resources = [];
    this.scores = {};
    for (label of content.labels){
      this.questions.concat(label.questions.map(q => [q, label.name]));
      this.resources.concat({label: label.resources});
      this.scores.label = 0;
    }
  }

  response(answer, label){
    this.labelScores.label += answer;
  }

  results(){
  //TODO? Push to a database/sheet
    relevantResources = [];
    for (label of this.scores.keys()){
      //adds resources entry to a list if it's below the label score
      //check = [title, [url, lowest score needed as int]
      relevance = (links, check) => (this.scores.label >= check[1][1] ? links.concat([check[0], check[1][0]]) : links);
      relevantResources.push(this.resources.label.entries().reduce(relevance));
      return 
    }
  }
}

module.exports = function(content){
  return new Survey(content);
};
