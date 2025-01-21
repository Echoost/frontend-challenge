import { makeAutoObservable } from 'mobx';


class PageStore {
    colorScheme: 'light' | 'dark' = 'light';
    activeTab: 'all' | 'favorite' = 'all';

    constructor() {
        makeAutoObservable(this);
    }

    changeColorScheme(scheme: 'light' | 'dark') {
        this.colorScheme = scheme;
    }

    changeActiveTab(activeTab: 'all' | 'favorite') {
        this.activeTab = activeTab;
    }
}

export default new PageStore();