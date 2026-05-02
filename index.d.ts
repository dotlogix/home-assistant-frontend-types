export type { Constructor, HomeAssistant } from './src/types';
export type { Condition } from './src/panels/lovelace/common/validate-condition';

export type * from "./src/data/lovelace_custom_cards";

export type * from "./src/panels/lovelace/types";
export type * from "./src/panels/lovelace/cards/types";
export type * from "./src/panels/lovelace/card-features/types";
export type * from "./src/panels/lovelace/elements/types";
export type * from "./src/panels/lovelace/badges/types";

export type * from "./src/data/lovelace/config/action";
export type * from "./src/data/lovelace/config/badge";
export type * from "./src/data/lovelace/config/card";
export type * from "./src/data/lovelace/config/section";
export type * from "./src/data/lovelace/config/strategy";
export type * from "./src/data/lovelace/config/view";
export type * from "./src/data/lovelace/config/types";

export type * from './src/common/dom/fire_event';
export { fireEvent } from './src/common/dom/fire_event';

import type { CustomCardsWindow } from './src/data/lovelace_custom_cards';
export type CustomCardHelpers = typeof import('./src/panels/lovelace/custom-card-helpers')

declare global {
  interface Window extends CustomCardsWindow {
    loadCardHelpers(): Promise<CustomCardHelpers>;
  }
}
