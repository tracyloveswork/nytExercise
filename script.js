// Set variables

var searchTerm = " ";

var records = 5;

var startYear = 0;

var endYear = 0;



// Functions

// Do search

function submitSearch() {

	searchTerm = $("?").val();
	records = $("?").val();
	startYear = $("?").val();
	endYear = $("?").val();

	console.log(searchTerm);
	console.log(startYear);
	console.log(endYear);

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
  'api-key': "ae5d8eebadae4ccd996c3845a2402a6e",
  'q': searchTerm,
  'begin_date': (startYear + "0101"),
  'end_date': (endYear + "1231"),
  'page': (records--)
});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
	  console.log(result);

	  // result array
		for (i=0; i < result.response.docs.length; i++) {

		var listing = result.response.docs[i]

			$("#printResults").append("<h2>" + listing.headline.main + "</h2><p>" + listing.lead_paragraph + "</p><p>" + listing.web_url + "</p>");

		}

	}).fail(function(err) {
	  throw err;
	});

}

// Reset values
function resetValues() {

	searchTerm = " ";

	records = 5;

	startYear = empty();

	endYear = empty();

}

// Run buttons

$("#submit").on("click", submitSearch);

$("#clear").on("click", resetValues);





