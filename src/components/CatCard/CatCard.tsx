import { observer } from 'mobx-react';

import { CatType } from '@api/catApi.tsx';

import CatStore from '@stores/CatStore.tsx';

import { Card, Image } from '@vkontakte/vkui';
import { Icon24Like, Icon24LikeOutline } from '@vkontakte/icons';


interface Props {
    cat: CatType;
}


const CatCard = observer((props: Props) => {
    const { cat } = props;

    const { isFavorite, toggleFavorite } = CatStore;
    return (
        <Card key={cat.id} className="relative hover:shadow-2xl transition-shadow">
            <Image size={256} src={cat.url} alt="Cat Image"/>

            {isFavorite(cat.id)
                ? <Icon24Like fill="red"
                              className="absolute bottom-3 right-2"
                              onClick={() => toggleFavorite(cat)}/>
                : <Icon24LikeOutline fill="red"
                                   className="absolute bottom-3 right-2"
                                   onClick={() => toggleFavorite(cat)}/>}
        </Card>
    );
});


export { CatCard };