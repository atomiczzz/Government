


var getLegis = function(legisObj){
	var legisStr = ''
	legisStr += '<div class="card">'+'<h1 class="legislator">'+legisObj.first_name+' '+legisObj.last_name+'</h1>\n'
	legisStr += '<h2 class="stateName">'+legisObj.state_name+'</h2>\n</div>'
	return legisStr

}

function handleResponse(apiResponse){
	var stringHTML = ''
	var containerNode = document.querySelector('.container')
	for (var i =0; i<apiResponse.results.length;i++){
		stringHTML+=getLegis(apiResponse.results[i])
	}
	containerNode.innerHTML = stringHTML
}




var promise = $.getJSON('https://congress.api.sunlightfoundation.com/legislators')
promise.then(handleResponse)
