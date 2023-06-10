import { Character } from '../types/character';

interface CharacterCardProps {
    character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
    let statusColor;
    switch (character.status) {
        case 'Alive':
            statusColor = 'green';
            break;
        case 'Dead':
            statusColor = 'red';
            break;
        default:
            statusColor = 'orange';
            break;
    }

    return (
        <div className="character-card flex h-56">
            <div className="character-image-container w-1/3">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="character-info-container w-2/3 p-3">
                <div className="section">
                    <a href={character.url}
                        target='_blank'
                        rel="noreferrer">
                        <h2>
                            {character.name}
                        </h2>
                    </a>
                    <span className='status'>
                        <span className="status-icon" style={{ backgroundColor: statusColor }}></span>
                        {character.status} - {character.species}
                    </span>
                </div>
                <div className="section mt-3">
                    <span className="text-custom-gray">Last known location:</span>
                    <span className="text-lg">
                        <a href={character.location.url}
                            target='_blank'
                            rel="noreferrer">
                            {character.location.name}
                        </a>
                    </span>
                </div>
                <div className="section">
                    <span className="text-custom-gray">First seen in:</span>
                    <span className="text-lg">
                        <a href={character.origin.url}
                            target='_blank'
                            rel="noreferrer">
                            {character.origin.name}
                        </a>
                    </span>
                </div>
            </div>
        </div >
    );
};

export default CharacterCard;
