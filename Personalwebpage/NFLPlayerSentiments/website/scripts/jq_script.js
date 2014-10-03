/** jQuery and JavaScript functions to get player 
 *  sentiments and output to the user.
 *  @author Alan Ponte
 */

/** jQuery calls to manipulate the page. */
$(document).ready(function() {

	$('#submit').on('click', function() {
		var team = getTeam('#teamSelector');
		$('#team').text(team + " selected");
	});

});


/** Returns the selected team from the drop down menu.
 *  indicated by DROPDOWNID */
function getTeam(dropdownId) {
	var team = ($(dropdownId).val());
	return team;
}

/** Shows the trends of the team indicated
 *  by TEAMNAME.
 */
function showTrends(teamName) {
	$.ajax({
		type: "POST",
		url: "NFLplayerSentiments.py",
		data: { param: teamName}
	}).done(function( o ) {
		$('#team').text("done");
	}).fail(function() {
		alert('error');
	});

}