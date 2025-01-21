import { makeAutoObservable, runInAction } from 'mobx';
import { fromPromise } from 'mobx-utils';

import { CatType, fetchCats } from '@api/catApi.tsx';


class CatStore {
    cats: CatType[] = [];
    favorites: CatType[] = [];
    loading: boolean = false;
    fetchCatsPromise: any = null;

    constructor() {
        makeAutoObservable(this);
        this.loadFavoritesFromStorage();
    }

    fetchCats = (page: number) => {
        const newCatsPromise = fetchCats(page * 24);

        this.fetchCatsPromise = fromPromise(
            newCatsPromise.then((newCats) => {
                runInAction(() => {
                    this.cats = [ ...this.cats, ...newCats ];
                });

                return this.cats;
            }),
        );
    };

    toggleFavorite = (cat: CatType) => {
        runInAction(() => {
            const index = this.favorites.findIndex((c) => c.id === cat.id);
            if (index === -1) {
                this.favorites.push(cat);
            } else {
                this.favorites.splice(index, 1);
            }
            this.saveFavoritesToStorage();
        });
    };

    isFavorite = (id: string) => {
        return this.favorites.some((cat) => cat.id === id);
    };

    private loadFavoritesFromStorage = () => {
        const favoritesJson = localStorage.getItem('favorites');
        if (favoritesJson) {
            this.favorites = JSON.parse(favoritesJson) as CatType[];
        }
    };

    private saveFavoritesToStorage = () => {
        localStorage.setItem('favorites', JSON.stringify(this.favorites));
    };

}

export default new CatStore();
