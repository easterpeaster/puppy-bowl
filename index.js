// there is a puppy bowl coming. a website needs help creating a mini-game on their site.
// code already exist for the website our job is to finish it. use the link to complete 
// the code.
const playerContainer = document.getElementById('all-player-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

//Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2302-acc-et-pt-c';
//Use the APIURL variable for fetch reequests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`; 

/**
 * It fetches all players from the API and returns them 
 * 
 */

const fetchAllPlayers = async () => {
    try {
    } catch (err) {
        console.error('Uh oh, trouble fetching players!', err);
    }
};

const fetchSinglePlayer = async (playerId) => {
    try { 
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};

const addNewPlayer = async (playerObj) => {
    try {
    } catch (err) {
        console.error(
            'Oops, something went wrong with adding that player!', err);
        }
    };

const removePlayer = async (playerId) => {
    try {
    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

const renderAllPlayers = (playerList) => {
    try {
    } catch (err) {
        console.error('Uh oh, trouble rendering players!, err');
    }
};

const renderNewPlayerForm = () => {
    try {
    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}; 

const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);

    renderNewPlayerForm();
};

init();
// create teams of puppy to compete in the bowl using JS

//view roster

// see a player's details

// add players to the roster
