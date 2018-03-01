import React from 'react';
import PropTypes from 'prop-types';
import { CircleLoader } from 'react-spinners';
import _ from 'lodash';

const UserList = (props) => {
  return (
    <div>
      <div className="title-with-lines">
        <div className="line"></div>
        <div className="title bold">Ev Halkı</div>
        <div className="line"></div>
      </div>
      <div className="loader-container">
        <CircleLoader
          color={'#123abc'}
          loading={props.loadingState}
          margin="auto"
        />
      </div>
      <table className="people-table">
        <thead>
          <tr>
            <th className="name-surname-column">Adı Soyadı</th>
            <th className="task-count-column">Toplam Görev</th>
          </tr>
        </thead>
        <tbody>
          {
            _.map(props.users, (u, i) => {
              return <tr key={i} className={i % 2 === 0 ? "even" : "odd"}>
                <td className="name-surname-column">{u.firstname + " " + u.lastname}</td>
                <td className="task-count-column">
                  {_.filter(props.tasks, { userId: u.id }).length}
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.array,
  tasks: PropTypes.array,
  loadingState: PropTypes.bool
}

export default UserList;
