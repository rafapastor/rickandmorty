export type GenderType = 'female' | 'male' | 'genderless' | 'unknown' | '';
export type StatusType = 'alive' | 'dead' | 'unknown' | '';

export interface Filters {
    name: string;
    species: string;
    type: string;
    gender: GenderType;
    status: StatusType;
}
