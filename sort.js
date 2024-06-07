/*
The code test is based on the rules of Deck card game. Just like we assign numbers to the strings and arrange the strings and integers in ascending order, we need to assign the lowest number to Jack and highest number to King. Queen comes in between. So if you arrange them in ascending order the required output will be [2,3,5,6,8,'Jack','Queen','King'].
: Sort the array as per the rules of card game using generic method.
var cards = ['Jack', 8, 2, 6, 'King', 5, 3, 'Queen']
<!-- Requried Output = [2,3,5,6,8,'Jack','Queen','King']
Q: Sort the array as per the rules of card game using generic method.
*/

function sortByCardRank(cards) {
    const rankMap = {
      '2': 2,
      '3': 3,
      '4': 4,
      '5': 5,
      '6': 6,
      '7': 7,
      '8': 8,
      '9': 9,
      '10': 10,
      'Jack': 11,
      'Queen': 12,
      'King': 13,
    };
  
    return cards.sort((card1, card2) => {
      const rank1 = rankMap[card1] || Infinity; // Assign Infinity for non-numeric cards
      const rank2 = rankMap[card2] || Infinity;
      return rank1 - rank2;
    });
  }
  
  const cards = ['Jack', 8, 2, 6, 'King', 5, 3, 'Queen'];
  const sortedCards = sortByCardRank(cards);
  console.log(sortedCards); // Output: [2, 3, 5, 6, 8, 'Jack', 'Queen', 'King']
  