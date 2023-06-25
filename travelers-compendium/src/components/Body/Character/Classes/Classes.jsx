import React, { useContext, useEffect } from 'react';
import AppContext from '../../../Context/AppContext.jsx';
import ClassContext from '../../../Context/ClassContext.jsx';
import ClassesTopBar from './ClassesTopBar.jsx';
import ClassesMain from './ClassesMain.jsx';
import '../../../../styles/Character.css';
import ClassDispContainer from './ClassDispContainer.jsx';


const Classes = () => {
    const { classes, setClasses, classDisplay, setClassDisplay } = useContext(ClassContext);
    const { apiBase, bodyDisplay } = useContext(AppContext);

    useEffect(() => {
        (async () => {
          const response = await fetch(`${apiBase}/api/classes`);
          const classInfo = await response.json();
          setClasses(classInfo.results);
          console.log(classInfo.results);
        })();
        return () => {};
      }, []);

    return (
        <div className='classesMain'>
            <ClassesTopBar classes={classes} setClassDisplay={setClassDisplay} />
            {classDisplay === 'home' ? <ClassesMain /> : null}
            {classDisplay === 'barbarian' ? <ClassDispContainer classDisplay={classDisplay} /> : null}
            {classDisplay === 'bard' ? <ClassDispContainer classDisplay={classDisplay} /> : null}
            {classDisplay === 'cleric' ? <ClassDispContainer classDisplay={classDisplay} /> : null}
            {classDisplay === 'druid' ? <ClassDispContainer classDisplay={classDisplay} /> : null}
            {classDisplay === 'fighter' ? <ClassDispContainer classDisplay={classDisplay} /> : null}
            {classDisplay === 'monk' ? <ClassDispContainer classDisplay={classDisplay} /> : null}
            {classDisplay === 'paladin' ? <ClassDispContainer classDisplay={classDisplay} /> : null}
            {classDisplay === 'ranger' ? <ClassDispContainer classDisplay={classDisplay} /> : null}
            {classDisplay === 'rogue' ? <ClassDispContainer classDisplay={classDisplay} /> : null}
            {classDisplay === 'sorcerer' ? <ClassDispContainer classDisplay={classDisplay} /> : null}
            {classDisplay === 'warlock' ? <ClassDispContainer classDisplay={classDisplay} /> : null}
            {classDisplay === 'wizard' ? <ClassDispContainer classDisplay={classDisplay} /> : null}
        </div>
    )
}

export default Classes;