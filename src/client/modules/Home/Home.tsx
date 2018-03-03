import * as React from 'react';

import * as style from './Home.scss';
import { Page } from '../common/Page';

export interface HomeProps {
}

export function Home({...props}: HomeProps): JSX.Element {
    return (
        <Page>
            <div className={style.root}>
                Welcome
            </div>
        </Page>
    );
}
