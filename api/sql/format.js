module.exports = function(data) {
  query = "insert into Wellbeing_Assessment (Dimension, Question, Score) values"
  for (entry of data){
    query += ` ('${entry.dimension}', '${entry.question}', ${entry.score}),`;
  }
  query = query.substring(0, query.length - 1) + ";";
  return query;
}


