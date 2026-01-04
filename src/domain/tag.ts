export interface Tag {
    id: number;
    name: String;
};

export const TAGS_CATALOG: Tag[] = [
    // finger strength
    { id: 1, name: "Crimp" },
    { id: 2, name: "Small Crimp" },
    { id: 3, name: "Sloper" },
    { id: 4, name: "Pinch" },
    { id: 5, name: "Pocket" },

    // arm strength
    { id: 6, name: "Lock-off" },
    { id: 7, name: "Compression" },
    { id: 8, name: "Undercling" },
    { id: 9, name: "Gaston" },

    // Power Endurance
    { id: 10, name: "No Rest" },
    { id: 11, name: "Fight" },
    { id: 12, name: "Sustained Crux" },
    { id: 13, name: "Short"},

    // Endurance
    { id: 14, name: "Long" },
    { id: 15, name: "Rest Required" },

    // Coordination
    { id: 16, name: "Jump" },
    { id: 17, name: "Hand Coordination" },
    { id: 18, name: "Foot Coordination" },

    // Footwork
    { id: 19, name: "Heel Hook" },
    { id: 20, name: "Toe Hook" },
    { id: 21, name: "Smearing" },
    { id: 22, name: "Small Footholds" },
    { id: 23, name: "KneeBar" },

    // Climbing Terrain
    { id: 24, name: "Slab" },
    { id: 25, name: "Vertical" },
    { id: 26, name: "Overhang" }
];