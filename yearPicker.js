
const removeElement = (node) => {
	node.parentNode.removeChild(node)
}

const yearFilter = () => {
	//grab the value selected in the dropdown when the button was clicked
	const yearList = document.getElementById('years')
	const selYear = yearList.options[yearList.selectedIndex].text
    
	//hook for the cards
	const article = document.querySelector('#visited')


	//remove existing elements before adding the filtered list
	if (article.hasChildNodes()){
		removeElement(article)
		visitedDOMBuilder(selYear)
	}    
	//add city cards to the DOM
	visitedDOMBuilder(selYear)
}

// stopping now. current problem is how to get the cards to load again after the function erases the current cards.

