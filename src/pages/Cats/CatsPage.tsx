import { useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';

import { observer } from 'mobx-react';

import CatStore from '@stores/CatStore.tsx';

import { CatCard } from '@components/CatCard/CatCard.tsx';

import { Flex, Spinner } from '@vkontakte/vkui';


const CatsPage = observer(() => {
    const [ page, setPage ] = useState(1);
    const { fetchCats, cats } = CatStore;

    useEffect(() => {
        fetchCats(page);
    }, []);

    const fetchMore = () => {
        setPage(prevPage => prevPage + 1);
        fetchCats(page);
    };

    return (
        <InfiniteScroll next={fetchMore}
                        hasMore={true}
                        dataLength={cats.length}
                        scrollThreshold={'100px'}
                        loader={<Spinner className="my-3"/>}
                        endMessage={
                            <Text className="text-center my-3">Вы просмотрели все элементы</Text>
                        }>
            <Flex gap={'4xl'}>
                {cats.map(cat => (
                    <CatCard cat={cat}/>
                ))}
            </Flex>
        </InfiniteScroll>
    );
});


export { CatsPage };