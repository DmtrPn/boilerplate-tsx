import * as React from 'react';

import * as style from './Home.scss';
import { Page } from '../common/Page';

export interface HomeProps {
}

interface Props extends HomeProps {
}

export function Home({...props}: Props): JSX.Element {
    return (
        <Page>
            <div className={style.root}>
                Welcome
            </div>
        </Page>
    );
}
