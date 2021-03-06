$(document).ready(function(){

var cupData = {
  "groups": {
    "a": {
      "name": "Group A",
      "winner": null,
      "runnerup": null,
      "matches": [
        {
          "name": 1,
          "type": "group",
          "home_team": 1,
          "away_team": 2,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-14T18:00:00+03:00",
          "stadium": 1,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 2,
          "type": "group",
          "home_team": 3,
          "away_team": 4,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-15T17:00:00+05:00",
          "stadium": 12,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 17,
          "type": "group",
          "home_team": 1,
          "away_team": 3,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-19T21:00:00+03:00",
          "stadium": 3,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 18,
          "type": "group",
          "home_team": 4,
          "away_team": 2,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-20T18:00:00+03:00",
          "stadium": 10,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 33,
          "type": "group",
          "home_team": 4,
          "away_team": 1,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-25T18:00:00+04:00",
          "stadium": 7,
          "finished": false,
          "matchday": 3
        },
        {
          "name": 34,
          "type": "group",
          "home_team": 2,
          "away_team": 3,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-25T17:00:00+03:00",
          "stadium": 8,
          "finished": false,
          "matchday": 3
        }
      ]
    },
    "b": {
      "name": "Group B",
      "winner": null,
      "runnerup": null,
      "matches": [
        {
          "name": 3,
          "type": "group",
          "home_team": 5,
          "away_team": 6,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-15T21:00:00+03:00",
          "stadium": 11,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 4,
          "type": "group",
          "home_team": 7,
          "away_team": 8,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-15T18:00:00+03:00",
          "stadium": 3,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 19,
          "type": "group",
          "home_team": 5,
          "away_team": 7,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-20T15:00:00+03:00",
          "stadium": 1,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 20,
          "type": "group",
          "home_team": 8,
          "away_team": 6,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-20T21:00:00+03:00",
          "stadium": 5,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 35,
          "type": "group",
          "home_team": 8,
          "away_team": 5,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-25T21:00:00+03:00",
          "stadium": 9,
          "finished": false,
          "matchday": 3
        },
        {
          "name": 36,
          "type": "group",
          "home_team": 6,
          "away_team": 7,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-25T20:00:00+02:00",
          "stadium": 4,
          "finished": false,
          "matchday": 3
        }
      ]
    },
    "c": {
      "name": "Group C",
      "winner": null,
      "runnerup": null,
      "matches": [
        {
          "name": 5,
          "type": "group",
          "home_team": 9,
          "away_team": 10,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-16T13:00:00+03:00",
          "stadium": 5,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 6,
          "type": "group",
          "home_team": 11,
          "away_team": 12,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-16T19:00:00+03:00",
          "stadium": 9,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 21,
          "type": "group",
          "home_team": 9,
          "away_team": 11,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-21T20:00:00+05:00",
          "stadium": 12,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 22,
          "type": "group",
          "home_team": 12,
          "away_team": 10,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-21T16:00:00+04:00",
          "stadium": 7,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 37,
          "type": "group",
          "home_team": 12,
          "away_team": 9,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-26T17:00:00+03:00",
          "stadium": 1,
          "finished": false,
          "matchday": 3
        },
        {
          "name": 38,
          "type": "group",
          "home_team": 10,
          "away_team": 11,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-26T17:00:00+02:00",
          "stadium": 11,
          "finished": false,
          "matchday": 3
        }
      ]
    },
    "d": {
      "name": "Group D",
      "winner": null,
      "runnerup": null,
      "matches": [
        {
          "name": 7,
          "type": "group",
          "home_team": 13,
          "away_team": 14,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-16T16:00:00+03:00",
          "stadium": 2,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 8,
          "type": "group",
          "home_team": 15,
          "away_team": 16,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-16T21:00:00+02:00",
          "stadium": 4,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 23,
          "type": "group",
          "home_team": 13,
          "away_team": 15,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-21T21:00:00+03:00",
          "stadium": 6,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 24,
          "type": "group",
          "home_team": 16,
          "away_team": 14,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-22T18:00:00+03:00",
          "stadium": 8,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 39,
          "type": "group",
          "home_team": 16,
          "away_team": 13,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-26T21:00:00+03:00",
          "stadium": 3,
          "finished": false,
          "matchday": 3
        },
        {
          "name": 40,
          "type": "group",
          "home_team": 14,
          "away_team": 15,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-26T21:00:00+03:00",
          "stadium": 10,
          "finished": false,
          "matchday": 3
        }
      ]
    },
    "e": {
      "name": "Group E",
      "winner": null,
      "runnerup": null,
      "matches": [
        {
          "name": 9,
          "type": "group",
          "home_team": 17,
          "away_team": 18,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-17T21:00:00+03:00",
          "stadium": 10,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 10,
          "type": "group",
          "home_team": 19,
          "away_team": 20,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-17T16:00:00+04:00",
          "stadium": 7,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 25,
          "type": "group",
          "home_team": 17,
          "away_team": 19,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-22T15:00:00+03:00",
          "stadium": 3,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 26,
          "type": "group",
          "home_team": 20,
          "away_team": 18,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-22T20:00:00+02:00",
          "stadium": 4,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 41,
          "type": "group",
          "home_team": 20,
          "away_team": 17,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-27T21:00:00+03:00",
          "stadium": 2,
          "finished": false,
          "matchday": 3
        },
        {
          "name": 42,
          "type": "group",
          "home_team": 18,
          "away_team": 19,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-27T21:00:00+03:00",
          "stadium": 6,
          "finished": false,
          "matchday": 3
        }
      ]
    },
    "f": {
      "name": "Group F",
      "winner": null,
      "runnerup": null,
      "matches": [
        {
          "name": 11,
          "type": "group",
          "home_team": 21,
          "away_team": 22,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-17T18:00:00+03:00",
          "stadium": 1,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 12,
          "type": "group",
          "home_team": 23,
          "away_team": 24,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-18T15:00:00+03:00",
          "stadium": 6,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 27,
          "type": "group",
          "home_team": 21,
          "away_team": 23,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-23T21:00:00+03:00",
          "stadium": 11,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 28,
          "type": "group",
          "home_team": 24,
          "away_team": 22,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-23T18:00:00+03:00",
          "stadium": 10,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 43,
          "type": "group",
          "home_team": 24,
          "away_team": 21,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-27T17:00:00+03:00",
          "stadium": 5,
          "finished": false,
          "matchday": 3
        },
        {
          "name": 44,
          "type": "group",
          "home_team": 22,
          "away_team": 23,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-27T19:00:00+05:00",
          "stadium": 12,
          "finished": false,
          "matchday": 3
        }
      ]
    },
    "g": {
      "name": "Group G",
      "winner": null,
      "runnerup": null,
      "matches": [
        {
          "name": 13,
          "type": "group",
          "home_team": 25,
          "away_team": 26,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-18T18:00:00+03:00",
          "stadium": 11,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 14,
          "type": "group",
          "home_team": 27,
          "away_team": 28,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-18T21:00:00+03:00",
          "stadium": 8,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 29,
          "type": "group",
          "home_team": 25,
          "away_team": 27,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-23T15:00:00+03:00",
          "stadium": 2,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 30,
          "type": "group",
          "home_team": 28,
          "away_team": 26,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-24T15:00:00+03:00",
          "stadium": 6,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 45,
          "type": "group",
          "home_team": 28,
          "away_team": 25,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-28T20:00:00+02:00",
          "stadium": 4,
          "finished": false,
          "matchday": 3
        },
        {
          "name": 46,
          "type": "group",
          "home_team": 26,
          "away_team": 27,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-28T21:00:00+03:00",
          "stadium": 9,
          "finished": false,
          "matchday": 3
        }
      ]
    },
    "h": {
      "name": "Group H",
      "winner": null,
      "runnerup": null,
      "matches": [
        {
          "name": 15,
          "type": "group",
          "home_team": 29,
          "away_team": 30,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-19T18:00:00+03:00",
          "stadium": 2,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 16,
          "type": "group",
          "home_team": 31,
          "away_team": 32,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-19T15:00:00+03:00",
          "stadium": 9,
          "finished": false,
          "matchday": 1
        },
        {
          "name": 31,
          "type": "group",
          "home_team": 29,
          "away_team": 31,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-24T20:00:00+05:00",
          "stadium": 5,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 32,
          "type": "group",
          "home_team": 32,
          "away_team": 30,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-24T21:00:00+03:00",
          "stadium": 12,
          "finished": false,
          "matchday": 2
        },
        {
          "name": 47,
          "type": "group",
          "home_team": 32,
          "away_team": 29,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-28T17:00:00+03:00",
          "stadium": 8,
          "finished": false,
          "matchday": 3
        },
        {
          "name": 48,
          "type": "group",
          "home_team": 30,
          "away_team": 31,
          "home_result": null,
          "away_result": null,
          "date": "2018-06-28T18:00:00+04:00",
          "stadium": 7,
          "finished": false,
          "matchday": 3
        }
      ]
    }
  },
  "knockout": {
    "round_16": {
      "name": "Round of 16",
      "matches": [
        {
          "name": 49,
          "type": "qualified",
          "home_team": "winner_a",
          "away_team": "runner_b",
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-06-30T17:00:00+03:00",
          "stadium": 11,
          "finished": false,
          "matchday": 4
        },
        {
          "name": 50,
          "type": "qualified",
          "home_team": "winner_c",
          "away_team": "runner_d",
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-06-30T21:00:00+03:00",
          "stadium": 5,
          "finished": false,
          "matchday": 4
        },
        {
          "name": 51,
          "type": "qualified",
          "home_team": "winner_b",
          "away_team": "runner_a",
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-01T17:00:00+03:00",
          "stadium": 1,
          "finished": false,
          "matchday": 4
        },
        {
          "name": 52,
          "type": "qualified",
          "home_team": "winner_d",
          "away_team": "runner_c",
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-01T21:00:00+03:00",
          "stadium": 6,
          "finished": false,
          "matchday": 4
        },
        {
          "name": 53,
          "type": "qualified",
          "home_team": "winner_e",
          "away_team": "runner_f",
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-02T18:00:00+04:00",
          "stadium": 7,
          "finished": false,
          "matchday": 4
        },
        {
          "name": 54,
          "type": "qualified",
          "home_team": "winner_g",
          "away_team": "runner_h",
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-02T21:00:00+03:00",
          "stadium": 10,
          "finished": false,
          "matchday": 4
        },
        {
          "name": 55,
          "type": "qualified",
          "home_team": "winner_f",
          "away_team": "runner_e",
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-03T17:00:00+03:00",
          "stadium": 3,
          "finished": false,
          "matchday": 4
        },
        {
          "name": 56,
          "type": "qualified",
          "home_team": "winner_h",
          "away_team": "runner_g",
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-03T21:00:00+03:00",
          "stadium": 2,
          "finished": false,
          "matchday": 4
        }
      ]
    },
    "round_8": {
      "name": "Quarter-finals",
      "matches": [
        {
          "name": 57,
          "type": "winner",
          "home_team": 49,
          "away_team": 50,
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-06T17:00:00+03:00",
          "stadium": 6,
          "finished": false,
          "matchday": 5
        },
        {
          "name": 58,
          "type": "winner",
          "home_team": 53,
          "away_team": 54,
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-06T21:00:00+03:00",
          "stadium": 5,
          "finished": false,
          "matchday": 5
        },
        {
          "name": 59,
          "type": "winner",
          "home_team": 51,
          "away_team": 52,
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-07T21:00:00+03:00",
          "stadium": 11,
          "finished": false,
          "matchday": 5
        },
        {
          "name": 60,
          "type": "winner",
          "home_team": 55,
          "away_team": 56,
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-07T18:00:00+04:00",
          "stadium": 7,
          "finished": false,
          "matchday": 5
        }
      ]
    },
    "round_4": {
      "name": "Semi-finals",
      "matches": [
        {
          "name": 61,
          "type": "winner",
          "home_team": 57,
          "away_team": 58,
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-10T21:00:00+03:00",
          "stadium": 3,
          "finished": false,
          "matchday": 6
        },
        {
          "name": 62,
          "type": "winner",
          "home_team": 59,
          "away_team": 60,
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-11T21:00:00+03:00",
          "stadium": 1,
          "finished": false,
          "matchday": 6
        }
      ]
    },
    "round_2_loser": {
      "name": "Third place play-off",
      "matches": [
        {
          "name": 63,
          "type": "loser",
          "home_team": 61,
          "away_team": 62,
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-14T17:00:00+03:00",
          "stadium": 3,
          "finished": false,
          "matchday": 7
        }
      ]
    },
    "round_2": {
      "name": "Final",
      "matches": [
        {
          "name": 64,
          "type": "winner",
          "home_team": 61,
          "away_team": 62,
          "home_result": null,
          "away_result": null,
          "home_penalty": null,
          "away_penalty": null,
          "winner": null,
          "date": "2018-07-15T18:00:00+03:00",
          "stadium": 1,
          "finished": false,
          "matchday": 7
        }
      ]
    }
  }
};

  var DateTime = luxon.DateTime;
  DateTime.local().setZone('UTC+6');
  
  var c = DateTime.fromISO(cupData.knockout.round_16.matches[2].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#160").append(" " + c1);

  var c = DateTime.fromISO(cupData.knockout.round_16.matches[3].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#161").append(" " + c1);

  var c = DateTime.fromISO(cupData.knockout.round_16.matches[4].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#162").append(" " + c1);
  
  var c = DateTime.fromISO(cupData.knockout.round_16.matches[5].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#163").append(" " + c1);
  
  var c = DateTime.fromISO(cupData.knockout.round_16.matches[6].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#164").append(" " + c1);
  
  var c = DateTime.fromISO(cupData.knockout.round_16.matches[7].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#165").append(" " + c1);
  
  var c = DateTime.fromISO(cupData.knockout.round_16.matches[7].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#166").append(" " + c1);
  
  var c = DateTime.fromISO(cupData.knockout.round_16.matches[7].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#167").append(" " + c1);
  


  //semi-finals new array


  var c = DateTime.fromISO(cupData.knockout.round_8.matches[2].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#168").append(" " + c1);
  
  var c = DateTime.fromISO(cupData.knockout.round_8.matches[3].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#169").append(" " + c1);
  
  var c = DateTime.fromISO(cupData.knockout.round_8.matches[0].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#170").append(" " + c1);
  
  var c = DateTime.fromISO(cupData.knockout.round_8.matches[1].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#171").append(" " + c1);
  
  var c = DateTime.fromISO(cupData.knockout.round_4.matches[0].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#172").append(" " + c1);
  
  var c = DateTime.fromISO(cupData.knockout.round_4.matches[1].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#173").append(" " + c1);
  
  var c = DateTime.fromISO(cupData.knockout.round_2.matches[0].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#176").append(" " + c1);
  
  var c = DateTime.fromISO(cupData.knockout.round_2_loser.matches[0].date).toString();
  var c1 = c.substring(11).slice(0,5);
  $("#175").append(c1);






});