var apiKey = "Sd21u2rjj9PJz1WnqkoUZ22tmPwIefjrRxC6BYPW"
// var queryUrl =  "https://quizapi.io/api/v1/questions -G" + \
// -d apiKey=YOUR_API_KEY \
// -d limit=10

var categoryUrl= "&category=code&difficulty=Easy&limit=10"
var query =  "https://quizapi.io/api/v1/questions?apiKey="+ apiKey + categoryUrl+"limit=10"

console.log(query)


// https://quizapi.io/api/v1/questions?apiKey=&category=code&difficulty=Easy&limit=10

