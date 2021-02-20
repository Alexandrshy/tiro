import { action, observable } from "mobx";

/**
 *
 */
export class Navigation {
  @observable
  isMenuOpen: boolean = false;

  @observable
  isFilterOpen: boolean = false;

  @action
  switchMenuOpen() {
    if (this.isFilterOpen) this.switchFilterOpen();
    this.isMenuOpen = !this.isMenuOpen;
  }

  @action
  switchFilterOpen() {
    if (this.isMenuOpen) this.switchMenuOpen();
    this.isFilterOpen = !this.isFilterOpen;
  }
}

export type NavigationType = {
  isMenuOpen: boolean;
  isFilterOpen: boolean;
  switchMenuOpen: () => void;
  switchFilterOpen: () => void;
};
