import React from 'react';

// Component to show summary statistics about the fetched data
function SummaryStatistics({ data }) {
  const totalItems = data.length;
  const averageTemp = data.reduce((acc, curr) => acc + curr.temp, 0) / totalItems || 0; // Example statistic

  return (
    <div className="summary-statistics">
      <div className="statistics-item"><strong>Total Cities:</strong> {totalItems}</div>
      <div className="statistics-item"><strong>Average Temperature:</strong> {averageTemp.toFixed(2)}°C</div>
      {/* Additional statistics can be added here */}
    </div>
  );
}

export default SummaryStatistics;
