module.exports = {
      // Set the roles/specs/classes for the game
      roles:[
        'Warrior',
        'Lancer',
        'Slayer',
        'Berserker',
        'Sorceror',
        'Archer',
        'Priest',
        'Mystic'
      ],
      // Set the races for the game
      races:[
        'Aman',
        'Elin',
        'Castanic',
        'Baraka',
        'High Elf',
        'Human',
        'Popori'
      ],
      // Set Recruitment status
      // OPTIONS: open | limited | closed
      recruitment:[
        'open', // Warrior
        'closed', // Lancer
        'open', // Slayer
        'limited', // Berserker
        'open', // Sorceror
        'open', // Archer
        'open', // Priest
        'open'  // Mystic
      ],
      // Set the different ranks for members of the site
      // IMPORTANT! - Default is the first in the list!
      // A 'value' greater than 50 gives a user admin privileges
      // If adding new ranks, add to the end so you don't change up
      //   what everyone else has, ranks are based on the index into
      //   this array.
      ranks:[
        {'title':'Wannabe','value':1},
        {'title':'Guild Master','value':100},
        {'title':'Failure','value':10},
      	{'title':'Baby Momma','value':80}
      ],
      // Set the guild/clan name
      guild: 'Lost Cause',
      server: 'Lake of Tears',
      //Nexus timer Config
      // IMPORTANT! Times are in GMT/UTC 24h format
      nexus:{
        'Sunday':[2,9,19],
        'Monday':[2,19],
        'Tuesday':[2],
        'Wednesday':[1],
        'Thursday':[],
        'Friday':[1,19],
        'Saturday':[2,9,19],
        'message':'Nexus is Now!'
      },
      // Progression Config
      // Progression will be displayed in the order given here
      // STATUS : complete | partial | none
      // id : css based id for the image
      progression: [
        {
          'name':'Manayas Core (HM)',
          'status':'none',
          'id':'mc'
        },
        {
          'name':'Crucible of Flame',
          'status':'partial',
          'id':'cof'
        },
        {
          'name':'Manayas Core',
          'status':'partial',
          'id':'mc'
        },
        {
          'name':'Argon Corpus (HM)',
          'status':'partial',
          'id':'ac'
        },
        {
          'name':'Sirjuka\'s Gallery',
          'status':'partial',
          'id':'sjg'
        },
        {
          'name':'Argon Corpus',
          'status':'complete',
          'id':'ac'
        },
        {
          'name':'Temple of Temerity',
          'status':'complete',
          'id':'tot'
        },
        {
          'name':'Ebon Tower',
          'status':'complete',
          'id':'et'
        }
      ]
}