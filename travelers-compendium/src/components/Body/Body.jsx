import React, { useContext } from 'react';
import AppContext from '../Context/AppContext';
import { RaceProvider } from '../Context/RaceContext';
import { ClassProvider } from '../Context/ClassContext';
import HomePage from './HomePage.jsx';
import Races from './Character/Races/Races';
import Classes from './Character/Classes/Classes';
import AbilityScores from './Character/AbilityScores';
import Skills from './Character/Skills';
import Feats from './Character/Feats';
import Alignments from './Character/Alignments';
import Backgrounds from './Character/Backgrounds';
import Languages from './Character/Languages';
import Weapons from './Equipment/Weapons';
import Armors from './Equipment/Armors';
import AdventureGear from './Equipment/AdventureGear';
import MagicItems from './Equipment/MagicItems';
import CustomItems from './Equipment/CustomItems';
import Spellcasting from './Magic/Spellcasting';
import SpellList from './Magic/SpellList';
import MonsterList from './Monster/MonsterList';
import CustomNPC from './NPC/CustomNPC';
import Combat from './Gameplay/Combat';
import '../../styles/Body.css';





const Body = () => {
    const { bodyDisplay } = useContext(AppContext);

    return (
        <div className='Body'>
            {bodyDisplay === 'home' ? <HomePage /> : null}
            {bodyDisplay === 'race' ? <RaceProvider><Races /></RaceProvider> : null}
            {bodyDisplay === 'class' ? <ClassProvider><Classes /></ClassProvider> : null}
            {bodyDisplay === 'ability' ? <AbilityScores /> : null}
            {bodyDisplay === 'skill' ? <Skills /> : null}
            {bodyDisplay === 'feat' ? <Feats /> : null}
            {bodyDisplay === 'alignment' ? <Alignments /> : null}
            {bodyDisplay === 'background' ? <Backgrounds /> : null}
            {bodyDisplay === 'language' ? <Languages /> : null}
            {bodyDisplay === 'weapon' ? <Weapons /> : null}
            {bodyDisplay === 'armor' ? <Armors /> : null}
            {bodyDisplay === 'adventGear' ? <AdventureGear /> : null}
            {bodyDisplay === 'magItem' ? <MagicItems /> : null}
            {bodyDisplay === 'custItem' ? <CustomItems /> : null}
            {bodyDisplay === 'spellcasting' ? <Spellcasting /> : null}
            {bodyDisplay === 'spellList' ? <SpellList /> : null}
            {bodyDisplay === 'monster' ? <MonsterList /> : null}
            {bodyDisplay === 'custNPC' ? <CustomNPC /> : null}
            {bodyDisplay === 'rules' ? <Combat /> : null}
        </div>
    )
}

export default Body;