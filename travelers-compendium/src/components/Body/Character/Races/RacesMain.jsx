import React from 'react';
import '../../../../styles/Character.css';

const RacesMain = () => {

    return (
        <div className='raceMainContainer'>
            <div className='raceIntro'>
                <h1 className='raceMainTitle'>Player Races</h1>
                <h2 className='raceMainIntro'>
                    Choosing your character's race is an important decision that can affect many aspects of your roleplaying 
                    experience. Not only can your race provide bonuses to your ability in combat or interacting with the 
                    environment, it may also affect how other players and non-player characters interact with you.
                </h2>
                <h3 className='raceMainIntro'>
                    For instance, Dragonborn may rarely be seen in certain areas of your adventuring world, so strolling into 
                    the local tavern may arouse suspicion or awe in the patrons who frequent there. Or, you may find that the 
                    elven guard you're trying to get information from may not be that fond of dwarves.<br></br>
                    <br></br>
                    <i>For a better gameplay experience, consider all the aspects of who your character is and try not to rely 
                    solely on any ability or combat boons.</i>
                </h3>
                <h3 className='raceMainIntro'>
                    
                </h3>
            </div>
            <div className='raceMainBonuses'>
                <h2>Racial Traits:</h2>
                <p>The description of each race includes racial traits that are common to members of that race. 
                    The following entries appear among the traits of most races.
                </p>
                <h3>Ability Score Increase</h3>
                <p>Every race increases one or more of a character's ability scores.</p>
                <h3>Age</h3>
                <p>The age entry notes the age when a member of the race is considered an adult, as well as the race's 
                    expected lifespan. This information can help you decide how old your character is at the start of 
                    the game. You can choose any age for your character, which could provide an explanation for some of 
                    your ability scores. For example, if you play a young or very old character, your age could explain 
                    a particularly low Strength or Constitution score, while advanced age could account for a high 
                    Intelligence or Wisdom.</p>
                <h3>Alignment</h3>
                <p>Most races have tendencies toward certain alignments, described in this entry. These are not binding 
                    for player characters, but considering why your dwarf is chaotic, for example, in defiance of lawful 
                    dwarf society can help you better define your character.</p>
                <h3>Size</h3>
                <p>Characters of most races are Medium, a size category including creatures that are roughly 4 to 8 feet 
                    tall. Members of a few races are Small (between 2 and 4 feet tall), which means that certain rules 
                    of the game affect them differently. The most important of these rules is that Small characters have 
                    trouble wielding large weapons.</p>
                <h3>Speed</h3>
                <p>Your speed determines how far you can move when traveling and fighting.</p>
                <h3>Languages</h3>
                <p>By virtue of your race, your character can speak, read, and write certain languages.</p>
                <h3>Subraces</h3>
                <p>Some races have subraces. Members of a subrace have the traits of the parent race in addition to the 
                    traits specified for their subrace. Relationships among subraces vary significantly from race to race 
                    and world to world.</p>
            </div>
        </div>
    )
}

export default RacesMain;