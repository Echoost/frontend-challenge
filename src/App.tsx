import React from 'react';

import { observer } from 'mobx-react';

import { If } from 'react-if';

import { AppRoot, Panel, View } from '@vkontakte/vkui';

import PageStore from '@stores/PageStore.tsx';

import { CatsPage } from '@pages/Cats/CatsPage.tsx';
import { FavouriteCatsPage } from '@pages/FavouriteCats/FavouriteCatsPage.tsx';

import { Header } from '@components/Header/Header.tsx';


const App = observer(() => {
    const { activeTab } = PageStore;

    return (
        <AppRoot>
            <View activePanel="panel">
                <Panel id="panel">
                    <Header/>

                    <div className="w-[90%] mx-auto mt-3">
                        <If condition={activeTab === 'all'}>
                            <CatsPage/>
                        </If>

                        <If condition={activeTab === 'favorite'}>
                            <FavouriteCatsPage/>
                        </If>
                    </div>
                </Panel>
            </View>
        </AppRoot>
    );
});

export { App };