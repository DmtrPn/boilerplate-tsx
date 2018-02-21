import * as React from 'react';

import { Page } from '../common/Page';

import * as style from './home.css';


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
