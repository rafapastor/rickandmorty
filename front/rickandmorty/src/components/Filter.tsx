import { useState } from 'react';
import { Filters, GenderType, StatusType } from '../types/filter';

const Filter = ({
    onFilter,
    onClear }
    : {
        onFilter: (filters: Filters) => void;
        onClear: () => void;
    }
) => {
    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [type, setType] = useState('');
    const [gender, setGender] = useState<GenderType | ''>('');
    const [status, setStatus] = useState<StatusType | ''>('');

    const handleFilter = () => {
        const filters = {
            name,
            species,
            type,
            gender,
            status,
        };
        onFilter(filters);
    };

    const handleClear = () => {
        setName('');
        setSpecies('');
        setType('');
        setGender('');
        setStatus('');
        onClear();
    };

    return (
        <div className="p-5 m-5 border rounded">
            <div className="flex flex-wrap">
                <div className="w-full sm:w-1/5 mb-2 sm:mb-0 flex items-center justify-center flex-shrink-0">
                    <label className="text-white">Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="ml-2 text-white bg-gray-800 rounded-lg border border-white" />
                </div>
                <div className="w-full sm:w-1/5 mb-2 sm:mb-0 flex items-center justify-center flex-shrink-0">
                    <label className="text-white">Species:</label>
                    <input type="text" value={species} onChange={(e) => setSpecies(e.target.value)} className="ml-2 text-white bg-gray-800 rounded-lg border border-white" />
                </div>
                <div className="w-full sm:w-1/5 mb-2 sm:mb-0 flex items-center justify-center flex-shrink-0">
                    <label className="text-white">Type:</label>
                    <input type="text" value={type} onChange={(e) => setType(e.target.value)} className="ml-2 text-white bg-gray-800 rounded-lg border border-white" />
                </div>
                <div className="w-full sm:w-1/5 mb-2 sm:mb-0 flex items-center justify-center flex-shrink-0">
                    <label className="text-white">Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value as GenderType)} className="ml-2 text-white bg-gray-800 rounded-lg p-2 border border-white">
                        <option value="">Select gender</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="genderless">Genderless</option>
                        <option value="unknown">Unknown</option>
                    </select>
                </div>
                <div className="w-full sm:w-1/5 mb-2 sm:mb-0 flex items-center justify-center flex-shrink-0">
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
                <button onClick={handleFilter} className="mr-2 py-2 px-4 bg-blue-500 text-white rounded">Filter</button>
                <button onClick={handleClear} className="py-2 px-4 bg-red-500 text-white rounded">Clear</button>
            </div>
        </div>
    );

};

export default Filter;
