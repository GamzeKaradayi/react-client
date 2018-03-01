import React from 'react';
import PropTypes from 'prop-types';
import { CircleLoader } from 'react-spinners';
import _ from 'lodash';

const TaskList = (props) => {
  return (
    <div>
      <div className="title-with-lines">
        <div className="line"></div>
        <div className="title bold">{props.filter ? 'İş seçiniz' : 'İşler'}</div>
        <div className="line"></div>
      </div>
      <div className="loader-container">
        <CircleLoader
          color={'#123abc'}
          loading={props.loadingState}
          margin="auto"
        />
      </div>
      <div className="job-list">
        {
          _(props.tasks).filter((t) => {
              return props.filter ? !t.userId : true
            }).map((t, i) => {
              let user = _.find(props.users, { id: t.userId });
              return <div
                key={i}
                className={"job-container " + (_.get(props, "selectedTask.id") === t.id ? "selected" : "")}
                onClick={(e) => props.onTaskClick(t)}
              >
                <div className="job-item">{t.description}</div>
                {
                  !props.filter ?
                    <div style={{ display: "flex" }}>
                      <div className="assignee">
                        {
                          t.userId
                            ? _.get(user, 'firstname') + ' ' + _.get(user, 'lastname') 
                            : 'Kimse atanmadı'
                        }
                      </div>
                      <div className="delete-button" onClick={(e) => props.onClickTaskDelete(t.id)}>sil</div>
                    </div>
                    : null
                }
              </div>
            }).value()
        }
      </div>
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  selectedTask: PropTypes.any,
  onTaskClick: PropTypes.func,
  filter: PropTypes.bool,
  loadingState: PropTypes.bool
}

export default TaskList;
