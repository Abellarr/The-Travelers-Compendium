import React from 'react';
import '../../../../../styles/Classes.css';

const CircleSpells = ()=> {

    return (
        <div className='circleTables'>
            <h3>Circle Spells by Land Type</h3>
            <table className='circleSpells'>
                <h4>Arctic</h4>
                <tr>
                    <th>Druid Level</th>
                    <th>Spells</th>
                </tr>
                <tr>
                    <td>3rd</td>
                    <td>Hold Person, Spike Growth</td>
                </tr>
                <tr>
                    <td>5th</td>
                    <td>Sleet Storm, Slow</td>
                </tr>
                <tr>
                    <td>7th</td>
                    <td>Freedom of Movement, Ice Storm</td>
                </tr>
                <tr>
                    <td>9th</td>
                    <td>Commune with Nature, Cone of Cold</td>
                </tr>
            </table>
            <table className='circleSpells'>
                <h4>Coast</h4>
                <tr>
                    <th>Druid Level</th>
                    <th>Spells</th>
                </tr>
                <tr>
                    <td>3rd</td>
                    <td>Mirror Image, Misty Step</td>
                </tr>
                <tr>
                    <td>5th</td>
                    <td>Water Breathing, Water Walk</td>
                </tr>
                <tr>
                    <td>7th</td>
                    <td>Control Water, Freedom of Movement</td>
                </tr>
                <tr>
                    <td>9th</td>
                    <td>Conjure Elemental, Scrying</td>
                </tr>
            </table>
            <table className='circleSpells'>
                <h4>Desert</h4>
                <tr>
                    <th>Druid Level</th>
                    <th>Spells</th>
                </tr>
                <tr>
                    <td>3rd</td>
                    <td>Blur, Silence</td>
                </tr>
                <tr>
                    <td>5th</td>
                    <td>Create Food and Water, Protection from Energy</td>
                </tr>
                <tr>
                    <td>7th</td>
                    <td>Blight, Hallucinatory Terrain</td>
                </tr>
                <tr>
                    <td>9th</td>
                    <td>Insect Plague, Wall of Stone</td>
                </tr>
            </table>
            <table className='circleSpells'>
                <h4>Forest</h4>
                <tr>
                    <th>Druid Level</th>
                    <th>Spells</th>
                </tr>
                <tr>
                    <td>3rd</td>
                    <td>Barkskin, Spider Climb</td>
                </tr>
                <tr>
                    <td>5th</td>
                    <td>Call Lightning, Plant Growth</td>
                </tr>
                <tr>
                    <td>7th</td>
                    <td>Divination, Freedom of Movement</td>
                </tr>
                <tr>
                    <td>9th</td>
                    <td>Commune with Nature, Tree Stride</td>
                </tr>
            </table>
            <table className='circleSpells'>
                <h4>Grassland</h4>
                <tr>
                    <th>Druid Level</th>
                    <th>Spells</th>
                </tr>
                <tr>
                    <td>3rd</td>
                    <td>Invisibility, Pass Without Trace</td>
                </tr>
                <tr>
                    <td>5th</td>
                    <td>Daylight, Haste</td>
                </tr>
                <tr>
                    <td>7th</td>
                    <td>Divination, Freedom of Movement</td>
                </tr>
                <tr>
                    <td>9th</td>
                    <td>Dream, Insect Plague</td>
                </tr>
            </table>
            <table className='circleSpells'>
                <h4>Mountain</h4>
                <tr>
                    <th>Druid Level</th>
                    <th>Spells</th>
                </tr>
                <tr>
                    <td>3rd</td>
                    <td>Spider Climb, Spike Growth</td>
                </tr>
                <tr>
                    <td>5th</td>
                    <td>Lightning Bolt, Meld Into Stone</td>
                </tr>
                <tr>
                    <td>7th</td>
                    <td>Stone Shape, Stoneskin</td>
                </tr>
                <tr>
                    <td>9th</td>
                    <td>Passwall, Wall of Stone</td>
                </tr>
            </table>
            <table className='circleSpells'>
                <h4>Swamp</h4>
                <tr>
                    <th>Druid Level</th>
                    <th>Spells</th>
                </tr>
                <tr>
                    <td>3rd</td>
                    <td>Acid Arrow, Darkness</td>
                </tr>
                <tr>
                    <td>5th</td>
                    <td>Water Walk, Stinking Cloud</td>
                </tr>
                <tr>
                    <td>7th</td>
                    <td>Freedom of Movement, Locate Creature</td>
                </tr>
                <tr>
                    <td>9th</td>
                    <td>Insect Plague, Scrying</td>
                </tr>
            </table>
        </div>
    )
}

export default CircleSpells;