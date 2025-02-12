/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Arcs = "F" | "FS" | "FP" | "A" | "AS" | "AP";
export type Numarcs = number;

/**
 * Representation of a valid Full Thrust ship
 */
export interface FullThrustShip {
  points?: number;
  cpv?: number;
  mass?: number;
  hull?: {
    points: number;
    rows: 3 | 4 | 5 | 6;
    stealth: "0" | "1" | "2";
    streamlining: "none" | "partial" | "full";
  };
  /**
   * Rows of armour. First element being the innermost layer. No layer can be larger than the first row of hull boxes. The use of 'oneOf' here is for backwards compatibility.
   */
  armour?: [number, number][];
  /**
   * This property contains all systems that get checked on threshold rolls but that are not used during the 'fire' or 'ordnance' phases of play.
   */
  systems?: (
    | {
        name: "drive";
        advanced?: boolean;
        thrust: number;
        [k: string]: unknown;
      }
    | {
        name: "ftl";
        advanced?: boolean;
        [k: string]: unknown;
      }
    | {
        name: "fireControl" | "adfc" | "sensors";
        advanced?: boolean;
        [k: string]: unknown;
      }
    | {
        name: "hangar";
        isRack?: boolean;
        /**
         * A unique identifier used to target this hangar in orders and in the `fighters` property.
         */
        id: string;
        [k: string]: unknown;
      }
    | {
        name: "launchTube";
        catapult?: boolean;
        [k: string]: unknown;
      }
    | {
        name: "screen";
        advanced?: boolean;
        area?: boolean;
        [k: string]: unknown;
      }
    | {
        name:
          | "suicide"
          | "mineSweeper"
          | "damageControl"
          | "marines"
          | "stealthField"
          | "holofield"
          | "cloakDevice"
          | "cloakField"
          | "ortillery"
          | "reflex";
        [k: string]: unknown;
      }
    | {
        name: "mineLayer";
        capacity?: number;
        [k: string]: unknown;
      }
    | {
        name: "decoy";
        type?: "cruiser" | "capital";
        [k: string]: unknown;
      }
    | {
        name: "bay";
        type: "cargo" | "passenger" | "troop";
        capacity: number;
        /**
         * A unique identifier used to target this specific bay in orders.
         */
        id: string;
        [k: string]: unknown;
      }
    | {
        name: "magazine";
        /**
         * A unique identifier used to tie this magazine to one or more launchers.
         */
        id?: string;
        modifier?: "er" | "twostage";
        capacity?: number;
        [k: string]: unknown;
      }
    | {
        name: "ecm";
        area?: boolean;
        [k: string]: unknown;
      }
    | {
        name: "turret";
        leftArc: Arcs;
        numArcs: 1 | 2 | 3 | 4 | 5 | 6;
        /**
         * A list of weapon IDs housed within this turret.
         */
        weapons?: string[];
        /**
         * Purely used by SSD generators to size the turret relative to other systems. Turret glyphs are always square.
         */
        size?: number;
        [k: string]: unknown;
      }
  )[];
  /**
   * This property contains all systems that get deployed during the 'ordnance' phase of play. These systems are also checked on threshold rolls.
   */
  ordnance?: (
    | {
        name: "antiMatterMissile";
        [k: string]: unknown;
      }
    | {
        name: "missile" | "salvo";
        modifier?: "er" | "twostage";
        [k: string]: unknown;
      }
    | {
        name: "salvoLauncher";
        leftArc: Arcs;
        numArcs: 3;
        /**
         * The unique ID of a missile magazine
         */
        magazine?: string;
        [k: string]: unknown;
      }
    | {
        name: "rocketPod";
        leftArc: Arcs;
        numArcs: 3;
        [k: string]: unknown;
      }
  )[];
  /**
   * This property contains all systems that players can trigger during the 'fire' phase of play. These systems are also checked on threshold rolls.
   */
  weapons?: (
    | {
        name: "pds" | "scatterGun" | "grapeshot" | "spinalNova" | "spinalWave";
        [k: string]: unknown;
      }
    | {
        name: "spinalBeam" | "spinalPlasma" | "spinalSingularity";
        range: "short" | "medium" | "long";
        [k: string]: unknown;
      }
    | {
        name: "ads";
        leftArc: Arcs;
        numArcs: 3 | 6;
        [k: string]: unknown;
      }
    | {
        name: "submunition";
        leftArc: Arcs;
        numArcs: 3;
        [k: string]: unknown;
      }
    | {
        name: "pulser";
        leftArc: Arcs;
        numArcs: 1 | 3 | 6;
        range?: "undefined" | "long" | "medium" | "short";
        [k: string]: unknown;
      }
    | {
        name: "beam" | "emp" | "plasmaCannon" | "phaser" | "transporter" | "needle";
        class: 1 | 2 | 3 | 4;
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "graser";
        heavy?: boolean;
        highIntensity?: boolean;
        class: 1 | 2 | 3 | 4;
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "gatling" | "particle" | "meson" | "fusion";
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "torpedoPulse";
        modifier?: "short" | "long";
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "kgun";
        class: 1 | 2 | 3 | 4 | 5 | 6;
        modifier?: "short" | "long";
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "gravitic";
        class: 1 | 2 | 3;
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "pbl";
        class: 1 | 2 | 3 | 4 | 5 | 6;
        leftArc: Arcs;
        numArcs: Numarcs;
        [k: string]: unknown;
      }
    | {
        name: "mkp";
        arc: Arcs;
        [k: string]: unknown;
      }
  )[];
  /**
   * This property contains all systems that do NOT get checked on threshold rolls. Currently there aren't any.
   */
  extras?: {
    [k: string]: unknown;
  };
  /**
   * There cannot be more fighters than hangars.
   */
  fighters?: {
    /**
     * The fighters' base type
     */
    type:
      | "standard"
      | "interceptor"
      | "attack"
      | "torpedo"
      | "graser"
      | "plasma"
      | "MKP"
      | "missile"
      | "multiRole"
      | "light"
      | "lightInterceptor"
      | "lightAttack";
    mods?: ("heavy" | "fast" | "longRange" | "ftl" | "robot")[];
    /**
     * Must match a hangar id. Omitted if the fighters are deployed.
     */
    hangar?: string;
    /**
     * Only needed during game play to track squadron size over time
     */
    number?: number;
    /**
     * Only needed during game play and only if you are playing with ace/turkey rules
     */
    skill?: "standard" | "ace" | "turkey";
    [k: string]: unknown;
  }[];
  class?: string;
  name?: string;
  /**
   * Only needed during actual game play where each ship needs a truly unique ID.
   */
  uuid?: string;
  /**
   * Markdown-encoded flavour text attached to this particular ship.
   */
  notes?: string;
  [k: string]: unknown;
}
