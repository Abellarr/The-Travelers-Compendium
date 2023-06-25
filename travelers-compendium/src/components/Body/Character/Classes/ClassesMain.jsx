import React from 'react';
import '../../../../styles/Races.css';

const ClassesMain = () => {

    return (
        <div className='raceMainContainer'>
            <div className='raceIntro'>
                <h1 className='raceMainTitle'>Classes</h1>
                <div className='raceMainIntro'>
                    <h2>
                        Choosing your character's race is an important decision that can affect many aspects of your roleplaying 
                        experience. Not only can your race provide bonuses to your ability in combat or interacting with the 
                        environment, it may also affect how other players and non-player characters interact with you.
                    </h2>
                    <h3>
                        For instance, Dragonborn may rarely be seen in certain areas of your adventuring world, so strolling into 
                        the local tavern may arouse suspicion or awe in the patrons who frequent there. Or, you may find that the 
                        elven guard you're trying to get information from may not be that fond of dwarves.<br></br>
                        <br></br>
                        <i>For a better gameplay experience, consider all the aspects of who your character is and try not to rely 
                        solely on any ability or combat boons.</i>
                    </h3>
                </div>
            </div>
            <div className='raceMainBonuses'>
                <h2>Class Traits:</h2>
                <p>The description of each class includes traits and stats that are common to characters who fit within that
                    class. The following entries appear among the traits of most classes.
                </p>
                <h3>Hit Points</h3>
                <p>Hit points represent how tough your character is and how much damage they can take. While your hit points
                    value is shown as a number on your character sheet, it is also represented by Hit Dice, which shows the
                    range of hit points your character can have per level.
                </p>
                <h3>Proficiencies</h3>
                <p>Your character's proficiencies show what armor, weapons, tools, saving throws, and skills your character 
                    will generally add their proficiency bonus to when used.</p>
                <h3>Class Features</h3>
                <p>Each class has unique features that set them apart from the other classes. Some classes can cast spells, while 
                    others can perform great feats of strength in combat. Some can even transcend their own physical limits or
                    petition their gods for special boons. This section will lay out what special abilities each class can bring
                    to the adventure.
                </p>
            </div>
        </div>
    )
}

export default ClassesMain;