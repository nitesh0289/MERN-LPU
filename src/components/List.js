import React, { Fragment } from "react";

function List() {
  const tasks = [
    { id: 1, title: "Learn React", time: 5 },
    { id: 2, title: "Revise JS", time: 3 },
    { id: 3, title: "Have Lunch", time: 0.5 }
  ];
  return (
    <ul>
      {tasks
        .filter((task) => task.time > 2)
        .map((task, index) => {
          return (
            <Fragment key={index}>
              <li>
                {task.title} - <b>{task.time} Hour</b>
              </li>
              <button>Done</button>
            </Fragment>
          );
        })}
    </ul>
  );
}

export default List;
