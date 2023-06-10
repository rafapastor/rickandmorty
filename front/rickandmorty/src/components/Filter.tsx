import { useEffect, useState } from 'react';
import { Filters, GenderType, StatusType } from '../types/filter';

const Filter = ({
    onFilter,
    onClear,
    filters,
}: {
    onFilter: (filters: Filters) => void;
    onClear: () => void;
    filters: Filters;
}
) => {
    const [name, setName] = useState(filters.name);
    const [species, setSpecies] = useState(filters.species);
    const [type, setType] = useState(filters.type);
    const [gender, setGender] = useState(filters.gender);
    const [status, setStatus] = useState(filters.status);

    useEffect(() => {
        setName(filters.name);
        setSpecies(filters.species);
        setType(filters.type);
        setGender(filters.gender);
        setStatus(filters.status);
    }, [filters]);

    const handleFilter = () => {
        const filters = {
            name,
            species,
            type,
            gender,
            status,
        };
        const queryParams = new URLSearchParams(window.location.search);
        Object.keys(filters).forEach((key) => {
            const value = (filters as any)[key];
            if (value) {
                queryParams.set(key, value);
            } else {
                queryParams.delete(key);
            }
        });
        window.history.pushState({}, '', "?" + queryParams.toString());
        onFilter(filters);
    };

    const handleClear = () => {
        setName('');
        setSpecies('');
        setType('');
        setGender('');
        setStatus('');
        onClear();

        // Delete all query params
        const queryParams = new URLSearchParams(window.location.search);
        Object.keys(filters).forEach((key) => {
            queryParams.delete(key);
        });
        window.history.pushState({}, '', "?" + queryParams.toString());
    };

    return (
        <div className="p-5 m-5 border rounded">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 mb-2 xl:mb-0 flex items-center sm:justify-start justify-center flex-shrink-0">
                    <label className="text-white">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleFilter();
                        }}
                        className="ml-2 text-white bg-gray-800 rounded-lg border border-white"
                    />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 mb-2 xl:mb-0 flex items-center sm:justify-start justify-center flex-shrink-0">
                    <label className="text-white">Species:</label>
                    <input
                        type="text"
                        value={species}
                        onChange={(e) => setSpecies(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleFilter();
                        }}
                        className="ml-2 text-white bg-gray-800 rounded-lg border border-white"
                    />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 mb-2 xl:mb-0 flex items-center sm:justify-start justify-center flex-shrink-0">
                    <label className="text-white">Type:</label>
                    <input
                        type="text"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') handleFilter();
                        }}
                        className="ml-2 text-white bg-gray-800 rounded-lg border border-white"
                    />
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 mb-2 xl:mb-0 flex items-center sm:justify-start justify-center flex-shrink-0">
                    <label className="text-white">Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value as GenderType)} className="ml-2 text-white bg-gray-800 rounded-lg p-2 border border-white">
                        <option value="">Select gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 xl:w-1/5 mb-2 xl:mb-0 flex items-center sm:justify-start justify-center flex-shrink-0">
                    <label className="text-white">Status:</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value as StatusType)} className="ml-2 text-white bg-gray-800 rounded-lg p-2 border border-white">
                        <option value="">Select status</option>
                        <option value="alive">Alive</option>
                        <option value="dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
            </div>
            <div className="mt-5">
                <button onClick={handleFilter} className="mr-2 py-1 px-4 bg-custom-gray-button text-white rounded-3xl">Filter</button>
                <button onClick={handleClear} className="py-1 px-4 bg-red-500 text-white rounded-3xl">Clear</button>
            </div>
        </div>
    );

};

export default Filter;
