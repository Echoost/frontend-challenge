import { observer } from 'mobx-react';

import { If } from 'react-if';

import CatStore from '@stores/CatStore.tsx';

import { CatCard } from '@components/CatCard/CatCard.tsx';

import { Flex, Placeholder } from '@vkontakte/vkui';
import { Icon28SmileOutline } from '@vkontakte/icons';


const FavouriteCatsPage = observer(() => {
    const { favorites } = CatStore;

    return (
        <Flex gap="4xl">
            {favorites.map(cat => (
                <CatCard cat={cat}/>
            ))}

            <If condition={!favorites.length}>
                <Placeholder
                    className='mx-auto'
                    icon={<Icon28SmileOutline />}
                    title="Нету любимых котиков"
                >
                    Cамое время их добавить!
                </Placeholder>
            </If>
        </Flex>
    );
});


export { FavouriteCatsPage };