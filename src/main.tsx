import { createRoot } from 'react-dom/client';
import {
    AdaptivityProvider,
    ConfigProvider,
} from '@vkontakte/vkui';
import './index.css'
import '@vkontakte/vkui/dist/vkui.css';
import { App } from './App.tsx';
import { observer } from 'mobx-react';
import PageStore from './stores/PageStore.tsx';



const container = document.getElementById('root');
const root = createRoot(container!);

const AppWrapper = observer(() => (
    <ConfigProvider colorScheme={PageStore.colorScheme}>
        <AdaptivityProvider>
            <App/>
        </AdaptivityProvider>
    </ConfigProvider>
));

root.render(<AppWrapper/>);