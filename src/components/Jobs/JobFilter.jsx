import React from 'react';

const JobFilter = ({ filters, setFilters, handleSearch }) => {
  const handleSearchChange = (e) => {
    const value = e.target.value;
    handleSearch(value);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      jobType: {
        ...prev.jobType,
        [name]: checked,
      },
    }));
  };

  const handleDateChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      timestamp: e.target.value,
    }));
  };

  const handleExperienceChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      experience: e.target.value,
    }));
  };

  return (
    <div className="w-full md:w-64 p-4 bg-white border rounded-lg shadow-sm mb-4 md:mb-0">
      <h2 className="text-lg font-semibold mb-4">Filtres</h2>
      
      <input
        type="text"
        placeholder="Rechercher..."
        onChange={handleSearchChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Type d'emploi</h3>
        {Object.keys(filters.jobType).map((type) => (
          <div key={type} className="flex items-center mb-2">
            <input
              type="checkbox"
              name={type}
              checked={filters.jobType[type]}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label>{type}</label>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h3 className="font-semibold mb-2">Publié Dans</h3>
        <select
          value={filters.timestamp}
          onChange={handleDateChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="all">Tous</option>
          <option value="1">Derniers 24 heures</option>
          <option value="7">Derniers 7 jours</option>
          <option value="30">Derniers 30 Jours</option>
        </select>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Années d'Expérience</h3>
        <select
          value={filters.experience}
          onChange={handleExperienceChange}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="all">Tous</option>
          <option value="0-1">0-1 an</option>
          <option value="2-4">2-4 ans</option>
          <option value="5+">5+ ans</option>
        </select>
      </div>
    </div>
  );
};

export default JobFilter;
