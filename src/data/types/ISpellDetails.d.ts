export interface ISpellDetails {
  index: string;
  // Resource index for shorthand searching.

  name: string;
  // Name of the referenced resource.

  url: string;
  // URL of the referenced resource.

  desc: [string];
  // Description of the resource.

  higher_level: [string];
  // List of descriptions for casting the spell at higher levels.

  range: string;
  // Range of the spell, usually expressed in feet.

  components: [];
  // List of shorthand for required components of the spell. V: verbal S: somatic M: material

  // Allowed: V┃S┃M
  material: 'V' | 'S' | 'M';
  // Material component for the spell to be cast.

  ritual: boolean;
  // Determines if a spell can be cast in a 10-min(in-game) ritual.

  duration: string;
  // How long the spell effect lasts.

  concentration: boolean;
  // Determines if a spell needs concentration to persist.

  casting_time: string;
  // How long it takes for the spell to activate.

  level: number;
  // Level of the spell.

  attack_type: string;
  // Attack type of the spell.

  damage: {
    damage_at_slot_level: {
      [key: any]: any;
    };
    damage_type: {
      index: string;
      // Resource index for shorthand searching.

      name: string;
      // Name of the referenced resource.

      url: string;
      // URL of the referenced resource.
    };
  };
  school: {
    index: string;
    // Resource index for shorthand searching.

    name: string;
    // Name of the referenced resource.

    url: string;
    // URL of the referenced resource.
  };
  classes: [
    {
      // List of classes that are able to learn the spell. ⮕ [ APIReference ]

      index: string;
      // Resource index for shorthand searching.

      name: string;
      // Name of the referenced resource.

      url: string;
      // URL of the referenced resource.
    }
  ];
  subclasses: [
    {
      // List of subclasses that have access to the spell. ⮕ [ APIReference ]

      index: string;
      // Resource index for shorthand searching.

      name: string;
      // Name of the referenced resource.

      url: string;
      // URL of the referenced resource.
    }
  ];
}
