import React from 'react';
import '../../../../styles/Races.css';

const ClassesMain = () => {

    return (
        <div className='raceMainContainer'>
            <div className='raceIntro'>
                <h1 className='raceMainTitle'>Classes</h1>
                <div className='raceMainIntro'>
                    <h2>
                        Your character's class represents your role within the party, from upfront melee specialists to arcane or 
                        divine spellcasters to skilled specialists who can pick a lock on a whim. Each class fills roles inside and 
                        outside of combat, allowing for a diverse group to cover all their bases in an adventuring party.
                    </h2>
                    <h3>
                        Class choice may also have an affect on how other characters within the world view your character. Paladins 
                        and clerics are generally welcomed by most communities, whereas rogues and warlocks are often viewed with 
                        a much more suspicious lens. Considering all aspects of who your character is and what they want to become 
                        can help you create a memorable character that you will enjoy for many campaigns.<br></br>
                        <br></br>
                        <i>It is important to balance what class you want to play with what is needed for the group. Sometimes, 
                            picking a different class that still allows for a similar desired playstyle but fills a unique need of the 
                            group will give a more rewarding experience overall.</i>
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
                <h3>Multiclassing Requirements</h3>
                <p>Beyond first level, some characters may wish to train in a different class. This section details any 
                    prerequisites for multiclassing into that particular class.
                </p>
                <h3>Subclasses</h3>
                <p>Subclasses are variations within each class, such as an Oath of Devotion Paladin or a Champion Fighter, 
                    that offer additional unique features. While more subclasses exist for each class, the subclasses listed 
                    are available within the SRD and the specific benefits or features are listed.</p>
                <h3>Proficiencies</h3>
                <p>Your character's proficiencies show what armor, weapons, tools, saving throws, and skills your character 
                    is adept at using, and they will generally add their proficiency bonus to when used.</p>
                <h3>Starting Equipment</h3>
                <p>This section highlights recommendations for your equipment at level 1, based on class and starting proficiencies. 
                    Depending on any proficiencies given by your race or any feats you may have, you may want to start out with
                    different equipment, with permission from the Dungeon Master (DM).</p>
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