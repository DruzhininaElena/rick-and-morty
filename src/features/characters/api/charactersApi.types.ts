export type CharacterType = {
    id: number;
    name: string;
    status: CharacterStatusType;
    species: string;
    type: string;
    gender: CharacterGenderType;
    origin: ExtraDataType;
    location: ExtraDataType;
    image: string;
    episode: string[];
    url: string;
    created: string;
};

export type CharacterStatusType = "Alive" | "Dead" | "unknown";

type CharacterGenderType = "Female" | "Male" | "Genderless" | "unknown";

type ExtraDataType = {
    name: string;
    url: string;
};