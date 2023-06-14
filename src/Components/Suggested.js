import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GroupDetails from './GroupDetails';
import '../CSS/Groups.css'
import { Link } from 'react-router-dom';
const API = process.env.REACT_APP_API_URL

// THIS IS FOR BROWSE THE FIRST THREE GROUPS IN THE DASHBOARD/ INDEX PG

const Suggested = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    axios.get(`${API}/groups`)
      .then(res => {
        setGroups(res.data.slice(0, 3));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>Suggested Groups</h1>
      
      
      {groups.map((group) => {
        console.log(group)
              return <GroupDetails key={group.id} group={group} />;
            })}
            <br />
        <Link to={`/groups`}>
      <button className='borderman btn-border' style={{border: 'none', outline: 'none', padding: '10px', backgroundColor: '#F18701', borderRadius: '5px', width: '200px', height: '50px', fontSize: '20px', color: '#FFFFFF'}}>View More Groups</button>
        </Link>

    </div>
  );
};
export default Suggested;
