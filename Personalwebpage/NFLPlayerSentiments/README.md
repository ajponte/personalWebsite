NFLPlayerSentiments
===================

Creates a report of the Twitter "sentiments" of NFL Players, and teams as a whole

Synopis:
--------------
Ever wondered how favorable your NFL players are among Twitter?


USAGE:
==================
python NFLplayerSentiments.py 'QUERY' 
Where QUERY is the name of a player (remember the quotes)

OUTPUT:
================
For example, to find the Twitter sentiment of Jim Harbaugh, type
python NFLplayerSentiments.py 'Aldon Smith'

> python NFLplayerSentiments.py 'Jim Harbaugh'
>> "Based on the query, Jim Harbaugh has a sentiment value of .00956001"

+ The number returned is the average sentiment of the person on Twitter.
+ Let s be the sentiment value.
+ Then s is an integer such that -1 <= s <= 1

How it works
------------
+ The most common words in the english dictionary have been assigned an 
arbritary "sentiment" value.

- That is, there is an surjective function f, such that f(word) = sentiment_value
- For example, f('Great') = .95
               f('terrible') = -.95
               f('cat') = 0.0
- Using the API, the program grabs 100 Twitter status which include the name of the player.
  The statuses are then analyzed and an average sentiment value is calculated.

Giving credit where it's due:
-----------------------------
+ I used a Twitter wrapper API to gather the Tweets.
+ The idea of assigning words sentiment values arose during one of U.C. Berkeley's CS61a projects.


To be done at some point in the near future:
-----------------------------------------------
+ Creaete a web interface with a scroll dowm, to pick a player.
+ Check in a database to verify that a given player actually exists.
