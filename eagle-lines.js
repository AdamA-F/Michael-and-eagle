'use strict';
(() => {
  const lines = [
    'Howley Parker! The upstairs has gone further upstairs.',
    'Al, wave at the gentleman. He’s a bird, but do the respect.',
    'That’s a very nice flight of property.',
    'He’s doing a viewing of everywhere at once.',
    'Please don’t startle him. He’s got a whole kitchen on him.',
    'The postcode will be back in a minute.',
    'That’s south-facing. Now it isn’t. Now it is again.',
    'A lovely detached. He’s detached it himself.',
    'Mind your heads, everyone. There’s some accommodation.',
    'He’s very good with heights. He’s brought his own.',
    'Al, the floor plan has become a flight plan.',
    'You can see the whole area from the area above it.',
    'He’s got excellent references. Mostly from other birds.',
    'That’s the mayor of Upstairs Town, going to a meeting.',
    'The home is on its way to being at home.',
    'We said a moving-in date and he’s taken it personally.',
    'That’s a wing of the business. There’s the other one.',
    'He’s showing a great deal of outside initiative.',
    'Carole, do we charge by the month or by the altitude?',
    'Perfect to meet you! Sorry, you’ve gone past the meeting.',
    'Al, photograph him before the house blinks.',
    'He’s making the neighbourhood a bit more neighbourwide.',
    'All the fun of the fair. With quite a substantial mortgage.',
    'A lovely bit of fresh house.',
    'He’s brought the property closer to the natural light.',
    'That’s the top floor. He’s making it more top.',
    'Sophie, don’t follow him. You haven’t got the qualifications.',
    'He’s doing the commute for everyone inside.',
    'Very proud of him. He’s carrying the entire branch.',
    'Please remain indoors. The outdoors is doing a delivery.'
  ];
  let bag = [], previous = null;
  function next() {
    if (!bag.length) {
      bag = [...lines];
      for (let i = bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bag[i], bag[j]] = [bag[j], bag[i]];
      }
      if (bag[bag.length - 1] === previous) [bag[0], bag[bag.length - 1]] = [bag[bag.length - 1], bag[0]];
    }
    previous = bag.pop();
    return previous;
  }
  window.eagleQuips = { next };
})();
