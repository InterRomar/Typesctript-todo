import React, { useState } from 'react';

type SortingPanelProps = {
  changeSortingStatus(status: string): void
};

const SortingPanel: React.FC<SortingPanelProps> = props => {

  const [sortingStatus, setSortingStatus] = useState('all')

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setSortingStatus(event.currentTarget.name);
    props.changeSortingStatus(event.currentTarget.name);
  }

  return (
    <div className="sorting-panel">
      <button
        className={`sort-btn ${sortingStatus === 'all' ? 'active' : ''}`}
        name='all'
        onClick={handleClick}
      >
        All
      </button>
      <button
        className={`sort-btn ${sortingStatus === 'active' ? 'active' : ''}`}
        name='active'
        onClick={handleClick}
      >
        Active
      </button>
      <button
        className={`sort-btn ${sortingStatus === 'completed' ? 'active' : ''}`}
        name='completed'
        onClick={handleClick}
      >
        Completed
      </button>
    </div>
  )
}
export default SortingPanel;