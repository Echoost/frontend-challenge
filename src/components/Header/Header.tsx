import React from 'react';

import { observer } from 'mobx-react';

import PageStore from '@stores/PageStore.tsx';

import { If } from 'react-if';

import {
    IconButton,
    PanelHeader,
    Tabs, TabsItem,
} from '@vkontakte/vkui';
import { Icon20MoonOutline, Icon20SunOutline } from '@vkontakte/icons';


const Header = observer(() => {
    const { activeTab } = PageStore;

    const handleChangeLightScheme = () => {
        PageStore.changeColorScheme('light');
    };

    const handleChangeDarkScheme = () => {
        PageStore.changeColorScheme('dark');
    };

    const after = (
        <>
            <If condition={PageStore.colorScheme === 'light'}>
                <IconButton onClick={handleChangeDarkScheme}>
                    <Icon20SunOutline width={44}/>
                </IconButton>
            </If>

            <If condition={PageStore.colorScheme === 'dark'}>
                <IconButton onClick={handleChangeLightScheme}>
                    <Icon20MoonOutline width={44}/>
                </IconButton>
            </If>
        </>
    );
    return (
        <PanelHeader after={after}
                     before={
                         <Tabs className={'w-[35%]'}>
                             <TabsItem
                                 selected={activeTab === 'all'}
                                 onClick={() => PageStore.changeActiveTab('all')}
                             >
                                 Все котики
                             </TabsItem>
                             <TabsItem
                                 selected={activeTab === 'favorite'}
                                 onClick={() => PageStore.changeActiveTab('favorite')}
                             >
                                 Любимые котики
                             </TabsItem>
                         </Tabs>
                     }
        />
    );
});


export { Header };