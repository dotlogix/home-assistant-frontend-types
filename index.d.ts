export type { Constructor, HomeAssistant } from './frontend/src/types';
export type { Condition } from './frontend/src/panels/lovelace/common/validate-condition';

export type * from "./frontend/src/data/lovelace_custom_cards";

export type * from "./frontend/src/panels/lovelace/types";
export type * from "./frontend/src/panels/lovelace/cards/types";
export type * from "./frontend/src/panels/lovelace/card-features/types";
export type * from "./frontend/src/panels/lovelace/elements/types";
export type * from "./frontend/src/panels/lovelace/badges/types";

export type * from "./frontend/src/data/lovelace/config/action";
export type * from "./frontend/src/data/lovelace/config/badge";
export type * from "./frontend/src/data/lovelace/config/card";
export type * from "./frontend/src/data/lovelace/config/section";
export type * from "./frontend/src/data/lovelace/config/strategy";
export type * from "./frontend/src/data/lovelace/config/view";
export type * from "./frontend/src/data/lovelace/config/types";

import type { CustomCardsWindow } from './frontend/src/data/lovelace_custom_cards';
export type CustomCardHelpers = typeof import('./frontend/src/panels/lovelace/custom-card-helpers')

declare global {
  interface Window extends CustomCardsWindow {
    loadCardHelpers(): Promise<CustomCardHelpers>;
  }
}
